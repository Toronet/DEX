// "use server";

import { tokenAddresses, Toronet_Dex_ABI, Toronet_Dex_Address } from "@/app/constants";
import { ethers } from "ethers";

const rpcURL = "https://testnet.toronet.org/rpc/";
const provider = new ethers.providers.JsonRpcProvider(rpcURL);
// eslint-disable-next-line react-hooks/exhaustive-deps
export const contract = new ethers.Contract(
  Toronet_Dex_Address,
  Toronet_Dex_ABI,
  provider
);

export const getTokenSymbol = (address: string) => {
  for (const [symbol, addr] of Object.entries(tokenAddresses)) {
    if (addr.toLowerCase() === address.toLowerCase()) {
      return symbol;
    }
  }
  return "Unknown";
};

export const fetchPoolDetails = async () => {
  try {
    const poolIndex = await contract.poolIndex();
    const poolDetails: any[] = [];

    for (let i = 0; i < poolIndex.toNumber(); i++) {
      // Ensure toNumber() for poolIndex
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

    return poolDetails
  } catch (error) {
    // setError("Error fetching pool details. Please try again.");
    console.error(error);
  }
};
