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

export const exchangeRateName = {
	"tEGB": "rate_egp",
    "tKSH": "rate_ksh",
    "tNGN": "rate_naira",
    "tZAR": "rate_zar",
    "tUSD": "rate_dollar",
    "tEURO": "rate_euro",
    "tPOUND": "rate_pound",
    "tETH": "rate_eth",
    "ESPEES": "rate_espees",
    "ASPR": "rate_aspr"	
}

export const tokenAPIName = {
    "tEGB": "egp",
    "tKSH": "ksh",
    "tNGN": "naira",
    "tZAR": "zar",
    "tUSD": "dollar",
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



export const Toronet_Dex_Address = "0xeDd7A974C9B60594CbA9C8660fCc58D89fb658da"////
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
				"name": "user",
				"type": "address"
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
				"internalType": "address",
				"name": "pairHash",
				"type": "address"
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
				"name": "poolAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "pairHash",
				"type": "bytes32"
			}
		],
		"name": "PoolCreated",
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
				"internalType": "uint256",
				"name": "_amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_index",
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
				"name": "_tokenA",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountA",
				"type": "uint256"
			}
		],
		"name": "addLiquidityToToronet",
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
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
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
				"internalType": "string",
				"name": "_poolName",
				"type": "string"
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
			},
			{
				"internalType": "uint256",
				"name": "swapFee",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_feeReciever",
				"type": "address"
			}
		],
		"name": "createPool",
		"outputs": [
			{
				"internalType": "address",
				"name": "poolAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getAmountOut",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "indexToPool",
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
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "poolAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "swapFee",
				"type": "uint256"
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
				"internalType": "address",
				"name": "feeReciever",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalSupply",
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
		"name": "poolIndex",
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
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "poolInfo",
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
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "poolAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "swapFee",
				"type": "uint256"
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
				"internalType": "address",
				"name": "feeReciever",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalSupply",
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
				"internalType": "uint256",
				"name": "y",
				"type": "uint256"
			}
		],
		"name": "sqrt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "z",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
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
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountOut",
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
			},
			{
				"internalType": "uint256",
				"name": "_amountOut",
				"type": "uint256"
			}
		],
		"name": "swapTokensWithToronet",
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
	}
]
export const Swap_Contract_ByteCode = "60806040523480156200001157600080fd5b5033600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200004e57600080fd5b6200005f8162000b2860201b60201c565b5073c020729a3fca5c81c8f8f84480e18d753d9dd768600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506005600073b2d7a98ed24cc8bdec8889c5d80df130657dc9ac73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506005600073babeaf88a1f2f9f186e9f55798dfbdc2794546ec73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90505060056000736deb7b175b607fd097c1e3df785097e1eda0bdcf73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050600560007393ef74be85e5fc4d8c35a82406b062d762db115873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506005600073c2abca28ba2fdfe62184cf316b48a984fd75fe4573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90505060056000735164a9f3c34e3b1aef58f6d176a6a95518a5deec73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506005600073d0cc0a3b4fd64e26fdf69055b85b80e9e827b94973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506005600073ea33965084b7dc09ecaa0b59aa972c81dda556bd73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050600560007377a86e39e8d92d25b63c9c7dfffc5351d8d1153c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90505060056000736c2a5ed4938cac04f70a7acf1ba1b1522de7581173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050600b73b2d7a98ed24cc8bdec8889c5d80df130657dc9ac9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b73babeaf88a1f2f9f186e9f55798dfbdc2794546ec9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b736deb7b175b607fd097c1e3df785097e1eda0bdcf9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b7393ef74be85e5fc4d8c35a82406b062d762db11589080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b73c2abca28ba2fdfe62184cf316b48a984fd75fe459080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b735164a9f3c34e3b1aef58f6d176a6a95518a5deec9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b73d0cc0a3b4fd64e26fdf69055b85b80e9e827b9499080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b73ea33965084b7dc09ecaa0b59aa972c81dda556bd9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b7377a86e39e8d92d25b63c9c7dfffc5351d8d1153c9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200092c73b2d7a98ed24cc8bdec8889c5d80df130657dc9ac73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b6200096673babeaf88a1f2f9f186e9f55798dfbdc2794546ec73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b620009a0736deb7b175b607fd097c1e3df785097e1eda0bdcf73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b620009da7393ef74be85e5fc4d8c35a82406b062d762db115873c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000a0073c2abca28ba2fdfe62184cf316b48a984fd75fe458062000bec60201b60201c565b62000a3a735164a9f3c34e3b1aef58f6d176a6a95518a5deec73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000a7473d0cc0a3b4fd64e26fdf69055b85b80e9e827b94973c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000aae73ea33965084b7dc09ecaa0b59aa972c81dda556bd73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000ae87377a86e39e8d92d25b63c9c7dfffc5351d8d1153c73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000b22736c2a5ed4938cac04f70a7acf1ba1b1522de7581173c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b620014d1565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168062000c7f575062000c50620011e060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b62000cc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000cb89062001390565b60405180910390fd5b6000828260405160200162000cd892919062001301565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161462000d98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000d8f906200136e565b60405180910390fd5b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518061010001604052808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600181526020013073ffffffffffffffffffffffffffffffffffffffff168152602001828152506003600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e082015181600701559050506001600081548092919062000fbe906200141f565b9190505550600c600081548092919062000fd8906200141f565b9190505550600360008281526020019081526020016000206009600060015481526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600282015481600201556003820154816003015560048201548160040155600582015481600501556006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600782015481600701559050508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f569019fd73240eeba5dadaeac29d6ca25cafef466c1e14ec5f81618a0e7c21bb60013085604051620011d39392919062001331565b60405180910390a3505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6200121481620013c3565b82525050565b6200122f6200122982620013c3565b6200146d565b82525050565b6200124081620013d7565b82525050565b62001251816200140b565b82525050565b600062001266601383620013b2565b91507f5061697220616c726561647920657869737473000000000000000000000000006000830152602082019050919050565b6000620012a8602183620013b2565b91507f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008301527f6e000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006200130f82856200121a565b6014820191506200132182846200121a565b6014820191508190509392505050565b600060608201905062001348600083018662001246565b62001357602083018562001209565b62001366604083018462001235565b949350505050565b60006020820190508181036000830152620013898162001257565b9050919050565b60006020820190508181036000830152620013ab8162001299565b9050919050565b600082825260208201905092915050565b6000620013d082620013e1565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000620014188262001401565b9050919050565b60006200142c8262001401565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562001462576200146162001495565b5b600182019050919050565b60006200147a8262001481565b9050919050565b60006200148e82620014c4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160601b9050919050565b614a4c80620014e16000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80637048027511610104578063a23a9a5b116100a2578063c9c6539611610071578063c9c6539614610588578063d93d7361146105a4578063f08b82e6146105d4578063f2fde38b146105f2576101cf565b8063a23a9a5b14610502578063a36532b214610532578063a9b6715f14610562578063ba377cf21461057e576101cf565b80638cebd942116100de5780638cebd942146104445780638da5cb5b1461047d5780639ead72221461049b578063a16d51e1146104cb576101cf565b806370480275146103ee578063715018a61461040a5780637cabb7cf14610414576101cf565b806343d91bf11161017157806355776b771161014b57806355776b771461034d578063673e048114610369578063677342ce146103a05780636eb17dd6146103d0576101cf565b806343d91bf1146102da5780634ce272ee146102f65780634fd16d2c14610314576101cf565b806339c93f74116101ad57806339c93f741461023e5780633c8824b714610270578063430dca501461028c57806343cd8f7e146102bc576101cf565b80630b588d69146101d457806324d7806c146101f05780633497574814610220575b600080fd5b6101ee60048036038101906101e99190613b65565b61060e565b005b61020a600480360381019061020591906139fb565b610a71565b60405161021791906143c0565b60405180910390f35b610228610a91565b604051610235919061457d565b60405180910390f35b61025860048036038101906102539190613a60565b610a97565b60405161026793929190614300565b60405180910390f35b61028a60048036038101906102859190613c3f565b610fe5565b005b6102a660048036038101906102a19190613cf3565b611452565b6040516102b3919061418d565b60405180910390f35b6102c4611485565b6040516102d1919061443b565b60405180910390f35b6102f460048036038101906102ef9190613bc8565b6114ab565b005b6102fe61197b565b60405161030b919061457d565b60405180910390f35b61032e60048036038101906103299190613d58565b611981565b6040516103449a999897969594939291906141df565b60405180910390f35b61036760048036038101906103629190613c7b565b611add565b005b610383600480360381019061037e9190613cf3565b61203b565b604051610397989796959493929190614282565b60405180910390f35b6103ba60048036038101906103b59190613d58565b6120e3565b6040516103c7919061457d565b60405180910390f35b6103d861215d565b6040516103e5919061457d565b60405180910390f35b610408600480360381019061040391906139fb565b6122a7565b005b6104126123cb565b005b61042e60048036038101906104299190613daa565b6123df565b60405161043b919061457d565b60405180910390f35b61045e60048036038101906104599190613cf3565b61242c565b6040516104749a999897969594939291906141df565b60405180910390f35b610485612588565b604051610492919061418d565b60405180910390f35b6104b560048036038101906104b09190613d58565b6125b1565b6040516104c2919061418d565b60405180910390f35b6104e560048036038101906104e09190613d58565b6125f0565b6040516104f9989796959493929190614282565b60405180910390f35b61051c60048036038101906105179190613a24565b612698565b60405161052991906143c0565b60405180910390f35b61054c600480360381019061054791906139fb565b612736565b60405161055991906143c0565b60405180910390f35b61057c60048036038101906105779190613b16565b612756565b005b610586612b3e565b005b6105a2600480360381019061059d9190613a24565b6130a4565b005b6105be60048036038101906105b99190613d1c565b613681565b6040516105cb919061457d565b60405180910390f35b6105dc6136a6565b6040516105e9919061439e565b60405180910390f35b61060c600480360381019061060791906139fb565b613734565b005b60008484604051602001610623929190614135565b6040516020818303038152906040528051906020012090506000600360008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156107045750600073ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b610743576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073a906144dd565b60405180910390fd5b838673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161077d919061418d565b60206040518083038186803b15801561079557600080fd5b505afa1580156107a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cd9190613d81565b101561080e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610805906144bd565b60405180910390fd5b6000606482600501548561082291906146d5565b61082c91906146a4565b90506000818561083c919061472f565b9050808360010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161089c919061418d565b60206040518083038186803b1580156108b457600080fd5b505afa1580156108c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ec9190613d81565b101561092d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109249061455d565b60405180910390fd5b8260010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161098c92919061433e565b602060405180830381600087803b1580156109a657600080fd5b505af11580156109ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109de9190613cca565b50858360020160008282546109f3919061464e565b9250508190555084836003016000828254610a0e919061472f565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167ff9208235fcb6e8cd780e8b70fd2162881dccfc95d6c1c6a8b384fbdb7f81fc76858884604051610a5f93929190614404565b60405180910390a25050505050505050565b60056020528060005260406000206000915054906101000a900460ff1681565b600c5481565b600060606000808a8a604051602001610ab1929190614135565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b66906144dd565b60405180910390fd5b600081600254604051602001610b86929190614161565b60405160208183030381529060405280519060200120905060008160001c905060006040518061014001604052808f73ffffffffffffffffffffffffffffffffffffffff1681526020018e73ffffffffffffffffffffffffffffffffffffffff16815260200160025481526020018d81526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018a81526020018c81526020018b81526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018c8152509050806004600086815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190610d12929190613887565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015560c0820151816006015560e082015181600701556101008201518160080160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610120820151816009015590505080600a6000600254815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190610e98929190613887565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015560c0820151816006015560e082015181600701556101008201518160080160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101208201518160090155905050610f618e8c600254611add565b8173ffffffffffffffffffffffffffffffffffffffff167fdf49e998bcb7bdc0334cbb2a35fd01677ea708c416e501e7ef913002b71eb1438d86604051610fa992919061448d565b60405180910390a260026000815480929190610fc49061485f565b9190505550818c600154965096509650505050509750975097945050505050565b60008073c2abca28ba2fdfe62184cf316b48a984fd75fe45905060008482604051602001611014929190614135565b6040516020818303038152906040528051906020012090506000600360008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156110bc576110a686846130a4565b6003600083815260200190815260200160002090505b848673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016110f6919061418d565b60206040518083038186803b15801561110e57600080fd5b505afa158015611122573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111469190613d81565b1015611187576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117e906144bd565b60405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016111c2919061418d565b60206040518083038186803b1580156111da57600080fd5b505afa1580156111ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112129190613d81565b1015611253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124a9061455d565b60405180910390fd5b84816002016000828254611267919061464e565b925050819055506000816003016000828254611283919061464e565b925050819055508481600401600082825461129e919061464e565b9250508190555060006112d98583600301546112ba919061472f565b8784600201546112ca919061472f565b6112d491906146d5565b6120e3565b6112f5836003015484600201546112f091906146d5565b6120e3565b6112ff919061472f565b9050600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b815260040161135e92919061433e565b600060405180830381600087803b15801561137857600080fd5b505af115801561138c573d6000803e3d6000fd5b50505050806007600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113f0919061464e565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f36f3b2e1a21c19137dd82ec243b0708a1d26b3d1fa1dc49c44c4c366a587813833888860405161144193929190614367565b60405180910390a250505050505050565b60086020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600085856040516020016114c0929190614135565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff16600a600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156115ae5750600073ffffffffffffffffffffffffffffffffffffffff16600a600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b6115ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e4906144dd565b60405180910390fd5b838673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611627919061418d565b60206040518083038186803b15801561163f57600080fd5b505afa158015611653573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116779190613d81565b10156116b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116af906144bd565b60405180910390fd5b600082905060006064600a600087815260200190815260200160002060050154836116e391906146d5565b6116ed91906146a4565b9050600081836116fd919061472f565b905080600a600088815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161176f919061418d565b60206040518083038186803b15801561178757600080fd5b505afa15801561179b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bf9190613d81565b1015611800576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f79061455d565b60405180910390fd5b600a600087815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161187192919061433e565b602060405180830381600087803b15801561188b57600080fd5b505af115801561189f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c39190613cca565b5086600a600088815260200190815260200160002060060160008282546118ea919061464e565b9250508190555082600a60008881526020019081526020016000206007016000828254611917919061472f565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167ff9208235fcb6e8cd780e8b70fd2162881dccfc95d6c1c6a8b384fbdb7f81fc7685898460405161196893929190614404565b60405180910390a2505050505050505050565b60025481565b600a6020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030180546119f69061482d565b80601f0160208091040260200160405190810160405280929190818152602001828054611a229061482d565b8015611a6f5780601f10611a4457610100808354040283529160200191611a6f565b820191906000526020600020905b815481529060010190602001808311611a5257829003601f168201915b5050505050908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154908060070154908060080160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806009015490508a565b6000600a60008381526020019081526020016000206007015490506000600a600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008582604051602001611b48929190614135565b6040516020818303038152906040528051906020012090506000600360008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611bf057611bda87846130a4565b6003600083815260200190815260200160002090505b858773ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611c2a919061418d565b60206040518083038186803b158015611c4257600080fd5b505afa158015611c56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7a9190613d81565b1015611cbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb2906144bd565b60405180910390fd5b838373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611cf5919061418d565b60206040518083038186803b158015611d0d57600080fd5b505afa158015611d21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d459190613d81565b1015611d86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7d9061455d565b60405180910390fd5b85600a60008781526020019081526020016000206006016000828254611dac919061464e565b9250508190555083600a60008781526020019081526020016000206007016000828254611dd9919061464e565b9250508190555085600a60008781526020019081526020016000206009016000828254611e06919061464e565b925050819055506000611e6585600a600089815260200190815260200160002060070154611e34919061472f565b88600a60008a815260200190815260200160002060060154611e56919061472f565b611e6091906146d5565b6120e3565b611ea5600a600089815260200190815260200160002060070154600a60008a815260200190815260200160002060060154611ea091906146d5565b6120e3565b611eaf919061472f565b9050600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b8152600401611f0e92919061433e565b600060405180830381600087803b158015611f2857600080fd5b505af1158015611f3c573d6000803e3d6000fd5b50505050806007600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611fa0919061464e565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f36f3b2e1a21c19137dd82ec243b0708a1d26b3d1fa1dc49c44c4c366a5878138600a6000600154815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16898860405161202993929190614367565b60405180910390a25050505050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154908060050154908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154905088565b6000600382111561214a578190506000600160028461210291906146a4565b61210c919061464e565b90505b8181101561214457809150600281828561212991906146a4565b612133919061464e565b61213d91906146a4565b905061210f565b50612158565b6000821461215757600190505b5b919050565b6000805b6001548110156122a357600060096000838152602001908152602001600020600701549050600060036000838152602001908152602001600020905060006007600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081111561228d5760008260040154670de0b6b3a76400008361221691906146d5565b61222091906146a4565b90506000670de0b6b3a764000082856002015461223d91906146d5565b61224791906146a4565b90506000670de0b6b3a764000083866003015461226491906146d5565b61226e91906146a4565b9050808261227c919061464e565b88612287919061464e565b97505050505b505050808061229b9061485f565b915050612161565b5090565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806123315750612302612588565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b612370576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123679061453d565b60405180910390fd5b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6123d3613782565b6123dd60006137c3565b565b6000600a600083815260200190815260200160002060060154600a6000848152602001908152602001600020600701548461241a91906146d5565b61242491906146a4565b905092915050565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030180546124a19061482d565b80601f01602080910402602001604051908101604052809291908181526020018280546124cd9061482d565b801561251a5780601f106124ef5761010080835404028352916020019161251a565b820191906000526020600020905b8154815290600101906020018083116124fd57829003601f168201915b5050505050908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154908060070154908060080160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806009015490508a565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600b81815481106125c157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154908060050154908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154905088565b60008083836040516020016126ae929190614135565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141591505092915050565b60066020528060005260406000206000915054906101000a900460ff1681565b6000838360405160200161276b929190614135565b60405160208183030381529060405280519060200120905060006007600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811161281b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128129061451d565b60405180910390fd5b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561288557600080fd5b505afa158015612899573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128bd9190613d81565b6064836128ca91906146d5565b6128d491906146a4565b905060006064600a600087815260200190815260200160002060050154836128fc91906146d5565b61290691906146a4565b90506008600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401612978939291906141a8565b602060405180830381600087803b15801561299257600080fd5b505af11580156129a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129ca9190613cca565b50600a600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401612a3c92919061433e565b602060405180830381600087803b158015612a5657600080fd5b505af1158015612a6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a8e9190613cca565b5060006007600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fbe9190244bd31ba997692f424d4d728cd30b05faaf19d6f3f7c3e7088210b97b8583604051612b2d9291906143db565b60405180910390a250505050505050565b6000805b60015481101561305257600060096000838152602001908152602001600020600701549050600060036000838152602001908152602001600020905060006007600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081111561303c5760008260040154670de0b6b3a764000083612bf791906146d5565b612c0191906146a4565b90506000670de0b6b3a7640000828560020154612c1e91906146d5565b612c2891906146a4565b90506000670de0b6b3a7640000838660030154612c4591906146d5565b612c4f91906146a4565b9050818560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401612caf919061418d565b60206040518083038186803b158015612cc757600080fd5b505afa158015612cdb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cff9190613d81565b1015612d40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d37906144bd565b60405180910390fd5b808560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401612d9e919061418d565b60206040518083038186803b158015612db657600080fd5b505afa158015612dca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dee9190613d81565b1015612e2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e269061455d565b60405180910390fd5b81856002016000828254612e43919061472f565b9250508190555080856003016000828254612e5e919061472f565b9250508190555060006007600088815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401612f1a92919061433e565b602060405180830381600087803b158015612f3457600080fd5b505af1158015612f48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f6c9190613cca565b508460010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401612fcc92919061433e565b602060405180830381600087803b158015612fe657600080fd5b505af1158015612ffa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061301e9190613cca565b50808261302b919061464e565b88613036919061464e565b97505050505b505050808061304a9061485f565b915050612b42565b503373ffffffffffffffffffffffffffffffffffffffff167f3b4a30774d0d09ad00ae2e481c1bcb9cd42d97f58ea6e44b4c65e2443a5d336d82604051613099919061457d565b60405180910390a250565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061312e57506130ff612588565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61316d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131649061453d565b60405180910390fd5b60008282604051602001613182929190614135565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461323f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613236906144fd565b60405180910390fd5b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518061010001604052808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600181526020013073ffffffffffffffffffffffffffffffffffffffff168152602001828152506003600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070155905050600160008154809291906134639061485f565b9190505550600c600081548092919061347b9061485f565b9190505550600360008281526020019081526020016000206009600060015481526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600282015481600201556003820154816003015560048201548160040155600582015481600501556006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600782015481600701559050508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f569019fd73240eeba5dadaeac29d6ca25cafef466c1e14ec5f81618a0e7c21bb6001308560405161367493929190614456565b60405180910390a3505050565b6007602052816000526040600020602052806000526040600020600091509150505481565b6060600b80548060200260200160405190810160405280929190818152602001828054801561372a57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116136e0575b5050505050905090565b61373c613782565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561377657600080fd5b61377f816137c3565b50565b3373ffffffffffffffffffffffffffffffffffffffff166137a1612588565b73ffffffffffffffffffffffffffffffffffffffff16146137c157600080fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546138939061482d565b90600052602060002090601f0160209004810192826138b557600085556138fc565b82601f106138ce57805160ff19168380011785556138fc565b828001600101855582156138fc579182015b828111156138fb5782518255916020019190600101906138e0565b5b509050613909919061390d565b5090565b5b8082111561392657600081600090555060010161390e565b5090565b600061393d613938846145c9565b614598565b90508281526020810184848401111561395557600080fd5b6139608482856147eb565b509392505050565b600081359050613977816149ba565b92915050565b60008151905061398c816149d1565b92915050565b6000813590506139a1816149e8565b92915050565b600082601f8301126139b857600080fd5b81356139c884826020860161392a565b91505092915050565b6000813590506139e0816149ff565b92915050565b6000815190506139f5816149ff565b92915050565b600060208284031215613a0d57600080fd5b6000613a1b84828501613968565b91505092915050565b60008060408385031215613a3757600080fd5b6000613a4585828601613968565b9250506020613a5685828601613968565b9150509250929050565b600080600080600080600060e0888a031215613a7b57600080fd5b6000613a898a828b01613968565b9750506020613a9a8a828b01613968565b965050604088013567ffffffffffffffff811115613ab757600080fd5b613ac38a828b016139a7565b9550506060613ad48a828b016139d1565b9450506080613ae58a828b016139d1565b93505060a0613af68a828b016139d1565b92505060c0613b078a828b01613968565b91505092959891949750929550565b600080600060608486031215613b2b57600080fd5b6000613b3986828701613968565b9350506020613b4a86828701613968565b9250506040613b5b868287016139d1565b9150509250925092565b60008060008060808587031215613b7b57600080fd5b6000613b8987828801613968565b9450506020613b9a87828801613968565b9350506040613bab878288016139d1565b9250506060613bbc878288016139d1565b91505092959194509250565b600080600080600060a08688031215613be057600080fd5b6000613bee88828901613968565b9550506020613bff88828901613968565b9450506040613c10888289016139d1565b9350506060613c21888289016139d1565b9250506080613c32888289016139d1565b9150509295509295909350565b60008060408385031215613c5257600080fd5b6000613c6085828601613968565b9250506020613c71858286016139d1565b9150509250929050565b600080600060608486031215613c9057600080fd5b6000613c9e86828701613968565b9350506020613caf868287016139d1565b9250506040613cc0868287016139d1565b9150509250925092565b600060208284031215613cdc57600080fd5b6000613cea8482850161397d565b91505092915050565b600060208284031215613d0557600080fd5b6000613d1384828501613992565b91505092915050565b60008060408385031215613d2f57600080fd5b6000613d3d85828601613992565b9250506020613d4e85828601613968565b9150509250929050565b600060208284031215613d6a57600080fd5b6000613d78848285016139d1565b91505092915050565b600060208284031215613d9357600080fd5b6000613da1848285016139e6565b91505092915050565b60008060408385031215613dbd57600080fd5b6000613dcb858286016139d1565b9250506020613ddc858286016139d1565b9150509250929050565b6000613df28383613dfe565b60208301905092915050565b613e0781614763565b82525050565b613e1681614763565b82525050565b613e2d613e2882614763565b6148a8565b82525050565b6000613e3e82614609565b613e48818561462c565b9350613e53836145f9565b8060005b83811015613e84578151613e6b8882613de6565b9750613e768361461f565b925050600181019050613e57565b5085935050505092915050565b613e9a81614775565b82525050565b613ea981614781565b82525050565b613ec0613ebb82614781565b6148ba565b82525050565b613ecf816147b5565b82525050565b613ede816147d9565b82525050565b6000613eef82614614565b613ef9818561463d565b9350613f098185602086016147fa565b613f128161499c565b840191505092915050565b6000613f2a60278361463d565b91507f496e73756666696369656e7420746f6b656e412062616c616e636520696e206360008301527f6f6e7472616374000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613f9060138361463d565b91507f5061697220646f6573206e6f74206578697374000000000000000000000000006000830152602082019050919050565b6000613fd060138361463d565b91507f5061697220616c726561647920657869737473000000000000000000000000006000830152602082019050919050565b600061401060118361463d565b91507f4e6f206761696e7320746f20636c61696d0000000000000000000000000000006000830152602082019050919050565b600061405060218361463d565b91507f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008301527f6e000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006140b660278361463d565b91507f496e73756666696369656e7420746f6b656e422062616c616e636520696e206360008301527f6f6e7472616374000000000000000000000000000000000000000000000000006020830152604082019050919050565b614118816147ab565b82525050565b61412f61412a826147ab565b6148d6565b82525050565b60006141418285613e1c565b6014820191506141518284613e1c565b6014820191508190509392505050565b600061416d8285613eaf565b60208201915061417d828461411e565b6020820191508190509392505050565b60006020820190506141a26000830184613e0d565b92915050565b60006060820190506141bd6000830186613e0d565b6141ca6020830185613e0d565b6141d7604083018461410f565b949350505050565b6000610140820190506141f5600083018d613e0d565b614202602083018c613e0d565b61420f604083018b61410f565b8181036060830152614221818a613ee4565b90506142306080830189613e0d565b61423d60a083018861410f565b61424a60c083018761410f565b61425760e083018661410f565b614265610100830185613e0d565b61427361012083018461410f565b9b9a5050505050505050505050565b600061010082019050614298600083018b613e0d565b6142a5602083018a613e0d565b6142b2604083018961410f565b6142bf606083018861410f565b6142cc608083018761410f565b6142d960a083018661410f565b6142e660c0830185613e0d565b6142f360e0830184613ea0565b9998505050505050505050565b60006060820190506143156000830186613e0d565b81810360208301526143278185613ee4565b9050614336604083018461410f565b949350505050565b60006040820190506143536000830185613e0d565b614360602083018461410f565b9392505050565b600060608201905061437c6000830186613e0d565b614389602083018561410f565b614396604083018461410f565b949350505050565b600060208201905081810360008301526143b88184613e33565b905092915050565b60006020820190506143d56000830184613e91565b92915050565b60006040820190506143f06000830185613ea0565b6143fd602083018461410f565b9392505050565b60006060820190506144196000830186613ea0565b614426602083018561410f565b614433604083018461410f565b949350505050565b60006020820190506144506000830184613ec6565b92915050565b600060608201905061446b6000830186613ed5565b6144786020830185613e0d565b6144856040830184613ea0565b949350505050565b600060408201905081810360008301526144a78185613ee4565b90506144b66020830184613ea0565b9392505050565b600060208201905081810360008301526144d681613f1d565b9050919050565b600060208201905081810360008301526144f681613f83565b9050919050565b6000602082019050818103600083015261451681613fc3565b9050919050565b6000602082019050818103600083015261453681614003565b9050919050565b6000602082019050818103600083015261455681614043565b9050919050565b60006020820190508181036000830152614576816140a9565b9050919050565b6000602082019050614592600083018461410f565b92915050565b6000604051905081810181811067ffffffffffffffff821117156145bf576145be61496d565b5b8060405250919050565b600067ffffffffffffffff8211156145e4576145e361496d565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000614659826147ab565b9150614664836147ab565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115614699576146986148e0565b5b828201905092915050565b60006146af826147ab565b91506146ba836147ab565b9250826146ca576146c961490f565b5b828204905092915050565b60006146e0826147ab565b91506146eb836147ab565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615614724576147236148e0565b5b828202905092915050565b600061473a826147ab565b9150614745836147ab565b925082821015614758576147576148e0565b5b828203905092915050565b600061476e8261478b565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006147c0826147c7565b9050919050565b60006147d28261478b565b9050919050565b60006147e4826147ab565b9050919050565b82818337600083830152505050565b60005b838110156148185780820151818401526020810190506147fd565b83811115614827576000848401525b50505050565b6000600282049050600182168061484557607f821691505b602082108114156148595761485861493e565b5b50919050565b600061486a826147ab565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561489d5761489c6148e0565b5b600182019050919050565b60006148b3826148c4565b9050919050565b6000819050919050565b60006148cf826149ad565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b6149c381614763565b81146149ce57600080fd5b50565b6149da81614775565b81146149e557600080fd5b50565b6149f181614781565b81146149fc57600080fd5b50565b614a08816147ab565b8114614a1357600080fd5b5056fea26469706673582212207234fca347f4c2b93c48b8e68169fd603b375d03991c747d4aa76f1c30ba4ae064736f6c63430008000033"



