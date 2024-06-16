export const DEX_ADDRESS = "0xf4b848bfc88c20ebbfd873b489d7d505a83c71d8"
export const DEX_PASSWORD = "Toronet_123"
export const tEGB ="0xB2D7A98ED24cC8bDec8889c5D80dF130657dc9Ac";
export const tKSH= "0xbaBeAf88a1F2f9f186E9f55798DfBDC2794546EC"
export const tNGN= "0x6dEb7b175b607fD097C1e3df785097E1eda0bDcF"
export const tZar= "0x93Ef74BE85E5fC4D8C35a82406b062d762Db1158"
export const tUSD="0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45"
export const tEURO="0x5164a9F3C34E3b1aef58f6d176A6a95518A5DEEc"
export const tPOUND ="0xd0cC0a3b4FD64E26fDF69055b85b80e9e827b949"
export const tETH =  "0xEa33965084B7DC09eCAa0B59aa972c81dDA556BD"
export const ESPEES = "0x77A86E39E8d92d25b63C9C7DFFfc5351D8d1153C"
export const ASPR= "0x6c2A5ED4938CaC04F70A7ACF1ba1b1522de75811"


export const tokenAddresses = {
    "tEGB": "0xB2D7A98ED24cC8bDec8889c5D80dF130657dc9Ac",
    "tKSH": "0xbaBeAf88a1F2f9f186E9f55798DfBDC2794546EC",
    "tNGN": "0x6dEb7b175b607fD097C1e3df785097E1eda0bDcF",
    "tZAR": "0x93Ef74BE85E5fC4D8C35a82406b062d762Db1158",
    "tUSD": "0xc2ABcA28ba2FDfE62184cf316B48A984Fd75fE45",
    "tEURO": "0x5164a9F3C34E3b1aef58f6d176A6a95518A5DEEc",
    "tPOUND": "0xd0cC0a3b4FD64E26fDF69055b85b80e9e827b949",
    "tETH": "0xEa33965084B7DC09eCAa0B59aa972c81dDA556BD",
    "ESPEES": "0x77A86E39E8d92d25b63C9C7DFFfc5351D8d1153C",
    "ASPR": "0x6c2A5ED4938CaC04F70A7ACF1ba1b1522de75811"
};


export const rateName= {
	"tEGB": "egp",
    "tKSH": "ksh",
    "tNGN": "naira",
    "tZAR": "zar",
    "tUSD": "dollar",
    "tEURO": "euro",
    "tPOUND": "pound",
    "tETH": "eth",
    "ESPEES": "espees",
    "ASPR": "aspr"

}

export const tokenAPIName = {
    "tEGB": "egp",
    "tKSH": "ksh",
    "tNGN": "naira",
    "tZAR": "zar",
    "tUSD": "rate_dollar",
    "tEURO": "euro",
    "tPOUND": "pound",
    "tETH": "rate_eth",
    "ESPEES": "espees",
    "ASPR": "aspr"
};

 
export const ERC20_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



export const Toronet_Dex_Address = "0x7A56692bc2305C5790Ce4e51ae7bFd5b08fAae73"////0x370334581C458DEA3eaA7f7ADc650d2F2F8fCa9D

