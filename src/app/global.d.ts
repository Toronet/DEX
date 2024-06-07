// src/global.d.ts
import { ethers,utils } from '../app/ethers-5.6.esm.min';

declare global {
  
    interface Window {
        ethers: typeof ethers;
    }
}

export {};