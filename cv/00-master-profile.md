# MASTER PROFILE — Abdulwahed Mansour
*Single source of truth. Every targeted CV pulls from this file. Edit a fact here once, then propagate.*

---

## Contact (⚠️ verify before use)
- **Name:** Abdulwahed Mansour
- **Location:** Stockholm, Sweden · EU work eligibility
- **Phone:** +46 76 930 8145
- **Email:** abdulwahed.mansour@gmail.com  *(account email differs: abdulwahed.sweden@gmail.com — pick ONE)*
- **GitHub:** github.com/abdulwahed-sweden
- **LinkedIn:** linkedin.com/in/abdulwahed-sweden
- **Work mode:** Stockholm hybrid · open to remote (EU timezone)

## Languages
Arabic (native) · English (professional) · Swedish (working — verify level) · French (basic, Paris studies)

## Education
| Year | Institution | Qualification |
|------|-------------|---------------|
| 2010 | Linköping University (Sweden) | Software Engineer equivalency certification (formal competency evaluation) |
| 2004 | Université Pierre et Marie Curie (Paris 6), France | Graduate studies |
| 1999 | Al-Azhar University | Technical engineering |

## Headline numbers (verified from portfolio)
- 15+ years building software · independent since 2010
- ~208,000 LOC across 35+ original projects · 5,700+ automated tests
- **Author of RustIO** — a "Django-for-Rust" web + admin framework (typed core, guided CLI, single-binary deploy, no build step) with real business apps built on it for the Swedish market
- Security: $98.6M+ vulnerability *class* (ADS) across Aave V4, Morpho Blue, Curve crvUSD · $140K+ confirmed bounties
- Forensics: traced the $1.5B Bybit/Lazarus theft (42,479 addresses) in 36 seconds
- Deployments: AWS, GCP, Azure, Hugging Face Spaces, Base L2 mainnet

---

## Skills inventory (the raw pool — each CV selects a subset)

**Languages:** Rust, Python 3.12, TypeScript/Node.js, Solidity, SQL, Bash, (Zig basics)
**Backend:** Django 5.x, DRF, FastAPI, Celery, SQLAlchemy 2.0, Pydantic, REST API design, microservices
**Systems:** Rust (Tokio, Axum, Clap, Ratatui, Rayon, Serde), PyO3 FFI, WASM, zero-copy/zero-alloc hot paths, concurrency control, async runtimes, single-binary distribution
**Rust frameworks (authored):** RustIO (web + admin framework, Django-for-Rust) — typed core, derive macros, guided CLI (NL→schema), Postgres-first admin with auth/sessions/RBAC/audit as one system, single-binary deploy, no build step
**Frontend/Web:** React 18, Vue.js, Next.js, Tailwind CSS, Vite, Tauri 2.0, HTML/CSS/SCSS
**Data:** PostgreSQL 16, MySQL, Redis, Elasticsearch, SQLite — schema design, query optimization, row-level locking, migrations, full-text/fuzzy search
**Cloud/DevOps:** Docker, Docker Compose, GitHub Actions CI/CD, AWS, GCP, Azure, Terraform, Gunicorn, Nginx, PM2, server hardening (SSH/UFW/fail2ban), observability/logging
**Security:** threat modeling, secure-by-design review, app hardening (HSTS/CSRF/rate limiting), pen-testing tooling, post-exploitation, C2, memory forensics, smart-contract auditing (Foundry/Echidna/Anchor)
**Crypto/Blockchain:** Solidity 0.8.x, ERC-4626/ERC-20, Foundry, Hardhat, Solana/Anchor, alloy (Rust), MEV/flash-loan systems, mempool monitoring
**AI:** OpenAI, Claude, Mistral/Ollama, MCP protocol, NL-to-SQL, LLM pipelines
**Testing/QA:** Pytest, Hypothesis (property-based), Foundry, CI pipelines, fuzzing
**Soft/Other:** technical writing & documentation, multilingual communication, end-to-end ownership, self-directed delivery

---

## Project library (the raw evidence — each CV picks the most relevant 4–6)

> **Rust flagship — the RustIO ecosystem.** A framework *and* the products built on it.
> This is the strongest "what I can build for a company" story: infrastructure I own,
> proven by shipping real business systems on top of it. GitHub: `abdulwahed-sweden`.

### RustIO — "Django-for-Rust" Web + Admin Framework (beta)
*Rust 1.75+ · Axum · Tokio · PostgreSQL · workspace crates (rustio-core / rustio-cli / rustio-admin / rustio-admin-cli)*
You describe your data as plain Rust structs; RustIO returns a working admin UI, database, auth system, and HTTP server — Django's idea, on a strict typed core so schema changes stay safe-by-construction. Guided CLI setup turns a one-sentence brief into a reviewed schema (NL→schema via Claude, in `rustio-draft`), shows a plain-English blueprint before writing files, then generates migrations. **Single-binary deployment, no build step, no frontend build step.** Companion `rustio-design` compiles a declarative spec to a doctrine-validated `tokens.css` design system.

