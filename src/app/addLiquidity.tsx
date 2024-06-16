"use client";
import React, { useState ,useRef} from "react";
import { tokenAddresses, tokenAPIName, DEX_ADDRESS, Toronet_Dex_Address, Toronet_URI,Toronet_Dex_ABI } from "./constants";

import { ethers } from "ethers";

type TokenKeys = keyof typeof tokenAddresses;
type APInames = keyof typeof tokenAPIName;

const rpcURL = 'https://testnet.toronet.org/rpc/'
  const provider = new ethers.providers.JsonRpcProvider(rpcURL)

  const erc20Abi = [
    "function balanceOf(address owner) view returns (uint256)"
  ];


const AddLiquidity = () => {
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setPassword] = useState("");
  const [addLiquidityToken1, setAddLiquidityToken1] = useState("");
  const [addLiquidityToken2, setAddLiquidityToken2] = useState("");
  const [addLiquidityAmount1, setAddLiquidityAmount1] = useState(0);
  const [addLiquidityAmount2, setAddLiquidityAmount2] = useState(0);
  const [txnStatus, setTxnStatus] = useState<string | null>(null);
  const [shortAddress, setShortAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const connectButtonRef = useRef<HTMLButtonElement>(null);

   
  




  const connectToroWallet = async () => {
    const walletAddress = prompt("Enter Wallet Address:");
  const  password = prompt("Enter Password:");
   if (!walletAddress || !password) {
     alert("Please enter both Wallet Address and Password.");
     return;
   }
   const messageToSign = "Signature";
   try {
     const response = await fetch('https://testnet.toronet.org/api/keystore/', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         "op": "signMessage",
         "params": [
           { "name": "addr", "value": walletAddress },
           { "name": "pwd", "value": password },
           { "name": "message", "value": messageToSign }
         ]
       })
     });
 
     if (!response.ok) {
       throw new Error(response.status.toString());
     }
 
     const data = await response.json();
     console.log(data.result)
 
     if (data.result) {
       // Save password and user address to localStorage
       localStorage.setItem('toroWalletPassword', password);
       localStorage.setItem('toroWalletAddress', walletAddress);
       
       setUserAddress(walletAddress);
       setPassword(password)
       setIsConnected(true);
       const shortAddr = `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`;
       setShortAddress(shortAddr);
       if (connectButtonRef.current) {
         connectButtonRef.current.innerHTML = `Connected: ${shortAddr}`;
       }
       alert("Connected successfully!");
     } else {
       alert("Connection failed. Please check your Wallet Address and Password.");
     }
   } catch (error) {
     console.error('Error connecting to Toro Wallet:', error);
     alert("Toronet Address Or Password is Incorrect. Please try again later.");
   }
 };
 






  function getApiUrl(apiName1: string) {
    return `https://testnet.toronet.org/api/currency/${apiName1}/cl`;
  }


  async function isPairCreated(token1:string, token2:string,) {
    let apiName1 = tokenAPIName[addLiquidityToken1 as APInames];
    let apiName2 = tokenAPIName[addLiquidityToken2 as APInames];
    const contract = new ethers.Contract(Toronet_Dex_Address, Toronet_Dex_ABI, provider);
    const isCreated = await contract.isPairCreated(token1, token2);

    return isCreated;

    
  }


  async function getBalance(address: string) {
    try {
      let tokenAddress= tokenAddresses[addLiquidityToken1 as TokenKeys];

  // Create a new contract instance with the ERC-20 token address and ABI
  const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, provider);

  // Fetch the balance
  const balance = await tokenContract.balanceOf(address);

  // Convert the balance from Wei to Ether (assuming the token has 18 decimals)
  const balanceInEther = ethers.utils.formatUnits(balance, 18);

  
  return balanceInEther;
  
    } catch (error) {
      console.error('Error fetching balance:', error);
      throw error;
    } 
  }
  

  async function addAllTokensToLiquidty() {
    let amount1 = addLiquidityAmount1 * 1e18;
    let amount2 = addLiquidityAmount2 * 1e18;
    let token1 = tokenAddresses[addLiquidityToken1 as TokenKeys];
    let token2 = tokenAddresses[addLiquidityToken2 as TokenKeys];
    let apiName1 = tokenAPIName[addLiquidityToken2 as APInames];
    let apiName2 = tokenAPIName[addLiquidityToken1 as APInames];

    try {



      let argument_addLiquidity = `${token1}|${token2}|${amount1}|${amount2}`;
      const response = await fetch('https://testnet.toronet.org/api/keystore/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          op: "callContractFunction",
          params: [
            { name: "addr", value: userAddress },
            { name: "pwd", value: userPassword },
            { name: "contractaddress", value: Toronet_Dex_Address },
            { name: "functionname", value: "addLiquidity" },
            { name: "functionarguments", value: argument_addLiquidity },
            { name: "abi", value: Toronet_URI },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === true) {
          console.log("Function call successful");
          setTxnStatus('Success');
        } else {
          console.error("Function call failed");
          alert(`Failed to add ${apiName2} and ${apiName1} to the liquidity pool`);
        }
      } else {
        if (response.status === 204 || response.status === 200) {
          console.log("okay");
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      return;
    }
  }

  async function addSecondToToLiquidity() {
    let amount2 = addLiquidityAmount2 * 1e18;
    let apiName1 = tokenAPIName[addLiquidityToken2 as APInames];

    try {
      const response = await fetch(getApiUrl(apiName1), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          op: "transfer",
          params: [
            { name: "client", value: userAddress },
            { name: "clientpwd", value: userPassword },
            { name: "to", value: Toronet_Dex_Address },
            { name: "val", value: (amount2 / 1e18).toString() },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.result === true) {
          console.log("Function call successful");
          setTxnStatus('Success');
          addAllTokensToLiquidty();
        } else {
          console.error("Function call failed");
          alert(`Failed to add ${apiName1} and ${tokenAddresses[addLiquidityToken2 as TokenKeys]} to the liquidity pool`);
        }
      } else {
        if (response.status === 204 || response.status === 200) {
          console.log("okay");
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      return;
    }
  }



  


  const addLiquidity = async () => {  // check if pair as been created
    let amount1 = addLiquidityAmount1 * 1e18;
    let apiName1 = tokenAPIName[addLiquidityToken1 as APInames];
    let apiName2 = tokenAPIName[addLiquidityToken2 as APInames];
    let token1 = tokenAddresses[addLiquidityToken1 as TokenKeys];
    let token2 = tokenAddresses[addLiquidityToken2 as TokenKeys];

    const iscreated =await isPairCreated(token1,token2);
    

    if ( iscreated && (await getBalance(userAddress)).toString() >=   (addLiquidityAmount1).toString() && (await getBalance(userAddress)).toString() >=   (addLiquidityAmount2).toString() )

      {
    try {  
     
    
      const response = await fetch(getApiUrl(apiName1), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          op: "transfer",
          params: [
            { name: "client", value: userAddress },
            { name: "clientpwd", value: userPassword },
            { name: "to", value: Toronet_Dex_Address },
            { name: "val", value: (amount1 / 1e18).toString() },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.result === true) {
          console.log("Function call successful");
          setTxnStatus('Success');
          addSecondToToLiquidity();
        } else {
          console.error("Function call failed");
          alert(`Failed to add ${apiName1} to the liquidity pool`);
        }
      } else {
        if (response.status === 204 || response.status === 200) {
          console.log("okay");
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
   // }
  } catch (error) {
      console.error('Error:', error);
      return;
    }
  
  } else{
    if(!iscreated){
      alert(" Insufficient Funds")
    }
    else{
      alert(" Pair Is Not Available")
    }
  }
}

  return (
 

    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">

<div style={{ marginBottom: '20px' }}>
  <button
    onClick={connectToroWallet}
    className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
  >
    {isConnected ? `Connected: ${shortAddress}` : "Connect To Toronet "}
  </button>
</div>

      <h2 className="text-xl font-semibold mb-4">Add Liquidity</h2>
      <div className="mb-4">
        <select
          value={addLiquidityToken1}
          onChange={(e) => setAddLiquidityToken1(e.target.value)}
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        >
          <option value="">Select Token</option>
          <option value="tEGB">tEGB</option>
          <option value="tKSH">τKSH</option>
          <option value="tNGN">τNGN</option>
          <option value="tZAR">τZAR</option>
          <option value="tUSD">τUSD</option>
          <option value="tEURO">τEURO</option>
          <option value="tPOUND">τPOUND</option>
          <option value="tETH">τETH</option>
          <option value="ESPEES">ESPEES</option>
          <option value="ASPR">ASPR</option>
        </select>
      </div>
      <div className="mb-4">
        <select
          value={addLiquidityToken2}
          onChange={(e) => setAddLiquidityToken2(e.target.value)}
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        >
          <option value="">Select Token</option>
          <option value="tEGB">tEGB</option>
          <option value="tKSH">τKSH</option>
          <option value="tNGN">τNGN</option>
          <option value="tZAR">τZAR</option>
          <option value="tUSD">τUSD</option>
          <option value="tEURO">τEURO</option>
          <option value="tPOUND">τPOUND</option>
          <option value="tETH">τETH</option>
          <option value="ESPEES">ESPEES</option>
          <option value="ASPR">ASPR</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={addLiquidityAmount1}
          onChange={(e) => setAddLiquidityAmount1(parseInt(e.target.value))}
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          placeholder="Enter Amount 1"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={addLiquidityAmount2}
          onChange={(e) => setAddLiquidityAmount2(parseInt(e.target.value))}
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:
outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          placeholder="Enter Amount 2"
        />
      </div>
      <button
        onClick={addLiquidity}
        className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Add Liquidity
      </button>
      {txnStatus && (
        <p className="mt-4 text-sm text-center text-gray-700">
          Transaction Status: {txnStatus}
        </p>
      )}
    </div>
  );
};

export default AddLiquidity;







