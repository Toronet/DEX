"use client";

import React, { useState } from 'react';
import AddLiquidity from './addLiquidity'; 
import HomePage from './swapPage';

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
    <div style={styles.container}>
      <h1 style={styles.header}>DeX - Decentralized Exchange</h1>
      <div style={styles.buttonContainer}>
        <button
          onClick={toggleSwap}
          style={showSwap ? styles.activeButton : styles.inactiveButton}
        >
          Swap
        </button>
        <button
          onClick={toggleAddLiquidity}
          style={showAddLiquidity ? styles.activeButton : styles.inactiveButton}
        >
          Add Liquidity
        </button>
      </div>
      <div style={styles.pageContainer}>
        {showSwap && <HomePage />}
        {showAddLiquidity && <AddLiquidity />}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px', // Adjust vertical spacing
  },
  header: {
    fontWeight: 'bold', // Make header text bold
    marginTop: '10px', // Adjust header margin top
    marginBottom:'40px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center', // Center buttons horizontally
    marginBottom: '5px', // Reduce space below button container
  },
  activeButton: {
    padding: '10px 20px',
    background: '#28a745',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px', // Space between buttons
  },
  inactiveButton: {
    padding: '10px 20px',
    background: 'white',
    color: '#28a745',
    textDecoration: 'none',
    borderRadius: '5px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px', // Space between buttons
  },
  pageContainer: {
    width: '100%', // Full width for content
    marginTop: '5px', // Reduce space between buttons and content
  },
};

export default Navigation;
