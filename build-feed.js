#!/usr/bin/env node
/* ============================================================
   build-feed.js — generate feed.xml (RSS 2.0) + updates.json
   ------------------------------------------------------------
   Single source of truth: projects.js
   For every internal project it reads the file's last commit
   date from git, sorts newest-first, and writes:
     - feed.xml       RSS 2.0 (title, link, <=100-word desc, icon)
     - updates.json   used by index.html for "NEW" badges

   Runs automatically on every push via .github/workflows/static.yml
   (which regenerates the feed before deploying to GitHub Pages).

   Run locally:  node build-feed.js
   ============================================================ */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = __dirname;
const SITE_URL = (process.env.SITE_URL || "https://mglearn.github.io/tcea/").replace(/\/?$/, "/");
const MAX_ITEMS = 40;         // most-recent N projects appear in the feed
const DESC_WORD_CAP = 100;    // per the RSS description requirement

const { SECTIONS, PROJECTS } = require("./projects.js");

// A small glyph "icon" per category (RSS has no standard per-item image,
// so we prefix the title and expose it as <category>).
const ICONS = {
  featured: "⭐", ai: "🤖", instruction: "📘",
  dashboards: "📊", tools: "🧰", courses: "🎓",
  activities: "🎲", breakouts: "🕵️", assessment: "✅",
  webdecks: "🖥️", assets: "📦"
};
const sectionTitle = {};
SECTIONS.forEach(function (s) { sectionTitle[s.id] = s.title; });

function decode(s) {
  return String(s || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→").replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&[a-z]+;/gi, " ").replace(/\s+/g, " ").trim();
}
function xml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function capWords(s, n) {
  const w = s.split(/\s+/);
  return w.length <= n ? s : w.slice(0, n).join(" ") + "…";
}
function gitDate(file) {
  try {
    const out = execSync("git log -1 --format=%cI -- " + JSON.stringify(file), {
      cwd: ROOT, stdio: ["ignore", "pipe", "ignore"]
    }).toString().trim();
    return out || null;
  } catch (e) { return null; }
}

// De-duplicate internal projects by href (Featured shelf repeats some cards).
const seen = new Set();
const entries = [];
PROJECTS.forEach(function (p) {
  if (p.external) return;                 // off-site links have no local file/date
  if (seen.has(p.href)) return;
  seen.add(p.href);
  const file = p.href.split("#")[0].split("?")[0];
  const abs = path.join(ROOT, file);
  if (!fs.existsSync(abs)) return;        // skip broken links so the feed stays valid
  entries.push({
    href: p.href,
    title: decode(p.title),
    icon: ICONS[p.category] || "",
    category: sectionTitle[p.category] || p.category,
    desc: capWords(decode(p.desc), DESC_WORD_CAP),
    date: gitDate(file) || new Date().toISOString()
  });
});

entries.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
const feedItems = entries.slice(0, MAX_ITEMS);
const built = new Date().toUTCString();

// ---- feed.xml ----
const itemsXml = feedItems.map(function (e) {
  const link = SITE_URL + e.href;
  const title = (e.icon ? e.icon + " " : "") + e.title;
  return "    <item>\n" +
    "      <title>" + xml(title) + "</title>\n" +
    "      <link>" + xml(link) + "</link>\n" +
    "      <guid isPermaLink=\"true\">" + xml(link) + "</guid>\n" +
    "      <category>" + xml(e.category) + "</category>\n" +
    "      <pubDate>" + new Date(e.date).toUTCString() + "</pubDate>\n" +
    "      <description>" + xml(e.desc) + "</description>\n" +
    "    </item>";
}).join("\n");

const rss =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n' +
  "  <channel>\n" +
  "    <title>TCEA Vibe-Coded Solutions — Updates</title>\n" +
  "    <link>" + xml(SITE_URL) + "</link>\n" +
  '    <atom:link href="' + xml(SITE_URL + "feed.xml") + '" rel="self" type="application/rss+xml" />\n' +
  "    <description>New and updated HTML tools, dashboards, prompt libraries, and classroom resources from TCEA.</description>\n" +
  "    <language>en-us</language>\n" +
  "    <lastBuildDate>" + built + "</lastBuildDate>\n" +
  "    <image>\n" +
  "      <url>" + xml(SITE_URL) + "favicon.svg</url>\n" +
  "      <title>TCEA Vibe-Coded Solutions — Updates</title>\n" +
  "      <link>" + xml(SITE_URL) + "</link>\n" +
  "    </image>\n" +
  itemsXml + "\n" +
  "  </channel>\n" +
  "</rss>\n";

// ---- updates.json (for NEW badges on the page) ----
const updates = {
  generated: new Date().toISOString(),
  items: feedItems.map(function (e) {
    return { href: e.href, title: e.title, category: e.category, icon: e.icon, date: e.date };
  })
};

fs.writeFileSync(path.join(ROOT, "feed.xml"), rss);
fs.writeFileSync(path.join(ROOT, "updates.json"), JSON.stringify(updates, null, 2) + "\n");
console.log("feed.xml     : " + feedItems.length + " items (of " + entries.length + " projects)");
console.log("updates.json : " + updates.items.length + " items");
console.log("newest       : " + (feedItems[0] ? feedItems[0].title + "  " + feedItems[0].date : "-"));
