/* ============================================================
   TCEA — licensing footer (unobtrusive, self-contained)
   Appends a quiet one-line licensing notice to the end of the
   page, linking to /tcea/licensing.html. Injects its own scoped
   styles so it cannot clash with a page's existing CSS.

   Include on a page with:
     <script src="/tcea/licensing-footer.js" defer></script>

   The path is absolute, so the same tag works at any folder
   depth. To change the license shown site-wide, edit LICENSE_TEXT
   below — no need to touch the pages themselves.
   ============================================================ */
(function () {
  "use strict";

  var HOLDER       = "© 2026 TCEA";
  var LICENSE_TEXT = "Content CC BY-NC-SA 4.0 · Code MIT";
  var HREF         = "/tcea/licensing.html";

  // Never inject inside an embedded iframe — the host page carries it.
  try { if (window.top !== window.self) return; } catch (e) { return; }

  // Never inject on the licensing page itself.
  if (/\/licensing\.html$/.test(location.pathname)) return;

  function build() {
    if (document.getElementById("tcea-lic-footer")) return;

    var css = ""
      + "#tcea-lic-footer{all:initial;display:block;box-sizing:border-box;width:100%;"
      + "margin:2.5rem 0 0;padding:.9rem 1rem calc(.9rem + env(safe-area-inset-bottom,0px));"
      + "border-top:1px solid rgba(0,51,102,.14);background:transparent;text-align:center;"
      + "font-family:'Source Sans 3',system-ui,-apple-system,'Segoe UI',sans-serif;"
      + "font-size:.76rem;line-height:1.6;color:#55606e;}"
      + "#tcea-lic-footer .tcea-lic-in{max-width:820px;margin:0 auto;}"
      + "#tcea-lic-footer a{color:#004c99;text-decoration:underline;text-underline-offset:2px;}"
      + "#tcea-lic-footer a:hover,#tcea-lic-footer a:focus-visible{color:#003366;}"
      + "@media print{#tcea-lic-footer{border-top:1px solid #ccc;color:#333;}}";

    var style = document.createElement("style");
    style.id = "tcea-lic-footer-css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var bar = document.createElement("footer");
    bar.id = "tcea-lic-footer";

    var inner = document.createElement("div");
    inner.className = "tcea-lic-in";

    inner.appendChild(document.createTextNode(HOLDER + " · " + LICENSE_TEXT + " · "));

    var link = document.createElement("a");
    link.href = HREF;
    link.textContent = "Licensing & provenance";
    inner.appendChild(link);

    bar.appendChild(inner);
    document.body.appendChild(bar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
