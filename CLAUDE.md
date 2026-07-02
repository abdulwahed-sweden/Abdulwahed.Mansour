# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal **job-application system** for Abdulwahed Mansour (English, targeting
Stockholm / EU). It is a content repository — Markdown sources plus a small
Node build that renders them to ATS-readable PDFs. There is no application to
run; the "product" is the PDFs in `cv/pdf/`.

> Note: a `CLAUDE.md` exists in the parent `GitHub/` directory describing a
> Django project called "TaskBoard". It is **unrelated** to this repo — ignore it.

## Content model (read this before editing any `.md`)

Everything lives under `cv/`. The single most important rule is the data flow:

- `cv/00-master-profile.md` is the **single source of truth** for all facts,
  projects, skills, and numbers. It is a *reference only* — it is **not** wired
  into the build. Changing a fact here does nothing until you manually
  propagate it into the affected CV / cover-letter files.
- The ~50 job titles collapse into **8 role families**, each a numbered CV
  (`cv/01-…08-….md`) with a matching cover letter (`cv/cover-letters/01-…08-….md`).
  The `01`…`08` numbering is shared across CVs, cover letters, and PDF outputs —
  keep them aligned.
- `cv/toolkit/` holds per-family tailoring aids: `keyword-matrix.md` (ATS
  keywords to mirror), `cover-letter-template.md`, `linkedin-headline.md`.
- `cv/README.md` = job-search strategy, Stockholm hiring ranking, and the full
  title→CV map. `cv/BUILD.md` = build details.

When asked to update a fact (email, phone, years of experience, Swedish level,
etc.), fix it in `00-master-profile.md` **and** every CV/letter that repeats it,
then rebuild. The master profile flags several facts as "⚠️ verify before use"
(notably: two conflicting emails — `abdulwahed.mansour@` vs `abdulwahed.sweden@` —
pick one; phone; Swedish level; "15+ years"). Do not silently pick one; surface
the conflict.

## Build

```bash
cd cv/.build
node build.mjs           # 8 CV .md        -> cv/pdf/*.pdf
node build-letters.mjs   # 8 cover letters -> cv/pdf/cover-letters/*.pdf
```

Edit Markdown, run the matching script, done. There is no lint or test suite.

- Requires **Node.js** and **Google Chrome** at
  `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` (hardcoded as
  `CHROME` in both build scripts).
- If `node_modules` is missing on a fresh clone (it's git-ignored):
  `cd cv/.build && npm install marked@12`.
- Pipeline: Markdown → HTML via `marked` → Chrome headless `--print-to-pdf`.
  Chrome embeds subsetted fonts with `/ToUnicode`, so PDF text stays selectable
  and ATS-parseable (not an image). Do not switch to a rasterizing exporter.

## Editing the build scripts

`build.mjs` (CVs) and `build-letters.mjs` (cover letters) are near-identical and
must be kept in sync when changing shared behavior:

- **Which files render / output names:** the `JOBS` array at the top of each script.
- **Design (navy `#16314f` headings, dark-grey body, Helvetica/Arial/Roboto, A4,
  margins):** the `CSS` template-literal constant in each script. The two scripts
  intentionally use different margins/sizes (letters have wider margins).
- The build relies on the Markdown's structure to style correctly: `# ` name,
  the first `p` right after it as the contact/role block (`h1 + p` rules), `## `
  section headers, tables. Preserve that shape when editing CV Markdown.

## Conventions

- Keep changes truthful to `00-master-profile.md`; never invent employers,
  dates, or metrics.
- All content is English and tuned to the Stockholm/EU market — match that tone.
- Generated artifacts (`cv/.build/html/`, `html-letters/`, `node_modules/`) are
  git-ignored; `cv/pdf/**` is committed. Rebuild and commit PDFs when sources change.
