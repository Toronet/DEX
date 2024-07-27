# Design of Espees DEX

## Project Overview
The Espees DEX is a decentralized exchange built on the Espees blockchain, tailored specifically for Espees stablecoins. It enables users to add liquidity, swap tokens, and claim gains from providing liquidity.

## Key Features

- **Token Ecosystem:** Exclusively supports Espees stablecoins, facilitating seamless trading and liquidity provisioning within the Espees blockchain ecosystem.

- **Liquidity Management:** Users can add liquidity to existing token pairs. Pair creation, however, is restricted to administrators, ensuring controlled market expansion.

- **Security Measures:** Due to security concerns, the contract avoids `approve` and `transferFrom` functions. Instead, users must initially transfer funds directly to the contract for liquidity and trading activities.

- **Balance Verification:** Prior to any action like liquidity addition or token swapping, the contract verifies user balances to ensure sufficient funds, thereby preventing potential errors.

- **Swap Fee:** Users are subject to a 5% fee during token swaps. This fee is integral to the economic model of the DEX and contributes to sustainability and incentive mechanisms.

- **Immutable Ledger:** The contract acts as an immutable ledger, storing token pair data, liquidity amounts, and user balances securely on the Espees blockchain.

- **Gains Claiming:** Liquidity providers can claim gains based on their stake in the liquidity pool. This feature dynamically calculates gains, considering the liquidity provided and the applicable fee rate.

## References
- [Project Documentation](https://drive.google.com/file/d/1Vgy_ZTnuMnRI6-OOgeYPZSxM56-SKKuW/view?usp=drive_link)
