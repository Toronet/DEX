// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MultiTokenSwap is Ownable {
    uint8 public constant MAX_TOKENS = 10;

    IERC20[MAX_TOKENS] public tokens;
    mapping(IERC20 => uint256) public reserves;
    mapping(address => mapping(IERC20 => uint256)) private liquidityProviders;

    constructor() Ownable(msg.sender) {
        tokens[0] = IERC20(0xB2D7A98ED24cC8bDec8889c5D80dF130657dc9Ac); // τEGP (Egyptian Pound Stablecoin)
        tokens[1] = IERC20(0xbaBeAf88a1F2f9f186E9f55798DfBDC2794546EC); // τKSH (Kenyan Shilling Stablecoin)
        tokens[2] = IERC20(0x6dEb7b175b607fD097C1e3df785097E1eda0bDcF); // τNGN (Nigeria Naira Stablecoin)
        tokens[3] = IERC20(0x93Ef74BE85E5fC4D8C35a82406b062d762Db1158); // τZAR (South African Rand Stablecoin)
        tokens[4] = IERC20(0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45); // τUSD (USD Stablecoin)
        tokens[5] = IERC20(0x5164a9F3C34E3b1aef58f6d176A6a95518A5DEEc); // τEURO (Euro Stablecoin)
        tokens[6] = IERC20(0xd0cC0a3b4FD64E26fDF69055b85b80e9e827b949); // τPOUND (Pound Stablecoin)
        tokens[7] = IERC20(0xEa33965084B7DC09eCAa0B59aa972c81dDA556BD); // τETH (Bridged Ethereum on Toronet)
        tokens[8] = IERC20(0x77A86E39E8d92d25b63C9C7DFFfc5351D8d1153C); // ESPEES
        tokens[9] = IERC20(0x6c2A5ED4938CaC04F70A7ACF1ba1b1522de75811); // ASPR
    }

    function addLiquidity(IERC20 token1, uint256 amount1, IERC20 token2, uint256 amount2) external {
        require(isValidToken(token1) && isValidToken(token2), "Invalid token");

      

        reserves[token1] += amount1;
        reserves[token2] += amount2;
        
        liquidityProviders[msg.sender][token1] += amount1;
        liquidityProviders[msg.sender][token2] += amount2;
    }

    function removeLiquidity(IERC20 token1, uint256 amount1, IERC20 token2, uint256 amount2) external {
        require(isValidToken(token1) && isValidToken(token2), "Invalid token");
        require(liquidityProviders[msg.sender][token1] >= amount1, "Insufficient liquidity");
         require(liquidityProviders[msg.sender][token2] >= amount2, "Insufficient liquidity");

        token1.transfer(msg.sender, amount1);
         token2.transfer(msg.sender, amount2);
        reserves[token1] -= amount1;
        reserves[token2] -= amount2;
        liquidityProviders[msg.sender][token1] -= amount1;
         liquidityProviders[msg.sender][token2] -= amount2;
    }

    function swap(IERC20 fromToken, IERC20 toToken, uint256 amount) external {
        require(isValidToken(fromToken) && isValidToken(toToken), "Invalid token");
        require(fromToken != toToken, "Cannot swap the same token");



        uint256 amountToReceive = calculateSwapAmount(fromToken, toToken, amount);
        

        reserves[fromToken] += amount;
        reserves[toToken] -= amountToReceive;
    }

    function calculateSwapAmount(IERC20 fromToken, IERC20 toToken, uint256 amount) public view returns (uint256) {
        uint256 K = reserves[fromToken] * reserves[toToken];
        uint256 newReserveFrom = reserves[fromToken] + amount;
        uint256 newReserveTo = K / newReserveFrom;

        return reserves[toToken] - newReserveTo;
    }

    function isValidToken(IERC20 token) internal view returns (bool) {
        for (uint8 i = 0; i < MAX_TOKENS; i++) {
            if (tokens[i] == token) {
                return true;
            }
        }
        return false;
    }

    function getReserves(IERC20 token) external view returns (uint256) {
        require(isValidToken(token), "Invalid token");
        return reserves[token];
    }
}
