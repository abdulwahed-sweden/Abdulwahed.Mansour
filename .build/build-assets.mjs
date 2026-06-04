// Generates SEO/social image assets via Chrome headless screenshots.
// Palette follows the HUI design system: Inter, primary #574fec, ink #1c0950.
// Output -> repo/assets/  (og-image.png, icon-192/512.png, apple-touch-icon.png, favicon.svg)
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const ASSETS = join(ROOT, 'assets');
const TMP = join(__dirname, 'atmp');
mkdirSync(ASSETS, { recursive: true });
mkdirSync(TMP, { recursive: true });
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function shot(name, w, h, body, css = '') {
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    *{margin:0;padding:0;box-sizing:border-box}
    html,body{width:${w}px;height:${h}px;overflow:hidden;
      font-family:"Inter","Rubik","Open Sans","Roboto",sans-serif;-webkit-font-smoothing:antialiased}
    ${css}</style></head><body>${body}</body></html>`;
  const htmlPath = join(TMP, name + '.html');
  writeFileSync(htmlPath, html);
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox',
    '--hide-scrollbars', '--force-device-scale-factor=1', `--window-size=${w},${h}`,
    `--screenshot=${join(ASSETS, name + '.png')}`, `file://${htmlPath}`], { stdio: 'pipe' });
  console.log('img:', name + '.png', `${w}x${h}`);
}

// --- OG / social share image (1200x630) ---
shot('og-image', 1200, 630, `
  <div class="card">
    <div class="bar"></div>
    <div class="name">Abdulwahed Mansour</div>
    <div class="role">Software · Security · Systems Engineer</div>
    <div class="loc">Stockholm, Sweden</div>
    <div class="stats">15+ yrs &nbsp;·&nbsp; 208K+ LOC &nbsp;·&nbsp; 5,700+ tests &nbsp;·&nbsp; $140K+ bounties</div>
    <div class="url">abdulwahed-mansour.dev &nbsp;·&nbsp; github.com/abdulwahed-sweden</div>
  </div>`, `
  .card{width:1200px;height:630px;background:
     radial-gradient(1200px 720px at 78% -12%,#6f67ff 0%,#574fec 38%,#3a32b0 70%,#1c0950 100%);
     color:#fff;padding:84px 90px;display:flex;flex-direction:column;justify-content:center}
  .bar{width:78px;height:9px;background:#bdb8ff;border-radius:5px;margin-bottom:34px}
  .name{font-size:88px;font-weight:800;letter-spacing:-1.5px;line-height:1}
  .role{font-size:40px;font-weight:600;color:#dcd9ff;margin-top:20px}
  .loc{font-size:30px;color:#aaa3dd;margin-top:14px}
  .stats{font-size:26px;color:#ece9ff;margin-top:48px;font-weight:500}
  .url{font-size:23px;color:#9b95d6;margin-top:16px}
`);

// --- Square monogram for icons ---
const mono = (s) => ({
  body: `<div class="m">AM</div>`,
  css: `.m{width:${s}px;height:${s}px;background:
        linear-gradient(135deg,#6f67ff,#574fec 55%,#3a32b0);color:#fff;
        display:flex;align-items:center;justify-content:center;
        font-weight:800;letter-spacing:-1px;font-size:${Math.round(s*0.42)}px}`,
});
for (const s of [192, 512, 180]) {
  const m = mono(s);
  shot(s === 180 ? 'apple-touch-icon' : `icon-${s}`, s, s, m.body, m.css);
}

// --- Vector favicon (no Chrome needed) ---
writeFileSync(join(ASSETS, 'favicon.svg'),
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#6f67ff"/><stop offset=".55" stop-color="#574fec"/>
    <stop offset="1" stop-color="#3a32b0"/></linearGradient></defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <text x="50%" y="52%" text-anchor="middle" dominant-baseline="central"
    font-family="Inter,Helvetica,Arial,sans-serif" font-size="29" font-weight="800" fill="#fff">AM</text>
</svg>\n`);
console.log('img: favicon.svg');

rmSync(TMP, { recursive: true, force: true });
console.log('Done ->', ASSETS);
