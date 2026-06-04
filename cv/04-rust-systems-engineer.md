# Abdulwahed Mansour
**Rust / Systems Engineer**
Stockholm, Sweden · +46 76 930 8145 · abdulwahed.mansour@gmail.com
[github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden) · [linkedin.com/in/abdulwahed-sweden](https://linkedin.com/in/abdulwahed-sweden) · EU work eligibility · Stockholm / hybrid / remote

> Covers: Rust Developer · Rust Engineer · Systems Engineer · Systems Architect · Performance Engineer

---

## Summary
Systems engineer specializing in **Rust** for performance-critical, correctness-critical software. Author of 115K+ lines of production Rust across 18 projects — async services, forensic engines, security tooling, and on-chain bots — with a **zero `unsafe`** policy and the strictest Clippy configuration. I design for the hot path: zero-copy parsing, bounded resource usage, type-safe domain models, and predictable concurrency on Tokio. I also bridge Rust into Python via PyO3 to accelerate existing systems without a rewrite.

## Technical Skills
| Area | Technologies |
|------|--------------|
| Rust | Tokio (async), Axum, Clap, Ratatui (TUI), Rayon (data parallelism), Serde |
| Interop | PyO3 FFI (Rust↔Python), C ABI, static linking, single-binary distribution |
| Performance | zero-copy/zero-alloc hot paths, lock-free patterns, profiling, connection pooling, rate limiting |
| Correctness | type-driven design, property-based testing, strict Clippy, no `unsafe` |
| Domains | network/security tooling, forensic analytics (20K tx/s, 50K addr/s), EVM bots (alloy) |
| Desktop | Tauri 2.0 (Rust backend + web frontend) |
| Adjacent | Python, TypeScript, Solidity, SQL; Docker, GitHub Actions CI |

## Experience
**Independent Systems Engineer** — 2010 – Present · Stockholm
Architect and sole engineer on Rust-heavy systems across security, forensics, and DeFi; 5,700+ automated tests overall.
**Security Researcher (part-time)** — 2022 – Present · Immunefi / Sherlock / Code4rena · Remote

## Selected Projects
**Ferox-Pro — 36-Crate Rust Security Platform** · *Rust 2024 · Tokio · Tauri 2.0 · 782+ tests*
- Enterprise workspace of 36 crates; async security engine with 20+ concurrent operations; Rayon-parallel memory forensics; release profile tuned (`lto`, `codegen-units=1`, `strip`); zero `unsafe`, strictest Clippy.

**BTC Sentinel — High-Throughput Forensic Engine** · *Rust · Tokio · WebSocket · 111 tests*
- Single statically-linked binary, zero runtime deps; **20,000 tx/s** pattern analysis, **50,000 addr/s** clustering (Union-Find + taint); type-safe `Sats(u64)` amounts; <1 ms wire-speed mempool detection; SOCKS5/Tor support.

**HuntLoan — MEV Liquidation Bot (Base mainnet)** · *Rust 2024 · alloy v1 · deployed*
- Built on modern `alloy` (not deprecated ethers-rs); HF velocity prediction (linear regression); 3-tier × 3-regime gas strategy; dual-shot parallel execution; circuit breaker.

**RentQ — Rust Core via PyO3** · *Rust · PyO3 · Django · 177 tests*
- Embedded Rust eligibility engine in a Python service via PyO3: O(1) per entry (~0.5 ms) with parallel sorting — accelerating the hot path without rewriting the platform.

## Education
2010 Linköping University (SE) — SW Engineer equivalency · 2004 Paris 6 (FR) · 1999 Al-Azhar — technical engineering
## Languages
Arabic (native) · English (professional) · Swedish (working) · French (basic)
