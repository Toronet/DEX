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

export const tokenAPIName = {
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



export const Swap_Contract_Address = "0x300c45e0c428C35c4B3A42A88B3ec4162849889e"////0x370334581C458DEA3eaA7f7ADc650d2F2F8fCa9D

export const Swap_Contract_ABI = [
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
		"inputs": [],
		"name": "MAX_TOKENS",
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
				"internalType": "contract IERC20",
				"name": "token1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"internalType": "contract IERC20",
				"name": "token2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount2",
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
				"internalType": "contract IERC20",
				"name": "fromToken",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "toToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "calculateSwapAmount",
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
				"internalType": "contract IERC20",
				"name": "token",
				"type": "address"
			}
		],
		"name": "getReserves",
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
				"internalType": "contract IERC20",
				"name": "token1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			},
			{
				"internalType": "contract IERC20",
				"name": "token2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount2",
				"type": "uint256"
			}
		],
		"name": "removeLiquidity",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"name": "reserves",
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
				"internalType": "contract IERC20",
				"name": "fromToken",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "toToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "swap",
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
		"name": "tokens",
		"outputs": [
			{
				"internalType": "contract IERC20",
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

export const Swap_Contract_ByteCode =  "60806040523480156200001157600080fd5b5033600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200004e57600080fd5b6200005f816200060560201b60201c565b5073b2d7a98ed24cc8bdec8889c5d80df130657dc9ac60016000600a8110620000b1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073babeaf88a1f2f9f186e9f55798dfbdc2794546ec600180600a811062000140577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550736deb7b175b607fd097c1e3df785097e1eda0bdcf60016002600a8110620001d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507393ef74be85e5fc4d8c35a82406b062d762db115860016003600a811062000260577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073c2abca28ba2fdfe62184cf316b48a984fd75fe4560016004600a8110620002f0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550735164a9f3c34e3b1aef58f6d176a6a95518a5deec60016005600a811062000380577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073d0cc0a3b4fd64e26fdf69055b85b80e9e827b94960016006600a811062000410577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073ea33965084b7dc09ecaa0b59aa972c81dda556bd60016007600a8110620004a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507377a86e39e8d92d25b63c9c7dfffc5351d8d1153c60016008600a811062000530577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550736c2a5ed4938cac04f70a7acf1ba1b1522de7581160016009600a8110620005c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620006c9565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6115a880620006d96000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638da5cb5b116100715780638da5cb5b14610164578063d66bd52414610182578063df791e50146101b2578063f2fde38b146101ce578063f47c84c5146101ea578063fb1da1d614610208576100a9565b8063376d3d5d146100ae5780633e99c1e4146100ca5780634f64b2be146100fa5780635cb194c61461012a578063715018a61461015a575b600080fd5b6100c860048036038101906100c39190611060565b610224565b005b6100e460048036038101906100df9190610fe8565b610455565b6040516100f191906112a7565b60405180910390f35b610114600480360381019061010f91906110c3565b6104e6565b604051610121919061122c565b60405180910390f35b610144600480360381019061013f9190611011565b61051c565b60405161015191906112a7565b60405180910390f35b610162610661565b005b61016c610675565b60405161017991906111e8565b60405180910390f35b61019c60048036038101906101979190610fe8565b61069e565b6040516101a991906112a7565b60405180910390f35b6101cc60048036038101906101c79190611011565b6106b6565b005b6101e860048036038101906101e39190610f96565b61083f565b005b6101f261088d565b6040516101ff91906112c2565b60405180910390f35b610222600480360381019061021d9190611060565b610892565b005b61022d84610d5d565b801561023e575061023d82610d5d565b5b61027d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027490611267565b60405180910390fd5b82600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102cc91906112ee565b9250508190555080600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461032291906112ee565b9250508190555082600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103b591906112ee565b9250508190555080600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461044891906112ee565b9250508190555050505050565b600061046082610d5d565b61049f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049690611267565b60405180910390fd5b600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600181600a81106104f657600080fd5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105a99190611375565b9050600083600b60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105f891906112ee565b9050600081836106089190611344565b905080600b60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461065591906113cf565b93505050509392505050565b610669610e2e565b6106736000610e76565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600b6020528060005260406000206000915090505481565b6106bf83610d5d565b80156106d057506106cf82610d5d565b5b61070f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070690611267565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561077e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077590611287565b60405180910390fd5b600061078b84848461051c565b905081600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107dc91906112ee565b9250508190555080600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461083291906113cf565b9250508190555050505050565b610847610e2e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561088157600080fd5b61088a81610e76565b50565b600a81565b61089b84610d5d565b80156108ac57506108ab82610d5d565b5b6108eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e290611267565b60405180910390fd5b82600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156109aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a190611247565b60405180910390fd5b80600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610a69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6090611247565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b8152600401610aa4929190611203565b602060405180830381600087803b158015610abe57600080fd5b505af1158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af69190610fbf565b508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610b32929190611203565b602060405180830381600087803b158015610b4c57600080fd5b505af1158015610b60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b849190610fbf565b5082600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bd491906113cf565b9250508190555080600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c2a91906113cf565b9250508190555082600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cbd91906113cf565b9250508190555080600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d5091906113cf565b9250508190555050505050565b600080600090505b600a60ff168160ff161015610e23578273ffffffffffffffffffffffffffffffffffffffff1660018260ff16600a8110610dc8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e10576001915050610e29565b8080610e1b9061148e565b915050610d65565b50600090505b919050565b610e36610f3a565b73ffffffffffffffffffffffffffffffffffffffff16610e54610675565b73ffffffffffffffffffffffffffffffffffffffff1614610e7457600080fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600081359050610f5181611516565b92915050565b600081519050610f668161152d565b92915050565b600081359050610f7b81611544565b92915050565b600081359050610f908161155b565b92915050565b600060208284031215610fa857600080fd5b6000610fb684828501610f42565b91505092915050565b600060208284031215610fd157600080fd5b6000610fdf84828501610f57565b91505092915050565b600060208284031215610ffa57600080fd5b600061100884828501610f6c565b91505092915050565b60008060006060848603121561102657600080fd5b600061103486828701610f6c565b935050602061104586828701610f6c565b925050604061105686828701610f81565b9150509250925092565b6000806000806080858703121561107657600080fd5b600061108487828801610f6c565b945050602061109587828801610f81565b93505060406110a687828801610f6c565b92505060606110b787828801610f81565b91505092959194509250565b6000602082840312156110d557600080fd5b60006110e384828501610f81565b91505092915050565b6110f581611403565b82525050565b6111048161146a565b82525050565b60006111176016836112dd565b91507f496e73756666696369656e74206c6971756964697479000000000000000000006000830152602082019050919050565b6000611157600d836112dd565b91507f496e76616c696420746f6b656e000000000000000000000000000000000000006000830152602082019050919050565b6000611197601a836112dd565b91507f43616e6e6f742073776170207468652073616d6520746f6b656e0000000000006000830152602082019050919050565b6111d381611453565b82525050565b6111e28161145d565b82525050565b60006020820190506111fd60008301846110ec565b92915050565b600060408201905061121860008301856110ec565b61122560208301846111ca565b9392505050565b600060208201905061124160008301846110fb565b92915050565b600060208201905081810360008301526112608161110a565b9050919050565b600060208201905081810360008301526112808161114a565b9050919050565b600060208201905081810360008301526112a08161118a565b9050919050565b60006020820190506112bc60008301846111ca565b92915050565b60006020820190506112d760008301846111d9565b92915050565b600082825260208201905092915050565b60006112f982611453565b915061130483611453565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611339576113386114b8565b5b828201905092915050565b600061134f82611453565b915061135a83611453565b92508261136a576113696114e7565b5b828204905092915050565b600061138082611453565b915061138b83611453565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113c4576113c36114b8565b5b828202905092915050565b60006113da82611453565b91506113e583611453565b9250828210156113f8576113f76114b8565b5b828203905092915050565b600061140e82611433565b9050919050565b60008115159050919050565b600061142c82611403565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006114758261147c565b9050919050565b600061148782611433565b9050919050565b60006114998261145d565b915060ff8214156114ad576114ac6114b8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b61151f81611403565b811461152a57600080fd5b50565b61153681611415565b811461154157600080fd5b50565b61154d81611421565b811461155857600080fd5b50565b61156481611453565b811461156f57600080fd5b5056fea2646970667358221220c1ad555fea552e8ab7402b5799102adb0e4d25740e7493ceb3a042b3072e84f664736f6c63430008000033"



export const ERC20_URI = "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Approval%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22from%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22to%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Transfer%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22allowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22approve%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22account%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22balanceOf%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22decimals%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint8%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint8%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22subtractedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22decreaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22addedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22increaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22symbol%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transfer%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22sender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferFrom%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D"


export const Swap_URI = "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22MAX_TOKENS%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint8%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint8%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22token1%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount1%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22token2%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount2%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addLiquidity%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22fromToken%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22toToken%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22calculateSwapAmount%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22token%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22getReserves%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22token1%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount1%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22token2%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount2%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22removeLiquidity%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22reserves%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22fromToken%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22toToken%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22swap%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22tokens%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22contract%20IERC20%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D"