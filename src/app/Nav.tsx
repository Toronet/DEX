"use client";

import React, { useState } from 'react';
import AddLiquidity from './addLiquidity'; 
import HomePage from './swapPage';
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
    </div>
  );
};

export default Navigation;
