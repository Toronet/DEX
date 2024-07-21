
pragma solidity 0.8.0;




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



contract ToronetLiquidityToken is ERC20,Ownable {
    constructor() ERC20("Toronet Liquidity Token", "TLT") Ownable(msg.sender){
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

contract ToronetDex is Ownable{
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

    struct Pool {
        address tokenA;
        address tokenB;
        uint256 index;
        string name;
        address poolAddress;
        uint256 swapFee;
         uint256 reserveA;
        uint256 reserveB;
         address feeReciever;
         uint256 totalSupply;

    }


    uint256 private index;
    uint256 public  poolIndex;
    mapping(bytes32 => Pair) public pairs;
    mapping(bytes32 => Pool) public poolInfo;
    mapping(address => bool) public isAdmin;
    mapping(address => bool) public isTokenAdded;
    mapping(bytes32 => mapping(address => uint256)) public balances;
    mapping(bytes32 => address) public lpTokens;
    mapping (uint256  => Pair) public pairArray;
    mapping  (uint256 => Pool) public indexToPool;

    address[] public tokenList;
    uint256 public pairsLength;

    event PairCreated(address indexed tokenA, address indexed tokenB, uint256 feeRate, address feeToProvider, bytes32 pairHash);
    event LiquidityAdded(address indexed provider, address pairHash, uint256 amountA, uint256 amountB);
    event TokensSwapped(address indexed user, bytes32 pairHash, uint256 amountIn, uint256 amountOut);
    event GainsClaimed(address indexed user, bytes32 pairHash, uint256 amount);
    event GainsClaimed(address indexed user, uint256 amount);
    event PoolCreated(address indexed poolAddress, string name, bytes32 pairHash);

    IToronetLiquidityToken public liquidityToken;

    constructor() Ownable(msg.sender) {
            liquidityToken = IToronetLiquidityToken(0xC020729a3FCa5C81c8F8F84480E18d753D9dd768); // 
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

        createPair(0xB2D7A98ED24cC8bDec8889c5D80dF130657dc9Ac,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
          createPair(0xbaBeAf88a1F2f9f186E9f55798DfBDC2794546EC,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
            createPair(0x6dEb7b175b607fD097C1e3df785097E1eda0bDcF,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
              createPair(0x93Ef74BE85E5fC4D8C35a82406b062d762Db1158,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
                createPair(0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
                  createPair(0x5164a9F3C34E3b1aef58f6d176A6a95518A5DEEc,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
                  createPair(0xd0cC0a3b4FD64E26fDF69055b85b80e9e827b949,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
                  createPair(0xEa33965084B7DC09eCAa0B59aa972c81dDA556BD,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
                  createPair(0x77A86E39E8d92d25b63C9C7DFFfc5351D8d1153C,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);
                   createPair(0x6c2A5ED4938CaC04F70A7ACF1ba1b1522de75811,0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45);

    }

    modifier onlyAdmin() {

        require(isAdmin[msg.sender]   || msg.sender == owner(), "Only admin can call this function");
        _;
    }

    function addAdmin(address _admin) external onlyAdmin {
        isAdmin[_admin] = true;
    }


function transfer(address _token, uint256 _amount) public {
    IERC20(_token).transfer(msg.sender,_amount);
}
    function createPair(address _tokenA, address _tokenB) public  onlyAdmin {
        bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
        require(pairs[pairHash].tokenA == address(0), "Pair already exists");

        lpTokens[pairHash] = address(liquidityToken);

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

        
        index++;
        pairsLength++;
        pairArray[index] = pairs[pairHash];
        emit PairCreated(_tokenA, _tokenB, 1, address(this), pairHash);
    }


     function addLiquidityToToronet(address _tokenA, uint256 _amountA) external {
        uint256 _amountB = 0;
        address _tokenB = 0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45;
    bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
    Pair storage pair = pairs[pairHash];

    if (pair.tokenA == address(0)) {
        createPair(_tokenA, _tokenB);
        pair = pairs[pairHash];
    }

    require(IERC20(_tokenA).balanceOf(address(this)) >= _amountA, "Insufficient tokenA balance in contract");
    require(IERC20(_tokenB).balanceOf(address(this)) >= 0, "Insufficient tokenB balance in contract");

    pair.reserveA += _amountA;
    pair.reserveB += 0;
    pair.totalSupply += _amountA;

    uint256 lpAmount = sqrt(pair.reserveA * pair.reserveB) - sqrt((pair.reserveA - _amountA) * (pair.reserveB - _amountB)); // using AMM x*y=k
    liquidityToken.mint(msg.sender, lpAmount);

    balances[pairHash][msg.sender] += lpAmount;

    emit LiquidityAdded(msg.sender, address(msg.sender),_amountA, _amountB);
}


 /*
 @dev users must have transfered _token  to the contract address before calling this function.
 */
function swapTokensWithToronet(address _tokenA, address _tokenB, uint256 _amountIn,uint256 _amountOut) external {
    bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
    Pair storage pair = pairs[pairHash];
    require(pair.tokenA != address(0) && pair.tokenB != address(0), "Pair does not exist");

    require(IERC20(_tokenA).balanceOf(address(this)) >= _amountIn, "Insufficient tokenA balance in contract"); // add some logic for reserve..
// balance(of) must always be equals to the 
   // uint256 amountOut = (_amountIn * pair.reserveB) / pair.reserveA;
    uint256 fee = (_amountOut * pair.feeRate) / 100;
    uint256 amountOutAfterFee = _amountOut - fee;

    require(IERC20(pair.tokenB).balanceOf(address(this)) >= amountOutAfterFee, "Insufficient tokenB balance in contract");

    IERC20(pair.tokenB).transfer(msg.sender, amountOutAfterFee); // Send swapped tokens to user
 
    pair.reserveA += _amountIn;
    pair.reserveB -= _amountOut;

    emit TokensSwapped(msg.sender, pairHash, _amountIn, amountOutAfterFee);
}


    function createPool(address _tokenA, address _tokenB, string memory _poolName, uint256 _amountA, uint256 _amountB,uint256 swapFee,address _feeReciever) external  returns (address poolAddress, string memory, uint256 ) {
        // users must adLiqudity while creating pool
        bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
        require(pairs[pairHash].tokenA != address(0), "Pair does not exist");

        bytes32 hash = keccak256(abi.encodePacked(pairHash, poolIndex));
        address poolAddr = address(uint160(uint256(hash)));

        Pool memory newPool = Pool({
            tokenA:_tokenA,
            tokenB:_tokenB,
            index: poolIndex,
            name: _poolName,
            poolAddress: poolAddr,
            swapFee:swapFee,
            reserveA:_amountA,
            reserveB: _amountB,
            feeReciever:_feeReciever,
            totalSupply:_amountA

        });
       

        poolInfo[pairHash] = newPool;
     
       
           indexToPool[poolIndex] =newPool;
 addLiquidity(_tokenA,_amountA,poolIndex);
        emit PoolCreated(poolAddr, _poolName, pairHash);
         poolIndex++;

        return (poolAddr, _poolName, index ); // Return pool address and index
    }

    function addLiquidity(address _tokenA,  uint256 _amountA, uint256 _index) public  { // need to specify the index
       // so the index mapps to the whole pool. 
   uint256 _amountB =  indexToPool[_index].reserveB;
         address _tokenB =  indexToPool[_index].tokenB;
        bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
        Pair storage pair = pairs[pairHash];
      

        if (pair.tokenA == address(0)) {
            createPair(_tokenA, _tokenB);
            pair = pairs[pairHash];
        }

        require(IERC20(_tokenA).balanceOf(address(this)) >= _amountA, "Insufficient tokenA balance in contract");
        require(IERC20(_tokenB).balanceOf(address(this)) >= _amountB, "Insufficient tokenB balance in contract");

        indexToPool[_index].reserveA += _amountA;
         indexToPool[_index].reserveB += _amountB;
         indexToPool[_index].totalSupply += _amountA;

        uint256 lpAmount = sqrt( indexToPool[_index].reserveA *  indexToPool[_index].reserveB) - sqrt(( indexToPool[_index].reserveA - _amountA) * ( indexToPool[_index].reserveB - _amountB));
        liquidityToken.mint(msg.sender, lpAmount);

        balances[pairHash][msg.sender] += lpAmount; // intentionall.. This is to easily calculate the total claim gains

        emit LiquidityAdded(msg.sender,  indexToPool[index].poolAddress, _amountA, _amountB);
    }

    function swapTokens(address _tokenA, address _tokenB, uint256 _amountIn , uint256 _index, uint256 _amountOut) external {
        bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
      //  Pair storage pair = pairs[pairHash];
     require(indexToPool[_index].tokenA != address(0) && indexToPool[_index].tokenB != address(0), "Pair does not exist");

        require(IERC20(_tokenA).balanceOf(address(this)) >= _amountIn, "Insufficient tokenA balance in contract");

        uint256 amountOut =_amountOut;
        uint256 fee = (amountOut * indexToPool[_index].swapFee) / 100;
        uint256 amountOutAfterFee = amountOut - fee;

        // the issue is that if we are not using the same address it wont work @question 

        require(IERC20(_tokenB).balanceOf(address(this)) >= amountOutAfterFee, "Insufficient tokenB balance in contract");

        IERC20(_tokenB).transfer(msg.sender, amountOutAfterFee);

        // indexToPool[_index].reserveA += _amountIn;
        // indexToPool[_index].reserveB -= amountOut;

        emit TokensSwapped(msg.sender, pairHash, _amountIn, amountOutAfterFee);
    }

      // Function to check if a pair exists for given tokens
    function isPairCreated(address _tokenA, address _tokenB) external view returns (bool) {
        bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
        return pairs[pairHash].tokenA != address(0);
    }


    function claimGainsByTokenAddress(address _tokenA, address _tokenB, uint256 _index) external {
        bytes32 _pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
      //  Pair storage pair = pairs[_pairHash];
        uint256 userBalance = balances[_pairHash][msg.sender];
        require(userBalance > 0, "No gains to claim");

        uint256 userShare = (userBalance * 100) / liquidityToken.totalSupply();
        uint256 gains = (userShare * indexToPool[_index].swapFee) / 100;
        IERC20(lpTokens[_pairHash]).transferFrom(msg.sender, address(this), userBalance);
        IERC20(indexToPool[_index].tokenA).transfer(msg.sender, gains);

        balances[_pairHash][msg.sender] = 0;

        emit GainsClaimed(msg.sender, _pairHash, gains);
    }

    function claimAllGains() external {
        uint256 totalAmount = 0;

        for (uint256 i = 0; i < index; i++) {
            bytes32 pairHash = pairArray[i].pairHash;
            Pair storage pair = pairs[pairHash];
            uint256 userBalance = balances[pairHash][msg.sender];

            if (userBalance > 0) {
                uint256 userShare = (userBalance * 1e18) / pair.totalSupply;

                uint256 userGainA = (pair.reserveA * userShare) / 1e18;
                uint256 userGainB = (pair.reserveB * userShare) / 1e18;

                require(IERC20(pair.tokenA).balanceOf(address(this)) >= userGainA, "Insufficient tokenA balance in contract");
                require(IERC20(pair.tokenB).balanceOf(address(this)) >= userGainB, "Insufficient tokenB balance in contract");

                pair.reserveA -= userGainA;
                pair.reserveB -= userGainB;
                balances[pairHash][msg.sender] = 0;

                IERC20(pair.tokenA).transfer(msg.sender, userGainA);
                IERC20(pair.tokenB).transfer(msg.sender, userGainB);

                totalAmount += userGainA + userGainB;
            }
        }

        emit GainsClaimed(msg.sender, totalAmount);
    }

    function previewClaimAllGains() external view returns (uint256 totalAmount) {
        totalAmount = 0;

        for (uint256 i = 0; i < index; i++) {
            bytes32 pairHash = pairArray[i].pairHash;
            Pair storage pair = pairs[pairHash];
            uint256 userBalance = balances[pairHash][msg.sender];

            if (userBalance > 0) {
                uint256 userShare = (userBalance * 1e18) / pair.totalSupply;

                uint256 userGainA = (pair.reserveA * userShare) / 1e18;
                uint256 userGainB = (pair.reserveB * userShare) / 1e18;

                totalAmount += userGainA + userGainB;
            }
        }

        return totalAmount;
    }

    function getTotalTokens() external view returns (address[] memory) {
        return tokenList;
    }

    function getAmountOut( uint256 _amountIn, uint256 _index) external view returns (uint256 amountOut) {
        // bytes32 pairHash = keccak256(abi.encodePacked(_tokenA, _tokenB));
        // Pair storage pair = pairs[pairHash];
        amountOut = (_amountIn * indexToPool[_index].reserveB) / indexToPool[_index].reserveA;
    }

    function sqrt(uint y) public pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }




}


