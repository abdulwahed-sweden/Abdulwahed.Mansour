# Abdulwahed Mansour
**Smart Contract Auditor / Blockchain Security Engineer**
Stockholm, Sweden · +46 76 930 8145 · abdulwahed.mansour@gmail.com
[github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden) · [linkedin.com/in/abdulwahed-sweden](https://linkedin.com/in/abdulwahed-sweden) · EU work eligibility · Remote-first

> Covers: Smart Contract Auditor · Blockchain Security Engineer · DeFi Protocol Engineer

---

## Summary
Blockchain security engineer working the full DeFi stack — protocol design, smart-contract auditing, and on-chain/MEV systems. I shipped a multi-chain ERC-4626 vault protocol with on-chain invariant verification (1,630 tests), discovered a vulnerability *class* across Aave V4, Morpho Blue, and Curve crvUSD (responsibly disclosed), and run a production Aave V3 flash-loan liquidation bot on Base mainnet in modern Rust `alloy`. I write contracts the way an auditor reads them: invariants first, fuzzing always, a reproducible PoC for every claim.

## Technical Skills
| Area | Technologies |
|------|--------------|
| Smart contracts | Solidity 0.8.x, ERC-4626 / ERC-20, Foundry, Hardhat, Echidna fuzzing |
| Solana | Rust, Anchor programs |
| On-chain / MEV | alloy (Rust), flash-loan liquidation, gas strategy, mempool monitoring, Base L2 |
| Vuln classes | reentrancy, oracle manipulation, flash-loan attacks, invariant breaks, precision/rounding, access control |
| Forensics | transaction tracing, clustering, entity attribution |
| Off-chain | Rust (Tokio), Python, TypeScript — indexers, bots, infra |
| Platforms | Immunefi, Sherlock, Code4rena |

## Findings
| Target | Finding | Severity |
|--------|---------|----------|
| Aave V4 | ADS phantom-yield extraction | Critical |
| Morpho Blue | ADS invariant violations, 3 types | Critical |
| Curve crvUSD | ADS fee asymmetry | Critical |
| Moonwell / Mamo | SlippagePriceChecker boundary condition | High |
| ENS | Gas griefing in `SignatureUtils.sol` | Medium |
| Fluid DEX V2 | Liquidation dust debt → uncloseable positions | Low–Med |

## Experience
**DeFi Protocol Engineer & Security Researcher** — 2022 – Present · Immunefi / Sherlock / Code4rena · Remote
Designed/built DeFi protocols and audited live ones across EVM + Solana; discovered the ADS class (responsibly disclosed).
**Independent Software Engineer** — 2010 – Present · Stockholm

## Flagship Projects
**Amend Protocol — Multi-Chain DeFi Vault Ecosystem** · *Solidity 0.8.24 · Rust · Anchor · Foundry · 1,630 tests (incl. 1,000-run fuzz)*
- ERC-4626 vaults, lending pools, governance across EVM + Solana; 37 EVM contracts, 15 Rust modules; on-chain invariant guards (FairFeeGuard, EthicsGuard, YieldProof) enforcing "No Fee on Loss" structurally.

**HuntLoan — Aave V3 Liquidation Bot (Base mainnet, deployed)** · *Rust 2024 · alloy v1 · Solidity 0.8.20*
- Production MEV bot: HF velocity prediction, 3-tier × 3-regime gas strategy, dual-shot parallel execution, circuit breaker, Telegram alerting; progressive DRY→SOFT→LIVE deploy.

**BTC Sentinel — On-Chain Forensics & MEV Research** · *Rust · Python · Solidity · 111 tests*
- 4-phase Aave V3 liquidation analysis (33,827 events); dual-DEX (Uniswap V3 + Aerodrome) atomic liquidation sim; traced the Bybit/Lazarus theft (42,479 addresses) in 36 s.

**Audit Portfolio** · *Foundry · Anchor* — Fluid DEX V2, Moonwell, Folks Finance, Superfluid, LayerZero (Stellar), XRP Ledger, ENS, Curve, Morpho, Aave.

## Education
2010 Linköping University (SE) — SW Engineer equivalency · 2004 Paris 6 (FR) · 1999 Al-Azhar — technical engineering
## Languages
Arabic (native) · English (professional) · Swedish (working) · French (basic)
