import { useState, useRef } from "react";
import { tokenAddresses, tokenAPIName, Toronet_Dex_Address, Toronet_Dex_ABI } from "./constants";
import { ethers } from "ethers";
import { Snackbar, Slide, SnackbarContent, SlideProps } from "@material-ui/core";

const rpcURL = 'https://testnet.toronet.org/rpc/';
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const erc20Abi = [
  "function balanceOf(address owner) view returns (uint256)"
];

function SlideTransition(props: React.JSX.IntrinsicAttributes & SlideProps) {
  return <Slide {...props} direction="left" />;
}

const CreatePool = () => {
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setPassword] = useState("");
  const [poolToken1, setPoolToken1] = useState("");
  const [poolToken2, setPoolToken2] = useState("");
  const [initialAmount1, setInitialAmount1] = useState(0);
  const [initialAmount2, setInitialAmount2] = useState(0);
  const [swapFee, setSwapFee] = useState(0);
  const [poolName, setPoolName] = useState("");
  const [feeReceiver, setFeeReceiver] = useState("");
  const [txnStatus, setTxnStatus] = useState<string | null>(null);
  const [shortAddress, setShortAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const connectButtonRef = useRef<HTMLButtonElement>(null);
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
      console.log(data.result);

      if (data.result) {
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
      alert("Toronet Address Or Password is Incorrect. Please try again later.");
    }
  };

  const createPool = async () => {
    let amount1 = initialAmount1 * 1e18;
    let amount2 = initialAmount2 * 1e18;
    let token1 = tokenAddresses[poolToken1 as keyof typeof tokenAddresses];
    let token2 = tokenAddresses[poolToken2 as keyof typeof tokenAddresses];
    let apiName1 = tokenAPIName[poolToken2 as keyof typeof tokenAPIName];
    let apiName2 = tokenAPIName[poolToken1 as keyof typeof tokenAPIName];


    function getApiUrl( apiName1: string) {
      return `https://testnet.toronet.org/api/currency/${apiName1}/cl`;
    }
async function send ( apiName1: string){
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
          { name: "val", value: (amount1).toString() },
        ],
      }),
    });
}
catch{

}
}

    try {


        send(apiName1);
        send(apiName2);
      let argument_createPool = `${token1},${token2},${poolName},${amount1},${amount2},${swapFee},${feeReceiver}`;
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
            { name: "functionname", value: "createPool" },
            { name: "functionarguments", value: argument_createPool },
            { name: "abi", value: Toronet_Dex_ABI },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === true) {
          console.log("Pool creation successful");
          setTxnStatus('Success');
          setSnackbarMessage('Pool created successfully!');
          setOpenSnackbar(true);
        } else {
          console.error("Pool creation failed");
          setSnackbarMessage(`Failed to create pool with ${apiName2} and ${apiName1}`);
          setOpenSnackbar(true);
        }
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setSnackbarMessage(`Failed to create pool with ${apiName2} and ${apiName1}`);
      setOpenSnackbar(true);
      return;
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={connectToroWallet}
          className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-2"
        >
          {isConnected ? `Connected: ${shortAddress}` : "Connect To Toronet"}
        </button>
      </div>
  
      <h2 className="text-xl font-semibold mb-4">Create a New Liquidity Pool</h2>
      
      <div className="mb-4">
        <input
          type="text"
          value={poolName}
          onChange={(e) => setPoolName(e.target.value)}
          placeholder="Enter Pool Name"
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
      </div>
  
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Token A</label>
        <select
          value={poolToken1}
          onChange={(e) => setPoolToken1(e.target.value)}
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
        <label className="block text-sm font-medium text-gray-700 mb-1">Token B</label>
        <select
          value={poolToken2}
          onChange={(e) => setPoolToken2(e.target.value)}
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
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount of Token A</label>
        <input
          type="number"
          value={initialAmount1}
          onChange={(e) => setInitialAmount1(Number(e.target.value))}
          placeholder="Enter Amount"
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
      </div>
  
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount of Token B</label>
        <input
          type="number"
          value={initialAmount2}
          onChange={(e) => setInitialAmount2(Number(e.target.value))}
          placeholder="Enter Amount"
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
      </div>
  
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Swap Fee (%)</label>
        <input
          type="number"
          value={swapFee}
          onChange={(e) => setSwapFee(Number(e.target.value))}
          placeholder="Enter Swap Fee Percentage"
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
      </div>
  
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Fee Receiver Address</label>
        <input
          type="text"
          value={feeReceiver}
          onChange={(e) => setFeeReceiver(e.target.value)}
          placeholder="Enter Fee Receiver Address"
          className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
      </div>
  
      <button
        onClick={createPool}
        className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Create Pool
      </button>
  
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        TransitionComponent={SlideTransition}
        autoHideDuration={3000}
      >
        <SnackbarContent
          message={snackbarMessage}
          style={{ backgroundColor: 'green' }}
        />
      </Snackbar>
    </div>
  );
  
};

export default CreatePool;
