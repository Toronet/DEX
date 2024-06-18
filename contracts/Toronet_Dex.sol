// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IToronetLiquidityToken {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function totalSupply() external view returns (uint256);
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function mint(address to, uint256 amount) external;
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}



contract ToronetLiquidityToken is ERC20 {
    constructor() ERC20("Toronet Liquidity Token", "TLT") {
         _mint(address(this),  type(uint128).max);
    }
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

     function totalSupply() public pure override returns (uint256) {
        // Return a very large number or uint256(-1)
        return type(uint256).max;
    }
}



contract ToronetDex is Ownable {
    struct Pair {
        address tokenA;
        address tokenB;
        uint256 reserveA;
        uint256 reserveB;
        uint256 totalSupply;
        uint256 feeRate;
        address feeToProvider;
        bytes32 pairHash;
    }
    uint256 index;
    mapping(bytes32 => Pair) public pairs;
    mapping(uint256 => Pair) public  pairArray;
    mapping(address => bool) public isAdmin;
    mapping(address => bool) public isTokenAdded;
    mapping(bytes32 => mapping(address => uint256)) public balances; // User balances in each pair
    mapping(bytes32 => address) public lpTokens; // LP tokens for each pair



    address[] public tokenList;
    uint256 public  pairsLength;

    event PairCreated(address indexed tokenA, address indexed tokenB, uint256 feeRate, address feeToProvider, bytes32 pairHash);
    event LiquidityAdded(address indexed provider, bytes32 pairHash, uint256 amountA, uint256 amountB);
    event TokensSwapped(address indexed user, bytes32 pairHash, uint256 amountIn, uint256 amountOut);
    event GainsClaimed(address indexed  user, uint256 indexed gain);
    event GainsClaimed(address indexed user, bytes32 pairHash, uint256 amount);
    IToronetLiquidityToken public liquidityToken;

    constructor( ) Ownable(msg.sender) {
         liquidityToken = IToronetLiquidityToken(0x2ef4f19d3B680f096a469fC150430D9eEDA38AE5); // 
        isAdmin[msg.sender] = true;
    
        isAdmin[(0xB2D7A98ED24cC8bDec8889c5D80dF130657dc9Ac)]; // τEGP (Egyptian Pound Stablecoin)
         isAdmin[(0xbaBeAf88a1F2f9f186E9f55798DfBDC2794546EC)]; // τKSH (Kenyan Shilling Stablecoin)
       isAdmin[ (0x6dEb7b175b607fD097C1e3df785097E1eda0bDcF)]; // τNGN (Nigeria Naira Stablecoin)
        isAdmin[ (0x93Ef74BE85E5fC4D8C35a82406b062d762Db1158)]; // τZAR (South African Rand Stablecoin)
       isAdmin[(0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45)]; // τUSD (USD Stablecoin)
     isAdmin[ (0x5164a9F3C34E3b1aef58f6d176A6a95518A5DEEc)]; // τEURO (Euro Stablecoin)
     isAdmin[ (0xd0cC0a3b4FD64E26fDF69055b85b80e9e827b949)]; // τPOUND (Pound Stablecoin)
        isAdmin[ (0xEa33965084B7DC09eCAa0B59aa972c81dDA556BD)]; // τETH (Bridged Ethereum on Toronet)
        isAdmin[ (0x77A86E39E8d92d25b63C9C7DFFfc5351D8d1153C)]; // ESPEES
        isAdmin[(0x6c2A5ED4938CaC04F70A7ACF1ba1b1522de75811)]; // ASPR


         tokenList.push(0xB2D7A98ED24cC8bDec8889c5D80dF130657dc9Ac);
        tokenList.push(0xbaBeAf88a1F2f9f186E9f55798DfBDC2794546EC);
        tokenList.push(0x6dEb7b175b607fD097C1e3df785097E1eda0bDcF);
        tokenList.push(0x93Ef74BE85E5fC4D8C35a82406b062d762Db1158);
        tokenList.push(0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
        tokenList.push(0x5164a9F3C34E3b1aef58f6d176A6a95518A5DEEc);
        tokenList.push(0xd0cC0a3b4FD64E26fDF69055b85b80e9e827b949);
        tokenList.push(0xEa33965084B7DC09eCAa0B59aa972c81dDA556BD);
        tokenList.push(0x77A86E39E8d92d25b63C9C7DFFfc5351D8d1153C);
        tokenList.push(0x6c2A5ED4938CaC04F70A7ACF1ba1b1522de75811);
      

    }

    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admin can call this function");
        _;
    }

    function addAdmin(address _admin) external onlyOwner {
        isAdmin[_admin] = true;
    }

    function createPair(address _tokenA, address _tokenB) public onlyAdmin {
        bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
        require(pairs[pairHash].tokenA == address(0), "Pair already exists");


        lpTokens[pairHash] = address(liquidityToken);
// check this  //@question
        pairs[pairHash] = Pair({
            tokenA: _tokenA,
            tokenB: _tokenB,
            reserveA: 0,
            reserveB: 0,
            totalSupply: 0,
            feeRate: 1, // 1 means 1%
            feeToProvider: address(this),
            pairHash: pairHash
        });

        pairArray[index] = pairs[pairHash];
        index++;
        pairsLength++;

        emit PairCreated(_tokenA, _tokenB, 1, address(this), pairHash);
    }
 /*
 @dev users must have transfered _token A and _tokenB to the contract address before calling this function.
 */
 function addLiquidity(address _tokenA, address _tokenB, uint256 _amountA, uint256 _amountB) external {
    bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
    Pair storage pair = pairs[pairHash];

    if (pair.tokenA == address(0)) {
        createPair(_tokenA, _tokenB);
        pair = pairs[pairHash];
    }

    require(IERC20(_tokenA).balanceOf(address(this)) >= _amountA, "Insufficient tokenA balance in contract");
    require(IERC20(_tokenB).balanceOf(address(this)) >= _amountB, "Insufficient tokenB balance in contract");

    pair.reserveA += _amountA;
    pair.reserveB += _amountB;
    pair.totalSupply += _amountA;

    uint256 lpAmount = sqrt(pair.reserveA * pair.reserveB) - sqrt((pair.reserveA - _amountA) * (pair.reserveB - _amountB)); // using AMM x*y=k
    liquidityToken.mint(msg.sender, lpAmount);

    balances[pairHash][msg.sender] += lpAmount;

    emit LiquidityAdded(msg.sender, pairHash, _amountA, _amountB);
}


 /*
 @dev users must have transfered _token  to the contract address before calling this function.
 */
function swapTokens(address _tokenA, address _tokenB, uint256 _amountIn) external {
    bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
    Pair storage pair = pairs[pairHash];
    require(pair.tokenA != address(0) && pair.tokenB != address(0), "Pair does not exist");

    require(IERC20(_tokenA).balanceOf(address(this)) >= _amountIn, "Insufficient tokenA balance in contract"); // add some logic for reserve..
// balance(of) must always be equals to the 
    uint256 amountOut = (_amountIn * pair.reserveB) / pair.reserveA;
    uint256 fee = (amountOut * pair.feeRate) / 100;
    uint256 amountOutAfterFee = amountOut - fee;

    require(IERC20(pair.tokenB).balanceOf(address(this)) >= amountOutAfterFee, "Insufficient tokenB balance in contract");

    IERC20(pair.tokenB).transfer(msg.sender, amountOutAfterFee); // Send swapped tokens to user
 
    pair.reserveA += _amountIn;
    pair.reserveB -= amountOut;

    emit TokensSwapped(msg.sender, pairHash, _amountIn, amountOutAfterFee);
}




    function claimGainsByTokenAddress(address _tokenA, address _tokenB) external {// check this design? must users put in the tokens they add to liquditty?
        bytes32 _pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
        Pair storage pair = pairs[_pairHash];
        uint256 userBalance = balances[_pairHash][msg.sender];
        require(userBalance > 0, "No gains to claim");

        uint256 userShare = (userBalance * 100) / liquidityToken.totalSupply();
        uint256 gains = (userShare * pair.feeRate) / 100;
        IERC20(lpTokens[_pairHash]).transferFrom(msg.sender, address(this), userBalance);
        IERC20(pair.tokenA).transfer(msg.sender, gains);

        balances[_pairHash][msg.sender] = 0;

        emit GainsClaimed(msg.sender, _pairHash, gains);
    }

      function addToken(address _token) external onlyAdmin {
        isAdmin[_token] = true;
        if (!isTokenAdded[_token]) {
            isTokenAdded[_token] = true;
            tokenList.push(_token);
        }
    }

    

function claimAllGains() external {
    uint256 totalAmount = 0;

    // Iterate through all pairs
    for (uint256 i = 0; i < index; i++) { // Assuming `index` is the number of pairs or the maximum index
        bytes32 pairHash = pairArray[i].pairHash;
        Pair storage pair = pairs[pairHash];
        uint256 userBalance = balances[pairHash][msg.sender];
        
        if (userBalance > 0) {
            // Calculate user's share in the pool as a percentage
            uint256 userShare = (userBalance * 1e18) / pair.totalSupply;

            // Calculate the gains for the user
            uint256 userGainA = (pair.reserveA * userShare) / 1e18;
            uint256 userGainB = (pair.reserveB * userShare) / 1e18;

            // Ensure the contract has enough tokens to fulfill the claim
            require(IERC20(pair.tokenA).balanceOf(address(this)) >= userGainA, "Insufficient tokenA balance in contract");
            require(IERC20(pair.tokenB).balanceOf(address(this)) >= userGainB, "Insufficient tokenB balance in contract");

            // Update reserves and user balance
            pair.reserveA -= userGainA;
            pair.reserveB -= userGainB;
            balances[pairHash][msg.sender] = 0;

            // Accumulate total amount to be claimed
            totalAmount += userGainA + userGainB;

            // Transfer the tokens to the user
            IERC20(pair.tokenA).transfer(msg.sender, userGainA);
            IERC20(pair.tokenB).transfer(msg.sender, userGainB);

          
        }
    }

    // Emit total gains claimed event
    emit GainsClaimed(msg.sender, totalAmount);
}



function previewClaimAllGains() external view returns (uint256 totalAmount) {
    totalAmount = 0;

    // Iterate through all pairs
    for (uint256 i = 0; i < index; i++) {
        bytes32 pairHash = pairArray[i].pairHash;
        Pair storage pair = pairs[pairHash];
        uint256 userBalance = balances[pairHash][msg.sender];

        if (userBalance > 0) {
            // Calculate user's share in the pool as a percentage
            uint256 userShare = (userBalance * 1e18) / pair.totalSupply;

            // Calculate the gains for the user
            uint256 userGainA = (pair.reserveA * userShare) / 1e18;
            uint256 userGainB = (pair.reserveB * userShare) / 1e18;

            // Accumulate total amount to be claimed
            totalAmount += userGainA + userGainB;
        }
    }

    return totalAmount;
}



    function getTotalTokens() external view returns (address[] memory) {
        return tokenList;
    }

    function getAmountOut(address _tokenA, address _tokenB, uint256 _amountIn) external view returns (uint256 amountOut, uint256 amountOutAfterFee) {
    bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
    Pair storage pair = pairs[pairHash];
    require(pair.tokenA != address(0) && pair.tokenB != address(0), "Pair does not exist");

    // Calculate the output amount based on the current reserves
    amountOut = (_amountIn * pair.reserveB) / pair.reserveA;
    
    // Calculate the fee and the amount after fee
    uint256 fee = (amountOut * pair.feeRate) / 100;
    amountOutAfterFee = amountOut - fee;

    return (amountOut, amountOutAfterFee);
}



    // Function to get pairs where the user has liquidity tokens
    function getUserPairs(address _user) external view returns (bytes32[] memory) {
        bytes32[] memory userPairs = new bytes32[](pairsLength);
        uint256 count = 0;

        for (uint256 i = 0; i < pairsLength; i++) {
            bytes32 pairHash = pairArray[i].pairHash;
            if (balances[pairHash][_user] > 0) {
                userPairs[count] = pairHash;
                count++;
            }
        }

        bytes32[] memory result = new bytes32[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = userPairs[i];
        }

        return result;
    }

    // Function to get liquidity tokens held by the user for a pair
    function getUserLiquidity(address _user, bytes32 _pairHash) external view returns (uint256 liquidity) {
        return balances[_pairHash][_user];
    }

    // Function to get total gains (in token A) claimed by the user across all pairs
    function getUserTotalGains(address _user) external view returns (uint256 totalGains) {
        for (uint256 i = 0; i < pairsLength; i++) {
            bytes32 pairHash = pairArray[i].pairHash;
            totalGains += (balances[pairHash][_user] * pairs[pairHash].feeRate) / 100;
        }
        return totalGains;
    }

    // Function to get fee rate for a specific pair
    function getFeeRate(bytes32 _pairHash) external view returns (uint256 feeRate) {
        return pairs[_pairHash].feeRate;
    }

    // Function to get fee recipient for a specific pair
    function getFeeToProvider(bytes32 _pairHash) external view returns (address feeToProvider) {
        return pairs[_pairHash].feeToProvider;
    }

    // Function to check if a pair exists for given tokens
    function isPairCreated(address _tokenA, address _tokenB) external view returns (bool) {
        bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
        return pairs[pairHash].tokenA != address(0);
    }

    // Function to check if the caller is an admin
    function isUserAdmin() external view returns (bool) {
        return isAdmin[msg.sender];
    }


  function sqrt(uint256 x) internal pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }


    function withdrawERC20(address tokenAddress, uint256 amount) external onlyOwner {
  
    IERC20(tokenAddress).transfer(owner(), amount);
}


}


