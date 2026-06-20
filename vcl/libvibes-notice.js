/* ============================================================
   LibVibes — browser-storage notice (one-time, dismissible)
   A small banner explaining localStorage use. No cookies, no
   tracking, nothing sent anywhere unless the visitor submits.
   Self-contained: injects its own styles, remembers dismissal
   in localStorage so it shows only once per browser.
   Include on a page with:  <script src="libvibes-notice.js"></script>
   (path-relative; pages in subfolders should point back to /vcl/)
   ============================================================ */
(function () {
  var KEY = "lv-storage-notice-ack";
  // If the visitor already acknowledged it, do nothing.
  try { if (localStorage.getItem(KEY) === "1") return; } catch (e) { /* storage blocked: still show once per load */ }

  // Work out where libvibes-legal.html lives relative to this page.
  // Tool pages sit in libvibes/<slug>/ and community/<slug>/, so step back up.
  var path = location.pathname;
  var prefix = "";
  if (/\/libvibes\/community\/[^/]+\//.test(path)) prefix = "../../../";
  else if (/\/libvibes\/[^/]+\//.test(path)) prefix = "../../";
  var legalHref = prefix + "libvibes-legal.html#notcollect";

  var css = ""
    + ".lv-notice{position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:99999;max-width:760px;margin:0 auto;"
    + "background:#071F4A;color:#fff;border:1px solid rgba(252,176,64,.5);border-left:5px solid #FCB040;"
    + "border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,.4);padding:.95rem 1.1rem;"
    + "display:flex;gap:1rem;align-items:flex-start;flex-wrap:wrap;"
    + "font-family:'DM Sans',system-ui,-apple-system,sans-serif;font-size:.86rem;line-height:1.5;"
    + "animation:lvNoticeIn .25s ease both}"
    + "@keyframes lvNoticeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}"
    + ".lv-notice__txt{flex:1;min-width:240px;color:#D0D8F0}"
    + ".lv-notice__txt b{color:#fff}"
    + ".lv-notice__txt a{color:#FDD17A;font-weight:700;text-decoration:none;white-space:nowrap}"
    + ".lv-notice__txt a:hover{text-decoration:underline}"
    + ".lv-notice__btn{flex:none;background:#FCB040;color:#0A3476;border:0;border-radius:8px;"
    + "font:inherit;font-weight:700;font-size:.85rem;padding:.5rem 1.1rem;cursor:pointer;align-self:center}"
    + ".lv-notice__btn:hover{background:#FDD17A}"
    + "@media print{.lv-notice{display:none!important}}";

  function build() {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var bar = document.createElement("div");
    bar.className = "lv-notice";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Browser storage notice");
    bar.innerHTML =
      '<div class="lv-notice__txt">🔒 <b>LibVibes saves small preferences in this browser.</b> '
      + "Things like the last tool you opened and its settings live in your browser&rsquo;s "
      + "<b>localStorage</b> so they persist between visits. We don&rsquo;t use tracking cookies, "
      + "don&rsquo;t run third-party analytics, and never send your data anywhere &mdash; unless you "
      + "choose to submit through Share Yours. "
      + '<a href="' + legalHref + '">Read the full notice &rarr;</a></div>'
      + '<button type="button" class="lv-notice__btn">Got it</button>';

    bar.querySelector(".lv-notice__btn").addEventListener("click", function () {
      try { localStorage.setItem(KEY, "1"); } catch (e) {}
      bar.style.transition = "opacity .2s, transform .2s";
      bar.style.opacity = "0";
      bar.style.transform = "translateY(10px)";
      setTimeout(function () { bar.remove(); }, 200);
    });

    document.body.appendChild(bar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
