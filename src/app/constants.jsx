
export const MT_TOKEN_ADDRESS = "0xA51B776d69b7a150aE30C3eaCfBa69d94fED3b5f"
export const AQT_TOKEN_ADDRESS = "0xB66B27A8c6515a46C6eDdE549D18095Fc6BD95B0"

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



export const Swap_Contract_Address = "0x74d9fCA6264A72B96Eb349afF15eee0Bd32534D4"

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
		"inputs": [
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
				"internalType": "uint256",
				"name": "_amountB",
				"type": "uint256"
			}
		],
		"name": "calculateAQT_TokenForA",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "MT_Token_to_recieve",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountA",
				"type": "uint256"
			}
		],
		"name": "calculateMT_TokenForB",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "AQT_Token_to_recieve",
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
		"inputs": [],
		"name": "reserveA",
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
		"name": "reserveB",
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
				"internalType": "uint256",
				"name": "_amountB",
				"type": "uint256"
			}
		],
		"name": "swapAQT_TokenForA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountA",
				"type": "uint256"
			}
		],
		"name": "swapMT_TokenForB",
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

export const Swap_Contract_ByteCode =  "608060405273a51b776d69b7a150ae30c3eacfba69d94fed3b5f600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073b66b27a8c6515a46c6edde549d18095fc6bd95b0600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156100ba57600080fd5b5060006100cb61016e60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350610176565b600033905090565b6116bb806101856000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80639cd441da116100715780639cd441da1461012c5780639d7de6b314610148578063dc0d2d5d14610164578063dc5fa6c514610194578063dda65ec9146101b2578063f2fde38b146101e2576100a9565b806319e36f3b146100ae5780635cce626e146100cc5780636e4b72c3146100e8578063715018a6146101045780638da5cb5b1461010e575b600080fd5b6100b66101fe565b6040516100c39190610f7d565b60405180910390f35b6100e660048036038101906100e19190610fc9565b610204565b005b61010260048036038101906100fd9190610fc9565b6103f6565b005b61010c6105e8565b005b610116610722565b6040516101239190611037565b60405180910390f35b61014660048036038101906101419190611052565b61074b565b005b610162600480360381019061015d9190611052565b610979565b005b61017e60048036038101906101799190610fc9565b610c3e565b60405161018b9190610f7d565b60405180910390f35b61019c610c8d565b6040516101a99190610f7d565b60405180910390f35b6101cc60048036038101906101c79190610fc9565b610c93565b6040516101d99190610f7d565b60405180910390f35b6101fc60048036038101906101f791906110be565b610ce2565b005b60025481565b80600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b81526004016102629291906110eb565b602060405180830381865afa15801561027f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a39190611129565b10156102e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102db906111d9565b60405180910390fd5b610312600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16333084610e8a565b600061031d82610c3e565b9050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161037c9291906111f9565b6020604051808303816000875af115801561039b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bf919061125a565b5081600260008282546103d291906112b6565b9250508190555080600260008282546103eb91906112ea565b925050819055505050565b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b81526004016104549291906110eb565b602060405180830381865afa158015610471573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104959190611129565b10156104d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611390565b60405180910390fd5b610504600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16333084610e8a565b600061050f82610c93565b9050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161056e9291906111f9565b6020604051808303816000875af115801561058d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b1919061125a565b5081600160008282546105c491906112b6565b9250508190555080600160008282546105dd91906112ea565b925050819055505050565b6105f0610f5c565b73ffffffffffffffffffffffffffffffffffffffff1661060e610722565b73ffffffffffffffffffffffffffffffffffffffff1614610664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065b906113fc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016107aa9392919061141c565b6020604051808303816000875af11580156107c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ed919061125a565b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161084d9392919061141c565b6020604051808303816000875af115801561086c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610890919061125a565b5081600160008282546108a391906112b6565b9250508190555080600260008282546108bc91906112b6565b9250508190555081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825461091591906112b6565b9250508190555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600082825461096e91906112b6565b925050819055505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050828160000154101580156109d4575081816001015410155b610a13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0a906114c5565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b8152600401610a709291906111f9565b6020604051808303816000875af1158015610a8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab3919061125a565b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610b119291906111f9565b6020604051808303816000875af1158015610b30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b54919061125a565b508260016000828254610b6791906112ea565b925050819055508160026000828254610b8091906112ea565b9250508190555082600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610bd991906112ea565b9250508190555081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610c3291906112ea565b92505081905550505050565b600080600254600154610c5191906114e5565b9050600083600254610c6391906112b6565b905060008183610c739190611556565b905080600254610c8391906112ea565b9350505050919050565b60015481565b600080600254600154610ca691906114e5565b9050600083600154610cb891906112b6565b905060008183610cc89190611556565b905080600254610cd891906112ea565b9350505050919050565b610cea610f5c565b73ffffffffffffffffffffffffffffffffffffffff16610d08610722565b73ffffffffffffffffffffffffffffffffffffffff1614610d5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d55906113fc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610dcd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc4906115f9565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856040518463ffffffff1660e01b8152600401610ec99392919061141c565b6020604051808303816000875af1158015610ee8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0c919061125a565b90506001151581151514610f55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4c90611665565b60405180910390fd5b5050505050565b600033905090565b6000819050919050565b610f7781610f64565b82525050565b6000602082019050610f926000830184610f6e565b92915050565b600080fd5b610fa681610f64565b8114610fb157600080fd5b50565b600081359050610fc381610f9d565b92915050565b600060208284031215610fdf57610fde610f98565b5b6000610fed84828501610fb4565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061102182610ff6565b9050919050565b61103181611016565b82525050565b600060208201905061104c6000830184611028565b92915050565b6000806040838503121561106957611068610f98565b5b600061107785828601610fb4565b925050602061108885828601610fb4565b9150509250929050565b61109b81611016565b81146110a657600080fd5b50565b6000813590506110b881611092565b92915050565b6000602082840312156110d4576110d3610f98565b5b60006110e2848285016110a9565b91505092915050565b60006040820190506111006000830185611028565b61110d6020830184611028565b9392505050565b60008151905061112381610f9d565b92915050565b60006020828403121561113f5761113e610f98565b5b600061114d84828501611114565b91505092915050565b600082825260208201905092915050565b7f45524332303a204151545f546f6b656e20616c6c6f77616e636520746f6f206c60008201527f6f77000000000000000000000000000000000000000000000000000000000000602082015250565b60006111c3602283611156565b91506111ce82611167565b604082019050919050565b600060208201905081810360008301526111f2816111b6565b9050919050565b600060408201905061120e6000830185611028565b61121b6020830184610f6e565b9392505050565b60008115159050919050565b61123781611222565b811461124257600080fd5b50565b6000815190506112548161122e565b92915050565b6000602082840312156112705761126f610f98565b5b600061127e84828501611245565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112c182610f64565b91506112cc83610f64565b92508282019050808211156112e4576112e3611287565b5b92915050565b60006112f582610f64565b915061130083610f64565b925082820390508181111561131857611317611287565b5b92915050565b7f45524332303a204d545f546f6b656e20616c6c6f77616e636520746f6f206c6f60008201527f7700000000000000000000000000000000000000000000000000000000000000602082015250565b600061137a602183611156565b91506113858261131e565b604082019050919050565b600060208201905081810360008301526113a98161136d565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006113e6602083611156565b91506113f1826113b0565b602082019050919050565b60006020820190508181036000830152611415816113d9565b9050919050565b60006060820190506114316000830186611028565b61143e6020830185611028565b61144b6040830184610f6e565b949350505050565b7f535741503a20696e73756666696369656e74206c6971756964792062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006114af602283611156565b91506114ba82611453565b604082019050919050565b600060208201905081810360008301526114de816114a2565b9050919050565b60006114f082610f64565b91506114fb83610f64565b925082820261150981610f64565b915082820484148315176115205761151f611287565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061156182610f64565b915061156c83610f64565b92508261157c5761157b611527565b5b828204905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006115e3602683611156565b91506115ee82611587565b604082019050919050565b60006020820190508181036000830152611612816115d6565b9050919050565b7f45524332303a205472616e666572204661696c65640000000000000000000000600082015250565b600061164f601583611156565b915061165a82611619565b602082019050919050565b6000602082019050818103600083015261167e81611642565b905091905056fea2646970667358221220abf8234462499b4ee7fd92df4801a3d84e89601af25ef103b2afc4c976e00e3264736f6c63430008120033"






export const ERC20_URI = "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Approval%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22from%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22to%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Transfer%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22allowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22approve%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22account%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22balanceOf%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22decimals%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint8%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint8%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22subtractedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22decreaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22addedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22increaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22symbol%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transfer%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22sender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferFrom%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D"


export const Swap_URI = "%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22addLiquidity%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22calculateAQT_TokenForA%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22MT_Token_to_recieve%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22calculateMT_TokenForB%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22AQT_Token_to_recieve%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22removeLiquidity%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22reserveA%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22reserveB%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountB%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22swapAQT_TokenForA%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22_amountA%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22swapMT_TokenForB%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D%0A"