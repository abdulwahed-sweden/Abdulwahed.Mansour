# Abdulwahed Mansour — Job-Search System (English, Stockholm / EU)

A complete application system, not just a CV. The ~50 job titles you listed collapse
into **8 role families**. You apply with the matching family CV, tuned in minutes using
the toolkit. One master profile feeds them all.

```
cv/
├── 00-master-profile.md              ← single source of truth (all facts/projects/skills)
├── README.md                         ← you are here (strategy + ranking + title map)
├── 01-backend-software-engineer.md   ← Backend / Software / Python / API Developer
├── 02-platform-devops-sre.md         ← DevOps / SRE / Cloud / Platform Engineer
├── 03-security-appsec-engineer.md    ← Security / AppSec / Pentest / SOC / Analyst
├── 04-rust-systems-engineer.md       ← Rust / Systems / Performance / Systems Architect
├── 05-fullstack-web-developer.md     ← Full Stack / Web Developer / Webmaster / Web Designer
├── 06-blockchain-smartcontract.md    ← Smart Contract Auditor / Blockchain Security
├── 07-it-support-solutions.md        ← IT Support / Consultant / Solutions Eng / TAM  (fast entry)
├── 08-technical-writer-translator.md ← Tech Writer / Docs / Localization / Translator / Instructor
└── toolkit/
    ├── keyword-matrix.md             ← ATS keywords to mirror, per family
    ├── cover-letter-template.md      ← fill-in-the-blanks, Stockholm tone
    └── linkedin-headline.md          ← headline + About per family
```

---

## The strategy: two tracks, run in parallel

You have an unusually high ceiling (Rust + security + DeFi) **and** broad transferable
skills. The smart play is to run two tracks at once:

- **Track A — High ceiling (career roles):** Backend, Platform/DevOps, Security, Rust/Systems, Full Stack, Blockchain. Better pay and fit, *longer* search.
- **Track B — High floor (fast entry):** IT Support / Solutions Engineer / Technical Account Manager, and Technical Writer / Translator / Instructor. *Faster* to land, gives Swedish-market foothold + income while Track A matures. Your Arabic+English+Swedish is a real edge here.

Don't pick one track. Send Track B applications to keep momentum and cash flow; aim Track A at the roles you actually want.

---

## Stockholm hiring-probability ranking (volume × your fit)

| Rank | Family | CV | Volume in Stockholm | Your fit | Track |
|------|--------|----|--------------------|----------|-------|
| 1 | Backend / Software Engineer | `01` | Very high | Excellent | A |
| 2 | Platform / DevOps / Cloud / SRE | `02` | Very high | Strong | A |
| 3 | Full Stack / Web Developer | `05` | High | Strong | A |
| 4 | Security / AppSec Engineer | `03` | Medium | Excellent (differentiator) | A |
| 5 | IT Support / Solutions / TAM | `07` | High | Good — **easiest entry** | B |
| 6 | Rust / Systems Engineer | `04` | Lower | Excellent (few rivals) | A |
| 7 | Technical Writer / Translator / Instructor | `08` | Medium | Good (multilingual edge) | B |
| 8 | Blockchain / Smart Contract Auditor | `06` | Niche (remote) | Excellent | A |
| — | Data Engineer / DBA / QA | use `01` + keyword-matrix | Medium | **Stretch** — only apply if JD matches your DB/test evidence | A |

> **Honesty note:** Data Engineer (Spark/dbt/Airflow) and pure QA are stretches given your
> evidence is PostgreSQL/Elasticsearch/Pytest, not a dedicated data stack. Apply only when the
> JD leans toward backend/data-plumbing, and lead with `01` retitled. Don't burn time on poor-fit roles.

---

## This month: focus 6 (your 3-in + 3-out plan)

| In-field (Track A) | Out-of-field (Track B) |
|--------------------|------------------------|
| Backend / Software Engineer (`01`) | IT Support / Solutions Engineer (`07`) |
| Platform / DevOps / SRE (`02`) | Technical Writer / Translator (`08`) |
| Security / AppSec Engineer (`03`) | Coding Instructor / IT Trainer (`08` variant) |

Target: ~5 applications/week per CV that's "active." Track A is quality-over-quantity; Track B is volume.

---

## Complete title → CV map (every title you listed)

| Your listed title | Use CV |
|-------------------|--------|
| Backend Developer / Backend Engineer / Software Engineer / Python Developer / API Developer | `01` |
| Systems Engineer / Systems Architect | `04` (or `01` if JD is backend-leaning) |
| Rust Developer / Rust Engineer / Performance Engineer | `04` |
| Platform Engineer / DevOps Engineer / SRE / Cloud Engineer | `02` |
| Full Stack Developer / Web Developer / Webmaster / Web Designer | `05` |
| Security Engineer / Application Security Engineer / Security Researcher | `03` |
| Penetration Tester / Security Analyst / SOC Analyst | `03` |
| Smart Contract Auditor / Blockchain Security Engineer | `06` |
| Data Engineer / Database Administrator | `01` + data keywords (stretch) |
| QA Engineer / Test Automation Engineer | `01` + QA keywords |
| IT Technician / IT Support Technician / Technical Support Specialist | `07` |
| IT Consultant / Solutions Engineer / Customer Support Engineer / Technical Account Manager | `07` |
| Technical Writer / Documentation Specialist | `08` |
| Localization Specialist / Arabic–English Translator | `08` |
| Coding Instructor / IT Trainer | `08` |
| IT Project Coordinator / Project Coordinator | `07` (lead with delivery/ownership) |

---

## How to apply to one job (10-minute loop)

1. Open the matching family CV + `toolkit/keyword-matrix.md`.
2. Paste the job description; underline 8–12 nouns/tools it repeats.
3. Make sure those exact words appear in your CV's Skills + summary (only if true).
4. Swap the summary's first sentence to echo the role title and company's domain.
5. Reorder "Selected Projects" so the most relevant 3 sit at the top.
6. Generate the cover letter from `toolkit/cover-letter-template.md`.
7. Export to PDF (`pandoc cv-XX.md -o out.pdf`) and submit. Log it.

## ⚠️ Verify before sending (see `00-master-profile.md`)
Email conflict, phone, LinkedIn URL, years of experience ("15+" used), Swedish level, education wording.
