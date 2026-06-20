#!/usr/bin/env node
/* ============================================================
   build-vcll.js — generate the LOCKED copy of vcl/ at vcll/
   ------------------------------------------------------------
   - Never modifies vcl/ (the public source).
   - Wipes and regenerates vcll/ from vcl/ on every run.
   - Injects the login gate (lock.js) into every page.
   - Obfuscates the prompts in libvibes-data.js and
     libvibes-prompts-bonus.html (XOR + base64).
   - Copies the editable credentials from vcll-credentials.md.

   Run:  node build-vcll.js
   ============================================================ */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const SRC = path.join(ROOT, "vcl");
const OUT = path.join(ROOT, "vcll");
const ASSETS = path.join(ROOT, "vcll-assets");
const CREDS = path.join(ROOT, "vcll-credentials.md");

// MUST match KEY in vcll-assets/lock.js
const KEY = "vcll-libvibes-tcea-obfuscation-v1-not-encryption-7f3a9c2e";

// Pages that must stay public (no redirect guard injected).
const PUBLIC_PAGES = new Set(["login.html", "gen-credential.html"]);

// Unreferenced source files that leak prompts in plaintext — drop from the copy.
const DROP_FILES = new Set(["vibelib_v1.md"]);

// ---- XOR + base64 encode (mirrored by dec() in lock.js) ----
function enc(str) {
  const data = Buffer.from(str, "utf8");
  const k = Buffer.from(KEY, "utf8");
  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i++) out[i] = data[i] ^ k[i % k.length];
  return out.toString("base64");
}

function unescapeHtml(s) {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");
}

// 1) fresh copy ------------------------------------------------
if (!fs.existsSync(SRC)) { console.error("Missing source folder: " + SRC); process.exit(1); }
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(SRC, OUT, { recursive: true });
console.log("Copied vcl/ -> vcll/");

// 2) drop in the auth assets + credentials --------------------
for (const f of ["lock.js", "login.html", "gen-credential.html"]) {
  fs.copyFileSync(path.join(ASSETS, f), path.join(OUT, f));
}
fs.copyFileSync(CREDS, path.join(OUT, "credentials.md"));
console.log("Added lock.js, login.html, gen-credential.html, credentials.md");

// 2b) drop unreferenced plaintext-prompt source files ---------
for (const f of DROP_FILES) {
  const p = path.join(OUT, f);
  if (fs.existsSync(p)) { fs.rmSync(p); console.log("Dropped " + f + " (plaintext prompt leak)"); }
}

// 3) obfuscate libvibes-data.js -------------------------------
const dataPath = path.join(OUT, "libvibes-data.js");
if (fs.existsSync(dataPath)) {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), sandbox);
  const prompts = sandbox.window.LV_PROMPTS || [];
  const body = prompts.map((p) => {
    const keys = Object.keys(p).filter((k) => k !== "prompt");
    const fields = keys.map((k) => JSON.stringify(k) + ":" + JSON.stringify(p[k]));
    fields.push('"prompt":LVdec("' + enc(p.prompt) + '")');
    return "{" + fields.join(",") + "}";
  }).join(",\n");
  const out =
    "/* LibVibes prompt data — prompts obfuscated by build-vcll.js.\n" +
    "   Decoded at runtime via LVdec() (defined in lock.js). */\n" +
    "window.LV_PROMPTS=[\n" + body + "\n];\n";
  fs.writeFileSync(dataPath, out);
  console.log("Obfuscated " + prompts.length + " prompts in libvibes-data.js");
}

// 4) obfuscate every inline prompt (<div>/<pre> class="prompt-body") --
//    Covers libvibes-prompts-bonus.html (7) and each tool's index.html (1 each).
function encodePromptBodies(file) {
  let html = fs.readFileSync(file, "utf8");
  let count = 0;
  html = html.replace(
    /<(div|pre)([^>]*\bclass="[^"]*\bprompt-body\b[^"]*"[^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, attrs, inner) => {
      count++;
      return "<" + tag + attrs + ' data-enc="' + enc(unescapeHtml(inner)) + '"></' + tag + ">";
    });
  if (count) fs.writeFileSync(file, html);
  return count;
}

// 5) inject the gate into every .html -------------------------
function relBase(file) {
  const depth = path.relative(OUT, path.dirname(file)).split(path.sep).filter(Boolean).length;
  return depth === 0 ? "" : "../".repeat(depth);
}
function injectGuard(file) {
  const name = path.basename(file);
  if (PUBLIC_PAGES.has(name)) return false;        // login / generator stay public
  let html = fs.readFileSync(file, "utf8");
  if (html.indexOf('src="' + relBase(file) + 'lock.js"') !== -1) return false; // already gated
  const base = relBase(file);
  const tag = '\n<script>window.__VCLL_BASE="' + base + '";</script>' +
              '\n<script src="' + base + 'lock.js"></script>';
  if (/<head[^>]*>/i.test(html)) {
    html = html.replace(/<head[^>]*>/i, (m) => m + tag);
  } else if (/<html[^>]*>/i.test(html)) {
    html = html.replace(/<html[^>]*>/i, (m) => m + tag);
  } else {
    html = tag + "\n" + html;
  }
  fs.writeFileSync(file, html);
  return true;
}
const totals = { gated: 0, prompts: 0 };
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!e.isFile() || !e.name.toLowerCase().endsWith(".html")) continue;
    totals.prompts += encodePromptBodies(p);   // obfuscate inline prompts first
    totals.gated += injectGuard(p) ? 1 : 0;     // then inject the gate
  }
}
walk(OUT);
console.log("Obfuscated " + totals.prompts + " inline prompts across all pages");
console.log("Injected gate into " + totals.gated + " HTML pages");
console.log("\nDone. The locked site is in vcll/  ->  served at /tcea/vcll/");
