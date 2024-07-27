export const DEX_ADDRESS = "0xf4b848bfc88c20ebbfd873b489d7d505a83c71d8"
export const DEX_PASSWORD = "Espees_123"
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



export const Espees_Dex_Address = "0x6E62367e87F420384A9981eA63Cf2d472Bd7Aded"////
export const Espees_Dex_ABI =  [
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
		"name": "addLiquidityToEspees",
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
				"internalType": "contract IEspeesLiquidityToken",
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
		"name": "swapTokensWithEspees",
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
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
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

export const Swap_Contract_ByteCode = "60806040523480156200001157600080fd5b5033600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200004e57600080fd5b6200005f8162000b2860201b60201c565b5073c020729a3fca5c81c8f8f84480e18d753d9dd768600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506005600073b2d7a98ed24cc8bdec8889c5d80df130657dc9ac73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506005600073babeaf88a1f2f9f186e9f55798dfbdc2794546ec73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90505060056000736deb7b175b607fd097c1e3df785097e1eda0bdcf73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050600560007393ef74be85e5fc4d8c35a82406b062d762db115873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506005600073c2abca28ba2fdfe62184cf316b48a984fd75fe4573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90505060056000735164a9f3c34e3b1aef58f6d176a6a95518a5deec73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506005600073d0cc0a3b4fd64e26fdf69055b85b80e9e827b94973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9050506005600073ea33965084b7dc09ecaa0b59aa972c81dda556bd73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050600560007377a86e39e8d92d25b63c9c7dfffc5351d8d1153c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90505060056000736c2a5ed4938cac04f70a7acf1ba1b1522de7581173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050600b73b2d7a98ed24cc8bdec8889c5d80df130657dc9ac9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b73babeaf88a1f2f9f186e9f55798dfbdc2794546ec9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b736deb7b175b607fd097c1e3df785097e1eda0bdcf9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b7393ef74be85e5fc4d8c35a82406b062d762db11589080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b73c2abca28ba2fdfe62184cf316b48a984fd75fe459080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b735164a9f3c34e3b1aef58f6d176a6a95518a5deec9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b73d0cc0a3b4fd64e26fdf69055b85b80e9e827b9499080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b73ea33965084b7dc09ecaa0b59aa972c81dda556bd9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600b7377a86e39e8d92d25b63c9c7dfffc5351d8d1153c9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200092c73b2d7a98ed24cc8bdec8889c5d80df130657dc9ac73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b6200096673babeaf88a1f2f9f186e9f55798dfbdc2794546ec73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b620009a0736deb7b175b607fd097c1e3df785097e1eda0bdcf73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b620009da7393ef74be85e5fc4d8c35a82406b062d762db115873c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000a0073c2abca28ba2fdfe62184cf316b48a984fd75fe458062000bec60201b60201c565b62000a3a735164a9f3c34e3b1aef58f6d176a6a95518a5deec73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000a7473d0cc0a3b4fd64e26fdf69055b85b80e9e827b94973c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000aae73ea33965084b7dc09ecaa0b59aa972c81dda556bd73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000ae87377a86e39e8d92d25b63c9c7dfffc5351d8d1153c73c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b62000b22736c2a5ed4938cac04f70a7acf1ba1b1522de7581173c2abca28ba2fdfe62184cf316b48a984fd75fe4562000bec60201b60201c565b620014d1565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168062000c7f575062000c50620011e060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b62000cc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000cb89062001390565b60405180910390fd5b6000828260405160200162000cd892919062001301565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161462000d98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000d8f906200136e565b60405180910390fd5b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518061010001604052808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600181526020013073ffffffffffffffffffffffffffffffffffffffff168152602001828152506003600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e082015181600701559050506001600081548092919062000fbe906200141f565b9190505550600c600081548092919062000fd8906200141f565b9190505550600360008281526020019081526020016000206009600060015481526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600282015481600201556003820154816003015560048201548160040155600582015481600501556006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600782015481600701559050508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f569019fd73240eeba5dadaeac29d6ca25cafef466c1e14ec5f81618a0e7c21bb60013085604051620011d39392919062001331565b60405180910390a3505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6200121481620013c3565b82525050565b6200122f6200122982620013c3565b6200146d565b82525050565b6200124081620013d7565b82525050565b62001251816200140b565b82525050565b600062001266601383620013b2565b91507f5061697220616c726561647920657869737473000000000000000000000000006000830152602082019050919050565b6000620012a8602183620013b2565b91507f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008301527f6e000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006200130f82856200121a565b6014820191506200132182846200121a565b6014820191508190509392505050565b600060608201905062001348600083018662001246565b62001357602083018562001209565b62001366604083018462001235565b949350505050565b60006020820190508181036000830152620013898162001257565b9050919050565b60006020820190508181036000830152620013ab8162001299565b9050919050565b600082825260208201905092915050565b6000620013d082620013e1565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000620014188262001401565b9050919050565b60006200142c8262001401565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562001462576200146162001495565b5b600182019050919050565b60006200147a8262001481565b9050919050565b60006200148e82620014c4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160601b9050919050565b61476c80620014e16000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c8063715018a611610104578063a36532b2116100a2578063c9c6539611610071578063c9c65396146105af578063d93d7361146105cb578063f08b82e6146105fb578063f2fde38b14610619576101da565b8063a36532b21461053d578063a9059cbb1461056d578063a9b6715f14610589578063ba377cf2146105a5576101da565b80638da5cb5b116100de5780638da5cb5b146104885780639ead7222146104a6578063a16d51e1146104d6578063a23a9a5b1461050d576101da565b8063715018a6146104155780637cabb7cf1461041f5780638cebd9421461044f576101da565b806343d91bf11161017c578063673e04811161014b578063673e048114610374578063677342ce146103ab5780636eb17dd6146103db57806370480275146103f9576101da565b806343d91bf1146102e55780634ce272ee146103015780634fd16d2c1461031f57806355776b7714610358576101da565b806339c93f74116101b857806339c93f74146102495780633c8824b71461027b578063430dca501461029757806343cd8f7e146102c7576101da565b80630b588d69146101df57806324d7806c146101fb578063349757481461022b575b600080fd5b6101f960048036038101906101f49190613885565b610635565b005b6102156004803603810190610210919061371b565b610a98565b60405161022291906140e0565b60405180910390f35b610233610ab8565b604051610240919061429d565b60405180910390f35b610263600480360381019061025e9190613780565b610abe565b60405161027293929190614020565b60405180910390f35b6102956004803603810190610290919061395f565b61100c565b005b6102b160048036038101906102ac9190613a13565b6112e2565b6040516102be9190613ead565b60405180910390f35b6102cf611315565b6040516102dc919061415b565b60405180910390f35b6102ff60048036038101906102fa91906138e8565b61133b565b005b61030961179f565b604051610316919061429d565b60405180910390f35b61033960048036038101906103349190613a78565b6117a5565b60405161034f9a99989796959493929190613eff565b60405180910390f35b610372600480360381019061036d919061399b565b611901565b005b61038e60048036038101906103899190613a13565b611cc9565b6040516103a2989796959493929190613fa2565b60405180910390f35b6103c560048036038101906103c09190613a78565b611d71565b6040516103d2919061429d565b60405180910390f35b6103e3611deb565b6040516103f0919061429d565b60405180910390f35b610413600480360381019061040e919061371b565b611f35565b005b61041d612059565b005b61043960048036038101906104349190613aca565b61206d565b604051610446919061429d565b60405180910390f35b61046960048036038101906104649190613a13565b6120ba565b60405161047f9a99989796959493929190613eff565b60405180910390f35b610490612216565b60405161049d9190613ead565b60405180910390f35b6104c060048036038101906104bb9190613a78565b61223f565b6040516104cd9190613ead565b60405180910390f35b6104f060048036038101906104eb9190613a78565b61227e565b604051610504989796959493929190613fa2565b60405180910390f35b61052760048036038101906105229190613744565b612326565b60405161053491906140e0565b60405180910390f35b6105576004803603810190610552919061371b565b6123c4565b60405161056491906140e0565b60405180910390f35b6105876004803603810190610582919061395f565b6123e4565b005b6105a3600480360381019061059e9190613836565b612476565b005b6105ad61285e565b005b6105c960048036038101906105c49190613744565b612dc4565b005b6105e560048036038101906105e09190613a3c565b6133a1565b6040516105f2919061429d565b60405180910390f35b6106036133c6565b60405161061091906140be565b60405180910390f35b610633600480360381019061062e919061371b565b613454565b005b6000848460405160200161064a929190613e55565b6040516020818303038152906040528051906020012090506000600360008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561072b5750600073ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b61076a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610761906141fd565b60405180910390fd5b838673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107a49190613ead565b60206040518083038186803b1580156107bc57600080fd5b505afa1580156107d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f49190613aa1565b1015610835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c906141dd565b60405180910390fd5b6000606482600501548561084991906143f5565b61085391906143c4565b905060008185610863919061444f565b9050808360010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108c39190613ead565b60206040518083038186803b1580156108db57600080fd5b505afa1580156108ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109139190613aa1565b1015610954576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094b9061427d565b60405180910390fd5b8260010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016109b392919061405e565b602060405180830381600087803b1580156109cd57600080fd5b505af11580156109e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0591906139ea565b5085836002016000828254610a1a919061436e565b9250508190555084836003016000828254610a35919061444f565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167ff9208235fcb6e8cd780e8b70fd2162881dccfc95d6c1c6a8b384fbdb7f81fc76858884604051610a8693929190614124565b60405180910390a25050505050505050565b60056020528060005260406000206000915054906101000a900460ff1681565b600c5481565b600060606000808a8a604051602001610ad8929190613e55565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8d906141fd565b60405180910390fd5b600081600254604051602001610bad929190613e81565b60405160208183030381529060405280519060200120905060008160001c905060006040518061014001604052808f73ffffffffffffffffffffffffffffffffffffffff1681526020018e73ffffffffffffffffffffffffffffffffffffffff16815260200160025481526020018d81526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018a81526020018c81526020018b81526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018c8152509050806004600086815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190610d399291906135a7565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015560c0820151816006015560e082015181600701556101008201518160080160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610120820151816009015590505080600a6000600254815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190610ebf9291906135a7565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015560c0820151816006015560e082015181600701556101008201518160080160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101208201518160090155905050610f888e8c600254611901565b8173ffffffffffffffffffffffffffffffffffffffff167fdf49e998bcb7bdc0334cbb2a35fd01677ea708c416e501e7ef913002b71eb1438d86604051610fd09291906141ad565b60405180910390a260026000815480929190610feb9061457f565b9190505550818c600154965096509650505050509750975097945050505050565b60008073c2abca28ba2fdfe62184cf316b48a984fd75fe4590506000848260405160200161103b929190613e55565b6040516020818303038152906040528051906020012090506000600360008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156110e3576110cd8684612dc4565b6003600083815260200190815260200160002090505b848160020160008282546110f7919061436e565b925050819055506000816003016000828254611113919061436e565b925050819055508481600401600082825461112e919061436e565b92505081905550600061116985836003015461114a919061444f565b87846002015461115a919061444f565b61116491906143f5565b611d71565b6111858360030154846002015461118091906143f5565b611d71565b61118f919061444f565b9050600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b81526004016111ee92919061405e565b600060405180830381600087803b15801561120857600080fd5b505af115801561121c573d6000803e3d6000fd5b50505050806007600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611280919061436e565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f36f3b2e1a21c19137dd82ec243b0708a1d26b3d1fa1dc49c44c4c366a58781383388886040516112d193929190614087565b60405180910390a250505050505050565b60086020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008585604051602001611350929190613e55565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff16600a600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561143e5750600073ffffffffffffffffffffffffffffffffffffffff16600a600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b61147d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611474906141fd565b60405180910390fd5b838673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016114b79190613ead565b60206040518083038186803b1580156114cf57600080fd5b505afa1580156114e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115079190613aa1565b1015611548576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153f906141dd565b60405180910390fd5b600082905060006064600a6000878152602001908152602001600020600501548361157391906143f5565b61157d91906143c4565b90506000818361158d919061444f565b9050808873ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016115c99190613ead565b60206040518083038186803b1580156115e157600080fd5b505afa1580156115f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116199190613aa1565b101561165a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116519061427d565b60405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161169592919061405e565b602060405180830381600087803b1580156116af57600080fd5b505af11580156116c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e791906139ea565b5086600a6000888152602001908152602001600020600601600082825461170e919061436e565b9250508190555082600a6000888152602001908152602001600020600701600082825461173b919061444f565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167ff9208235fcb6e8cd780e8b70fd2162881dccfc95d6c1c6a8b384fbdb7f81fc7685898460405161178c93929190614124565b60405180910390a2505050505050505050565b60025481565b600a6020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201549080600301805461181a9061454d565b80601f01602080910402602001604051908101604052809291908181526020018280546118469061454d565b80156118935780601f1061186857610100808354040283529160200191611893565b820191906000526020600020905b81548152906001019060200180831161187657829003601f168201915b5050505050908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154908060070154908060080160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806009015490508a565b6000600a60008381526020019081526020016000206007015490506000600a600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000858260405160200161196c929190613e55565b6040516020818303038152906040528051906020012090506000600360008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611a14576119fe8784612dc4565b6003600083815260200190815260200160002090505b85600a60008781526020019081526020016000206006016000828254611a3a919061436e565b9250508190555083600a60008781526020019081526020016000206007016000828254611a67919061436e565b9250508190555085600a60008781526020019081526020016000206009016000828254611a94919061436e565b925050819055506000611af385600a600089815260200190815260200160002060070154611ac2919061444f565b88600a60008a815260200190815260200160002060060154611ae4919061444f565b611aee91906143f5565b611d71565b611b33600a600089815260200190815260200160002060070154600a60008a815260200190815260200160002060060154611b2e91906143f5565b611d71565b611b3d919061444f565b9050600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b8152600401611b9c92919061405e565b600060405180830381600087803b158015611bb657600080fd5b505af1158015611bca573d6000803e3d6000fd5b50505050806007600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611c2e919061436e565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f36f3b2e1a21c19137dd82ec243b0708a1d26b3d1fa1dc49c44c4c366a5878138600a6000600154815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168988604051611cb793929190614087565b60405180910390a25050505050505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154908060050154908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154905088565b60006003821115611dd85781905060006001600284611d9091906143c4565b611d9a919061436e565b90505b81811015611dd2578091506002818285611db791906143c4565b611dc1919061436e565b611dcb91906143c4565b9050611d9d565b50611de6565b60008214611de557600190505b5b919050565b6000805b600154811015611f3157600060096000838152602001908152602001600020600701549050600060036000838152602001908152602001600020905060006007600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811115611f1b5760008260040154670de0b6b3a764000083611ea491906143f5565b611eae91906143c4565b90506000670de0b6b3a7640000828560020154611ecb91906143f5565b611ed591906143c4565b90506000670de0b6b3a7640000838660030154611ef291906143f5565b611efc91906143c4565b90508082611f0a919061436e565b88611f15919061436e565b97505050505b5050508080611f299061457f565b915050611def565b5090565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680611fbf5750611f90612216565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611ffe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ff59061425d565b60405180910390fd5b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6120616134a2565b61206b60006134e3565b565b6000600a600083815260200190815260200160002060060154600a600084815260200190815260200160002060070154846120a891906143f5565b6120b291906143c4565b905092915050565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201549080600301805461212f9061454d565b80601f016020809104026020016040519081016040528092919081815260200182805461215b9061454d565b80156121a85780601f1061217d576101008083540402835291602001916121a8565b820191906000526020600020905b81548152906001019060200180831161218b57829003601f168201915b5050505050908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154908060070154908060080160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806009015490508a565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600b818154811061224f57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154908060050154908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154905088565b600080838360405160200161233c929190613e55565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141591505092915050565b60066020528060005260406000206000915054906101000a900460ff1681565b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161241f92919061405e565b602060405180830381600087803b15801561243957600080fd5b505af115801561244d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061247191906139ea565b505050565b6000838360405160200161248b929190613e55565b60405160208183030381529060405280519060200120905060006007600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811161253b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125329061423d565b60405180910390fd5b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156125a557600080fd5b505afa1580156125b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125dd9190613aa1565b6064836125ea91906143f5565b6125f491906143c4565b905060006064600a6000878152602001908152602001600020600501548361261c91906143f5565b61262691906143c4565b90506008600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b815260040161269893929190613ec8565b602060405180830381600087803b1580156126b257600080fd5b505af11580156126c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126ea91906139ea565b50600a600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161275c92919061405e565b602060405180830381600087803b15801561277657600080fd5b505af115801561278a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127ae91906139ea565b5060006007600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fbe9190244bd31ba997692f424d4d728cd30b05faaf19d6f3f7c3e7088210b97b858360405161284d9291906140fb565b60405180910390a250505050505050565b6000805b600154811015612d7257600060096000838152602001908152602001600020600701549050600060036000838152602001908152602001600020905060006007600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811115612d5c5760008260040154670de0b6b3a76400008361291791906143f5565b61292191906143c4565b90506000670de0b6b3a764000082856002015461293e91906143f5565b61294891906143c4565b90506000670de0b6b3a764000083866003015461296591906143f5565b61296f91906143c4565b9050818560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016129cf9190613ead565b60206040518083038186803b1580156129e757600080fd5b505afa1580156129fb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a1f9190613aa1565b1015612a60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a57906141dd565b60405180910390fd5b808560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401612abe9190613ead565b60206040518083038186803b158015612ad657600080fd5b505afa158015612aea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0e9190613aa1565b1015612b4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b469061427d565b60405180910390fd5b81856002016000828254612b63919061444f565b9250508190555080856003016000828254612b7e919061444f565b9250508190555060006007600088815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401612c3a92919061405e565b602060405180830381600087803b158015612c5457600080fd5b505af1158015612c68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c8c91906139ea565b508460010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401612cec92919061405e565b602060405180830381600087803b158015612d0657600080fd5b505af1158015612d1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d3e91906139ea565b508082612d4b919061436e565b88612d56919061436e565b97505050505b5050508080612d6a9061457f565b915050612862565b503373ffffffffffffffffffffffffffffffffffffffff167f3b4a30774d0d09ad00ae2e481c1bcb9cd42d97f58ea6e44b4c65e2443a5d336d82604051612db9919061429d565b60405180910390a250565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680612e4e5750612e1f612216565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b612e8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e849061425d565b60405180910390fd5b60008282604051602001612ea2929190613e55565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612f5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f569061421d565b60405180910390fd5b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518061010001604052808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600181526020013073ffffffffffffffffffffffffffffffffffffffff168152602001828152506003600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070155905050600160008154809291906131839061457f565b9190505550600c600081548092919061319b9061457f565b9190505550600360008281526020019081526020016000206009600060015481526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600282015481600201556003820154816003015560048201548160040155600582015481600501556006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600782015481600701559050508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f569019fd73240eeba5dadaeac29d6ca25cafef466c1e14ec5f81618a0e7c21bb6001308560405161339493929190614176565b60405180910390a3505050565b6007602052816000526040600020602052806000526040600020600091509150505481565b6060600b80548060200260200160405190810160405280929190818152602001828054801561344a57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311613400575b5050505050905090565b61345c6134a2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561349657600080fd5b61349f816134e3565b50565b3373ffffffffffffffffffffffffffffffffffffffff166134c1612216565b73ffffffffffffffffffffffffffffffffffffffff16146134e157600080fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546135b39061454d565b90600052602060002090601f0160209004810192826135d5576000855561361c565b82601f106135ee57805160ff191683800117855561361c565b8280016001018555821561361c579182015b8281111561361b578251825591602001919060010190613600565b5b509050613629919061362d565b5090565b5b8082111561364657600081600090555060010161362e565b5090565b600061365d613658846142e9565b6142b8565b90508281526020810184848401111561367557600080fd5b61368084828561450b565b509392505050565b600081359050613697816146da565b92915050565b6000815190506136ac816146f1565b92915050565b6000813590506136c181614708565b92915050565b600082601f8301126136d857600080fd5b81356136e884826020860161364a565b91505092915050565b6000813590506137008161471f565b92915050565b6000815190506137158161471f565b92915050565b60006020828403121561372d57600080fd5b600061373b84828501613688565b91505092915050565b6000806040838503121561375757600080fd5b600061376585828601613688565b925050602061377685828601613688565b9150509250929050565b600080600080600080600060e0888a03121561379b57600080fd5b60006137a98a828b01613688565b97505060206137ba8a828b01613688565b965050604088013567ffffffffffffffff8111156137d757600080fd5b6137e38a828b016136c7565b95505060606137f48a828b016136f1565b94505060806138058a828b016136f1565b93505060a06138168a828b016136f1565b92505060c06138278a828b01613688565b91505092959891949750929550565b60008060006060848603121561384b57600080fd5b600061385986828701613688565b935050602061386a86828701613688565b925050604061387b868287016136f1565b9150509250925092565b6000806000806080858703121561389b57600080fd5b60006138a987828801613688565b94505060206138ba87828801613688565b93505060406138cb878288016136f1565b92505060606138dc878288016136f1565b91505092959194509250565b600080600080600060a0868803121561390057600080fd5b600061390e88828901613688565b955050602061391f88828901613688565b9450506040613930888289016136f1565b9350506060613941888289016136f1565b9250506080613952888289016136f1565b9150509295509295909350565b6000806040838503121561397257600080fd5b600061398085828601613688565b9250506020613991858286016136f1565b9150509250929050565b6000806000606084860312156139b057600080fd5b60006139be86828701613688565b93505060206139cf868287016136f1565b92505060406139e0868287016136f1565b9150509250925092565b6000602082840312156139fc57600080fd5b6000613a0a8482850161369d565b91505092915050565b600060208284031215613a2557600080fd5b6000613a33848285016136b2565b91505092915050565b60008060408385031215613a4f57600080fd5b6000613a5d858286016136b2565b9250506020613a6e85828601613688565b9150509250929050565b600060208284031215613a8a57600080fd5b6000613a98848285016136f1565b91505092915050565b600060208284031215613ab357600080fd5b6000613ac184828501613706565b91505092915050565b60008060408385031215613add57600080fd5b6000613aeb858286016136f1565b9250506020613afc858286016136f1565b9150509250929050565b6000613b128383613b1e565b60208301905092915050565b613b2781614483565b82525050565b613b3681614483565b82525050565b613b4d613b4882614483565b6145c8565b82525050565b6000613b5e82614329565b613b68818561434c565b9350613b7383614319565b8060005b83811015613ba4578151613b8b8882613b06565b9750613b968361433f565b925050600181019050613b77565b5085935050505092915050565b613bba81614495565b82525050565b613bc9816144a1565b82525050565b613be0613bdb826144a1565b6145da565b82525050565b613bef816144d5565b82525050565b613bfe816144f9565b82525050565b6000613c0f82614334565b613c19818561435d565b9350613c2981856020860161451a565b613c32816146bc565b840191505092915050565b6000613c4a60278361435d565b91507f496e73756666696369656e7420746f6b656e412062616c616e636520696e206360008301527f6f6e7472616374000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613cb060138361435d565b91507f5061697220646f6573206e6f74206578697374000000000000000000000000006000830152602082019050919050565b6000613cf060138361435d565b91507f5061697220616c726561647920657869737473000000000000000000000000006000830152602082019050919050565b6000613d3060118361435d565b91507f4e6f206761696e7320746f20636c61696d0000000000000000000000000000006000830152602082019050919050565b6000613d7060218361435d565b91507f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008301527f6e000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613dd660278361435d565b91507f496e73756666696369656e7420746f6b656e422062616c616e636520696e206360008301527f6f6e7472616374000000000000000000000000000000000000000000000000006020830152604082019050919050565b613e38816144cb565b82525050565b613e4f613e4a826144cb565b6145f6565b82525050565b6000613e618285613b3c565b601482019150613e718284613b3c565b6014820191508190509392505050565b6000613e8d8285613bcf565b602082019150613e9d8284613e3e565b6020820191508190509392505050565b6000602082019050613ec26000830184613b2d565b92915050565b6000606082019050613edd6000830186613b2d565b613eea6020830185613b2d565b613ef76040830184613e2f565b949350505050565b600061014082019050613f15600083018d613b2d565b613f22602083018c613b2d565b613f2f604083018b613e2f565b8181036060830152613f41818a613c04565b9050613f506080830189613b2d565b613f5d60a0830188613e2f565b613f6a60c0830187613e2f565b613f7760e0830186613e2f565b613f85610100830185613b2d565b613f93610120830184613e2f565b9b9a5050505050505050505050565b600061010082019050613fb8600083018b613b2d565b613fc5602083018a613b2d565b613fd26040830189613e2f565b613fdf6060830188613e2f565b613fec6080830187613e2f565b613ff960a0830186613e2f565b61400660c0830185613b2d565b61401360e0830184613bc0565b9998505050505050505050565b60006060820190506140356000830186613b2d565b81810360208301526140478185613c04565b90506140566040830184613e2f565b949350505050565b60006040820190506140736000830185613b2d565b6140806020830184613e2f565b9392505050565b600060608201905061409c6000830186613b2d565b6140a96020830185613e2f565b6140b66040830184613e2f565b949350505050565b600060208201905081810360008301526140d88184613b53565b905092915050565b60006020820190506140f56000830184613bb1565b92915050565b60006040820190506141106000830185613bc0565b61411d6020830184613e2f565b9392505050565b60006060820190506141396000830186613bc0565b6141466020830185613e2f565b6141536040830184613e2f565b949350505050565b60006020820190506141706000830184613be6565b92915050565b600060608201905061418b6000830186613bf5565b6141986020830185613b2d565b6141a56040830184613bc0565b949350505050565b600060408201905081810360008301526141c78185613c04565b90506141d66020830184613bc0565b9392505050565b600060208201905081810360008301526141f681613c3d565b9050919050565b6000602082019050818103600083015261421681613ca3565b9050919050565b6000602082019050818103600083015261423681613ce3565b9050919050565b6000602082019050818103600083015261425681613d23565b9050919050565b6000602082019050818103600083015261427681613d63565b9050919050565b6000602082019050818103600083015261429681613dc9565b9050919050565b60006020820190506142b26000830184613e2f565b92915050565b6000604051905081810181811067ffffffffffffffff821117156142df576142de61468d565b5b8060405250919050565b600067ffffffffffffffff8211156143045761430361468d565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000614379826144cb565b9150614384836144cb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156143b9576143b8614600565b5b828201905092915050565b60006143cf826144cb565b91506143da836144cb565b9250826143ea576143e961462f565b5b828204905092915050565b6000614400826144cb565b915061440b836144cb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561444457614443614600565b5b828202905092915050565b600061445a826144cb565b9150614465836144cb565b92508282101561447857614477614600565b5b828203905092915050565b600061448e826144ab565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006144e0826144e7565b9050919050565b60006144f2826144ab565b9050919050565b6000614504826144cb565b9050919050565b82818337600083830152505050565b60005b8381101561453857808201518184015260208101905061451d565b83811115614547576000848401525b50505050565b6000600282049050600182168061456557607f821691505b602082108114156145795761457861465e565b5b50919050565b600061458a826144cb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156145bd576145bc614600565b5b600182019050919050565b60006145d3826145e4565b9050919050565b6000819050919050565b60006145ef826146cd565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b6146e381614483565b81146146ee57600080fd5b50565b6146fa81614495565b811461470557600080fd5b50565b614711816144a1565b811461471c57600080fd5b50565b614728816144cb565b811461473357600080fd5b5056fea2646970667358221220ff0e84bcda1659fd1d0623774b63c423cbfd60bf84763bd744564094bfa2fded64736f6c63430008000033"



export const ERC20_URI = "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Approval%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22from%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22to%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Transfer%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22allowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22approve%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22account%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22balanceOf%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22decimals%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint8%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint8%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22subtractedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22decreaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22addedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22increaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22symbol%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transfer%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22sender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferFrom%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D"


export const Espees_URI =  "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22GainsClaimed%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22GainsClaimed%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22provider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22LiquidityAdded%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22PairCreated%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22poolAddress%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22PoolCreated%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22user%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22TokensSwapped%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_admin%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addAdmin%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addLiquidity%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addLiquidityToEspees%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22balances%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22claimAllGains%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22claimGainsByTokenAddress%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22createPair%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22_poolName%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22swapFee%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_feeReciever%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22createPool%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22poolAddress%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22getAmountOut%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22getTotalTokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%5B%5D%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%5B%5D%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22indexToPool%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22poolAddress%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22swapFee%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeReciever%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22isAdmin%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22isPairCreated%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22isTokenAdded%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22liquidityToken%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IEspeesLiquidityToken%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22lpTokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22pairArray%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22pairs%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeRate%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeToProvider%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22pairHash%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22pairsLength%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22poolIndex%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bytes32%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bytes32%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22poolInfo%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22poolAddress%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22swapFee%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22feeReciever%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22previewClaimAllGains%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22totalAmount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22y%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22sqrt%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22z%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22pure%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_index%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22swapTokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenA%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_tokenB%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountIn%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountOut%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22swapTokensWithEspees%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22tokenList%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22_token%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transfer%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D"

export const Espees_LIQUIDITY_ADDRESS = "0xC020729a3FCa5C81c8F8F84480E18d753D9dd768"