### rustio-admin — Postgres-First Admin Framework (v0.7)
*Rust · Axum · PostgreSQL · derive macros*
The "Rust answer to Django Admin," but with *authority designed as one system*, not bolted on: authentication, sessions, password recovery, role-based access, and a complete audit trail governed by checked-in contract documents. An admin surface is one derive + one impl + one register call. Security substrate: TOTP MFA + single-use Argon2id-hashed backup codes, re-auth wall on every destructive action, per-request `correlation_id` audit chain, centralised session invalidation, 5-tier role hierarchy, account lockout + auto-throttle. Postgres only, single binary, no build step.

### SystemKraft — Business-Systems Engineering for Swedish Enterprises (rustio-admin app)
*Rust · rustio-admin · PostgreSQL*
Both a marketing site *and* a live demo of the stack it sells: multi-page public site + fully-audited `/admin` CRM from **one Rust binary**. Six FK-wired models (ServiceCategory→Service→CaseStudy, Client→Engagement, Inquiry); CSRF-protected lead form; read-only dashboard with live Postgres figures. Positioned as: memory-safe Rust core, one Postgres source of truth, complete audit trail, single-binary deploy — the exact qualities on offer, running live.

### Lursystem — EU Whistleblower-Compliance System (rustio-admin app, in development)
*Rust · rustio-admin 0.7 · PostgreSQL*
Self-hosted whistleblower-reporting + case-handling for Swedish employers, built for the EU Whistleblower Directive (2019/1937) → Swedish **lag (2021:890)**; every Swedish employer with 50+ staff must run an internal reporting channel. Data stays on the employer's own server, in-country, behind their own audit chain (vs. third-party SaaS). Domain schema: Report (anonymous-capable) → Case (intake→triage→investigating→resolved→archived) → CaseAction audit overlay, Document (retention + virus-scan hook), Disclosure (re-auth-gated, irreversible identity reveal); 4-role hierarchy. *Framework substrate published; domain code on the roadmap.*

### RustIO demo apps — clinicflow · obddesk · shop
*Rust · rustio-admin · PostgreSQL*
Vertical demos proving the framework across domains: **clinicflow** (clinic — Patient/Appointment with FK + real `/admin`), **obddesk** (OBD-II diagnostics operator workstation — DTC catalogue, vehicles, scan sessions, faults), **shop** (store admin — 9 typed Postgres models, custom dashboard, live homepage, re-runnable seed data).

### Polaris Chronos — Universal Prayer-Time Engine (live on HF Spaces)
*Rust 2021 · WASM · REST API · 96 tests · v1.0.0*
High-precision solar-position engine computing prayer times for every location on Earth incl. polar regions (Polaris Protocol, Yallop moon-visibility criterion); ships a full web dashboard + RESTful API; deployed live on Hugging Face Spaces (Docker).

### HuntKey — Intent-Based Sovereign Smart Account
*Rust 1.85 · Solidity 0.8.28 · ERC-4337 account abstraction · 126 tests*
Policy-enforced identity protocol: master key never touches the network; ephemeral session keys handle scoped ops via typed structured-data signing; every tx bound to its exact calldata hash, scoped by selector + value cap, validated through 15 on-chain checks (any failure reverts all). 4-layer defense-in-depth; recoverable identity, no blind signing, no long-lived execution keys.

### Standalone Rust tools & services
- **chthonic** — modular, async-first Rust penetration-testing framework (Metasploit-inspired; memory-safe, session mgmt, exploit + recon modules) — the lineage behind Ferox.
- **swiftline** — minimal fast Rust CLI for HTTP + JSON; cross-platform, rustls TLS, stdin pipelines.
- **rust-cli-toolkit** — modular CLI toolkit: file ops, network utils, task mgmt, interactive shell w/ auto-completion.
- **axum-rust** — production Axum web app: dark/light themes, RTL/LTR i18n, component library, CI/CD.
- **weather_api_rust** — high-performance Axum + Tokio REST API with MCP-protocol integration for Claude Code.
- **deepseek-rust** — async Rust client library for the DeepSeek API: type-safe, automatic retries, builder pattern.
- **rust-scraper-pro** — production-grade Rust web-scraping library: multi-source, processing pipelines, multiple output formats.

### JobFlow — Employment Management Platform
*Django 5.0 · DRF · PostgreSQL · Celery · Redis · Twilio · Docker*
8 apps, 40+ models, 100+ REST endpoints; RBAC (Admin/Coach/Participant); multi-language UI (SV/EN/AR/NO); Twilio SMS/email; async Celery/Redis processing; Docker Compose production stack. *Replaces legacy employment-tracking systems.*

### RentQ — Multi-Tenant Rental Queue Engine
*Django 4.2 · Rust (PyO3 FFI) · PostgreSQL 16 · Elasticsearch · Redis · 177 tests*
Swedish *bostadskö* queue engine; atomic transactions, row-level locking, 3 ranking algorithms; Rust core via PyO3 (~0.5 ms/entry, parallel sort); multi-tenant RBAC with queryset isolation; append-only audit logs; ES fuzzy search w/ PostgreSQL fallback; HMAC-signed webhooks w/ exponential backoff; 5-tier rate limiting; 5 parallel CI jobs.

