#!/usr/bin/env node
/* build-room.js — generate a Relic Room from a spec JSON.
   ---------------------------------------------------------------------------
   Usage:  node relic-rooms/starter-kit/build-room.js relic-rooms/_specs/ec.json
   Writes  relic-rooms/<id>/ : data.en.js, index.html, policy.html,
           correlation.html, images/ (folder). Translations (lang/*.js) are
           authored separately and dropped in <id>/lang/; re-run to pick them up.

   Spec shape (see _spec.template.json):
   { id, brand, accent, hero, title, desc, grades, teks, themeNote?,
     ui:{...}, exhibits:[...9], eras:{}, sources:{}, ground?:[],
     correlation?:[{code, expectation, alignment}] }
--------------------------------------------------------------------------- */
const fs = require("fs");
const path = require("path");

const KIT = __dirname;                          // relic-rooms/starter-kit
const RR = path.dirname(KIT);                   // relic-rooms
const LANGS = ["es", "vi", "ar", "hi", "ur", "zh"];

const specPath = process.argv[2];
if (!specPath) { console.error("usage: node build-room.js <spec.json>"); process.exit(1); }
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

// ---- validate -------------------------------------------------------------
const problems = [];
if (!spec.id) problems.push("missing id");
const ex = spec.exhibits || [];
if (ex.length !== 9) problems.push(`expected 9 exhibits, got ${ex.length}`);
ex.forEach((e) => {
  if (!e.id) problems.push("an exhibit is missing id");
  ["identify", "purpose", "replacement"].forEach((k) => {
    const a = e.choices && e.choices[k];
    if (!Array.isArray(a) || a.length !== 4) problems.push(`${e.id}: choices.${k} must have 4 items`);
  });
  if (e.choices) {
    if (e.choices.identify[0] !== e.relic) problems.push(`${e.id}: identify[0] must equal relic (correct answer first)`);
    if (e.choices.purpose[0] !== e.purpose) problems.push(`${e.id}: purpose[0] must equal purpose`);
    if (e.choices.replacement[0] !== e.replacement) problems.push(`${e.id}: replacement[0] must equal replacement`);
  }
  if (!spec.eras || !spec.eras[e.id]) problems.push(`${e.id}: missing eras entry`);
  if (!spec.sources || !spec.sources[e.id]) problems.push(`${e.id}: missing sources entry`);
});
const uiKeys = Object.keys(spec.ui || {});
if (uiKeys.length < 70) problems.push(`ui has only ${uiKeys.length} keys (expected ~81 — copy the template)`);
if (problems.length) { console.error("SPEC PROBLEMS:\n- " + problems.join("\n- ")); process.exit(1); }

// ---- output dir -----------------------------------------------------------
const out = path.join(RR, spec.id);
fs.mkdirSync(path.join(out, "images"), { recursive: true });
fs.mkdirSync(path.join(out, "lang"), { recursive: true });

// ---- data.en.js -----------------------------------------------------------
const room = {
  id: spec.id,
  storageKey: `relicRoom.${spec.id}.v1`,
  ui: spec.ui,
  exhibits: spec.exhibits,
  eras: spec.eras,
  sources: spec.sources,
};
if (spec.ground) room.ground = spec.ground;
if (spec.noGround) room.noGround = true;
fs.writeFileSync(path.join(out, "data.en.js"),
  "window.__ROOM__ = " + JSON.stringify(room, null, 2) + ";\n");

// ---- index.html (fill tokens; only emit lang tags that exist) --------------
let tpl = fs.readFileSync(path.join(KIT, "room.template.html"), "utf8");
const langTags = LANGS
  .filter((l) => fs.existsSync(path.join(out, "lang", l + ".js")))
  .map((l) => `    <script src="lang/${l}.js" defer></script>`).join("\n");
tpl = tpl
  .replace(/{{TITLE}}/g, esc(spec.title))
  .replace(/{{DESC}}/g, esc(spec.desc || spec.title))
  .replace(/{{BRAND}}/g, esc(spec.brand || spec.id.toUpperCase()))
  .replace(/{{ACCENT}}/g, spec.accent || "#f7bd4a")
  .replace(/{{HERO}}/g, spec.hero || "hero.png")
  .replace(/{{LANG_SCRIPTS}}/g, langTags);
fs.writeFileSync(path.join(out, "index.html"), tpl);

// ---- policy.html ----------------------------------------------------------
let pol = fs.readFileSync(path.join(KIT, "policy.template.html"), "utf8");
pol = pol
  .replace(/{{TITLE}}/g, esc(spec.title))
  .replace(/{{STORAGE_KEY}}/g, room.storageKey)
  .replace(/{{TEKS}}/g, esc(spec.teks || "the applicable Texas Essential Knowledge and Skills"))
  .replace(/{{GRADES_CLAUSE}}/g, spec.grades ? ` for grades ${esc(spec.grades)}` : "")
  .replace(/{{THEME_NOTE}}/g, esc(spec.themeNote || ""));
fs.writeFileSync(path.join(out, "policy.html"), pol);

// ---- correlation.html -----------------------------------------------------
let corr = fs.readFileSync(path.join(KIT, "correlation.template.html"), "utf8");
const rows = (spec.correlation || []).map((r) =>
  `      <tr><td>${esc(r.code)}</td><td>${esc(r.expectation)}</td><td>${esc(r.alignment)}</td></tr>`
).join("\n") || `      <tr><td colspan="3"><em>TODO: add TEKS alignments (code · expectation · how this activity aligns).</em></td></tr>`;
corr = corr
  .replace(/{{TITLE}}/g, esc(spec.title))
  .replace(/{{TEKS}}/g, esc(spec.teks || ""))
  .replace(/{{GRADES}}/g, esc(spec.grades || ""))
  .replace(/{{ROWS}}/g, rows);
fs.writeFileSync(path.join(out, "correlation.html"), corr);

console.log(`✓ built relic-rooms/${spec.id}/  (${ex.length} exhibits, ${uiKeys.length} UI keys, ${langTags ? LANGS.filter(l=>fs.existsSync(path.join(out,"lang",l+".js"))).length : 0} translations)`);
console.log(`  next: add images/${spec.hero || "hero.png"} + images/<exhibit>.png, translations in lang/, then register in relic-rooms/rooms.js + projects.js`);

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
