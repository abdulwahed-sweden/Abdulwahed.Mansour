import { marked } from 'marked';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = resolve(__dirname, '..', 'cover-letters');
const HTML_DIR = join(__dirname, 'html-letters');
const PDF_DIR = resolve(__dirname, '..', 'pdf', 'cover-letters');
mkdirSync(HTML_DIR, { recursive: true });
mkdirSync(PDF_DIR, { recursive: true });

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const JOBS = [
  ['01-backend-software-engineer.md',   'Abdulwahed-Mansour-Cover-Letter-Backend-Software-Engineer.pdf'],
  ['02-platform-devops-sre.md',         'Abdulwahed-Mansour-Cover-Letter-Platform-DevOps-SRE.pdf'],
  ['03-security-appsec-engineer.md',    'Abdulwahed-Mansour-Cover-Letter-Security-AppSec-Engineer.pdf'],
  ['05-fullstack-web-developer.md',     'Abdulwahed-Mansour-Cover-Letter-Full-Stack-Web-Developer.pdf'],
  ['04-rust-systems-engineer.md',       'Abdulwahed-Mansour-Cover-Letter-Rust-Systems-Engineer.pdf'],
  ['06-blockchain-smartcontract.md',    'Abdulwahed-Mansour-Cover-Letter-Blockchain-Smart-Contract.pdf'],
  ['07-it-support-solutions.md',        'Abdulwahed-Mansour-Cover-Letter-IT-Support-Solutions.pdf'],
  ['08-technical-writer-translator.md', 'Abdulwahed-Mansour-Cover-Letter-Technical-Writer-Translator.pdf'],
];

marked.setOptions({ gfm: true, breaks: true });

const CSS = `
@page { size: A4; margin: 22mm 22mm 20mm 22mm; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body {
  font-family: "Helvetica Neue", Helvetica, Arial, "Roboto", sans-serif;
  color: #2b2b2b; font-size: 10.8pt; line-height: 1.55; margin: 0;
}
h1 { color:#16314f; font-size:18pt; font-weight:700; letter-spacing:.3px; margin:0 0 2px; }
/* sender role + contact block right after the name */
h1 + p { margin:0 0 4px; font-size:9.4pt; color:#4a4a4a; line-height:1.5; }
h1 + p strong { display:block; font-size:11pt; color:#16314f; margin-bottom:1px; }
h1 + p a { color:#16314f; text-decoration:none; }
/* subject line */
h2 { color:#16314f; font-size:11pt; font-weight:700; margin:14px 0 12px; }
hr { border:none; border-top:1px solid #d9dee4; margin:10px 0 16px; }
p { margin:0 0 11px; }
strong { color:#1c1c1c; }
em { color:#555; }
a { color:#16314f; }
/* signature emphasis */
p:last-of-type strong { color:#16314f; }
`;

for (const [src, outName] of JOBS) {
  const md = readFileSync(join(SRC_DIR, src), 'utf8');
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
