import React, { useState, useEffect } from 'react';
import { Toronet_Dex_Address, Toronet_Dex_ABI } from './constants';
import { ethers } from 'ethers';
import './PoolDetails.css'; // Import the CSS file for styling

const PoolDetails = () => {
    const [poolDetailsList, setPoolDetailsList] = useState([]);
    const [error, setError] = useState(null);

    const rpcURL = 'https://testnet.toronet.org/rpc/';
    const provider = new ethers.providers.JsonRpcProvider(rpcURL);
    const contract = new ethers.Contract(Toronet_Dex_Address, Toronet_Dex_ABI, provider);

    useEffect(() => {
        const fetchPoolDetails = async () => {
            try {
                const poolIndex = await contract.poolIndex();
                let poolDetails = [];

                for (let i = 0; i < poolIndex; i++) {
                    const pool = await contract.indexToPool(i);
                    const name = pool.name;
                    const poolAddr = pool.poolAddress;
                    const tokenA = pool.tokenA;
                    const tokenB = pool.tokenB;
                    const index = pool.index;
                    const swapFee =pool.swapFee.toString();

                    poolDetails.push({
                        name,
                        tokenA,
                        tokenB,
                        index: index.toNumber(),
                    
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

    return (
        <div className="pool-details">
            <h2>Pool Details</h2>
            {error ? (
                <p className="error">{error}</p>
            ) : (
                poolDetailsList.map((poolDetails, index) => (
                    <div key={index} className="pool-item">
                        <ul>
                        <li><strong>Name:</strong> {poolDetails.name}</li>
                        <li><strong>Pool Address:</strong> {poolDetails.poolAddress}</li>
                            <li><strong>Token A Address:</strong> {poolDetails.tokenA}</li>
                            <li><strong>Token B Address:</strong> {poolDetails.tokenB}</li>
                            <li><strong>Index:</strong> {poolDetails.index}</li>
                            <li><strong>Swap Fee percentage :</strong> {poolDetails.swapFee}</li>
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
};

export default PoolDetails;