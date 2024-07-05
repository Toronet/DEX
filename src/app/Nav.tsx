"use client";
import React, { useState, useEffect } from 'react';
import CreatePool from './createPool';
import AddLiquidity from './addLiquidity';
import HomePage from './swapPage';
import PoolDetails from './poolDetails';
import './Nav.css'; // Import CSS file for styling
import { tokenAddresses, Toronet_Dex_ABI, Toronet_Dex_Address } from './constants';
import { ethers } from 'ethers';

const Navigation = () => {
 
  const [showSwap, setShowSwap] = useState<boolean>(true); // Show swap page by default
  const [showCreatePool, setShowCreatePool] = useState<boolean>(false);
  const [selectedPool, setSelectedPool] = useState<any>(null); // Update type to match expected type
  const [poolDetailsList, setPoolDetailsList] = useState<any[]>([]); // Initialize with an empty array
  const [error, setError] = useState<string | null>(null); // Update type to string | null
  const [showAddLiquidity, setShowAddLiquidity] = useState<boolean>(false);

  const rpcURL = 'https://testnet.toronet.org/rpc/';
  const provider = new ethers.providers.JsonRpcProvider(rpcURL);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contract = new ethers.Contract(Toronet_Dex_Address, Toronet_Dex_ABI, provider);

  useEffect(() => {
    const fetchPoolDetails = async () => {
      try {
        const poolIndex = await contract.poolIndex();
        const poolDetails: any[] = [];

        for (let i = 0; i < poolIndex.toNumber(); i++) { // Ensure toNumber() for poolIndex
          const pool = await contract.indexToPool(i);
          const name = pool.name;
          const poolAddr = pool.poolAddress;
          const tokenASymbol = getTokenSymbol(pool.tokenA);
          const tokenBSymbol = getTokenSymbol(pool.tokenB);
          const index = pool.index.toNumber(); // Ensure toNumber() for index
          const swapFee = pool.swapFee.toString();

          poolDetails.push({
            name,
            tokenA: tokenASymbol,
            tokenB: tokenBSymbol,
            index,
            poolAddress: poolAddr,
            swapFee,
          });
        }

        setPoolDetailsList(poolDetails);
      } catch (error) {
        setError('Error fetching pool details. Please try again.');
        console.error(error);
      }
    };

    fetchPoolDetails();
  }, [contract]);

  const getTokenSymbol = (address: string) => {
    for (const [symbol, addr] of Object.entries(tokenAddresses)) {
      if (addr.toLowerCase() === address.toLowerCase()) {
        return symbol;
      }
    }
    return 'Unknown';
  };

  const toggleAddLiquidity = () => {
    setShowAddLiquidity(true);
    setShowSwap(false);
    setShowCreatePool(false);
  };

  const toggleSwap = () => {
    setShowSwap(true);
    setShowAddLiquidity(false);
    setShowCreatePool(false);
  };

  const toggleCreatePool = () => {
    setShowCreatePool(true);
    setShowSwap(false);
    setShowAddLiquidity(false);
  };

  const handlePoolSelect = (pool: any) => {
    setSelectedPool(pool);
    setShowSwap(true);
    setShowAddLiquidity(true);
    setShowCreatePool(false);
    setAddLiquidityFunction(() => () => AddLiquidity(pool.index.toString()));
    
  };
  return (
    <div className="container">
      <h1 className="header">Toronet DEX</h1>
      <div className="buttonContainer">
        <button
          onClick={toggleSwap}
          className={showSwap ? 'activeButton' : 'inactiveButton'}
        >
          Swap
        </button>
        <button
          onClick={toggleAddLiquidity}
          className={showAddLiquidity ? 'activeButton' : 'inactiveButton'}
        >
          Add Liquidity
        </button>
        <button
          onClick={toggleCreatePool}
          className={showCreatePool ? 'activeButton' : 'inactiveButton'}
        >
          Create Pool
        </button>
      </div>
      
      <div className="pageContainer">
        {showSwap && <HomePage selectedPool={selectedPool} />}
        {showAddLiquidity && <AddLiquidity selectedPool={selectedPool} addLiquidityToPool={function (poolIndex: string): void {
          throw new Error('Function not implemented.');
        } } />}
        {showCreatePool && <CreatePool />}
      </div>
      
      <PoolDetails 
        onPoolSelect={handlePoolSelect}
      />

<div className="pageContainer">
  {showSwap && <HomePage selectedPool={selectedPool} />}
  {showAddLiquidity && <AddLiquidity selectedPool={selectedPool} addLiquidityToPool={function (poolIndex: string): void {
          throw new Error('Function not implemented.');
        } } />}
  {showCreatePool && <CreatePool />}
</div>
    </div>
  );
};

function setAddLiquidityFunction(arg0: () => () => any) {
  throw new Error('Function not implemented.');
}

export default Navigation;
