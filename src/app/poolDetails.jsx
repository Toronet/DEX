/* eslint-disable react-hooks/exhaustive-deps */


import React, { useState, useEffect } from 'react';
import { Espees_Dex_Address, Espees_Dex_ABI, tokenAddresses } from './constants';
import { ethers } from 'ethers';
import './PoolDetails.css';
import usePoolDetails from '@/hooks/usePoolDetails';

const PoolDetails = ({ onPoolSelect},{ selectedPool } ) => {

    

    const {
      data: poolDetailsList,
      isLoading,
      mutate,
      error,
    } = usePoolDetails();
    console.log(poolDetailsList);



    if (isLoading) {
        return <div className="pool-details">loading</div>;
    }
    
    return (
      <div className="pool-details">
        <h2>Pool Details</h2>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          poolDetailsList?.poolDetails?.map((poolDetails, index) => (
            <div
              key={index}
              className="pool-item"
              onClick={() => onPoolSelect(poolDetails)}
            >
              <ul>
                <li>
                  <strong>Name:</strong> {poolDetails.name}
                </li>
                <li>
                  <strong>Pool Address:</strong> {poolDetails.poolAddress}
                </li>
                <li>
                  <strong>Token A:</strong> {poolDetails.tokenA}
                </li>
                <li>
                  <strong>Token B:</strong> {poolDetails.tokenB}
                </li>
                <li>
                  <strong>Index:</strong> {poolDetails.index}
                </li>
                <li>
                  <strong>Swap Fee:</strong> {poolDetails.swapFee}
                </li>
                <button
                  className="joinPoolButton"
                  onClick={() => onPoolSelect(pool)}
                >
                  Join Pool
                </button>
              </ul>
            </div>
          ))
        )}
      </div>
    );
};



export default PoolDetails;