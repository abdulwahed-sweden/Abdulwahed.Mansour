# Abdulwahed Mansour — CV (English, Stockholm / EU)

One focused CV: **Rust engineer building business systems on `rustio-admin`.**

```
cv/
├── main.md                 ← the CV  →  pdf/Abdulwahed-Mansour-Rust-Engineer.pdf
├── 00-master-profile.md    ← source of truth (all facts / projects / skills)
├── BUILD.md                ← how to rebuild the PDF
├── pdf/                    ← generated PDF
├── toolkit/                ← keyword matrix · cover-letter template · LinkedIn
└── archive/               ← older role-specific CVs + cover letters (hidden, not deleted)
```

## Focus

The pitch is Rust + **RustIO / rustio-admin**: memory-safe business systems a company
runs as a single binary, aimed at the Swedish / EU market. `main.md` features only the
projects that serve that idea (rustio-admin, rustio, SystemKraft, Lursystem, and the demos).

## Build

```bash
cd .build && node build.mjs      # main.md → pdf/Abdulwahed-Mansour-Rust-Engineer.pdf
```

See [BUILD.md](./BUILD.md) for details.

## Archive

The previous multi-CV job-search system (8 role families + cover letters) lives under
[`archive/`](./archive/). To bring one back, move it into `cv/` and add it to the `JOBS`
array in `.build/build.mjs`.

## ⚠️ Verify before sending (see `00-master-profile.md`)

Email, phone, LinkedIn URL, years of experience ("15+" used), Swedish level, education wording.
No monetary figures anywhere — keep it that way.
