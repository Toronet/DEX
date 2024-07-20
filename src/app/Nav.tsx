"use client";
import React, { useState, useEffect } from 'react';
import CreatePool from './createPool';
import AddLiquidity from './addLiquidity';
import HomePage from './swapPage';
import PoolDetails from './poolDetails';
import './Nav.css'; // Import CSS file for styling
import { tokenAddresses, Toronet_Dex_ABI, Toronet_Dex_Address } from './constants';
import { ethers } from 'ethers';
import { contract, fetchPoolDetails, getTokenSymbol } from '@/libs/poolDetails';
import usePoolDetails from '@/hooks/usePoolDetails';

const Navigation = () => {
  const [showSwap, setShowSwap] = useState<boolean>(true); // Show swap page by default
  const [showCreatePool, setShowCreatePool] = useState<boolean>(false);
  const [selectedPool, setSelectedPool] = useState<any>(null); // Update type to match expected type
  const [error, setError] = useState<string | null>(null); // Update type to string | null
  const [showAddLiquidity, setShowAddLiquidity] = useState<boolean>(false);
  const [showPoolDetails, setShowPoolDetails] = useState<boolean>(false);

  const { data: poolDetailsList, isLoading, mutate } = usePoolDetails();
  
  const toggleAddLiquidity = () => {
    setShowAddLiquidity(true);
    setShowSwap(false);
    setShowCreatePool(false);
    setShowPoolDetails(false);
  };

  const toggleSwap = () => {
    setShowSwap(true);
    setShowAddLiquidity(false);
    setShowCreatePool(false);
    setShowPoolDetails(false);
  };

  const toggleCreatePool = () => {
    setShowCreatePool(true);
    setShowSwap(false);
    setShowAddLiquidity(false);
    setShowPoolDetails(false);
  };

  const togglePoolDetails = () => {
    setShowPoolDetails(true);
    setShowSwap(false);
    setShowAddLiquidity(false);
    setShowCreatePool(false);
  };

  const handlePoolSelect = (pool: any) => {
    setSelectedPool(pool);
    setShowSwap(true);
    setShowAddLiquidity(true);
    setShowCreatePool(false);
    setShowPoolDetails(false);
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
        <button
          onClick={togglePoolDetails}
          className={showPoolDetails ? 'activeButton' : 'inactiveButton'}
        >
          Pool Details
        </button>
      </div>
      
      <div className="pageContainer">
        {showSwap && <HomePage selectedPool={selectedPool} />}
        {showAddLiquidity && <AddLiquidity selectedPool={selectedPool} addLiquidityToPool={function (poolIndex: string): void {
          throw new Error('Function not implemented.');
        }} />}
        {showCreatePool && <CreatePool />}
        {showPoolDetails && <PoolDetails onPoolSelect={handlePoolSelect}  />}
      </div>
    </div>
  );
};

function setAddLiquidityFunction(arg0: () => () => any) {
  throw new Error('Function not implemented.');
}

export default Navigation;

//   {showPoolDetails && <PoolDetails onPoolSelect={handlePoolSelect} poolDetailsList={poolDetailsList} />}