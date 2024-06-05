"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
//import { ethers } from "./ethers-5.6.esm.min.jsx";
//import { ethers } from "ethers";
import { tEGB,tKSH,tNGN,tZar,tUSD,tEURO,tPOUND,tETH,ESPEES,ASPR, ERC20_ABI, Swap_Contract_Address, Swap_Contract_ABI , ERC20_URI, Swap_URI,tokenAddresses} from "./constants";


export default function DexApp() {
  const [txnHash, setTxnHash] = useState<string | null>(null);
const [txnStatus, setTxnStatus] = useState<string | null>(null);
  const connectButtonRef = useRef<HTMLButtonElement>(null);
  const [isConnected, setIsConnected] = useState(false);
//  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  const [swapAmount, setSwapAmount] = useState(0);
  const [addLiquidityToken1, setAddLiquidityToken1] = useState("");
  const [addLiquidityToken2, setAddLiquidityToken2] = useState("");
  const [addLiquidityAmount1, setAddLiquidityAmount1] = useState(0);
  const [addLiquidityAmount2, setAddLiquidityAmount2] = useState(0);
  const [estimatedTokenShares, setestimatedTokenShares] = useState(0);
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

  



const connectMetaMask = async () => {
  try {
    // Check if MetaMask is installed and enabled
    if (typeof (window as any).ethereum !== 'undefined') {
      // Request access to the user's Ethereum accounts
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

      // Create a new ethers.js provider using the user's Ethereum provider (MetaMask)
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      setProvider(provider);

      const accounts = await provider.listAccounts();
      setUserAddress(accounts[0]);
      setIsConnected(true);
      const shortAddr = `${accounts[0].substring(0, 6)}...${accounts[0].substring(accounts[0].length - 4)}`;
      setShortAddress(shortAddr);


      if (connectButtonRef.current) {
        connectButtonRef.current.innerHTML = ` ${shortAddr}`;
      }
    } else {

      if (connectButtonRef.current) {
        connectButtonRef.current.innerHTML = 'Install MetaMask';
      }
    }
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
  }
};
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
      throw new Error(response.status);
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

  /* const swapTokensMetamask = async () => {
    try {
     
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        Swap_Contract_Address,
        Swap_Contract_ABI,
        signer
      );
  
      // Select the appropriate swap function and token contract based on the selected token
      let swapFunction, tokenContractAddress;
      if (swapFromToken === "AQT") {
        swapFunction = "swapAQT_TokenForA";
        tokenContractAddress = AQT_TOKEN_ADDRESS;
      } else {
        swapFunction = "swapMT_TokenForB";
        tokenContractAddress = MT_TOKEN_ADDRESS;
      }
  
      const tokenContract = new ethers.Contract(tokenContractAddress, ERC20_ABI, signer);
      
      // Check allowance and approve if needed
      const allowance = await tokenContract.allowance(signer.getAddress(), Swap_Contract_Address);
      if (allowance.lt(ethers.utils.parseEther(swapAmount.toString()))) {
        const approveTx = await tokenContract.approve(Swap_Contract_Address, ethers.constants.MaxUint256);
        setTxnHash(approveTx.hash);
        setTxnStatus('Pending');
        await approveTx.wait();
        setTxnStatus('Confirmed');
      }
  
      // Perform the token swap
      const txnResponse = await contract[swapFunction](ethers.utils.parseEther(swapAmount.toString()));
      setTxnHash(txnResponse.hash);
      setTxnStatus('Pending');
      await txnResponse.wait();
      setTxnStatus('Confirmed');
  
      setTxnStatus('Success');
    } catch (error) {
      console.error(error);
      setTxnStatus('Error');
    }
  };
  
  const addLiquidityMetamask = async () => {
    if (typeof (window as any).ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      try {
        const contract = new ethers.Contract(
          Swap_Contract_Address,
          Swap_Contract_ABI,
          signer
        );

        const mtContract = new ethers.Contract(MT_TOKEN_ADDRESS, ERC20_ABI, signer);
        const aqtContract = new ethers.Contract(AQT_TOKEN_ADDRESS, ERC20_ABI, signer);

        // Approve the Swap Contract to spend the tokens
        const aqtApprovalTx = await aqtContract.approve(Swap_Contract_Address, ethers.utils.parseEther(addLiquidityAmount1.toString()));
        setTxnHash(aqtApprovalTx.hash);
        setTxnStatus('Pending');
        await aqtApprovalTx.wait();
        setTxnStatus('Confirmed');

        const mtApprovalTx = await mtContract.approve(Swap_Contract_Address, ethers.utils.parseEther(addLiquidityAmount2.toString()));
        setTxnHash(mtApprovalTx.hash);
        setTxnStatus('Pending');
        await mtApprovalTx.wait();
        setTxnStatus('Confirmed');

        // Add the liquidity
        const txnResponse = await contract.addLiquidity(ethers.utils.parseEther(addLiquidityAmount1.toString()), ethers.utils.parseEther(addLiquidityAmount2.toString()));
        setTxnHash(txnResponse.hash);
        setTxnStatus('Pending');
        await txnResponse.wait();
        setTxnStatus('Confirmed');

        setTxnStatus('Success');
      } catch (error) {
        console.error(error);
        setTxnStatus('Error');
      }
    }
 
      
  };
*/

  const addLiquidity = async () => {  // for toronetWallet
   // for first toke
    
  {
let address = Swap_Contract_Address;
let amount1 = (addLiquidityAmount1 *1e18);

let amount2 =  (addLiquidityAmount2 *1e18);
let token1 = tokenAddresses[addLiquidityToken1]
let token2 = tokenAddresses[addLiquidityToken2]


 let argument = `${address}|${amount1}`;
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
                  "value": userAddress  // this should be the address pf the user passed in e.g //0x021eae324e90cf49ebb915d14f8cd37d2954f0f4
              },
              {
                  "name": "pwd",
                  "value": userPassword // this should be the password e.g//Salem12345
              },
              {
                  "name": "contractaddress",
                  "value": token1
              },
              {
                  "name": "functionname",
                  "value": "approve"
              },
              {
                  "name": "functionarguments",
                  "value": argument
              },
              {
                  "name": "abi",
                  "value": ERC20_URI
              }
            ]
      })
  })
  .then(response => {
      if (!response.ok) { 

        if(response.status == 204 || response.status ==200  ){
          console.log("okay")
          setTxnStatus('Success');
        }
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      // Check the response data for success
      if (data.success === true) {
          console.log("Function call successful");
      } else {
          console.error("Function call failed");
            setTxnStatus('Success');
          
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });



  // Approval for Second token

  argument = `${address}|${amount2}`;
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
                  "value": token2
              },
              {
                  "name": "functionname",
                  "value": "approve"
              },
              {
                  "name": "functionarguments",
                  "value": argument
              },
              {
                  "name": "abi",
                  "value": ERC20_URI
              }
            ]
      })
  })
  .then(response => {
      if (!response.ok) { 

        if(response.status == 204 || response.status ==200  ){
          console.log("okay")
          setTxnStatus('Success');
        }
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      // Check the response data for success
      if (data.success === true) {
          console.log("Function call successful");
      } else {
          console.error("Function call failed");
            setTxnStatus('Success');
          
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });

console.log("Done For 2 tokens")
  // // Now addLiquidity

  let argument_addLiquidity = `${token1}|${amount1}|${token2}|${amount2}`;
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
                  "value": Swap_Contract_Address
              },
              {
                  "name": "functionname",
                  "value": "addLiquidity"
              },
              {
                  "name": "functionarguments",
                  "value": argument_addLiquidity
              },
              {
                  "name": "abi",
                  "value": Swap_URI
              }
            ]
      })
  })
  .then(response => {
      if (!response.ok) { 

        if(response.status == 204 || response.status ==200  ){
          console.log("okay")
          setTxnStatus('Success');
        }
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      // Check the response data for success
      if (data.success === true) {
          console.log("Function call successful");
      } else {
          console.error("Function call failed");
            setTxnStatus('Success');
          
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });

  };
};



  const swapToken = async () => { // swap tokens on toronet
    
    let amount = (((swapAmount.toString()))*1e18);

    console.log(amount)
let token1 = tokenAddresses[swapFromToken]
console.log(token1)
let token2 = tokenAddresses[swapToToken]

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
                  "value": Swap_Contract_Address
              },
              {
                  "name": "functionname",
                  "value": "swap"
              },
              {
                  "name": "functionarguments",
                  "value": argument_Swap
              },
              {
                  "name": "abi",
                  "value": Swap_URI
              }
            ]
      })
  })
  .then(response => {
      if (!response.ok) { 

        if(response.status == 204 || response.status ==200  ){
          console.log("okay")
          setTxnStatus('Success');
        }
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      // Check the response data for success
      if (data.success === true) {
          console.log("Function call successful");
      } else {
          console.error("Function call failed");
            setTxnStatus('Success');
          
      }
  
     
    })
  .catch(error => {
      console.error('Error:', error);
  });

  }
  
}
  

