# Abdulwahed Mansour
**Security / Application Security Engineer**
Stockholm, Sweden · +46 76 930 8145 · abdulwahed.mansour@gmail.com
[github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden) · [linkedin.com/in/abdulwahed-sweden](https://linkedin.com/in/abdulwahed-sweden) · EU work eligibility · Stockholm / hybrid / remote

> Covers: Security Engineer · Application Security Engineer · Security Researcher · Penetration Tester · Security Analyst · SOC Analyst

---

## Summary
Security engineer who builds the tools as well as breaks the systems. 15+ years of software engineering plus a focused research practice on Immunefi, Sherlock, and Code4rena. I author offensive-security platforms in **Rust** (94K+ LOC, 782+ tests, zero `unsafe`), run blockchain forensic investigations at scale, and audit distributed financial systems. Confirmed **$140K+ in bounties** and discovery of a vulnerability *class* affecting **$98.6M** across three major protocols. Findings ship with reproducible PoCs, not just write-ups — an engineer's discipline behind an attacker's mindset.

## Technical Skills
| Area | Technologies |
|------|--------------|
| Offensive | recon, scanning, exploitation, post-exploitation, C2, payload dev, memory forensics |
| App Security | threat modeling, secure design review, OWASP, HSTS/CSRF/rate limiting, input validation |
| Detection / SOC | YARA, MITRE ATT&CK mapping, log/event analysis, behavioral heuristics, threat-intel correlation |
| Languages | Rust (Tokio, Clap, Ratatui, PyO3), Python, Solidity, Bash |
| Smart contracts | EVM/Solidity & Solana audits — reentrancy, oracle manipulation, flash loans, invariants (Foundry, Echidna) |
| Forensics | transaction tracing, clustering (Union-Find/taint), entity attribution |
| Crypto | AES-256-GCM, HKDF, SHA-2, secure-memory zeroize |
| Hardening | SSH/UFW/fail2ban, least-privilege, secrets management |
| Platforms | Immunefi, Sherlock, Code4rena, HackerOne, Bugcrowd, Intigriti, YesWeHack |

## Security Findings
| Target | Finding | Severity |
|--------|---------|----------|
| Aave V4 | ADS phantom-yield extraction (~$96M) | Critical |
| Morpho Blue | ADS invariant violations, 3 types (~$2M) | Critical |
| Curve crvUSD | ADS fee asymmetry (~$585K) | Critical |
| Moonwell / Mamo | SlippagePriceChecker boundary condition | High |
| ENS | Gas griefing in `SignatureUtils.sol` | Medium |
| Fluid DEX V2 | Liquidation dust debt → uncloseable positions | Low–Med |

*ADS (Asymmetric Deficit Socialization) — one vulnerability class, $98.6M+ TVL, responsibly disclosed.*

## Experience
**Security Researcher** — 2022 – Present · Immunefi / Sherlock / Code4rena · Remote
Discovered/disclosed the ADS class; ran on-chain forensic investigations incl. Lazarus Group attribution; $140K+ confirmed bounties.
**Independent Software & Security Engineer** — 2010 – Present · Stockholm
Sole architect on 35+ production projects, security designed in from day one.

## Flagship Security Projects
**Ferox Framework — Offensive Security Platform** · *Rust · Tauri 2.0 · Tokio · 94K+ LOC · 782+ tests*
- Red-team platform: scanner, recon, exploitation, 33+ post-exploitation modules (persistence/privesc/credential harvesting across Win/Linux/macOS), C2 (HTTP beacon, DNS-over-HTTPS, Graph API tunnel); memory forensics via Volatility3 (PyO3) + YARA + MITRE ATT&CK; 36-crate enterprise edition; zero `unsafe`, strictest Clippy; REST API for CI/CD.

**BTC Sentinel — Forensic Intelligence Platform** · *Rust · Python · ~20K LOC · 111 tests*
- 5 analysis engines in one static binary; **traced the $1.5B Bybit/Lazarus theft (42,479 addresses) in 36 s**; DMM Bitcoin behavioral fingerprinting (10/12 markers); <1 ms mempool threat detection.

**Smart-Contract Audit Portfolio** · *Foundry · Anchor*
- Independent audits / PoCs: Fluid DEX V2, Moonwell, ENS, Folks Finance, Superfluid, LayerZero (Stellar), XRPL — invariant testing, fuzzing, exploit reproduction.

## Education
2010 Linköping University (SE) — SW Engineer equivalency · 2004 Paris 6 (FR) · 1999 Al-Azhar — technical engineering
## Languages
Arabic (native) · English (professional) · Swedish (working) · French (basic)
