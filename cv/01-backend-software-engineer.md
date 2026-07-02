# Abdulwahed Mansour
**Backend / Software Engineer — Rust · Python**
Stockholm, Sweden · +46 76 930 8145 · abdulwahed.mansour@gmail.com
[github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden) · [linkedin.com/in/abdulwahed-sweden](https://linkedin.com/in/abdulwahed-sweden) · EU work eligibility · Stockholm / hybrid / remote

> Covers: Backend Engineer · Software Engineer · Rust Backend Developer · API Developer · Python Developer

---

## Summary
Backend engineer with 15+ years building production systems, now **Rust-first**. I authored **RustIO** — a "Django-for-Rust" web + admin framework (typed core, Postgres-first admin, auth/RBAC/audit designed as one system) — and ship real business systems on it as a **single binary, no build step**. I own services end-to-end: data model, API contract, async processing on **Tokio/Axum**, CI/CD, and deployment, designed to survive real load. Deep **Python (Django, FastAPI)** experience complements this, and I bridge the two with **PyO3** to accelerate hot paths without a rewrite. A security-research background means the attack surface is part of the design from day one.

## Technical Skills
| Area | Technologies |
|------|--------------|
| Languages | Rust, Python 3.12, TypeScript/Node.js, SQL, Bash |
| Rust backend | Axum, Tokio, Serde, Rayon; PyO3 FFI (Rust↔Python); authored RustIO (web + admin framework); single-binary deploy, zero `unsafe`, strict Clippy |
| Databases | PostgreSQL 16 (Postgres-first), Redis, Elasticsearch, MySQL — schema design, query optimization, row-level locking, migrations |
| Python backend | Django 5.x, DRF, FastAPI, Celery, SQLAlchemy 2.0, Pydantic, REST API design |
| Cloud / DevOps | Docker, GitHub Actions CI/CD, AWS, GCP, Azure, Terraform, Nginx |
| Testing | Pytest, Hypothesis (property-based), strict Clippy — 5,700+ tests across projects |
| Security | App hardening (HSTS, CSRF, rate limiting), threat modeling, secure design |

## Experience
**Independent Software & Systems Engineer** — 2010 – Present · Stockholm
Architect and sole engineer on 35+ production systems end-to-end; now focused on Rust business systems (RustIO) for the Swedish market.
**Security Researcher (part-time)** — 2022 – Present · Immunefi / Sherlock / Code4rena · Remote
Apply adversarial thinking to architecture — rate limiting, input validation, least-privilege, defence-in-depth.

## Selected Projects
**RustIO — "Django-for-Rust" Web + Admin Framework (author)** · *Rust 1.75+ · Axum · Tokio · PostgreSQL (beta)*
- Framework where plain Rust structs generate a working admin UI, database, auth, and HTTP server. Postgres-first admin ships authentication, sessions, password recovery, 5-tier RBAC, MFA, and a complete audit trail as one designed system; guided CLI turns a one-sentence brief into a reviewed schema + migrations. Single-binary deploy, no build step.

**SystemKraft — Business-Systems Platform (built on RustIO)** · *Rust · rustio-admin · PostgreSQL*
- Public site + a fully-audited `/admin` CRM from **one Rust binary**: 6 FK-wired models, CSRF-protected lead form, dashboard reading live Postgres — one source of truth, complete audit trail.

**RentQ — Multi-Tenant Rental Queue Engine (Rust core via PyO3)** · *Rust · PyO3 · Django 4.2 · PostgreSQL 16 · Elasticsearch · 177 tests*
- Embedded Rust eligibility engine (~0.5 ms/entry, parallel sort) inside a Python service; atomic transactions, row-level locking, 3 ranking algorithms; multi-tenant RBAC with queryset isolation + append-only audit logs; HMAC-signed webhooks; 5 parallel CI jobs.

**JobFlow — Employment Management Platform** · *Django 5.0 · DRF · PostgreSQL · Celery · Redis · Docker*
- 8 apps, 40+ models, 100+ REST endpoints replacing legacy systems; RBAC; Twilio SMS/email; async Celery processing; Docker Compose production stack.

**Django Auth Platform — Production Reference** · *Django 5.2 · DRF 3.16 · PostgreSQL · Docker · CI · 51 tests*
- Server-rendered views + REST API from one codebase; privacy-aware serializers; object-level permissions; production hardening; non-root Gunicorn container; CI (Ruff + tests).

**BookFlow — Appointment Booking API** · *FastAPI · SQLAlchemy 2.0 · JWT · Pydantic 2.5*
- 13-endpoint REST API; booking-conflict detection; 4-state lifecycle; RBAC; auto Swagger/ReDoc docs.

## Education
2010 Linköping University (SE) — SW Engineer equivalency · 2004 Paris 6 (FR) — graduate studies · 1999 Al-Azhar — technical engineering
## Languages
Arabic (native) · English (professional) · Swedish (working) · French (basic)
