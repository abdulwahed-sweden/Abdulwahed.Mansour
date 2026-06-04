# Regenerating the PDFs

How to rebuild the CV and cover-letter PDFs after editing any source file.
*(For job-search strategy and which CV to send where, see [README.md](./README.md).)*

## TL;DR

```bash
cd cv/.build
node build.mjs           # rebuilds the 8 CV PDFs        -> cv/pdf/
node build-letters.mjs   # rebuilds the 8 cover letters  -> cv/pdf/cover-letters/
```

Edit the Markdown, run the matching command, done. PDFs always reflect the `.md` sources.

## What feeds what

| You edit… | Run… | Output |
|-----------|------|--------|
| `cv/00-master-profile.md` | *(nothing auto)* — manually copy changed facts into the CV/letter files, then rebuild | — |
| `cv/01-…08-….md` (CV sources) | `node build.mjs` | `cv/pdf/*.pdf` |
| `cv/cover-letters/01-…08-….md` | `node build-letters.mjs` | `cv/pdf/cover-letters/*.pdf` |

`00-master-profile.md` is the single source of truth, but it is **not** wired in
automatically — it's a reference. Change a fact there, propagate it into the relevant
CV/letter `.md` files, then rebuild.

## How it works

Markdown → styled HTML (via the `marked` parser) → **Chrome headless `--print-to-pdf`**.
Chrome embeds subsetted fonts with `/ToUnicode` maps, so the text stays **selectable and
ATS-readable** (not an image). Design (navy `#16314f` headings, dark-grey body,
Helvetica/Arial/Roboto, A4) is defined in the `CSS` constant inside each build script.

## Requirements

- **Node.js** (uses `cv/.build/node_modules/marked`)
- **Google Chrome** at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`

If `node_modules` is missing (e.g. fresh clone — it's git-ignored):

```bash
cd cv/.build && npm install marked@12
```

## Common tweaks

- **Change the navy / fonts / sizes:** edit the `CSS` template literal in
  `.build/build.mjs` (CVs) and/or `.build/build-letters.mjs` (letters).
- **Add/remove which files get exported, or rename outputs:** edit the `JOBS` array
  at the top of each build script.
- **Different page margins / letter spacing:** the `@page` rule in each script's CSS.

## Layout

```
cv/
├── README.md                  strategy + ranking + title→CV map
├── BUILD.md                   ← this file
├── 00-master-profile.md       single source of truth
├── 01-…08-….md                CV sources (Markdown)
├── cover-letters/01-…08-….md  cover-letter sources (Markdown)
├── toolkit/                   keyword matrix · cover-letter template · LinkedIn
├── pdf/                       generated CV PDFs
│   └── cover-letters/         generated cover-letter PDFs
└── .build/                    build scripts (tracked); node_modules + html artifacts git-ignored
    ├── build.mjs
    ├── build-letters.mjs
    └── .gitignore
```
