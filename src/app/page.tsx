"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ethers } from "./ethers-5.6.esm.min";
import { AQT_TOKEN_ADDRESS, MT_TOKEN_ADDRESS, ERC20_ABI, Swap_Contract_Address, Swap_Contract_ABI } from "./constants";

export default function DexApp() {
  const [txnHash, setTxnHash] = useState<string | null>(null);
const [txnStatus, setTxnStatus] = useState<string | null>(null);
  const connectButtonRef = useRef<HTMLButtonElement>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  const [swapAmount, setSwapAmount] = useState(0);
  const [addLiquidityToken1, setAddLiquidityToken1] = useState("");
  const [addLiquidityToken2, setAddLiquidityToken2] = useState("");
  const [addLiquidityAmount1, setAddLiquidityAmount1] = useState(0);
  const [addLiquidityAmount2, setAddLiquidityAmount2] = useState(0);
  const [estimatedTokenShares, setestimatedTokenShares] = useState(0);
  const [userAddress, setUserAddress] = useState("");
  const [shortAddress, setShortAddress] = useState("");
  const successMessageRef = useRef<HTMLDivElement>(null);
  const errorMessageRef = useRef<HTMLDivElement>(null);
  const [swapFromToken, setSwapFromToken] = useState<string>(""); // Initialize with empty string
  const [swapToToken, setSwapToToken] = useState<string>(""); // Initialize with empty string


  useEffect(() => {
    if (txnStatus === 'Success' && successMessageRef.current) {
      successMessageRef.current.style.display = 'block';
      setTimeout(() => {
        successMessageRef.current.style.display = 'none';
      }, 5000); // Hide the message after 5 seconds
    }
    if (txnStatus === 'Error' && errorMessageRef.current) {
      errorMessageRef.current.style.display = 'block';
      setTimeout(() => {
        errorMessageRef.current.style.display = 'none';
      }, 5000); // Hide the message after 5 seconds
    }
  }, [txnStatus]
);
  
  const connectMetaMask = async () => {
    try {
      // Check if MetaMask is installed and enabled
      if (typeof window.ethereum !== 'undefined') {
        // Request access to the user's Ethereum accounts
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Create a new ethers.js provider using the user's Ethereum provider (MetaMask)
        const provider = new ethers.providers.Web3Provider(window.ethereum);
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
    // ... (existing code)
  };

  const swapTokens = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        throw new Error("MetaMask not found");
      }
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
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
  
  const addLiquidity = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
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


  // const addLiquidity = async () => { // for toronetWallet
  //   console.log(" Started !!!")
  //   //const encodedABI = encodeURIComponent(ERC20_ABI);
  //   // This is approving for MT token
  //   fetch('https://testnet.toronet.org/api/keystore/', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
   
  //     body: JSON.stringify({
  //         "op": "callContractFunction",
  //         "params": [
  //             {
  //                 "name": "addr",
  //                 "value": "0x021eae324e90cf49ebb915d14f8cd37d2954f0f4"
  //             },
  //             {
  //                 "name": "pwd",
  //                 "value": "Salem12345"
  //             },
  //             {
  //                 "name": "contractaddress",
  //                 "value": "0xA51B776d69b7a150aE30C3eaCfBa69d94fED3b5f"
  //             },
  //             {
  //                 "name": "functionname",
  //                 "value": "approve"
  //             },
  //             {
  //                 "name": "functionarguments",
  //                 "value": "0x74d9fCA6264A72B96Eb349afF15eee0Bd32534D4|100000000000000000000"
  //             },
  //             {
  //                 "name": "abi",
  //                 "value": "%20%5B%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22constructor%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Approval%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22previousOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22OwnershipTransferred%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22anonymous%22%3A%20false%2C%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22from%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20true%2C%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22to%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22indexed%22%3A%20false%2C%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22value%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22Transfer%22%2C%0A%09%09%22type%22%3A%20%22event%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22allowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22approve%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22account%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22balanceOf%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22decimals%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint8%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint8%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22subtractedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22decreaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22spender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22addedValue%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22increaseAllowance%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22name%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22owner%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22renounceOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22symbol%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22string%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22string%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%5D%2C%0A%09%09%22name%22%3A%20%22totalSupply%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22view%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transfer%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22sender%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22recipient%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22uint256%22%2C%0A%09%09%09%09%22name%22%3A%20%22amount%22%2C%0A%09%09%09%09%22type%22%3A%20%22uint256%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferFrom%22%2C%0A%09%09%22outputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22bool%22%2C%0A%09%09%09%09%22name%22%3A%20%22%22%2C%0A%09%09%09%09%22type%22%3A%20%22bool%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%2C%0A%09%7B%0A%09%09%22inputs%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22internalType%22%3A%20%22address%22%2C%0A%09%09%09%09%22name%22%3A%20%22newOwner%22%2C%0A%09%09%09%09%22type%22%3A%20%22address%22%0A%09%09%09%7D%0A%09%09%5D%2C%0A%09%09%22name%22%3A%20%22transferOwnership%22%2C%0A%09%09%22outputs%22%3A%20%5B%5D%2C%0A%09%09%22stateMutability%22%3A%20%22nonpayable%22%2C%0A%09%09%22type%22%3A%20%22function%22%0A%09%7D%0A%5D%0A"
  //             }
  //           ]
  //     })
  // })
  // .then(response => {
  //     if (!response.ok) { 

  //       if(response.status == 204 || response.status ==200  ){
  //         console.log("okay")
  //         setTxnStatus('Success');
  //       }
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  // })
  // .then(data => {
  //     // Check the response data for success
  //     if (data.success === true) {
  //         console.log("Function call successful");
  //     } else {
  //         console.error("Function call failed");
  //           setTxnStatus('Success');
          
  //     }
  // })
  // .catch(error => {
  //     console.error('Error:', error);
  // });


  // };


  const previewAmount = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        throw new Error("MetaMask not found");
      }
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        Swap_Contract_Address,
        Swap_Contract_ABI,
        signer
      );
  
      // Choose the appropriate calculation function
      let estimatedShares;
     // if (swapFromToken === "AQT") {
        console.log("Using AQT calculation function");
        estimatedShares = await contract.calculateMT_TokenForB(ethers.utils.parseEther("1".toString()));
        console.log(` Estimated Shared ${estimatedShares}`);
    //  } else if (swapFromToken === "MT") {
        console.log("Using MT calculation function");
       // estimatedShares = await contract.calculateAQT_TokenForA(ethers.utils.parseEther(swapAmount.toString()));
    //  } else {
        throw new Error("Invalid token selected");
     // }
  
     // setEstimatedTokenShares(estimatedShares);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="p-6 shadow-md bg-white dark:bg-gray-700 rounded-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">DeX - Decentralized Exchange</h1>
        <div className="flex justify-between mb-4">
          <button
            onClick={connectMetaMask}
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 mr-2"
          >
            {isConnected ? `Connected: ${shortAddress}` : "Connect MetaMask"}
          </button>
          <button
            onClick={connectToroWallet}
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-2"
          >
            Connect Toro Wallet
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Swap Tokens</h2>
          <div className="flex justify-between">
            <select
              value={swapFromToken}
              onChange={(e) => setSwapFromToken(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black dark:bg-gray-600 dark:text-white"
            >
              <option value="">Select Token</option>
              <option value="token1">AQT</option>
              <option value="token2">MT</option>
            </select>
            
            <select
              value={swapToToken}
              onChange={(e) => setSwapToToken(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black dark:bg-gray-600 dark:text-white"
            >
              <option value="">Select Token</option>
              <option value="token1">AQT</option>
              <option value="token2">MT</option>
            </select>
          </div>
          <input
            type="number"
            value={swapAmount}
            onChange={(e) => setSwapAmount(parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded text-black dark:bg-gray-600 dark:text-white mt-2"
            placeholder="Enter Amount to Swap"
          />
          <button
            onClick={swapTokens}
            className="w-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 mt-2"
          >
            Swap
          </button>
        </div>

         <button
            onClick={previewAmount}
            className="w-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 mt-2"
          >
            Preview
          </button>
          <p className="text-center mt-2">Estimated Token To Recieve: {estimatedTokenShares}</p>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Add Liquidity</h2>
          <div className="flex justify-between">
            <select
              value={addLiquidityToken1}
              onChange={(e) => setAddLiquidityToken1(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black dark:bg-gray-600 dark:text-white"
            >
              <option value="">Select AQT</option>
              <option value="token1">AQT</option>
              <option value="token2">MT</option>
            </select>
            <select
              value={addLiquidityToken2}
              onChange={(e) => setAddLiquidityToken2(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black dark:bg-gray-600 dark:text-white"
            >
              <option value="">Select MT</option>
              <option value="token1">AQT</option>
              <option value="token2">MT</option>
            </select>
          </div>
          <div className="flex justify-between mt-2">
            <input
              type="number"
              value={addLiquidityAmount1}
              onChange={(e) => setAddLiquidityAmount1(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded text-black dark:bg-gray-600 dark:text-white"
              placeholder="Enter Amount 1"
            />
            <input
              type="number"
              value={addLiquidityAmount2}
              onChange={(e) => setAddLiquidityAmount2(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded text-black dark:bg-gray-600 dark:text-white"
              placeholder="Enter Amount 2"
            />
          </div>
         
          <button
            onClick={addLiquidity}
            
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 mt-2"
          >
            Add Liquidity

          </button>
        </div>
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