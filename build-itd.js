/*
 * build-itd.js — generate itd/manifest.json listing every file under itd/,
 * so itd/index.html can render the current contents after the password gate.
 *
 * Runs in CI (.github/workflows/static.yml) before the Pages artifact is
 * uploaded, and can be run locally: `node build-itd.js`. Drop new files/folders
 * anywhere under itd/ and the next deploy picks them up automatically.
 *
 * The gate's own plumbing (index.html, access.html, manifest.json, assets/) is
 * excluded so it never appears in the listing.
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const ITD = path.join(ROOT, "itd");

// Paths (relative to itd/) that are the gate itself, not content.
const EXCLUDE_FILES = new Set(["index.html", "access.html", "manifest.json"]);
const EXCLUDE_DIRS = new Set(["assets"]);

function walk(dir, rel, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const relPath = rel ? rel + "/" + e.name : e.name;
    if (e.isDirectory()) {
      if (rel === "" && EXCLUDE_DIRS.has(e.name)) continue;
      walk(path.join(dir, e.name), relPath, out);
    } else if (e.isFile()) {
      if (rel === "" && EXCLUDE_FILES.has(e.name)) continue;
      const stat = fs.statSync(path.join(dir, e.name));
      out.push({ path: relPath, size: stat.size });
    }
  }
}

const files = [];
walk(ITD, "", files);
files.sort((a, b) => a.path.localeCompare(b.path));

const manifest = { files };
fs.writeFileSync(path.join(ITD, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`build-itd: wrote itd/manifest.json with ${files.length} files`);
