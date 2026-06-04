# Abdulwahed Mansour
**Platform / DevOps / SRE Engineer**
Stockholm, Sweden · +46 76 930 8145 · abdulwahed.mansour@gmail.com
[github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden) · [linkedin.com/in/abdulwahed-sweden](https://linkedin.com/in/abdulwahed-sweden) · EU work eligibility · Stockholm / hybrid / remote

> Covers: Platform Engineer · DevOps Engineer · Site Reliability Engineer (SRE) · Cloud Engineer

---

## Summary
Engineer who ships and *operates* what they build. 15+ years across backend development and the infrastructure that runs it — containers, CI/CD, multi-cloud, and production hardening. I've taken systems from local dev to live deployment on AWS/GCP/Azure and Base L2 mainnet, with circuit breakers, process supervision, and alerting wired in. Security-research background means hardening and least-privilege are defaults, not afterthoughts. I optimise for reliability you can reason about: deterministic deploys, observable systems, and graceful degradation.

## Technical Skills
| Area | Technologies |
|------|--------------|
| Containers / Orchestration | Docker, Docker Compose, multi-stage builds, non-root images |
| CI/CD | GitHub Actions (lint + test + deploy), parallel pipelines, automated migrations |
| Cloud | AWS, GCP, Azure (core compute, storage, networking) |
| IaC / Config | Terraform, Nginx, Gunicorn, PM2 process management |
| Reliability | circuit breakers, rate limiting, graceful degradation, exponential-backoff retries, health checks |
| Observability | structured logging, performance tuning, debugging under load |
| Hardening | SSH lockdown, UFW firewall, fail2ban, HSTS, secrets handling, least-privilege |
| Languages | Python, Rust, Bash, SQL — automation & tooling |
| Data infra | PostgreSQL 16, Redis, Elasticsearch — operations, migrations, query tuning |

## Experience
**Independent Backend & Infrastructure Engineer** — 2010 – Present · Stockholm
Built and operated CI/CD pipelines, containerized deployments, and hardened cloud infrastructure for 35+ projects.
**Security Researcher (part-time)** — 2022 – Present · Immunefi / Sherlock / Code4rena · Remote
Server hardening and infrastructure threat modeling as a discipline.

## Selected Projects
**HuntLoan — Production Bot on Base Mainnet** · *Rust · alloy · PM2 · deployed*
- Live 24/7 service with **progressive DRY→SOFT→LIVE deployment**, circuit breaker, Telegram alerting, and PM2 supervision; full server hardening (SSH, UFW, fail2ban). End-to-end ops ownership of a money-handling production system.

**RentQ — CI/CD & Multi-Service Stack** · *Docker Compose · GitHub Actions · PostgreSQL · Redis · Elasticsearch · 177 tests*
- 5 parallel CI jobs; multi-service Docker Compose (DB, cache, search, workers); 5-tier rate limiting; HMAC-signed webhooks with exponential backoff (5 min → 7 days); search layer with automatic fallback (zero downtime).

**Django Auth Platform — Deploy Reference** · *Docker · Gunicorn · GitHub Actions · 51 tests*
- Non-root container, automated startup migrations, reverse-proxy headers, SSL redirect, secure cookies; CI gate (Ruff lint + tests) before deploy.

**JobFlow — Production Platform** · *Docker Compose · Celery · Redis · Gunicorn · WhiteNoise*
- Async worker fleet for bulk operations, scheduling, and webhook delivery; containerized production stack.

**AI / MCP Infrastructure** · *3-container Docker stack*
- Read-only-enforced database access for AI agents at both grant and application layers.

## Education
2010 Linköping University (SE) — SW Engineer equivalency · 2004 Paris 6 (FR) · 1999 Al-Azhar — technical engineering
## Languages
Arabic (native) · English (professional) · Swedish (working) · French (basic)