export const Toronet_Dex_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "gain",
				"type": "uint256"
			}
		],
		"name": "GainsClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "pairHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "GainsClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "provider",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "pairHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountA",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountB",
				"type": "uint256"
			}
		],
		"name": "LiquidityAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenA",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenB",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeRate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "feeToProvider",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "pairHash",
				"type": "bytes32"
			}
		],
		"name": "PairCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "pairHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			}
		],
		"name": "TokensSwapped",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountB",
				"type": "uint256"
			}
		],
		"name": "addLiquidity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"name": "addToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimAllGains",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenB",
				"type": "address"
			}
		],
		"name": "claimGainsByTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenB",
				"type": "address"
			}
		],
		"name": "createPair",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountIn",
				"type": "uint256"
			}
		],
		"name": "getAmountOut",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutAfterFee",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_pairHash",
				"type": "bytes32"
			}
		],
		"name": "getFeeRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "feeRate",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_pairHash",
				"type": "bytes32"
			}
		],
		"name": "getFeeToProvider",
		"outputs": [
			{
				"internalType": "address",
				"name": "feeToProvider",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalTokens",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_pairHash",
				"type": "bytes32"
			}
		],
		"name": "getUserLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserPairs",
		"outputs": [
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserTotalGains",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalGains",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isAdmin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenB",
				"type": "address"
			}
		],
		"name": "isPairCreated",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isTokenAdded",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isUserAdmin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "liquidityToken",
		"outputs": [
			{
				"internalType": "contract IToronetLiquidityToken",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "lpTokens",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pairArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "reserveA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveB",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "feeRate",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "feeToProvider",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "pairHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "pairs",
		"outputs": [
			{
				"internalType": "address",
				"name": "tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "reserveA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveB",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "feeRate",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "feeToProvider",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "pairHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pairsLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "previewClaimAllGains",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountIn",
				"type": "uint256"
			}
		],
		"name": "swapTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawERC20",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const Swap_Contract_ByteCode =  "60806040523480156200001157600080fd5b5033600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200004e57600080fd5b6200005f816200096f60201b60201c565b507358d364dff42cbbf463b09f0a15e19ed72585aa5d600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506004600073b2d7a98ed24cc8bdec8889c5d80df130657dc9ac73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506004600073babeaf88a1f2f9f186e9f55798dfbdc2794546ec73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90505060046000736deb7b175b607fd097c1e3df785097e1eda0bdcf73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050600460007393ef74be85e5fc4d8c35a82406b062d762db115873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506004600073c2abca28ba2fdfe62184cf316b48a984fd75fe4573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90505060046000735164a9f3c34e3b1aef58f6d176a6a95518a5deec73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506004600073d0cc0a3b4fd64e26fdf69055b85b80e9e827b94973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506004600073ea33965084b7dc09ecaa0b59aa972c81dda556bd73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050600460007377a86e39e8d92d25b63c9c7dfffc5351d8d1153c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90505060046000736c2a5ed4938cac04f70a7acf1ba1b1522de7581173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050600873b2d7a98ed24cc8bdec8889c5d80df130657dc9ac9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600873babeaf88a1f2f9f186e9f55798dfbdc2794546ec9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506008736deb7b175b607fd097c1e3df785097e1eda0bdcf9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060087393ef74be85e5fc4d8c35a82406b062d762db11589080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600873c2abca28ba2fdfe62184cf316b48a984fd75fe459080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506008735164a9f3c34e3b1aef58f6d176a6a95518a5deec9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600873d0cc0a3b4fd64e26fdf69055b85b80e9e827b9499080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600873ea33965084b7dc09ecaa0b59aa972c81dda556bd9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060087377a86e39e8d92d25b63c9c7dfffc5351d8d1153c9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506008736c2a5ed4938cac04f70a7acf1ba1b1522de758119080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000a33565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b613b468062000a436000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80639ead722211610104578063c9c65396116100a2578063ec6cc0cc11610071578063ec6cc0cc146105c2578063f08b82e6146105de578063f2fde38b146105fc578063fba0a29f14610618576101da565b8063c9c653961461053e578063cf6c62ea1461055a578063d48bfca714610576578063d93d736114610592576101da565b8063a23a9a5b116100de578063a23a9a5b146104b8578063a36532b2146104e8578063b747317814610518578063ba377cf214610534576101da565b80639ead722214610435578063a16d51e114610465578063a1db97821461049c576101da565b8063673e04811161017c5780637802fb2e1161014b5780637802fb2e146103875780637f430939146103b75780638be6e6c3146103e75780638da5cb5b14610417576101da565b8063673e04811461030c5780636eb17dd6146103435780637048027514610361578063715018a61461037d576101da565b8063430dca50116101b8578063430dca501461025d57806343cd8f7e1461028d5780634aa06652146102ab57806351aa9480146102dc576101da565b80630c07dfa6146101df57806324d7806c1461020f578063349757481461023f575b600080fd5b6101f960048036038101906101f49190612ea6565b610636565b6040516102069190613778565b60405180910390f35b61022960048036038101906102249190612ea6565b610708565b60405161023691906135eb565b60405180910390f35b610247610728565b6040516102549190613778565b60405180910390f35b6102776004803603810190610272919061305e565b61072e565b60405161028491906134ae565b60405180910390f35b610295610761565b6040516102a29190613666565b60405180910390f35b6102c560048036038101906102c09190612f0b565b610787565b6040516102d3929190613793565b60405180910390f35b6102f660048036038101906102f19190612fbd565b610919565b6040516103039190613778565b60405180910390f35b6103266004803603810190610321919061305e565b610974565b60405161033a989796959493929190613500565b60405180910390f35b61034b610a1c565b6040516103589190613778565b60405180910390f35b61037b60048036038101906103769190612ea6565b610b66565b005b610385610bc9565b005b6103a1600480360381019061039c919061305e565b610bdd565b6040516103ae91906134ae565b60405180910390f35b6103d160048036038101906103cc9190612ea6565b610c1d565b6040516103de91906135c9565b60405180910390f35b61040160048036038101906103fc919061305e565b610ea3565b60405161040e9190613778565b60405180910390f35b61041f610ec3565b60405161042c91906134ae565b60405180910390f35b61044f600480360381019061044a91906130c3565b610eec565b60405161045c91906134ae565b60405180910390f35b61047f600480360381019061047a91906130c3565b610f2b565b604051610493989796959493929190613500565b60405180910390f35b6104b660048036038101906104b19190612ff9565b610fd3565b005b6104d260048036038101906104cd9190612ecf565b611074565b6040516104df91906135eb565b60405180910390f35b61050260048036038101906104fd9190612ea6565b611112565b60405161050f91906135eb565b60405180910390f35b610532600480360381019061052d9190612ecf565b611132565b005b61053c61150d565b005b61055860048036038101906105539190612ecf565b611a69565b005b610574600480360381019061056f9190612f5a565b612009565b005b610590600480360381019061058b9190612ea6565b61245a565b005b6105ac60048036038101906105a79190613087565b61264e565b6040516105b99190613778565b60405180910390f35b6105dc60048036038101906105d79190612f0b565b612673565b005b6105e6612bab565b6040516105f391906135a7565b60405180910390f35b61061660048036038101906106119190612ea6565b612c39565b005b610620612c87565b60405161062d91906135eb565b60405180910390f35b600080600090505b60095481101561070257600060036000838152602001908152602001600020600701549050606460026000838152602001908152602001600020600501546006600084815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106d791906138c6565b6106e19190613895565b836106ec919061383f565b92505080806106fa906139dc565b91505061063e565b50919050565b60046020528060005260406000206000915054906101000a900460ff1681565b60095481565b60076020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000858560405160200161079f929190613482565b6040516020818303038152906040528051906020012090506000600260008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156108805750600073ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b6108bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b6906136d8565b60405180910390fd5b80600201548160030154866108d491906138c6565b6108de9190613895565b9350600060648260050154866108f491906138c6565b6108fe9190613895565b9050808561090c9190613920565b9350505050935093915050565b60006006600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60026020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154908060050154908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154905088565b6000805b600154811015610b6257600060036000838152602001908152602001600020600701549050600060026000838152602001908152602001600020905060006006600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811115610b4c5760008260040154670de0b6b3a764000083610ad591906138c6565b610adf9190613895565b90506000670de0b6b3a7640000828560020154610afc91906138c6565b610b069190613895565b90506000670de0b6b3a7640000838660030154610b2391906138c6565b610b2d9190613895565b90508082610b3b919061383f565b88610b46919061383f565b97505050505b5050508080610b5a906139dc565b915050610a20565b5090565b610b6e612cdb565b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610bd1612cdb565b610bdb6000612d1c565b565b60006002600083815260200190815260200160002060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6060600060095467ffffffffffffffff811115610c63577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610c915781602001602082028036833780820191505090505b5090506000805b600954811015610d7f5760006003600083815260200190815260200160002060070154905060006006600083815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115610d6b5780848481518110610d50577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508280610d67906139dc565b9350505b508080610d77906139dc565b915050610c98565b5060008167ffffffffffffffff811115610dc2577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610df05781602001602082028036833780820191505090505b50905060005b82811015610e9757838181518110610e37577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151828281518110610e78577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508080610e8f906139dc565b915050610df6565b50809350505050919050565b600060026000838152602001908152602001600020600501549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60088181548110610efc57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154908060050154908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154905088565b610fdb612cdb565b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610fff610ec3565b836040518363ffffffff1660e01b815260040161101d92919061357e565b602060405180830381600087803b15801561103757600080fd5b505af115801561104b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106f9190613035565b505050565b600080838360405160200161108a929190613482565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141591505092915050565b60056020528060005260406000206000915054906101000a900460ff1681565b60008282604051602001611147929190613482565b604051602081830303815290604052805190602001209050600060026000838152602001908152602001600020905060006006600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811161120e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120590613718565b60405180910390fd5b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561127857600080fd5b505afa15801561128c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b091906130ec565b6064836112bd91906138c6565b6112c79190613895565b9050600060648460050154836112dd91906138c6565b6112e79190613895565b90506007600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401611359939291906134c9565b602060405180830381600087803b15801561137357600080fd5b505af1158015611387573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ab9190613035565b508360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161140b92919061357e565b602060405180830381600087803b15801561142557600080fd5b505af1158015611439573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145d9190613035565b5060006006600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fbe9190244bd31ba997692f424d4d728cd30b05faaf19d6f3f7c3e7088210b97b86836040516114fc929190613606565b60405180910390a250505050505050565b6000805b600154811015611a2157600060036000838152602001908152602001600020600701549050600060026000838152602001908152602001600020905060006006600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811115611a0b5760008260040154670de0b6b3a7640000836115c691906138c6565b6115d09190613895565b90506000670de0b6b3a76400008285600201546115ed91906138c6565b6115f79190613895565b90506000670de0b6b3a764000083866003015461161491906138c6565b61161e9190613895565b9050818560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161167e91906134ae565b60206040518083038186803b15801561169657600080fd5b505afa1580156116aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ce91906130ec565b101561170f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611706906136b8565b60405180910390fd5b808560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161176d91906134ae565b60206040518083038186803b15801561178557600080fd5b505afa158015611799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bd91906130ec565b10156117fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f590613758565b60405180910390fd5b818560020160008282546118129190613920565b925050819055508085600301600082825461182d9190613920565b9250508190555060006006600088815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508082611896919061383f565b886118a1919061383f565b97508460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b815260040161190292919061357e565b602060405180830381600087803b15801561191c57600080fd5b505af1158015611930573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119549190613035565b508460010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016119b492919061357e565b602060405180830381600087803b1580156119ce57600080fd5b505af11580156119e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a069190613035565b505050505b5050508080611a19906139dc565b915050611511565b50803373ffffffffffffffffffffffffffffffffffffffff167f3b4a30774d0d09ad00ae2e481c1bcb9cd42d97f58ea6e44b4c65e2443a5d336d60405160405180910390a350565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611af5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aec90613738565b60405180910390fd5b60008282604051602001611b0a929190613482565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611bc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bbe906136f8565b60405180910390fd5b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518061010001604052808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600181526020013073ffffffffffffffffffffffffffffffffffffffff168152602001828152506002600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070155905050600260008281526020019081526020016000206003600060015481526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600282015481600201556003820154816003015560048201548160040155600582015481600501556006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506007820154816007015590505060016000815480929190611f7d906139dc565b919050555060096000815480929190611f95906139dc565b91905055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f569019fd73240eeba5dadaeac29d6ca25cafef466c1e14ec5f81618a0e7c21bb60013085604051611ffc93929190613681565b60405180910390a3505050565b6000848460405160200161201e929190613482565b6040516020818303038152906040528051906020012090506000600260008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156120c6576120b08686611a69565b6002600083815260200190815260200160002090505b838673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161210091906134ae565b60206040518083038186803b15801561211857600080fd5b505afa15801561212c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215091906130ec565b1015612191576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612188906136b8565b60405180910390fd5b828573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016121cb91906134ae565b60206040518083038186803b1580156121e357600080fd5b505afa1580156121f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061221b91906130ec565b101561225c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161225390613758565b60405180910390fd5b83816002016000828254612270919061383f565b925050819055508281600301600082825461228b919061383f565b92505081905550838160040160008282546122a6919061383f565b9250508190555060006122e18483600301546122c29190613920565b8684600201546122d29190613920565b6122dc91906138c6565b612de0565b6122fd836003015484600201546122f891906138c6565b612de0565b6123079190613920565b9050600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b815260040161236692919061357e565b600060405180830381600087803b15801561238057600080fd5b505af1158015612394573d6000803e3d6000fd5b50505050806006600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546123f8919061383f565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fa00ce25153d53f49d763906184a78eae3ed06b76c8b5bb8e772a0e20c3fb2fb78487876040516124499392919061362f565b60405180910390a250505050505050565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166124e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124dd90613738565b60405180910390fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661264b576001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506008819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6006602052816000526040600020602052806000526040600020600091509150505481565b60008383604051602001612688929190613482565b6040516020818303038152906040528051906020012090506000600260008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156127695750600073ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b6127a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161279f906136d8565b60405180910390fd5b828573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016127e291906134ae565b60206040518083038186803b1580156127fa57600080fd5b505afa15801561280e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061283291906130ec565b1015612873576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161286a906136b8565b60405180910390fd5b6000816002015482600301548561288a91906138c6565b6128949190613895565b9050600060648360050154836128aa91906138c6565b6128b49190613895565b9050600081836128c49190613920565b9050808460010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161292491906134ae565b60206040518083038186803b15801561293c57600080fd5b505afa158015612950573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061297491906130ec565b10156129b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129ac90613758565b60405180910390fd5b8360010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401612a1492919061357e565b602060405180830381600087803b158015612a2e57600080fd5b505af1158015612a42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a669190613035565b508360010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb30846040518363ffffffff1660e01b8152600401612ac692919061357e565b602060405180830381600087803b158015612ae057600080fd5b505af1158015612af4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b189190613035565b5085846002016000828254612b2d919061383f565b9250508190555082846003016000828254612b489190613920565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167ff9208235fcb6e8cd780e8b70fd2162881dccfc95d6c1c6a8b384fbdb7f81fc76868884604051612b999392919061362f565b60405180910390a25050505050505050565b60606008805480602002602001604051908101604052809291908181526020018280548015612c2f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612be5575b5050505050905090565b612c41612cdb565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612c7b57600080fd5b612c8481612d1c565b50565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905090565b3373ffffffffffffffffffffffffffffffffffffffff16612cfa610ec3565b73ffffffffffffffffffffffffffffffffffffffff1614612d1a57600080fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000806002600184612df2919061383f565b612dfc9190613895565b90508291505b81811015612e37578091506002818285612e1c9190613895565b612e26919061383f565b612e309190613895565b9050612e02565b50919050565b600081359050612e4c81613ab4565b92915050565b600081519050612e6181613acb565b92915050565b600081359050612e7681613ae2565b92915050565b600081359050612e8b81613af9565b92915050565b600081519050612ea081613af9565b92915050565b600060208284031215612eb857600080fd5b6000612ec684828501612e3d565b91505092915050565b60008060408385031215612ee257600080fd5b6000612ef085828601612e3d565b9250506020612f0185828601612e3d565b9150509250929050565b600080600060608486031215612f2057600080fd5b6000612f2e86828701612e3d565b9350506020612f3f86828701612e3d565b9250506040612f5086828701612e7c565b9150509250925092565b60008060008060808587031215612f7057600080fd5b6000612f7e87828801612e3d565b9450506020612f8f87828801612e3d565b9350506040612fa087828801612e7c565b9250506060612fb187828801612e7c565b91505092959194509250565b60008060408385031215612fd057600080fd5b6000612fde85828601612e3d565b9250506020612fef85828601612e67565b9150509250929050565b6000806040838503121561300c57600080fd5b600061301a85828601612e3d565b925050602061302b85828601612e7c565b9150509250929050565b60006020828403121561304757600080fd5b600061305584828501612e52565b91505092915050565b60006020828403121561307057600080fd5b600061307e84828501612e67565b91505092915050565b6000806040838503121561309a57600080fd5b60006130a885828601612e67565b92505060206130b985828601612e3d565b9150509250929050565b6000602082840312156130d557600080fd5b60006130e384828501612e7c565b91505092915050565b6000602082840312156130fe57600080fd5b600061310c84828501612e91565b91505092915050565b60006131218383613145565b60208301905092915050565b60006131398383613245565b60208301905092915050565b61314e81613954565b82525050565b61315d81613954565b82525050565b61317461316f82613954565b613a25565b82525050565b6000613185826137dc565b61318f818561380c565b935061319a836137bc565b8060005b838110156131cb5781516131b28882613115565b97506131bd836137f2565b92505060018101905061319e565b5085935050505092915050565b60006131e3826137e7565b6131ed818561381d565b93506131f8836137cc565b8060005b83811015613229578151613210888261312d565b975061321b836137ff565b9250506001810190506131fc565b5085935050505092915050565b61323f81613966565b82525050565b61324e81613972565b82525050565b61325d81613972565b82525050565b61326c816139a6565b82525050565b61327b816139ca565b82525050565b600061328e60278361382e565b91507f496e73756666696369656e7420746f6b656e412062616c616e636520696e206360008301527f6f6e7472616374000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006132f460138361382e565b91507f5061697220646f6573206e6f74206578697374000000000000000000000000006000830152602082019050919050565b600061333460138361382e565b91507f5061697220616c726561647920657869737473000000000000000000000000006000830152602082019050919050565b600061337460118361382e565b91507f4e6f206761696e7320746f20636c61696d0000000000000000000000000000006000830152602082019050919050565b60006133b460218361382e565b91507f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008301527f6e000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061341a60278361382e565b91507f496e73756666696369656e7420746f6b656e422062616c616e636520696e206360008301527f6f6e7472616374000000000000000000000000000000000000000000000000006020830152604082019050919050565b61347c8161399c565b82525050565b600061348e8285613163565b60148201915061349e8284613163565b6014820191508190509392505050565b60006020820190506134c36000830184613154565b92915050565b60006060820190506134de6000830186613154565b6134eb6020830185613154565b6134f86040830184613473565b949350505050565b600061010082019050613516600083018b613154565b613523602083018a613154565b6135306040830189613473565b61353d6060830188613473565b61354a6080830187613473565b61355760a0830186613473565b61356460c0830185613154565b61357160e0830184613254565b9998505050505050505050565b60006040820190506135936000830185613154565b6135a06020830184613473565b9392505050565b600060208201905081810360008301526135c1818461317a565b905092915050565b600060208201905081810360008301526135e381846131d8565b905092915050565b60006020820190506136006000830184613236565b92915050565b600060408201905061361b6000830185613254565b6136286020830184613473565b9392505050565b60006060820190506136446000830186613254565b6136516020830185613473565b61365e6040830184613473565b949350505050565b600060208201905061367b6000830184613263565b92915050565b60006060820190506136966000830186613272565b6136a36020830185613154565b6136b06040830184613254565b949350505050565b600060208201905081810360008301526136d181613281565b9050919050565b600060208201905081810360008301526136f1816132e7565b9050919050565b6000602082019050818103600083015261371181613327565b9050919050565b6000602082019050818103600083015261373181613367565b9050919050565b60006020820190508181036000830152613751816133a7565b9050919050565b600060208201905081810360008301526137718161340d565b9050919050565b600060208201905061378d6000830184613473565b92915050565b60006040820190506137a86000830185613473565b6137b56020830184613473565b9392505050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061384a8261399c565b91506138558361399c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561388a57613889613a49565b5b828201905092915050565b60006138a08261399c565b91506138ab8361399c565b9250826138bb576138ba613a78565b5b828204905092915050565b60006138d18261399c565b91506138dc8361399c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561391557613914613a49565b5b828202905092915050565b600061392b8261399c565b91506139368361399c565b92508282101561394957613948613a49565b5b828203905092915050565b600061395f8261397c565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006139b1826139b8565b9050919050565b60006139c38261397c565b9050919050565b60006139d58261399c565b9050919050565b60006139e78261399c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613a1a57613a19613a49565b5b600182019050919050565b6000613a3082613a37565b9050919050565b6000613a4282613aa7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008160601b9050919050565b613abd81613954565b8114613ac857600080fd5b50565b613ad481613966565b8114613adf57600080fd5b50565b613aeb81613972565b8114613af657600080fd5b50565b613b028161399c565b8114613b0d57600080fd5b5056fea26469706673582212208eac11078b2f7a809f7e9e4e01972541ec303591651c1086fb359928d7a6588164736f6c63430008000033"



export const ERC20_URI = "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Approval%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22from%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22to%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Transfer%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22allowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22approve%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22account%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22balanceOf%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22decimals%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint8%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint8%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22subtractedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22decreaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22addedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22increaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22symbol%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transfer%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22sender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferFrom%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D"


export const Toronet_URI = "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22gain%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22GainsClaimed%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22GainsClaimed%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22provider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22LiquidityAdded%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22PairCreated%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22TokensSwapped%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_admin%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addAdmin%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addLiquidity%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_token%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addToken%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22balances%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22claimAllGains%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22claimGainsByTokenAddress%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22createPair%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22getAmountOut%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountOutAfterFee%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22_pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22getFeeRate%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22_pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22getFeeToProvider%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22getTotalTokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%5B%5D%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%5B%5D%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22_pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22getUserLiquidity%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22liquidity%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22getUserPairs%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%5B%5D%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%5B%5D%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22getUserTotalGains%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalGains%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22isAdmin%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22isPairCreated%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22isTokenAdded%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22isUserAdmin%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22liquidityToken%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IToronetLiquidityToken%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22lpTokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22pairArray%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22pairs%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22pairsLength%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22previewClaimAllGains%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalAmount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22swapTokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22tokenList%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenAddress%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22withdrawERC20%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D"



export const TORONET_LIQUIDITY_ADDRESS = "0x58D364dff42CBbF463B09f0A15E19ED72585aa5D"