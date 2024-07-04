"use client";

import React, { useState } from 'react';
import createPool from '././createPool
import HomePage from './swapPage';
import PoolDetails from './poolDetails';
import './Nav.css'; // Import CSS file for styling

const Navigation = () => {
  const [showAddLiquidity, setShowAddLiquidity] = useState(false);
  const [showSwap, setShowSwap] = useState(true); // Show swap page by default

  const toggleAddLiquidity = () => {
    setShowAddLiquidity(true);
    setShowSwap(false);
  };

  const toggleSwap = () => {
    setShowSwap(true);
    setShowAddLiquidity(false);
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
      </div>
      <div className="pageContainer">
        {showSwap && <HomePage />}
        {showAddLiquidity && <AddLiquidity />}
      </div>
      
      <PoolDetails/>
    </div>
  );
};

export default Navigation;
