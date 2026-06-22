/* ============================================================
   LibVibes shared data + nav dropdown injector
   Single source of truth for the 18 solutions and which are built.
   To mark a tool as shipped: add its number to BUILT below.
   ============================================================ */
(function () {
  const SOLUTIONS = [
    { n: 1,  slug: "library-hours-card",            title: "Library Hours Card",          full: "Library Welcome & Hours Card",        level: "beginner",     type: "Operations",       blurb: "An at-a-glance hours card with a live open/closed pill that follows the visitor's clock." },
    { n: 2,  slug: "genre-quiz",                     title: "Genre Quiz",                  full: "\"Find Your Next Read\" Genre Quiz",   level: "beginner",     type: "Reader advisory",  blurb: "A friendly 5-question quiz that lands on one genre with a blurb and sample titles." },
    { n: 3,  slug: "reading-challenge-tracker",      title: "Reading Challenge Tracker",   full: "Reading Challenge Tracker",           level: "beginner",     type: "Engagement",       blurb: "A private, on-device tracker with an animated progress ring and milestone confetti." },
    { n: 4,  slug: "dewey-explorer-wheel",           title: "Dewey Explorer Wheel",        full: "Dewey Decimal Explorer Wheel",        level: "beginner",     type: "Library skill",    blurb: "A clickable wheel of the 10 Dewey classes with a type-a-topic search." },
    { n: 5,  slug: "event-countdown-banner",         title: "Event Countdown Banner",      full: "Library Event Countdown Banner",      level: "beginner",     type: "Promotion",        blurb: "A bold days/hours/minutes/seconds countdown with rotating taglines and a zero-state party." },
    { n: 6,  slug: "call-number-shelving-game",      title: "Shelve It Right!",            full: "Call Number Shelving Game",           level: "beginner",     type: "Library skill",    blurb: "Drag scrambled spines into correct Dewey or fiction order; it checks each and explains the rule." },
    { n: 7,  slug: "book-spine-poetry",              title: "Book Spine Poetry",           full: "Book Spine Poetry Maker",             level: "beginner",     type: "Creative literacy",blurb: "Stack draggable book spines into a poem and download it as an image." },
    { n: 8,  slug: "reading-bingo-generator",        title: "Reading Bingo Generator",     full: "Reading Bingo Board Generator",       level: "intermediate", type: "Engagement",       blurb: "A shuffleable 5x5 reading-challenge board with BINGO detection and a clean print layout." },
    { n: 9,  slug: "book-of-the-week-carousel",      title: "Book of the Week Carousel",   full: "Book of the Week Spotlight Carousel", level: "intermediate", type: "Promotion",        blurb: "A self-running staff-picks spotlight with arrows, dots, swipe, and pause-on-hover." },
    { n: 10, slug: "citation-quick-helper",          title: "Citation Quick-Helper",       full: "Citation Quick-Helper (MLA & APA)",   level: "intermediate", type: "Info literacy",    blurb: "Live MLA 9 & APA 7 citations for a book or website, with one-click copy." },
    { n: 11, slug: "library-floor-map",              title: "Library Floor Map",           full: "Interactive Library Floor Map",       level: "intermediate", type: "Operations",       blurb: "A tap-to-find zone map with a topic search and per-zone info panels." },
    { n: 12, slug: "source-evaluation-lab",          title: "Source Evaluation Lab",       full: "Source Evaluation Lab (CRAAP Test)",  level: "intermediate", type: "Info literacy",    blurb: "Rate a source on the five CRAAP factors for an animated source-confidence verdict." },
    { n: 13, slug: "boolean-search-trainer",         title: "Boolean Search Trainer",      full: "Boolean Search Trainer",              level: "intermediate", type: "Research skills",  blurb: "A pretend database where AND, OR, NOT, quotes, and parentheses change the results live." },
    { n: 14, slug: "primary-secondary-sorter",       title: "Primary vs. Secondary Sorter",full: "Primary vs. Secondary Source Sorter", level: "intermediate", type: "Info literacy",    blurb: "Drag source cards into Primary or Secondary with instant, explained feedback." },
    { n: 15, slug: "catalog-lookup",                 title: "Catalog Lookup",              full: "\"Is It On the Shelf?\" Catalog Lookup",level: "advanced",   type: "Operations",       blurb: "A live availability search demo (the prompt builds the Google-Sheets-backed version)." },
    { n: 16, slug: "signup-board",                   title: "Sign-Up Board",               full: "Makerspace / Study Room Sign-Up Board",level: "advanced",    type: "Operations",       blurb: "A time-slot booking grid demo (the prompt builds the Google-Sheets-backed version)." },
    { n: 17, slug: "mock-award-voting",              title: "Mock Caldecott Award",        full: "Mock Caldecott / Newbery Voting Station",level: "advanced",  type: "Library event",    blurb: "A nominee gallery, a ballot, and live animated results with a winner's crown." },
    { n: 18, slug: "collection-diversity-dashboard", title: "Collection Snapshot",         full: "Collection Diversity Snapshot Dashboard",level: "advanced",  type: "Operations",       blurb: "A collection-snapshot dashboard demo (the prompt builds the Google-Sheets-backed version)." },
    { n: 19, slug: "digital-citizenship-detective", title: "Digital Citizenship Game",     full: "Post or Pass? — Digital Citizenship Game",level: "intermediate", type: "Digital citizenship", blurb: "A scenario game: read a real online situation, choose what you'd do, and learn why — across six digital-citizenship skills." }
  ];

  /* ---- The only line to edit as tools ship: which prompt numbers are built ---- */
  const BUILT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  const LVL = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };
  const byNum = Object.fromEntries(SOLUTIONS.map(s => [s.n, s]));

  // Expose for other scripts (e.g. the examples gallery)
  window.LIBVIBES = { SOLUTIONS, BUILT, byNum, LVL };

  /* ============================================================
     Single-source navigation. Every LibVibes page ships an empty
     <div class="nav-links"></div>; this fills it so the nav only
     ever has to be edited here.
     ============================================================ */
  const NAV_HTML = `
    <div class="nav-dd">
      <a href="libvibes-learn-more.html" class="nav-dd-trigger">Learn More &#9662;</a>
      <div class="nav-dd-menu">
        <a href="libvibes-examples.html">Built Examples</a>
        <a href="libvibes-library.html">Prompt Library</a>
        <a href="libvibes-prompts-bonus.html">Bonus Prompts</a>
        <a href="libvibes-use-cases.html">Use Cases</a>
        <a href="libvibes-downloads.html">Tools &amp; Downloads</a>
        <a href="libvibes-host.html">Host It Free</a>
        <div class="dd-sep"></div>
        <a href="libvibes-submit.html">Share Yours <small>&middot; submit your build</small></a>
        <a href="libvibes-community.html">Community <small>&middot; see what others made</small></a>
        <div class="dd-sep"></div>
        <a href="libvibes-vibes.html">VIBES <small>&middot; the framework</small></a>
        <a href="libvibes-learn-more.html">What&rsquo;s all this? &rarr;</a>
      </div>
    </div>

    <a class="home" href="libvibes.html">&#8962; LibVibes Home</a>
    <a class="home home-alt" href="index.html">&#8962; Main Page</a>`;

  const NAV_CSS = `
    .nav-links a.home-alt{background:transparent;color:var(--gold-light);box-shadow:inset 0 0 0 1px rgba(252,176,64,.55)}
    .nav-links a.home-alt:hover{background:var(--gold);color:var(--navy)}
    .nav-links a[aria-current="page"]{box-shadow:inset 0 -2px 0 var(--gold)}
    .nav-dd-trigger[aria-current="page"]{box-shadow:inset 0 -2px 0 var(--gold)}`;

  function injectCss() {
    if (document.getElementById("lv-nav-css")) return;
    const s = document.createElement("style");
    s.id = "lv-nav-css";
    s.textContent = NAV_CSS;
    document.head.appendChild(s);
  }

  function renderNav() {
    const wrap = document.querySelector(".nav-links");
    if (!wrap) return;
    injectCss();
    wrap.innerHTML = NAV_HTML;
    // Highlight the link that matches the current page.
    const here = (location.pathname.split("/").pop() || "libvibes.html");
    wrap.querySelectorAll("a[href]").forEach(a => {
      if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
    });
  }

  if (document.querySelector(".nav-links")) renderNav();
  else document.addEventListener("DOMContentLoaded", renderNav);
})();
