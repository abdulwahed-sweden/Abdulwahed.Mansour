# Abdulwahed Mansour
**Rust / Systems Engineer**
Stockholm, Sweden · +46 76 930 8145 · abdulwahed.mansour@gmail.com
[github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden) · [linkedin.com/in/abdulwahed-sweden](https://linkedin.com/in/abdulwahed-sweden) · EU work eligibility · Stockholm / hybrid / remote

> Covers: Rust Developer · Rust Engineer · Systems Engineer · Systems Architect · Platform / Backend Engineer (Rust)

---

## Summary
Systems engineer who builds **production Rust that companies can run** — not just libraries, but complete, deployable business systems. I authored **RustIO**, a "Django-for-Rust" web + admin framework (typed core, guided CLI, Postgres-first admin with auth/sessions/RBAC/audit designed as *one* system), and then shipped real products on it for the Swedish market: an enterprise business-systems platform and an EU whistleblower-compliance system, each a **single binary, no build step**. Across 115K+ lines of Rust I hold a **zero `unsafe`** policy and the strictest Clippy config, design for the hot path (zero-copy parsing, bounded resources, Tokio concurrency), and bridge Rust into Python via PyO3 to accelerate existing systems without a rewrite.

## What I build for companies
- **Internal admin & back-office systems** — audit-grade CRUD, RBAC, MFA, and a complete audit trail from one Rust binary; no Node/frontend build pipeline to maintain, no per-seat SaaS bill.
- **Compliance-driven systems for the Swedish/EU market** — e.g. a self-hosted EU Whistleblower Directive (lag 2021:890) reporting channel where data never leaves the employer's own server.
- **Performance rescue** — embed a Rust core into an existing Python/Node service via PyO3/FFI to fix a hot path without a full rewrite.
- **Security, forensic & on-chain tooling** — high-throughput analysis engines and bots as single statically-linked binaries.

## Technical Skills
| Area | Technologies |
|------|--------------|
| Rust | Tokio (async), Axum, Serde, Rayon (data parallelism), Clap, Ratatui (TUI), derive macros |
| Frameworks (authored) | RustIO — web + admin framework: typed core, guided CLI (NL→schema), Postgres-first admin |
| Interop | PyO3 FFI (Rust↔Python), WASM, C ABI, static linking, single-binary distribution |
| Data | PostgreSQL (Postgres-first design), schema/migrations, connection pooling, audit trails |
| Performance | zero-copy/zero-alloc hot paths, lock-free patterns, profiling, rate limiting |
| Correctness | type-driven design, property-based testing, strict Clippy, no `unsafe` |
| Adjacent | Python, TypeScript, Solidity, SQL; Docker, GitHub Actions CI, Hugging Face Spaces |

## Experience
**Independent Systems Engineer** — 2010 – Present · Stockholm
Architect and sole engineer on Rust-heavy systems: authored the RustIO framework and shipped business, security, forensics, and DeFi systems on it; 5,700+ automated tests overall.
**Security Researcher (part-time)** — 2022 – Present · Immunefi / Sherlock / Code4rena · Remote

## Selected Projects
**RustIO — "Django-for-Rust" Web + Admin Framework** · *Rust 1.75+ · Axum · Tokio · PostgreSQL (beta)*
- Plain Rust structs → working admin UI, database, auth, and HTTP server; strict typed core keeps schema changes safe-by-construction. Guided CLI turns a one-sentence brief into a reviewed schema and migrations. Postgres-first admin ships auth, sessions, password recovery, 5-tier RBAC, TOTP MFA (Argon2id backup codes), re-auth walls, and a `correlation_id` audit chain as **one designed system**. Single-binary deploy, no build step, no frontend build.

**SystemKraft — Business-Systems Platform for Swedish Enterprises** · *Rust · rustio-admin · PostgreSQL*
- Marketing site *and* a live demo of the stack it sells, from one binary: public pages + a fully-audited `/admin` CRM (6 FK-wired models), CSRF-protected lead form, dashboard reading live Postgres. Shows the offer — memory-safe core, one source of truth, complete audit trail, single-binary deploy — running in production.

**Lursystem — EU Whistleblower-Compliance System** · *Rust · rustio-admin 0.7 · PostgreSQL (in development)*
- Self-hosted reporting + case-handling for Swedish employers (EU Directive 2019/1937 → lag 2021:890; mandatory at 50+ staff). Report → Case lifecycle → audit overlay, re-auth-gated irreversible identity disclosure; data stays on the employer's own in-country server instead of a third-party SaaS.

**BTC Sentinel — High-Throughput Forensic Engine** · *Rust · Tokio · WebSocket · 111 tests*
- Single statically-linked binary, zero runtime deps; **20,000 tx/s** pattern analysis, **50,000 addr/s** clustering (Union-Find + taint); type-safe `Sats(u64)` amounts; <1 ms wire-speed mempool detection. Traced the $1.5B Bybit/Lazarus theft (42,479 addresses) in 36 s.

**Polaris Chronos — Prayer-Time / Solar-Position Engine** · *Rust 2021 · WASM · 96 tests · live on HF Spaces*
- High-precision solar engine for every location on Earth incl. polar regions; ships a web dashboard + REST API; compiled to WASM and deployed live on Hugging Face Spaces.

**RentQ — Rust Core via PyO3** · *Rust · PyO3 · Django · 177 tests*
- Embedded a Rust eligibility engine into a Python service via PyO3: ~0.5 ms/entry with parallel sorting — accelerating the hot path without rewriting the platform.

## Education
2010 Linköping University (SE) — SW Engineer equivalency · 2004 Paris 6 (FR) · 1999 Al-Azhar — technical engineering
## Languages
Arabic (native) · English (professional) · Swedish (working) · French (basic)
