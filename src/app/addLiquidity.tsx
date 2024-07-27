/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { tokenAddresses, tokenAPIName, DEX_ADDRESS, Espees_Dex_Address, Espees_URI, Espees_Dex_ABI } from "./constants";
import { ethers } from "ethers";
import { Snackbar, Slide, SnackbarContent, SlideProps } from "@material-ui/core";

type TokenKeys = keyof typeof tokenAddresses;
type APInames = keyof typeof tokenAPIName;

const rpcURL = 'https://testnet.toronet.org/rpc/';
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const erc20Abi = [
  "function balanceOf(address owner) view returns (uint256)"
];

function SlideTransition(props: React.JSX.IntrinsicAttributes & SlideProps) {
  return <Slide {...props} direction="left" />;
}
interface AddLiquidityProps {
  selectedPool: {
    name: string;
    tokenA: string;
    tokenB: string;
    index: number;
    poolAddress: string;
    swapFee: string;
  } | null;
  addLiquidityToPool: (poolIndex: string) => void;
}
const AddLiquidity: React.FC<AddLiquidityProps> = ({ selectedPool }) => {

  useEffect(() => {
   
  }, [selectedPool]);

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const connectToroWallet = async () => {
    const walletAddress = prompt("Enter Wallet Address:");
    const password = prompt("Enter Password:");
    if (!walletAddress || !password) {
      alert("Please enter both Wallet Address and Password.");
      return;
    }
    const messageToSign = "Signature";
    try {
      const response = await fetch('https://testnet.Espees.org/api/keystore/', {
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
      console.log(data.result);

      if (data.result) {
        // Save password and user address to localStorage
        localStorage.setItem('toroWalletPassword', password);
        localStorage.setItem('toroWalletAddress', walletAddress);

        setUserAddress(walletAddress);
        setPassword(password);
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
      alert("Espees Address Or Password is Incorrect. Please try again later.");
    }
  };

  function getApiUrl(apiName1: string) {
    return `https://testnet.Espees.org/api/currency/${apiName1}/cl`;
  }

  async function isPairCreated(token1: string) {
    let apiName1 = tokenAPIName[addLiquidityToken1 as APInames];
    let apiName2 = tokenAPIName[addLiquidityToken2 as APInames];
    const contract = new ethers.Contract(Espees_Dex_Address, Espees_Dex_ABI, provider);
    console.log(token1)
  

    console.log("Done")

    return true;
  }

  async function getBalance(address: string) {
    try {
      let tokenAddress = tokenAddresses[addLiquidityToken1 as TokenKeys];

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

  async function getBalance2(address: string) {
    try {
      let tokenAddress = tokenAddresses[addLiquidityToken2 as TokenKeys];

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
      let argument_addLiquidity = `${token1}|${amount1}`;
      const response = await fetch('https://testnet.Espees.org/api/keystore/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          op: "callContractFunction",
          params: [
            { name: "addr", value: userAddress },
            { name: "pwd", value: userPassword },
            { name: "contractaddress", value: Espees_Dex_Address },
            { name: "functionname", value: "addLiquidityToEspees" },
            { name: "functionarguments", value: argument_addLiquidity },
            { name: "abi", value: Espees_URI },
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
          setSnackbarMessage(`Failed to add ${apiName2}  to the liquidity pool`);
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
      setSnackbarMessage(`Failed to add ${apiName2}  to the liquidity pool`);
      setOpenSnackbar(true);
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
            { name: "to", value: Espees_Dex_Address },
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
          setSnackbarMessage(`Failed to add ${apiName1} and ${tokenAddresses[addLiquidityToken2 as TokenKeys]} to the liquidity pool`);
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
      setSnackbarMessage(`Failed to add ${apiName1} and ${tokenAddresses[addLiquidityToken2 as TokenKeys]} to the liquidity pool`);
      setOpenSnackbar(true);
      return;
    }
  }




  const addLiquidity = async () => {
    // check if pair has been created
    if (selectedPool !== null && selectedPool !== undefined) {
      addAllTokensToLiquidtyPool(selectedPool.index.toString());
    }
    
 else{
  
    let amount1 = addLiquidityAmount1 * 1e18;
    let apiName1 = tokenAPIName[addLiquidityToken1 as APInames];
    let apiName2 = tokenAPIName[addLiquidityToken2 as APInames];
    let token1 = tokenAddresses[addLiquidityToken1 as TokenKeys];
    let token2 = tokenAddresses[addLiquidityToken2 as TokenKeys];

    const iscreated = await isPairCreated(token1);
    console.log(await getBalance(userAddress))
    console.log(await getBalance2(userAddress))
    console.log((addLiquidityAmount1).toString())
    console.log((addLiquidityAmount2).toString())

    if (iscreated ) {
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
              { name: "to", value: Espees_Dex_Address },
              { name: "val", value: (addLiquidityAmount1).toString() },
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
            setSnackbarMessage(`Failed to add ${apiName1} to the liquidity pool`);
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
        setSnackbarMessage(`Error while Adding Liquidity}`);
        setOpenSnackbar(true);
        return;
      }
    } else {
      if (!iscreated) {
        setSnackbarMessage("Pair is not available");
        setOpenSnackbar(true);
      } else {
        setSnackbarMessage("Insufficient funds");
        setOpenSnackbar(true);
      }
    }
  }
}




/**  Pools */
const addLiquidityToPool = async (poolIndex: string) => {
  console.log(poolIndex)
  // check if pair has been created
  let amount1 = addLiquidityAmount1 * 1e18;
  let apiName1 = tokenAPIName[addLiquidityToken1 as APInames];
  let apiName2 = tokenAPIName[addLiquidityToken2 as APInames];
  let token1 = tokenAddresses[addLiquidityToken1 as TokenKeys];
  let token2 = tokenAddresses[addLiquidityToken2 as TokenKeys];

  const iscreated = await isPairCreated(token1);
 
  if (iscreated ) {
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
            { name: "to", value: Espees_Dex_Address },
            { name: "val", value: (addLiquidityAmount1).toString() },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.result === true) {
          console.log("Function call successful");
          setTxnStatus('Success');
          setSnackbarMessage('Transaction successful!');
          setOpenSnackbar(true);
    
        } else {
          console.error("Function call failed");
          setSnackbarMessage(`Failed to add ${apiName1} to the liquidity pool`);
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
      setSnackbarMessage(`Error while Adding Liquidity}`);
      setOpenSnackbar(true);
      return;
    }
  } else {
    if (!iscreated) {
      setSnackbarMessage("Pair is not available");
      setOpenSnackbar(true);
    } else {
      setSnackbarMessage("Insufficient funds");
      setOpenSnackbar(true);
    }
  }
}




async function addSecondToToLiquidityPool(poolIndex: string) {
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
          { name: "to", value: Espees_Dex_Address },
          { name: "val", value: (amount2 / 1e18).toString() },
        ],
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.result === true) {
        console.log("Function call successful");
        setTxnStatus('Success');
      
      } else {
        console.error("Function call failed");
        setSnackbarMessage(`Failed to add ${apiName1} and ${tokenAddresses[addLiquidityToken2 as TokenKeys]} to the liquidity pool`);
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
    setSnackbarMessage(`Failed to add ${apiName1} and ${tokenAddresses[addLiquidityToken2 as TokenKeys]} to the liquidity pool`);
    setOpenSnackbar(true);
    return;
  }
}



async function addAllTokensToLiquidtyPool(poolIndex: string) {
  let amount1 = addLiquidityAmount1 * 1e18;
  let amount2 = addLiquidityAmount2 * 1e18;
  let token1 = tokenAddresses[addLiquidityToken1 as TokenKeys];
  let token2 = tokenAddresses[addLiquidityToken2 as TokenKeys];
  let apiName1 = tokenAPIName[addLiquidityToken2 as APInames];
  let apiName2 = tokenAPIName[addLiquidityToken1 as APInames];

  try {
    let argument_addLiquidity = `${token1}|${amount1}|${poolIndex}`;
    const response = await fetch('https://testnet.Espees.org/api/keystore/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        op: "callContractFunction",
        params: [
          { name: "addr", value: userAddress },
          { name: "pwd", value: userPassword },
          { name: "contractaddress", value: Espees_Dex_Address },
          { name: "functionname", value: "addLiquidity" },
          { name: "functionarguments", value: argument_addLiquidity },
          { name: "abi", value: Espees_URI },
        ],
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status === true) {
        addLiquidityToPool(poolIndex);
        console.log("Function call successful");
       
      } else {
        console.error("Function call failed");
        setSnackbarMessage(`Failed to add ${apiName2} and ${apiName1} to the liquidity pool`);
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
    setSnackbarMessage(`Failed to add ${apiName2} and ${apiName1} to the liquidity pool`);
    setOpenSnackbar(true);
    return;
  }
}


  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={connectToroWallet}
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-2"
        >
          {isConnected ? `Connected: ${shortAddress}` : "Connect To Espees "}
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4">Add Liquidity</h2>
      <div className="mb-4">
        <select
          value={addLiquidityToken1}
          onChange={(e) => setAddLiquidityToken1(e.target.value)}
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
        {/* <select
          value={addLiquidityToken2}
          onChange={(e) => setAddLiquidityToken2(e.target.value)}
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
        </select> */}
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={addLiquidityAmount1}
          onChange={(e) => setAddLiquidityAmount1(parseInt(e.target.value))}
          className="w-full py-2 px-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75"
          placeholder="Enter Amount 1"
        />
      </div>
      {/* <div className="mb-4">
        <input
          type="number"
          value={addLiquidityAmount2}
          onChange={(e) => setAddLiquidityAmount2(parseInt(e.target.value))}
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          placeholder="Enter Amount 2"
        />
      </div> */}
      <button
         onClick={addLiquidity}
       
         className={`w-full py-2 px-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 ${isConnected ? "connected" : ""}`}
      >
        Add Liquidity
      </button>
 

      {selectedPool && (
        <div>
          <p>Selected Pool: {selectedPool.name}</p>
          <p>Token A: {selectedPool.tokenA}</p>
          <p>Token B: {selectedPool.tokenB}</p>
          <button onClick={() => addLiquidityToPool(selectedPool.index.toString())}>
            Add Liquidity
          </button>
        </div>
      )}

      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        TransitionComponent={SlideTransition}
        autoHideDuration={6000}
      >
        <SnackbarContent
          message={snackbarMessage}
          style={{
            backgroundColor: txnStatus === 'Success' ? 'blue' : 'red',
          }}
        />
      </Snackbar>
    </div>
  );
};

export default AddLiquidity;

function async(index: number | undefined) {
  throw new Error("Function not implemented.");
}
