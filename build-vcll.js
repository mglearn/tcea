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
// credentials.md is the LIVE source of truth, edited in place. Preserve it
// across the wipe so a rebuild never deletes users you've added.
if (!fs.existsSync(SRC)) { console.error("Missing source folder: " + SRC); process.exit(1); }
const credOut = path.join(OUT, "credentials.md");
const existingCreds = fs.existsSync(credOut) ? fs.readFileSync(credOut, "utf8") : null;
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(SRC, OUT, { recursive: true });
console.log("Copied vcl/ -> vcll/");

// 2) drop in the auth assets + credentials --------------------
for (const f of ["lock.js", "login.html", "gen-credential.html"]) {
  fs.copyFileSync(path.join(ASSETS, f), path.join(OUT, f));
}
if (existingCreds !== null) {
  fs.writeFileSync(credOut, existingCreds);
  console.log("Preserved existing vcll/credentials.md (users kept)");
} else {
  fs.copyFileSync(CREDS, credOut);
  console.log("Seeded vcll/credentials.md from template");
}
console.log("Added lock.js, login.html, gen-credential.html");

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
  const w = sandbox.window;
  const prompts = w.LV_PROMPTS || [];
  const body = prompts.map((p) => {
    const keys = Object.keys(p).filter((k) => k !== "prompt");
    const fields = keys.map((k) => JSON.stringify(k) + ":" + JSON.stringify(p[k]));
    fields.push('"prompt":LVdec("' + enc(p.prompt) + '")');
    return "{" + fields.join(",") + "}";
  }).join(",\n");
  let out =
    "/* LibVibes prompt data — prompts obfuscated by build-vcll.js.\n" +
    "   Decoded at runtime via LVdec() (defined in lock.js). */\n" +
    "window.LV_PROMPTS=[\n" + body + "\n];\n";
  // Preserve every OTHER global the original file defined (e.g. window.LV_SLUGS),
  // otherwise pages that read them break.
  const others = Object.keys(w).filter((k) => k !== "LV_PROMPTS");
  for (const k of others) out += "window." + k + "=" + JSON.stringify(w[k]) + ";\n";
  fs.writeFileSync(dataPath, out);
  console.log("Obfuscated " + prompts.length + " prompts in libvibes-data.js" +
              (others.length ? " (preserved: " + others.join(", ") + ")" : ""));
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
// 6) inject a "Back to Collection" link into bare app.html build examples.
//    Shown only when the app is the top-level page (hidden inside the about
//    page's preview iframe via the window.top check).
function injectBackLink(file) {
  let html = fs.readFileSync(file, "utf8");
  if (html.indexOf("vcll-backlink") !== -1) return false;
  const href = relBase(file) + "libvibes.html";
  const snippet = '\n<script id="vcll-backlink">(function(){if(window.top!==window.self)return;' +
    'function add(){var a=document.createElement("a");a.href="' + href + '";' +
    'a.textContent="\\u2190 Collection";a.setAttribute("aria-label","Back to LibVibes Collection");' +
    'a.style.cssText="position:fixed;top:12px;left:12px;z-index:2147483647;background:#0A3476;' +
    'color:#FCB040;font:600 13px/1 system-ui,-apple-system,sans-serif;padding:9px 13px;' +
    'border-radius:8px;text-decoration:none;box-shadow:0 2px 10px rgba(0,0,0,.3)";' +
    'a.onmouseover=function(){a.style.filter="brightness(1.12)"};' +
    'a.onmouseout=function(){a.style.filter=""};document.body.appendChild(a);}' +
    'if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",add);else add();})();</script>\n';
  if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, snippet + "</body>");
  else html += snippet;
  fs.writeFileSync(file, html);
  return true;
}

const totals = { gated: 0, prompts: 0, backlinks: 0 };
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!e.isFile() || !e.name.toLowerCase().endsWith(".html")) continue;
    totals.prompts += encodePromptBodies(p);   // obfuscate inline prompts first
    totals.gated += injectGuard(p) ? 1 : 0;     // then inject the gate
    if (e.name === "app.html") totals.backlinks += injectBackLink(p) ? 1 : 0;
  }
}
walk(OUT);
console.log("Obfuscated " + totals.prompts + " inline prompts across all pages");
console.log("Injected gate into " + totals.gated + " HTML pages");
console.log("Injected Back-to-Collection link into " + totals.backlinks + " app.html examples");
console.log("\nDone. The locked site is in vcll/  ->  served at /tcea/vcll/");
