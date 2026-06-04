import { marked } from 'marked';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CV_DIR = resolve(__dirname, '..');           // cv/
const HTML_DIR = join(__dirname, 'html');
const PDF_DIR = join(CV_DIR, 'pdf');
mkdirSync(HTML_DIR, { recursive: true });
mkdirSync(PDF_DIR, { recursive: true });

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// 6 priority CVs -> output filename
const JOBS = [
  ['01-backend-software-engineer.md',   'Abdulwahed-Mansour-Backend-Software-Engineer.pdf'],
  ['02-platform-devops-sre.md',         'Abdulwahed-Mansour-Platform-DevOps-SRE.pdf'],
  ['03-security-appsec-engineer.md',    'Abdulwahed-Mansour-Security-AppSec-Engineer.pdf'],
  ['05-fullstack-web-developer.md',     'Abdulwahed-Mansour-Full-Stack-Web-Developer.pdf'],
  ['04-rust-systems-engineer.md',       'Abdulwahed-Mansour-Rust-Systems-Engineer.pdf'],
  ['06-blockchain-smartcontract.md',    'Abdulwahed-Mansour-Blockchain-Smart-Contract.pdf'],
  ['07-it-support-solutions.md',        'Abdulwahed-Mansour-IT-Support-Solutions.pdf'],
  ['08-technical-writer-translator.md', 'Abdulwahed-Mansour-Technical-Writer-Translator.pdf'],
];

marked.setOptions({ gfm: true, breaks: true });

const CSS = `
@page { size: A4; margin: 13mm 15mm 14mm 15mm; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body {
  font-family: "Helvetica Neue", Helvetica, Arial, "Roboto", sans-serif;
  color: #2b2b2b; font-size: 10.3pt; line-height: 1.42; margin: 0;
}
h1 { color:#16314f; font-size:21pt; font-weight:700; letter-spacing:.3px; margin:0 0 2px; }
/* contact / role block immediately after the name */
h1 + p { margin:0 0 6px; font-size:9.5pt; color:#4a4a4a; line-height:1.5; }
h1 + p strong { display:block; font-size:12.5pt; color:#16314f; letter-spacing:.2px; margin-bottom:2px; }
h1 + p a { color:#16314f; text-decoration:none; }
h2 {
  color:#16314f; font-size:11.5pt; font-weight:700; text-transform:uppercase;
  letter-spacing:.8px; border-bottom:1.4px solid #16314f; padding-bottom:3px;
  margin:15px 0 8px; break-after:avoid;
}
h3 { color:#16314f; font-size:10.6pt; margin:10px 0 3px; break-after:avoid; }
p { margin:4px 0; }
strong { color:#1c1c1c; }
em { color:#555; font-style:italic; }
blockquote {
  margin:4px 0 8px; padding:4px 10px; border-left:3px solid #c7d2dd;
  color:#5a6470; font-size:9pt; font-style:italic;
}
hr { border:none; border-top:1px solid #e4e4e4; margin:8px 0; }
ul { margin:4px 0 8px; padding-left:18px; }
li { margin:2px 0; break-inside:avoid; }
table { width:100%; border-collapse:collapse; margin:4px 0 8px; font-size:9.6pt; break-inside:avoid; }
th {
  text-align:left; color:#16314f; font-weight:700; border-bottom:1.2px solid #16314f;
  padding:4px 8px 4px 0; font-size:9.2pt; text-transform:uppercase; letter-spacing:.4px;
}
td { padding:3px 8px 3px 0; vertical-align:top; border-bottom:1px solid #ededed; }
td:first-child { font-weight:600; color:#16314f; width:24%; }
a { color:#16314f; }
`;

for (const [src, outName] of JOBS) {
  const md = readFileSync(join(CV_DIR, src), 'utf8');
  const bodyHtml = marked.parse(md);
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${outName}</title><style>${CSS}</style></head><body>${bodyHtml}</body></html>`;
  const htmlPath = join(HTML_DIR, src.replace(/\.md$/, '.html'));
  writeFileSync(htmlPath, html);
  const pdfPath = join(PDF_DIR, outName);
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
    '--no-sandbox', `--print-to-pdf=${pdfPath}`, `file://${htmlPath}`,
  ], { stdio: 'pipe' });
  console.log('PDF:', outName);
}
console.log('Done ->', PDF_DIR);