const previewAmount = async () => {
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
    setestimatedTokenShares(data.message)
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="p-6 shadow-md bg-white dark:bg-gray-700 rounded-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">DeX - Decentralized Exchange</h1>
        


        
        
        
        <div className="flex justify-between mb-4">
          {/* <button
            onClick={connectMetaMask}
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 mr-2"
          >
            {isConnected ? `Connected: ${shortAddress}` : "Connect MetaMask"}
          </button> */}
          <button
            onClick={connectToroWallet}
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
         >
           {isConnected ? `Connected: ${shortAddress}` : "Connect To Toronet "}
          </button>
        </div>


            <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Add Liquidity</h2>
          <div className="flex justify-between">
            <select
              value={addLiquidityToken1}
              onChange={(e) => setAddLiquidityToken1(e.target.value)}
              className="w-full py-2 px-4 bg-green-100 hover:bg-green-200 text-green-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
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
            <select
              value={addLiquidityToken2}
              onChange={(e) => setAddLiquidityToken2(e.target.value)}
              className="w-full py-2 px-4 bg-green-100 hover:bg-green-200 text-green-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
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
          <div className="flex justify-between mt-2">
            <input
              type="number"
              value={addLiquidityAmount1}
              onChange={(e) => setAddLiquidityAmount1(parseInt(e.target.value))}
              className="w-full py-2 px-4 bg-green-100 hover:bg-green-200 text-green-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
              placeholder="Enter Amount 1"
            />
            <input
              type="number"
              value={addLiquidityAmount2}
              onChange={(e) => setAddLiquidityAmount2(parseInt(e.target.value))}
              className="w-full py-2 px-4 bg-green-100 hover:bg-green-200 text-green-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
              placeholder="Enter Amount 2"
            />
          </div>
         
          <button
            onClick={addLiquidity}
            
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
>
            Add Liquidity

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