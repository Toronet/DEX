
"use client";

import React, { useState, useEffect, useRef } from "react";


import { Toronet_Dex_Address, Toronet_Dex_ABI , Toronet_URI,tokenAddresses, tokenAPIName, DEX_ADDRESS,DEX_PASSWORD} from "./constants";

import { ethers } from "ethers";

type TokenKeys = keyof typeof tokenAddresses;
type  APInames = keyof typeof tokenAPIName;



export default function HomePage() {
 
  const rpcURL = 'https://testnet.toronet.org/rpc/'
  const provider = new ethers.providers.JsonRpcProvider(rpcURL)

  const contract = new ethers.Contract(Toronet_Dex_Address,Toronet_Dex_ABI,provider)




  const [txnHash, setTxnHash] = useState<string | null>(null);
const [txnStatus, setTxnStatus] = useState<string | null>(null);
  const connectButtonRef = useRef<HTMLButtonElement>(null);
  const [isConnected, setIsConnected] = useState(false);
//  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  const [swapAmount, setSwapAmount] = useState(0);
  
  const [estimatedTokenShares, setestimatedTokenShares] =  useState<string>('');
  const [userAddress, setUserAddress] = useState("");
  let  [userPassword,setPassword] =useState("");
  const [shortAddress, setShortAddress] = useState("");
  const successMessageRef = useRef<HTMLDivElement>(null);
  const errorMessageRef = useRef<HTMLDivElement>(null);
  const [swapFromToken, setSwapFromToken] = useState<string>(""); // Initialize with empty string
  const [swapToToken, setSwapToToken] = useState<string>(""); // Initialize with empty string
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null); // Track selected wallet
 

  useEffect(() => {
    if (txnStatus === 'Success' && successMessageRef.current) {
      successMessageRef.current.style.display = 'block';
      setTimeout(() => {
          if (successMessageRef.current) { // Check if successMessageRef.current is not null
              successMessageRef.current.style.display = 'none'; // Change to 'none' to hide the message
          }
      }, 5000); // Hide the message after 5 seconds
  }
    if (txnStatus === 'Error' && errorMessageRef.current) {
      errorMessageRef.current.style.display = 'block';
      setTimeout(() => {
        if (errorMessageRef.current) { // Check if errorMessageRef.current is not null
            errorMessageRef.current.style.display = 'none'; // Change to 'none' to hide the message
        }
      }, 5000); // Hide the message after 5 seconds
    }
  }, [txnStatus]);





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

  

