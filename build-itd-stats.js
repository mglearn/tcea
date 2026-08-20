/*
 * build-itd-stats.js — count the templates/documents available under itd/ and
 * write itd/stats.json for the dashboard on itd/index.html.
 *
 * A "document" is one logical artifact regardless of format: the html, md, and
 * pdf versions of the same item count as 1. We detect artifact libraries as any
 * immediate subfolder of itd/ that has a docs/ directory, and count the unique
 * file stems in that docs/ folder. The module number is taken from the folder
 * name (modN...). Add a new mod8artifactlib/docs/... and it's counted on deploy.
 *
 * Runs in CI (.github/workflows/static.yml) and locally: `node build-itd-stats.js`.
 */
const fs = require("fs");
const path = require("path");

const ITD = path.join(__dirname, "itd");

function uniqueStems(dir) {
  const stems = new Set();
  for (const name of fs.readdirSync(dir)) {
    if (!fs.statSync(path.join(dir, name)).isFile()) continue;
    // strip extension and any leading ".print-" print-variant prefix
    const stem = name.replace(/\.[^.]+$/, "").replace(/^\.print-/, "");
    stems.add(stem);
  }
  return stems.size;
}

const byModule = {};
let total = 0;

for (const name of fs.readdirSync(ITD).sort()) {
  const libDir = path.join(ITD, name);
  const docsDir = path.join(libDir, "docs");
  if (!fs.existsSync(docsDir) || !fs.statSync(docsDir).isDirectory()) continue;
  const count = uniqueStems(docsDir);
  if (count === 0) continue;
  const m = name.match(/mod(\d+)/i);
  const mod = m ? m[1] : "?";
  byModule[mod] = (byModule[mod] || 0) + count;
  total += count;
}

const stats = { total, byModule };
fs.writeFileSync(path.join(ITD, "stats.json"), JSON.stringify(stats, null, 2) + "\n");
console.log(`build-itd-stats: ${total} documents ` + JSON.stringify(byModule));
