
"use client";

import React, { useState, useEffect, useRef } from "react";


import { Toronet_Dex_Address, Toronet_Dex_ABI , Toronet_URI,tokenAddresses, tokenAPIName, DEX_ADDRESS,DEX_PASSWORD} from "./constants";

import { ethers } from "ethers";
import { Snackbar, Slide, SnackbarContent, SlideProps } from "@material-ui/core";

type TokenKeys = keyof typeof tokenAddresses;
type  APInames = keyof typeof tokenAPIName;


function SlideTransition(props: React.JSX.IntrinsicAttributes & SlideProps) {
  return <Slide {...props} direction="left" />;
}

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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
 

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

    setSnackbarMessage(`Please enter both Wallet Address and Password.`);
    setOpenSnackbar(true);
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

      setSnackbarMessage(`Connected successfully!`);
      setTxnStatus('Success');
      setOpenSnackbar(true);
    } else {
     
    setSnackbarMessage(`Connection failed. Please check your Wallet Address and Password..`);
    setOpenSnackbar(true);
    }
  } catch (error) {
    console.error('Error connecting to Toro Wallet:', error);
    setSnackbarMessage(`Connection failed. Please check your Wallet Address and Password..`);
    setOpenSnackbar(true);
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
let apiName2 =  tokenAPIName[swapFromToken as APInames];
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
           
           updateSwapTokenInContract()
      } else {
          console.error("Function call failed");
      

          setSnackbarMessage(`Failed To swap ${apiName1}    with   ${apiName2}`);
      setOpenSnackbar(true);
          
          
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
let apiName2= tokenAPIName[swapToToken as APInames];


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
                  "value": Toronet_Dex_Address
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
          
           updateSwapTokenInContract();
           
      } else {
          console.error("Function call failed");
          
          setSnackbarMessage(`Failed To swap ${apiName1}    with   ${apiName2}`);
          setOpenSnackbar(true);
          
          
      }
  }) }
  catch (error) {
    console.error('Error:', error);
    return;  // Return early to stop further execution
}

  }


  const updateSwapTokenInContract = async () => { // swap tokens on toronet // update information to the smart contract
    
    let amount = ((swapAmount* 1e18));

    let token1 = tokenAddresses[swapFromToken as TokenKeys];
    let token2 = tokenAddresses[swapToToken as TokenKeys];
    let apiName1 =  tokenAPIName[swapFromToken as APInames];
    let apiName2 = tokenAPIName[swapToToken as APInames];
    

    try {

    let argument_Swap=  `${token1}|${token2}|${amount}`
   const response = await fetch('https://testnet.toronet.org/api/keystore/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        op: "callContractFunction",
        params: [
          { name: "addr", value: userAddress },
          { name: "pwd", value: userPassword },
          { name: "contractaddress", value: Toronet_Dex_Address },
          { name: "functionname", value: "swapTokens" },
          { name: "functionarguments", value: argument_Swap },
          { name: "abi", value: Toronet_URI },
        ],
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status === true) {
        console.log("Function call successful");
        setTxnStatus('Success');
        setSnackbarMessage('Transaction successful!');
        setOpenSnackbar(true);
      } else {
        console.error("Function call failed");
        setSnackbarMessage(`Failed to swap ${apiName2} with ${apiName1} `);
        setOpenSnackbar(true);
      }
    } else {
      if (response.status === 204 || response.status === 200) {
        console.log("okay");
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
    setSnackbarMessage(`Successfully swapped  ${apiName2} for ${apiName1} `);
    setOpenSnackbar(true);
    return;
  }
}

  
const handleCloseSnackbar = () => {
  setOpenSnackbar(false);
};


const previewAmount = async () => {
  //calculateSwapAmount // IERC20 fromToken, IERC20 toToken, uint256 amount

  let amount = ((ethers.utils.parseEther(swapAmount.toString())));

    let tokenFrom = tokenAddresses[swapFromToken as TokenKeys];
    let tokenTo = tokenAddresses[swapToToken as TokenKeys];

    try {
  
       const amountPreview= await contract.getAmountOut(tokenFrom,tokenTo,amount)
      console.log( ethers.utils.formatEther( amountPreview[0].toString()) )
      const _amountPreview=ethers.utils.formatEther( amountPreview[0].toString()) 

  
   
      const response_ = `You will recieve ${_amountPreview} ${swapToToken}`
    
      setestimatedTokenShares(response_)
      setSnackbarMessage(response_);
      setTxnStatus("Success")
      setOpenSnackbar(true);
   
    ;
    }
    catch(error){
      setSnackbarMessage("Invalid Pair");
      setOpenSnackbar(true);
      console.log(error)
    }
    
   



  

  
};


  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-10 dark:bg-gray-30 dark:text-white">
      <div className="p-6 shadow-md bg-white dark:bg-gray-700 rounded-md w-full max-w-md">
        <div style={{ marginBottom: '10px' }}>
          <button
            onClick={connectToroWallet}
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
          >
            {isConnected ? `Connected: ${shortAddress}` : "Connect To Toronet "}
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Swap Tokens</h2>
          <div className="flex justify-between mb-2">
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

          <div className="flex justify-between">
            <button
              onClick={swapToken}
              className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
            >
              Swap
            </button>

            <button
              onClick={previewAmount}
              className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
            >
              Preview
            </button>
          </div>

          <p className="text-center mt-2">{estimatedTokenShares}</p>
        </div>

        <Snackbar
          open={openSnackbar}
          onClose={handleCloseSnackbar}
          TransitionComponent={SlideTransition}
          autoHideDuration={6000}
        >
          <SnackbarContent
            message={snackbarMessage}
            style={{
              backgroundColor: txnStatus === 'Success' ? 'green' : 'red',
            }}
          />
        </Snackbar>
      </div>
    </div>
  );

  }