function getApiUrl( apiName1: string) {
  return `https://testnet.toronet.org/api/currency/${apiName1}/cl`;
}

  const recieveToken = async() =>{

    let amount = ((swapAmount));

let token1 = tokenAddresses[swapFromToken as TokenKeys];
let token2 = tokenAddresses[swapToToken as TokenKeys];
let apiName1 =  tokenAPIName[swapToToken as APInames];
// now let's get the DEx amount
const amountPreview = await contract.getAmountOut(token1,token2,amount)
console.log(amountPreview.toString())
try{

  let txnOne  = await fetch(getApiUrl(apiName1), {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
   
      body: JSON.stringify({
          "op": "transfer",
          "params": [
              {
                  "name": "client",
                  "value": DEX_ADDRESS  // this should be the address pf the user passed in e.g //0x021eae324e90cf49ebb915d14f8cd37d2954f0f4
              },
              {
                  "name": "clientpwd",
                  "value": DEX_PASSWORD // this should be the password 
              },
              {
                  "name": "to",
                  "value": userAddress
              },
              {
                  "name": "val",
                  "value":(amountPreview).toString()
              },
            
            ]
      })
  })
  .then(response => {
    
      if (!response.ok) { 

        if(response.status == 204 || response.status ==200  ){
          console.log("okay")
         // setTxnStatus('Success');
        }
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return response.json();

  })
  .then(data => {
  
      if (data.result === true) {
          console.log("Function call successful");
           setTxnStatus('Success');
           updateSwapTokenInContract()
      } else {
          console.error("Function call failed");
          alert (`Failed To swap ${token1} with ${token2} `)
          
          
      }
  }) }
  catch (error) {
    console.error('Error:', error);
    return;  // Return early to stop further execution
}



  }


  async function getExchangeRates() {
   
    try {
      const op = 'getexchangerates';
      const baseUrl = 'http://testnet.toronet.org/api/query';
      const url = new URL(baseUrl);
      url.searchParams.append('op', op);
  
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Received exchange rates:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}

  const swapToken = async () => {  //  @question check for bbalacnes 

let amount = ((swapAmount+ 0.05 * swapAmount)); // 5% fee


let token1 = tokenAddresses[swapFromToken as TokenKeys];
let token2 = tokenAddresses[swapToToken as TokenKeys];
let apiName1 =  tokenAPIName[swapFromToken as APInames];


try{

  let txnOne  = await fetch(getApiUrl(apiName1), {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
   
      body: JSON.stringify({
          "op": "transfer",
          "params": [
              {
                  "name": "client",
                  "value": userAddress  // this should be the address pf the user passed in e.g //0x021eae324e90cf49ebb915d14f8cd37d2954f0f4
              },
              {
                  "name": "clientpwd",
                  "value": userPassword // this should be the password 
              },
              {
                  "name": "to",
                  "value": DEX_ADDRESS
              },
              {
                  "name": "val",
                  "value":(amount).toString()
              },
            
            ]
      })
  })
  .then(response => {
    
      if (!response.ok) { 

        if(response.status == 204 || response.status ==200  ){
          console.log("okay")
         // setTxnStatus('Success');
        }
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return response.json();

  })
  .then(data => {
  
      if (data.result === true) {
          console.log("Function call successful");
           setTxnStatus('Success');
           updateSwapTokenInContract();
           
      } else {
          console.error("Function call failed");
          alert (`Failed To swap ${token1} with ${token2} `)
          
          
      }
  }) }
  catch (error) {
    console.error('Error:', error);
    return;  // Return early to stop further execution
}

  }


  const updateSwapTokenInContract = async () => { // swap tokens on toronet // update information to the smart contract
    
    let amount = ((swapAmount));

    let token1 = tokenAddresses[swapFromToken as TokenKeys];
    let token2 = tokenAddresses[swapToToken as TokenKeys];
    let apiName1 =  tokenAPIName[swapFromToken as APInames];
    

    {

    let argument_Swap=  `${token1}|${token2}|${amount}`
    fetch('https://testnet.toronet.org/api/keystore/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
   
      body: JSON.stringify({
          "op": "callContractFunction",
          "params": [
              {
                  "name": "addr",
                  "value": userAddress  // this should be the address pf the user passed in 
              },
              {
                  "name": "pwd",
                  "value": userPassword // this should be the password
              },
              {
                  "name": "contractaddress",
                  "value": Toronet_Dex_Address
              },
              {
                  "name": "functionname",
                  "value": "swapTokens"
              },
              {
                  "name": "functionarguments",
                  "value": argument_Swap
              },
              {
                  "name": "abi",
                  "value": Toronet_URI
              }
            ]
      })
  })
  .then(response => {
      if (!response.ok) { 

        if(response.status == 204 || response.status ==200  ){
          console.log("okay")
        
        }
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      // Check the response data for success
      if (data.status === true) {
        setTxnStatus('Success');
          console.log("Function call successful");
       
      } else {
          console.error("Function call failed");
           
          
      }
  
     
    })
  .catch(error => {
      console.error('Error:', error);
  });

  }
  setTxnStatus('Success');
  
}
  

const previewAmount = async () => {
  //calculateSwapAmount // IERC20 fromToken, IERC20 toToken, uint256 amount

  let amount = ((swapAmount));

    let tokenFrom = tokenAddresses[swapFromToken as TokenKeys];
    let tokenTo = tokenAddresses[swapToToken as TokenKeys];

  const amountPreview = await contract.getAmountOut(tokenFrom,tokenTo,amount)
  console.log(amountPreview.toString())

  try {
    const response = await fetch('http://testnet.toronet.org/api/token/toro/cl?op=calculatetxfee&params[0][name]=client&params[0][value]=0xf3cdfc4a1dce2d98ff878971626b798279954c43&params[1][name]=val&params[1][value]=2', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the response data here
    console.log(data);
    console.log(swapToToken)
    const response_ = `You will recieve ${amountPreview.toString()} ${swapToToken}`
    setestimatedTokenShares(response_)
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="p-6 shadow-md bg-white dark:bg-gray-700 rounded-md w-full max-w-md">
      
      
      <div style={{ marginBottom: '20px' }}>
  <button
    onClick={connectToroWallet}
    className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
  >
    {isConnected ? `Connected: ${shortAddress}` : "Connect To Toronet "}
  </button>
</div>


       
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Swap Tokens</h2>
          <div className="flex justify-between">
            <select
              value={swapFromToken}
              onChange={(e) => setSwapFromToken(e.target.value)}
              className="w-full py-2 px-4 bg-green-100 hover:bg-green-200 text-green-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
            >
                 <option value="">Swap From</option>
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
            
            <select
              value={swapToToken}
              onChange={(e) => setSwapToToken(e.target.value)}
              className="w-full py-2 px-4 bg-green-100 hover:bg-green-200 text-green-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
            >
    <option value="">Swap To</option>
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
          <input
            type="number"
            value={swapAmount}
            onChange={(e) => setSwapAmount(parseInt(e.target.value))}
            className="w-full py-2 px-4 bg-green-100 hover:bg-green-200 text-green-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
            placeholder="Enter Amount to Swap"
          />
          <button
            onClick={swapToken}
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
            >
            Swap
          </button>
        </div>

         <button
            onClick={previewAmount}
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
>
            Preview
          </button>
          <p className="text-center mt-2"> {estimatedTokenShares}</p>

      
          {/* Success and Error Messages */}
          <div ref={successMessageRef} className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 rounded-md text-center mb-4" style={{ display: 'none' }}>
        Transaction Successful 🎉🎊!
        </div>
        <div ref={errorMessageRef} className="fixed top-0 left-0 w-full bg-red-500 text-white p-4 rounded-md text-center mb-4" style={{ display: 'none' }}>
          Transacttion Reverted ❌🟥.
        </div>
      </div>
    </div>
  );
}