export const ERC20_URI = "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Approval%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22from%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22to%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Transfer%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22allowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22approve%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22account%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22balanceOf%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22decimals%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint8%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint8%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22subtractedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22decreaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22addedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22increaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22symbol%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transfer%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22sender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferFrom%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D"


export const Toronet_URI =  "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22GainsClaimed%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22GainsClaimed%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22provider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22LiquidityAdded%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22PairCreated%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22poolAddress%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22PoolCreated%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22TokensSwapped%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_admin%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addAdmin%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addLiquidity%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addLiquidityToToronet%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22balances%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22claimAllGains%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22claimGainsByTokenAddress%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22createPair%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22_poolName%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22swapFee%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_feeReciever%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22createPool%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22poolAddress%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22getAmountOut%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22getTotalTokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%5B%5D%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%5B%5D%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22indexToPool%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22poolAddress%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22swapFee%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeReciever%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22isAdmin%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22isPairCreated%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22isTokenAdded%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22liquidityToken%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IToronetLiquidityToken%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22lpTokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22pairArray%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22pairs%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22pairsLength%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22poolIndex%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22poolInfo%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22poolAddress%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22swapFee%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeReciever%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22previewClaimAllGains%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalAmount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22y%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22sqrt%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22z%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22pure%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22swapTokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22swapTokensWithToronet%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22tokenList%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D"

export const TORONET_LIQUIDITY_ADDRESS = "0xC020729a3FCa5C81c8F8F84480E18d753D9dd768"