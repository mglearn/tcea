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
    { n: 18, slug: "collection-diversity-dashboard", title: "Collection Snapshot",         full: "Collection Diversity Snapshot Dashboard",level: "advanced",  type: "Operations",       blurb: "A collection-snapshot dashboard demo (the prompt builds the Google-Sheets-backed version)." }
  ];

  /* ---- The only line to edit as tools ship: which prompt numbers are built ---- */
  const BUILT = [6, 13, 17];

  const LVL = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };
  const byNum = Object.fromEntries(SOLUTIONS.map(s => [s.n, s]));

  // Expose for other scripts (e.g. the examples gallery)
  window.LIBVIBES = { SOLUTIONS, BUILT, byNum, LVL };

  // Inject the "Built Examples" dropdown menu, if present on this page
  const menu = document.querySelector(".nav-dd-menu");
  if (menu) {
    const items = BUILT.map(n => {
      const s = byNum[n];
      return `<a href="libvibes/${s.slug}/app.html" target="_blank" rel="noopener">${s.title} <small>· #${s.n} ${LVL[s.level]}</small></a>`;
    }).join("");
    menu.innerHTML = items + `<div class="dd-sep"></div><a href="libvibes-examples.html">All built examples &rarr;</a>`;
  }
})();
