# Abdulwahed Mansour — abdulwahed-mansour.dev

Personal site for **Abdulwahed Mansour**, Rust software & systems engineer in
Stockholm, Sweden. The landing page is a static portfolio; `cv/` holds the CV
sources and PDFs.

Live (when GitHub Pages is enabled): <https://abdulwahed-mansour.dev/> ·
Svenska: <https://abdulwahed-mansour.dev/sv/>

## What's here

```
index.html            English landing page (SEO-optimized, JSON-LD, OG/Twitter, hreflang)
sv/index.html         Swedish landing page
assets/               og-image.png, favicons, app icons
cv/                   the CV system — sources, 8 CV PDFs, 8 cover-letter PDFs, toolkit
  ├── README.md       strategy: Stockholm ranking, two-track plan, title→CV map
  ├── BUILD.md        how to regenerate the PDFs
  └── pdf/            generated CV + cover-letter PDFs
robots.txt, sitemap.xml, site.webmanifest, CNAME, .nojekyll   site/SEO config
.build/               build scripts (Markdown→PDF, asset generation); node_modules git-ignored
```

## SEO features

- Per-language `<title>`/`description`, `canonical`, and `hreflang` (en, sv, x-default)
- Open Graph + Twitter Card with a generated 1200×630 share image
- JSON-LD structured data: `Person`, `WebSite`, `ProfilePage` (jobTitle, skills,
  languages, education, `sameAs` GitHub/LinkedIn)
- Geo + Dublin Core meta, web app manifest, SVG favicon + app icons
- `sitemap.xml` (pages + CV PDFs) and `robots.txt`

## Deploy (GitHub Pages)

1. Repo **Settings → Pages →** deploy from branch `main`, root `/`.
2. The `CNAME` file already points the site at `abdulwahed-mansour.dev` — add that
   domain in **Pages → Custom domain** and set the DNS records GitHub shows.
3. `.nojekyll` ensures all files (including `cv/` and `assets/`) are served as-is.

## Regenerate

```bash
cd .build
node build.mjs           # 8 CV PDFs            -> cv/pdf/
node build-letters.mjs   # 8 cover-letter PDFs  -> cv/pdf/cover-letters/
node build-assets.mjs    # og-image + icons     -> assets/
```

See [`cv/README.md`](cv/README.md) for job-search strategy and [`cv/BUILD.md`](cv/BUILD.md) for build details.
