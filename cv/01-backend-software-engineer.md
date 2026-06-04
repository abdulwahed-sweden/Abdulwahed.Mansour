# Abdulwahed Mansour
**Backend / Software Engineer — Python · Rust**
Stockholm, Sweden · +46 76 930 8145 · abdulwahed.mansour@gmail.com
[github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden) · [linkedin.com/in/abdulwahed-sweden](https://linkedin.com/in/abdulwahed-sweden) · EU work eligibility · Stockholm / hybrid / remote

> Covers: Backend Developer · Backend Engineer · Software Engineer · Python Developer · API Developer · (Data Engineer / QA — with keyword swaps)

---

## Summary
Senior backend engineer with 15+ years building production systems in **Python (Django, FastAPI)** and **Rust**. I own services end-to-end — data model, API contract, async processing, Docker, CI/CD, deployment — and I design them to survive real load: concurrency, fairness, and reliability. A security-research background means the attack surface is part of the design from day one. I prefer simple, deterministic systems that can be explained, tested, and trusted.

## Technical Skills
| Area | Technologies |
|------|--------------|
| Languages | Python 3.12, Rust, TypeScript/Node.js, SQL, Bash |
| Backend | Django 5.x, DRF, FastAPI, Celery, SQLAlchemy 2.0, Pydantic, REST API design |
| Databases | PostgreSQL 16, MySQL, Redis, Elasticsearch — schema design, query optimization, row-level locking, migrations |
| Cloud / DevOps | Docker, GitHub Actions CI/CD, AWS, GCP, Azure, Terraform, Gunicorn, Nginx |
| Performance | Rust (Tokio, Axum), PyO3 FFI for hot paths, caching, profiling |
| Testing | Pytest, Hypothesis (property-based) — 5,700+ tests across projects |
| Security | App hardening (HSTS, CSRF, rate limiting), threat modeling, secure design |
| AI | OpenAI, Claude, MCP protocol, NL-to-SQL pipelines |

## Experience
**Independent Backend & Infrastructure Engineer** — 2010 – Present · Stockholm
Designed and delivered 35+ production systems end-to-end across backend, data, and cloud.
**Security Researcher (part-time)** — 2022 – Present · Immunefi / Sherlock / Code4rena · Remote
Apply adversarial thinking to architecture — rate limiting, input validation, least-privilege, defence-in-depth.

## Selected Projects
**JobFlow — Employment Management Platform** · *Django 5.0 · DRF · PostgreSQL · Celery · Redis · Docker*
- 8 apps, 40+ models, 100+ REST endpoints replacing legacy systems; RBAC; multi-language UI; Twilio SMS/email; async Celery processing; Docker Compose production stack.

**RentQ — Multi-Tenant Rental Queue Engine** · *Django 4.2 · Rust (PyO3) · PostgreSQL 16 · Elasticsearch · 177 tests*
- Atomic transactions, row-level locking, 3 ranking algorithms; Rust core via PyO3 (~0.5 ms/entry); multi-tenant RBAC with queryset isolation + append-only audit logs; ES fuzzy search with PostgreSQL fallback; HMAC-signed webhooks; 5 parallel CI jobs.

**Hyra — Rental Queue Management** · *Django 4.2 · DRF · PostgreSQL · Elasticsearch · Celery · 59 tests*
- `select_for_update()` atomic processing; 6 priority-ordered eligibility rules; reproducible-seed lottery; Redis-cached stats with graceful degradation.

**Django Auth Platform — Production Reference** · *Django 5.2 · DRF 3.16 · PostgreSQL · Docker · CI · 51 tests*
- Server-rendered views + REST API from one codebase; privacy-aware serializers; object-level permissions; production hardening; non-root Gunicorn container; CI (Ruff + tests).

**BookFlow — Appointment Booking API** · *FastAPI · SQLAlchemy 2.0 · JWT · Pydantic 2.5*
- 13-endpoint REST API; booking-conflict detection; 4-state lifecycle; RBAC; auto Swagger/ReDoc docs.

## Education
2010 Linköping University (SE) — SW Engineer equivalency · 2004 Paris 6 (FR) — graduate studies · 1999 Al-Azhar — technical engineering
## Languages
Arabic (native) · English (professional) · Swedish (working) · French (basic)
