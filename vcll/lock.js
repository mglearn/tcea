/* ============================================================
   LibVibes LOCKED edition — gate + obfuscation (POC)
   ------------------------------------------------------------
   IMPORTANT — read this before trusting it:
   This is a CLIENT-SIDE gate on a STATIC site. It stops casual
   visitors, but it is NOT real security: a determined viewer can
   read this file, recover the KEY below, and decode the prompts.
   For real protection, gate server-side or use Google OAuth.
   This whole edition is a proof of concept for that flow.
   ============================================================ */
(function () {
  // Obfuscation key — MUST match the key in build-vcll.js.
  var KEY = "vcll-libvibes-tcea-obfuscation-v1-not-encryption-7f3a9c2e";

  // Base path back to the vcll/ root (set per-page by the build).
  var BASE = (typeof window.__VCLL_BASE === "string") ? window.__VCLL_BASE : "";

  // ---- XOR + base64 decode (mirror of the Node encoder) ----
  function dec(b64) {
    try {
      var bin = atob(b64), n = bin.length, bytes = new Uint8Array(n), i;
      for (i = 0; i < n; i++) bytes[i] = bin.charCodeAt(i);
      var k = new TextEncoder().encode(KEY), kl = k.length;
      for (i = 0; i < n; i++) bytes[i] ^= k[i % kl];
      return new TextDecoder().decode(bytes);
    } catch (e) { return ""; }
  }
  window.LVdec = dec;

  // ---- session ----
  function authed() {
    try {
      var raw = sessionStorage.getItem("vcll_auth");
      if (!raw) return null;
      var o = JSON.parse(raw);
      return (o && o.email) ? o : null;
    } catch (e) { return null; }
  }

  // ---- GUARD: redirect unauthenticated visitors to the login page ----
  // Pages the build marks as public (login, generator) set __VCLL_PUBLIC first.
  if (!window.__VCLL_PUBLIC && !authed()) {
    try {
      var here = location.pathname.split("/").pop() || "index.html";
      sessionStorage.setItem("vcll_next", here);
    } catch (e) {}
    location.replace(BASE + "login.html");
    return;
  }

  // ---- credentials (markdown table parser) ----
  function parseCreds(md) {
    var rows = [];
    md.split("\n").forEach(function (line) {
      var t = line.trim();
      if (t.charAt(0) !== "|") return;
      var parts = t.split("|").slice(1, -1).map(function (c) { return c.trim(); });
      if (parts.length < 3) return;
      if (/^email$/i.test(parts[0])) return;          // header row
      if (/^[-: ]+$/.test(parts[0])) return;          // separator row
      rows.push({ email: parts[0].toLowerCase(), salt: parts[1], hash: parts[2].toLowerCase() });
    });
    return rows;
  }

  function sha256hex(str) {
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode(str)).then(function (buf) {
      return Array.from(new Uint8Array(buf)).map(function (b) {
        return b.toString(16).padStart(2, "0");
      }).join("");
    });
  }

  // Returns: true on success, false on bad credentials, throws on load error.
  function login(email, password) {
    email = (email || "").trim().toLowerCase();
    return fetch(BASE + "credentials.md", { cache: "no-store" }).then(function (res) {
      if (!res.ok) throw new Error("Could not load credentials file.");
      return res.text();
    }).then(function (txt) {
      var rec = parseCreds(txt).find(function (c) { return c.email === email; });
      if (!rec) return false;
      return sha256hex(rec.salt + ":" + password).then(function (h) {
        if (h !== rec.hash) return false;
        sessionStorage.setItem("vcll_auth", JSON.stringify({ email: email, t: Date.now() }));
        return true;
      });
    });
  }

  function logout() {
    try { sessionStorage.removeItem("vcll_auth"); } catch (e) {}
    location.replace(BASE + "login.html");
  }

  window.VCLL = { dec: dec, authed: authed, login: login, logout: logout, base: BASE };

  // ---- decode any inline obfuscated content once the DOM is ready ----
  function fillEnc() {
    document.querySelectorAll("[data-enc]").forEach(function (el) {
      el.textContent = dec(el.getAttribute("data-enc"));
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fillEnc);
  } else {
    fillEnc();
  }
})();