### Hyra — Rental Queue Management (pure Python)
*Django 4.2 · DRF · PostgreSQL · Elasticsearch · Redis · Celery · 59 tests*
`select_for_update()` atomic processing; 6 priority-ordered eligibility rules (Kronofogden→income→household→BankID→credit→points); reproducible-seed lottery; Redis-cached stats w/ graceful degradation; full Docker Compose stack + CI.

### Django Auth Platform — Production Backend Reference
*Django 5.2 · DRF 3.16 · PostgreSQL · Docker · GitHub Actions · 51 tests*
Dual interface (server-rendered + REST) from one codebase; privacy-aware serializers; object-level permissions; production hardening (HSTS, secure cookies, SSL redirect, CSRF, proxy headers); non-root Gunicorn container; CI (Ruff + tests).

### BookFlow — Appointment Booking API
*FastAPI · SQLAlchemy 2.0 · JWT · Pydantic 2.5*
13-endpoint REST API; booking-conflict detection; 4-state lifecycle; RBAC; auto Swagger/ReDoc docs. (HF Spaces deployment variant: BookFlow-HF.)

### Django Sweden Enterprise Template
*Django · PostgreSQL · BankID · Swish · 46elks SMS · GDPR · ~58 modules*
Production template for the Swedish market: BankID auth, Swish payments, Swedish VAT, GDPR-aware data architecture.

### Ferox Framework — Offensive Security Platform
*Rust 2021/2024 · Tauri 2.0 · React 18 · Tokio · AES-256-GCM · 94K+ LOC · 782+ tests*
Rust-native red-team platform: scanner, recon, exploitation, 33+ post-exploitation modules (persistence/privesc/credential harvesting across Win/Linux/macOS), C2 (HTTP beacon, DNS-over-HTTPS, Graph API tunnel); memory forensics via Volatility3 (PyO3) + YARA + MITRE ATT&CK; 36-crate enterprise edition (Ferox-Pro); zero `unsafe`, strictest Clippy; REST API for CI/CD.

### BTC Sentinel — Multi-Chain Forensic Intelligence Platform
*Rust · Python · Solidity · Tokio · WebSocket · ~20K LOC · 111 tests*
5 analysis engines (pattern, forensic, clustering, ransomware, mempool oracle) in one statically-linked binary; traced $1.5B Bybit/Lazarus theft (682 tx, 42,479 addresses, 33 clusters) in 36 s; DMM Bitcoin behavioral fingerprinting (10/12 markers); <1 ms mempool detection; 4-phase Aave V3 analysis over 33,827 events.

### Amend Protocol — Multi-Chain DeFi Vault Ecosystem
*Solidity 0.8.24 · Rust · Python · TypeScript · Foundry · Anchor · 1,630 tests (incl. 1,000-run fuzz)*
ERC-4626 vaults, lending pools, governance across EVM+Solana; 37 EVM contracts, 15 Rust modules, 90+ Python modules; on-chain invariant guards (FairFeeGuard, EthicsGuard, YieldProof) — "No Fee on Loss" enforced structurally.

### HuntLoan — Aave V3 Flash-Loan Liquidation Bot (Base mainnet, deployed)
*Rust 2024 · alloy v1 · Solidity 0.8.20 · ~4,400 LOC*
Production MEV liquidation bot; HF velocity prediction (linear regression); 3-tier × 3-regime gas strategy; dual-shot parallel execution; circuit breaker; Telegram alerting; progressive DRY→SOFT→LIVE deploy w/ full server hardening; PM2 process management.

### AI Integration — MCP Protocol & LLM Pipelines
3-container MCP PostgreSQL server enabling AI agents to query DBs with read-only enforcement at grant + application layers; NL-to-SQL via schema-aware prompting.

### Smart-Contract Audit Portfolio
*Foundry · Anchor*
Independent audits / PoCs: Fluid DEX V2, Moonwell, Folks Finance, Superfluid, LayerZero (Stellar), XRP Ledger, ENS, Curve, Morpho, Aave.

### CV / Portfolio Web App
*React 18 · TypeScript · Vite · Tailwind CSS*
Self-built multi-CV portfolio site (theming, routing, structured CV data) — demonstrates frontend + product delivery.

---

## Security findings table (reuse verbatim)
| Platform | Target | Finding | Severity |
|----------|--------|---------|----------|
| Research | Aave V4 | ADS phantom-yield extraction (~$96M) | Critical |
| Research | Morpho Blue | ADS invariant violations, 3 types (~$2M) | Critical |
| Research | Curve crvUSD | ADS fee asymmetry (~$585K) | Critical |
| Immunefi | Moonwell / Mamo | SlippagePriceChecker boundary condition | High |
| Immunefi | ENS | Gas griefing in `SignatureUtils.sol` (5,928 gas/sig) | Medium |
| Sherlock | Fluid DEX V2 | Liquidation dust debt → uncloseable positions | Low–Med |
