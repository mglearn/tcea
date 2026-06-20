# VibeLib v1 — Vibe-Coded Starter Prompts for School Librarians

A library-focused companion to the TeacherHive / TCEA vibe-coding collection. Every prompt below is **fresh-from-scratch** — it produces a brand-new, self-contained project, not a customization of an existing tool. Each one targets either a **problem unique to running a K-12 library** or a **library learning exercise** (information literacy, research skills, shelving, creative literacy) that students actually do.

> **The four originals stay exactly as they are.** ShareSpace, WonderWall, StickyBoard, and the Book Recommendation Gallery are untouched. None of the prompts below duplicate them — they fill the gaps *around* them.

These are written for librarians who are **not developers**. Each prompt is numbered so you can say *"let's build out #7 and #13 as new components of index.html."*

---

## How to use this file

1. Pick prompts by **number** and **level** (Beginner → Intermediate → Advanced).
2. Paste the prompt text into ChatGPT, Claude, Gemini, or BoodleBox.
3. Iterate using the **VIBES framework** (below). The first answer is a starting point, not the finish line.
4. Host the result where it makes sense:
   - **Beginner / Intermediate** → one `index.html` file. Drop it on **GitHub Pages**, or paste the URL into a **Google Sites** "Embed → By URL."
   - **Advanced** → a **Google Apps Script Web App** backed by a Google Sheet (no servers, no cost, you own the data).

---

## The VIBES Framework

**"Vibe-coding"** means building a working tool by describing what you want in plain English and letting an AI write the code — no programming background required. It feels like a conversation, not an engineering project. But a conversation can wander, and the AI will happily build the *wrong* thing confidently. VIBES is the guardrail: a five-step loop that keeps you in charge of the outcome instead of just accepting whatever the AI hands back first.

Think of it as the difference between *ordering takeout* (you accept whatever arrives) and *cooking with a recipe* (you taste, adjust, and plate it yourself). VIBES is the recipe.

| Step | Letter | What you do | The question it answers |
|------|--------|-------------|--------------------------|
| **Vision** | **V** | Decide what you want *before* you open a chat window. Name the audience and the one job it must do. | "What am I actually making, and for whom?" |
| **Instruct** | **I** | Write a prompt that gives the AI enough context to start: your data, colors, constraints, and where it will live. | "Does the AI know enough to get it right?" |
| **Build** | **B** | Generate the code, then iterate conversationally — one feature at a time once the skeleton works. | "Is it coming together piece by piece?" |
| **Evaluate** | **E** | Run it and test it like a skeptical student would — on a phone *and* a laptop. Check facts, links, and logins. | "Does it really work, or does it just look like it does?" |
| **Ship** | **S** | Save, host, embed, or share the finished tool where students and staff already are. | "Can the people I built this for actually reach it?" |

### What each step really means

- **V — Vision.** This is the step people skip, and skipping it is why projects sprawl. Before you type a word to the AI, finish this sentence out loud: *"This is for ___ so they can ___."* One audience, one job. "A Dewey explorer for 4th graders so they can guess where a topic lives on the shelf" is a vision. "Something about the library" is not. A sharp vision is also your finish line — it tells you when you're *done* instead of endlessly adding features.

- **I — Instruct.** The AI is brilliant but it cannot read your mind or see your library. Everything it doesn't know, it will invent — fake hours, generic colors, placeholder books. Your job is to feed it the *real* specifics: your actual hours, your campus colors, your genres, your column names, and one constraint that matters most ("no logins," "must embed in Google Sites," "one HTML file"). The prompts in this guide are written to be strong starting instructions — but they get dramatically better when you paste in your real details.

- **B — Build.** Resist asking for everything at once. Get the **skeleton** working first (the layout, the basic flow), confirm it runs, *then* add one feature per turn: "now make the progress ring animate," "now add the confetti at 50%." Small steps mean that when something breaks, you know exactly which change caused it. If the AI gives you something broken, paste the error or describe what you see — "the button does nothing on my phone" — and let it fix that one thing.

- **E — Evaluate.** This is the step that separates a tool you trust from a demo that embarrasses you in front of a class. **Looking right is not the same as working.** Click every button. Try it on an actual phone, not just your laptop. Feed it the weird input a kid will (an empty search, a tricky call number, a double-tap). And for anything with *facts* — citations, Dewey ranges, primary-vs-secondary answers — verify it against a real source, because a confident wrong answer is worse than none. If it fails, you're not back to square one; you loop back to **Build** with a specific fix in hand.

- **S — Ship.** A tool nobody can find helps nobody. Shipping means putting the working result where your people already are: a GitHub Pages link, an embed in your Google Site, a QR code at the shelf, a loop on the lobby monitor. Match the home to the job — a countdown banner belongs on a hallway screen; a citation helper belongs next to your database links.

> **VIBES is a loop, not a staircase.** You will almost always cycle **Build → Evaluate → Build** several times before you Ship — and that's the process working, not failing. The AI's first answer is a *starting point*, never the finish line. Each prompt below includes a short **VIBES block** that walks you through these five steps for that specific build, so you're never staring at a blank chat window wondering what to ask next.

### Design DNA shared by every prompt

So your projects feel like a family, every prompt asks the AI for:

- **Responsive design** — works thumb-first on a phone, scales up cleanly to a projector.
- **Interactivity** — at least one delightful micro-interaction (hover, tap, drag, animate, reveal).
- **Color with intent** — a small, named palette. Default (TCEA-style): navy `#0A3476`, gold `#FCB040`, teal `#0E6B8A` on a soft off-white. Swap freely for your campus colors.
- **Ingenuity** — one clever touch a store-bought tool would not give you.
- **Accessibility** — keyboard-navigable, real contrast, alt text, no account required (WCAG 2.1 AA mindset).
- **Zero-dependency delivery** — one HTML file, plain CSS and JavaScript, no build step, no libraries to install.

---

# 🟢 Beginner — Single file, no shared data, ready in one sitting

> Produces one `index.html`. Host on GitHub Pages or embed in Google Sites. Nothing to break.

---

### Prompt 1 — Library Welcome & Hours Card

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (HTML, CSS, and JavaScript in one file, no external libraries)
that is a beautiful, mobile-first "Library at a Glance" info card I can embed in
Google Sites.

It should show:
- The library name and a one-line welcome message at the top
- Today's hours, with the CURRENT day auto-highlighted using the visitor's clock
- A simple weekly hours table
- Three "quick info" tiles: checkout limits, how to renew, and Wi-Fi/printing notes
- A friendly "Open now / Closed now" status pill that updates based on the time of day

Design:
- Responsive, thumb-first; the tiles stack on phones and sit in a row on wide screens
- Color palette: navy #0A3476, gold #FCB040, soft off-white background
- A gentle fade-in on load and a subtle hover lift on the tiles
- Large, readable type and strong contrast

Put placeholder text I can easily edit at the top of the file with clear comments.
Give me the complete file in one response.
```

**VIBES**
- **V** — A no-login info card answering "are you open and what can I do here?" for students and parents.
- **I** — Hand the AI your real hours and policies; name the navy/gold palette and the Google Sites embed.
- **B** — Get the layout first, then the live "open now" clock logic, then the polish.
- **E** — Change your clock (or the test time) to confirm the right day highlights and the pill flips.
- **S** — Save as `index.html`, push to GitHub Pages, paste the URL into Google Sites → Embed.

---

### Prompt 2 — "Find Your Next Read" Genre Quiz

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is a fun "What Should I Read Next?"
quiz for students in grades 4 through 8.

How it works:
- 5 light, friendly multiple-choice questions about mood, pace, and interests
- At the end it reveals ONE recommended genre (Fantasy, Mystery, Realistic Fiction,
  Graphic Novel, Nonfiction, or Sci-Fi) with a short blurb and 3 sample titles
- A "Try again" button resets the quiz

Design:
- Mobile-first, one question on screen at a time with a progress bar
- Each genre result has its own accent color and a small emoji or icon
- Smooth slide or fade transition between questions
- Palette base: navy #0A3476 and gold #FCB040; let each result tint the card

Make the questions and book titles easy to edit in clearly-labeled arrays at the
top of the script. Give me the complete file in one response.
```

**VIBES**
- **V** — Turn "I don't know what to read" into a 60-second interactive recommendation.
- **I** — Give it your actual collection's titles so recommendations point at books you own.
- **B** — Build the question engine first; add the result-reveal animation and per-genre colors second.
- **E** — Click through every answer path; confirm every genre result fires and the titles are real.
- **S** — Embed in your catalog page or post a QR code at the shelf ends.

---

### Prompt 3 — Reading Challenge Tracker (saves on the device)

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is a personal "Reading Challenge"
tracker a student can use on their own Chromebook or phone.

Features:
- A goal of 20 books for the year (let me change the number in one place)
- A "+ Add a book I finished" button that asks for the title and saves it
- A big animated progress ring or bar showing books read vs. the goal
- A list of finished books with the date added and a delete (x) on each
- Milestone celebrations: a little confetti burst or badge at 25%, 50%, 75%, 100%
- All data saved in the browser with localStorage so it survives a refresh
- A "Save to file" and "Load from file" pair that exports and imports all the data as a JSON file (so it can move between devices or be backed up); if I ask, also offer a Google Apps Script + Google Sheet version that stores the data in my account

Design:
- Mobile-first, celebratory feel, palette navy #0A3476 + gold #FCB040 + teal #0E6B8A
- The progress ring animates when a book is added

Give me the complete file in one response.
```

**VIBES**
- **V** — A private, no-account habit tracker that makes progress feel rewarding.
- **I** — Specify localStorage (no login, data stays on the device) and the celebration moments.
- **B** — Get add/list/delete working first, then the animated ring, then the confetti milestones.
- **E** — Add books, refresh, confirm the list persists; hit a milestone to see the celebration.
- **S** — Link it from your library homepage; students bookmark it on their own devices.

---

### Prompt 4 — Dewey Decimal Explorer Wheel

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is an interactive "Dewey Decimal
Explorer" for elementary and middle school students.

It should:
- Show the 10 main Dewey classes (000 Computers/Info, 100 Philosophy/Psychology,
  200 Religion, 300 Social Sciences, 400 Language, 500 Science, 600 Technology,
  700 Arts/Recreation, 800 Literature, 900 History/Geography) as 10 clickable
  segments of a colorful wheel or a grid of cards
- When a student clicks one, reveal a plain-language description, 2 or 3 example
  topics, and a "where to find it in our library" placeholder line I can edit
- A search box where a student types a topic (like "dinosaurs" or "soccer") and it
  highlights the most likely Dewey class

Design:
- Mobile-first; the wheel becomes a stacked grid on small screens
- 10 distinct, friendly colors, one per class
- A smooth highlight/zoom animation on the selected class

Make the topic-to-class keyword list easy to edit. Give me the complete file.
```

**VIBES**
- **V** — Make the Dewey system feel like a game board instead of a wall chart.
- **I** — Provide local shelf-location notes and a starter keyword list (dinosaurs → 500s, etc.).
- **B** — Render the 10 segments first; wire up click-to-reveal; add the search-highlight last.
- **E** — Test on a tablet at the shelf; try odd topics in the search box and fix misroutes.
- **S** — Project it during orientation, or embed in your Google Site as a self-serve station.

---

### Prompt 5 — Library Event Countdown Banner

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is a bold, animated countdown banner
for a library event (for example Banned Books Week, a Book Fair, or an author visit).

It should:
- Count down in days, hours, minutes, seconds to a target date I set in one place
- Show the event name, a one-line description, and a "Learn more" button with a link
- When the countdown hits zero, switch to a celebratory "It's here!" message
- Cycle through 3 short rotating tag lines or fun facts above the timer

Design:
- Full-width, projector-friendly AND phone-friendly
- Big gold #FCB040 numerals on a navy #0A3476 background, high drama
- The seconds digit ticks with a subtle flip or pulse animation
- The rotating tag lines fade in and out

Give me the complete file in one response, with the date, event name, and tag lines
clearly marked for editing at the top.
```

**VIBES**
- **V** — Build hype for one upcoming event with a screen that earns a glance.
- **I** — Give it the exact date/time, event name, and link; specify the high-drama navy/gold look.
- **B** — Get the countdown math right first, then the zero-state switch, then the rotating taglines.
- **E** — Set the target a minute out to watch the zero-state trigger; check it on the hallway display.
- **S** — Loop it on a lobby monitor and embed a small version in your Google Site sidebar.

---

### Prompt 6 — Call Number Shelving Game *(library skill)*

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is a "Shelve It Right!" game where
students practice putting books in correct shelf order — a real library skill that
nothing else teaches well.

Two modes I can switch between:
- DEWEY mode: students drag a row of scrambled nonfiction spine labels (e.g. 595.7,
  595.789, 595.79, 599.2, 599.65) into correct ascending order
- FICTION mode: students order scrambled author-last-name labels (e.g. ROW, ROWE,
  ROWLING, ROY) the way fiction is shelved alphabetically

How it plays:
- 5 spine "labels" appear scrambled; students drag to reorder them on a shelf
- A "Check my shelf" button marks each spine correct (green) or out of place (red)
  and shows the number it should move to
- A short "Why?" tooltip explains the rule when something is wrong
- A "New round" button generates a fresh scrambled set
- A simple score/streak counter

Design:
- Mobile-first and touch-draggable; spines reflow smoothly
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A; a wooden-shelf-tone backdrop
- Satisfying snap animation when a spine drops into place

Make the practice sets easy to edit. Give me the complete file in one response.
```

**VIBES**
- **V** — Drill the one hands-on skill (shelf order) that students and aides genuinely need.
- **I** — Provide real call numbers and author names from your stacks so the practice is authentic.
- **B** — Get drag-reorder working first, then the check/feedback logic, then the "why" rules.
- **E** — Test the trickiest cases (e.g., 595.7 vs 595.789) on a touchscreen; confirm the ordering is correct.
- **S** — Use it to train student library aides; embed in Google Sites for whole-class practice.

---

### Prompt 7 — Book Spine Poetry Maker *(creative literacy)*

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is a digital "Book Spine Poetry" maker —
a classic library creativity activity where stacked book titles become a poem.

Features:
- A palette of draggable "book spines," each a colored bar with an editable title
- Students drag spines into a vertical stack to compose a poem from the titles
- They can add their own spine, type any title on it, and pick its color
- A "Shuffle the shelf" button reorders the unused spines for inspiration
- A "Download my poem" button that saves the finished stack as an image (PNG)
- A starter set of 12 evocative titles I can edit

Design:
- Mobile-first; touch-draggable spines that look like real book spines (varied
  heights, fonts, and colors)
- Warm, bookish palette; gentle tilt and shadow on each spine
- A clean "stage" area where the stacked poem reads top to bottom

Give me the complete file in one response.
```

**VIBES**
- **V** — A low-floor, high-ceiling poetry activity that celebrates the collection itself.
- **I** — Seed it with real titles from your shelves; ask for PNG export so poems can be displayed.
- **B** — Get drag-into-stack working first; add custom spines + colors; add the image export last.
- **E** — Compose a poem on a phone, download the PNG, and confirm it looks shareable.
- **S** — Print the downloads for a hallway display; embed the maker in Google Sites for National Poetry Month.

---

# 🟡 Intermediate — Richer interaction and library learning, still one file

> Still a single `index.html` (localStorage where useful). These lean into **information literacy and research skills** — the curricular heart of library instruction.

---

### Prompt 8 — Reading Bingo Board Generator (interactive + printable)

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that generates a 5x5 "Reading Bingo" board
for a summer or seasonal reading program.

Features:
- A pool of about 30 reading challenges I can edit (e.g. "Read a book set in space,"
  "Read a graphic novel," "Read outside") shuffled into a 5x5 grid with a FREE center
- A "Shuffle new board" button so each student gets a different board
- Click/tap a square to mark it done; marked squares get a colored stamp
- Auto-detects and celebrates a completed row, column, or diagonal (BINGO!)
- A "Print my board" button that prints cleanly on one page
- localStorage so a student's marked squares survive a refresh
- A "Save to file" and "Load from file" pair that exports and imports the board and marks as a JSON file (to move between devices or keep a backup); if I ask, also offer a Google Apps Script + Google Sheet version

Design:
- Mobile-first; the 5x5 grid stays square and tappable on phones
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A; stamped squares animate in
- Clean black-and-white print layout when printed

Give me the complete file in one response.
```

**VIBES**
- **V** — One board that works as a digital game *and* a printable handout.
- **I** — Supply your real challenge list; specify shuffle, stamp, BINGO detection, and print.
- **B** — Grid + shuffle first; tap-to-stamp + persistence next; BINGO detection and print styles last.
- **E** — Force a row to fill and confirm the BINGO fires; print to PDF and check it fits one page.
- **S** — Embed in Google Sites for at-home play; print copies for the front desk.

---

### Prompt 9 — Book of the Week Spotlight Carousel

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is a rotating "Staff Picks / Book of
the Week" spotlight I can embed in Google Sites and on a lobby screen.

Features:
- A data array of books, each with: cover image URL, title, author, a one-sentence
  pitch, a genre tag, and an optional "Reserve / Find it" link
- A carousel that auto-advances every several seconds with manual next/prev arrows
  and clickable dots
- Each slide shows the cover, the pitch, the author, and a colored genre pill
- Pause auto-advance when a viewer hovers or focuses the carousel
- Keyboard arrow support and swipe support on touch screens

Design:
- Mobile-first; on wide screens show cover on the left, text on the right
- Palette navy #0A3476 + gold #FCB040; each genre pill has its own color
- Smooth cross-fade or slide transition between books

Put the book list in a clearly-labeled array at the top. Give me the complete file.
```

**VIBES**
- **V** — A self-running display that keeps fresh recommendations in front of students.
- **I** — Provide 5–10 real books with cover URLs and pitches; name the auto-advance timing.
- **B** — Static slide first, then navigation (arrows/dots/swipe), then auto-advance + pause-on-hover.
- **E** — Test swipe on a phone, arrows on a keyboard, and confirm hover pauses the timer.
- **S** — Embed in Google Sites and loop it on the lobby monitor; update the array weekly.

---

### Prompt 10 — Citation Quick-Helper (MLA & APA)

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is a friendly "Citation Quick-Helper"
for students citing a book or a website.

Features:
- A toggle between MLA and APA style
- A toggle between "Book" and "Website" source type
- A short form (author, title, publisher/site name, year, URL, date accessed) that
  shows only the fields relevant to the chosen source type
- A live-updating formatted citation as the student types
- A "Copy citation" button with a confirmation message
- A small "Double-check with your teacher" disclaimer line

Design:
- Mobile-first, calm and clean, palette navy #0A3476 + teal #0E6B8A
- Fields that don't apply hide with a smooth height/fade transition
- The formatted output sits in a highlighted card with the right hanging-indent look

Be accurate with MLA 9th and APA 7th formatting rules. Give me the complete file.
```

**VIBES**
- **V** — A guided helper that teaches the *shape* of a citation, not a black box.
- **I** — Tell it which styles/source types you need and to show fields conditionally.
- **B** — Build the form + live output first; add the MLA/APA logic; add copy + transitions.
- **E** — Accuracy matters most — verify several examples against an official MLA/APA guide.
- **S** — Embed in your research-help Google Site next to your database links.

---

### Prompt 11 — Interactive Library Floor Map

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is an interactive floor map of the
library so students can find sections fast.

Features:
- A simple top-down layout drawn with HTML/CSS boxes (no image needed) representing
  zones: Fiction, Nonfiction, Graphic Novels, Picture Books, Makerspace, Computers,
  Quiet Reading, and the Front Desk — I'll rename/rearrange them
- Clicking a zone highlights it and opens a small panel with a description, the
  Dewey range or genre it holds, and a tip ("Ask at the desk for...")
- A search box: type a topic and it highlights the matching zone
- A legend with a color per zone

Design:
- Mobile-first; the map scales to fit the screen and zones stay tappable
- Distinct, accessible colors per zone; selected zone gets an outline + gentle zoom
- Palette anchored in navy #0A3476 and gold #FCB040

Make the zone names, positions, and descriptions easy to edit. Give me the complete file.
```

**VIBES**
- **V** — Replace "where is it?" with a tap-and-find map students use solo.
- **I** — Describe your actual room layout in rough rows/columns so the AI can place the boxes.
- **B** — Lay out the zones first; add click-to-highlight + info panel; add the search last.
- **E** — Hand a student a phone and watch them find Graphic Novels without help.
- **S** — Post a QR code at the entrance that opens the embedded Google Sites version.

---

### Prompt 12 — Source Evaluation Lab (CRAAP Test) *(information literacy)*

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is an interactive "Is This Source
Trustworthy?" lab teaching the CRAAP test (Currency, Relevance, Authority,
Accuracy, Purpose) to middle and high school students.

How it works:
- A short intro card explaining the 5 CRAAP factors in student-friendly language
- The student works through a sample source (I can provide a few example "sources"
  with title, author, date, publisher, and a snippet)
- For each of the 5 factors, the student rates it 1–5 with a slider and reads a
  guiding question (e.g., Authority: "Who wrote this and are they qualified?")
- At the end, a "Source Confidence" meter combines the ratings into a visual score
  with a plain-language verdict (Strong / Mixed / Be Careful)
- A "Try another source" button loads the next example

Design:
- Mobile-first; one factor at a time with a progress indicator
- Each factor has its own accent color; the final meter animates as it fills
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A

Make the example sources and guiding questions easy to edit. Give me the complete file.
```

**VIBES**
- **V** — Turn an abstract checklist into a hands-on judgment students actually practice.
- **I** — Provide 2–3 realistic example sources (one strong, one weak) so the lesson lands.
- **B** — Build the factor-by-factor flow first; add the combined confidence meter; add multiple sources.
- **E** — Run a weak source and confirm the verdict reads "Be Careful"; check the wording with a teacher.
- **S** — Assign it during a research unit; embed in your info-literacy Google Site.

---

### Prompt 13 — Boolean Search Trainer *(research skills)*

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is a "Boolean Search Trainer" game
teaching AND, OR, NOT, quotes, and parentheses to students using databases.

How it works:
- A small built-in pretend "database" of ~20 fake article cards, each with a few
  keyword tags (I can edit these)
- The student types a Boolean query (supports AND, OR, NOT, "quoted phrases",
  and parentheses) and the matching cards appear live
- Challenge mode: a prompt like "Find articles about sharks but NOT shark attacks"
  with a target result set; the app checks whether their query returns the right cards
- A hints panel explaining each operator with a quick example
- A score for challenges solved

Design:
- Mobile-first; a clean query bar at the top, results as cards below
- Matching keywords highlight inside the result cards
- Palette navy #0A3476 + teal #0E6B8A; correct-challenge feedback animates in

Make the fake article set and the challenges easy to edit. Build a small, correct
Boolean parser. Give me the complete file in one response.
```

**VIBES**
- **V** — Let students *feel* how operators change results before they touch a real database.
- **I** — Define your fake article tags and the specific challenges you want students to solve.
- **B** — Get the parser + live filtering working first; add challenge-checking; add hints and scoring.
- **E** — Test edge cases: NOT, nested parentheses, quoted phrases — confirm results are correct.
- **S** — Pair it with a screencast of your real databases; embed in your research Google Site.

---

### Prompt 14 — Primary vs. Secondary Source Sorter *(information literacy)*

```
I am a school librarian. I am not a developer. Build me a single self-contained
index.html file (no external libraries) that is a drag-and-sort game for "Primary
vs. Secondary Sources," a core social-studies and research concept.

How it works:
- A deck of source cards (e.g., "a soldier's wartime diary," "a textbook chapter,"
  "a photograph from the event," "an encyclopedia entry," "a recorded interview")
  that I can fully edit
- Two labeled drop zones: PRIMARY and SECONDARY
- Students drag each card into a zone; a "Check" button marks each right or wrong
- Wrong answers flip to show a one-line explanation of why
- A score and a "Play again" button that reshuffles the deck

Design:
- Mobile-first and touch-draggable; cards animate into the drop zones
- Clear color coding for the two zones; correct cards glow, wrong cards shake gently
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A

Make the card deck and explanations easy to edit. Give me the complete file.
```

**VIBES**
- **V** — A quick, replayable check that a tricky distinction actually clicked.
- **I** — Write source examples that match the units your teachers teach (history, science, ELA).
- **B** — Get drag-to-zone working first; add the check + explanations; add scoring and reshuffle.
- **E** — Sort a full deck on a touchscreen; confirm every explanation is accurate and fair.
- **S** — Hand it to a teacher as a station; embed in your Google Site for review.

---

# 🔴 Advanced — Shared data, your Google Drive, you own it

> A **Google Apps Script Web App** backed by a Google Sheet. No servers, no subscriptions, no student logins, and the data lives in *your* account. Each solves a real library operations problem the originals don't cover. Plan on a setup step the AI can walk you through.

---

### Prompt 15 — "Is It On the Shelf?" Catalog Lookup *(unique librarian problem)*

```
I am a school librarian. I am not a developer, but I can follow setup steps. Build
me a Google Apps Script web app, backed by a Google Sheet, that lets students check
whether a book is available without logging in.

Setup:
- My Google Sheet has columns: Title, Author, Genre, Call Number, Status
  (In / Checked Out / On Hold), and Location
- The web app reads from this Sheet live

Student-facing search page:
- One search box that matches title OR author as the student types (live filtering)
- Results as cards: title, author, call number, location, and a color-coded status
  pill (green In, amber On Hold, red Checked Out)
- A genre filter and a "show only available" toggle
- A friendly empty state when nothing matches, suggesting they ask at the desk

Design:
- Mobile-first; fast, no page reloads; palette navy #0A3476 + gold #FCB040
- Status pills are color-coded AND labeled in text (don't rely on color alone)
- Subtle skeleton/loading shimmer while results fetch

Walk me through connecting the Sheet and deploying. Give me all the files.
```

**VIBES**
- **V** — Turn a spreadsheet you already keep into a self-serve availability checker.
- **I** — Give it your exact column names and status values so the backend maps cleanly.
- **B** — Sheet read + search first; add filters and status colors; add loading states.
- **E** — Search real titles, flip a status in the Sheet, confirm the app reflects it.
- **S** — Embed the search page in your catalog Google Site; share the link on signage.

---

### Prompt 16 — Makerspace / Study Room Sign-Up Board *(unique librarian problem)*

```
I am a school librarian. I am not a developer, but I can follow setup steps. Build
me a Google Apps Script web app, backed by a Google Sheet, for signing up to use the
Makerspace stations (or study rooms) during set time slots.

Setup:
- A Google Sheet stores bookings: Date, Time Slot, Station/Room, Student Name, Grade
- I can edit the list of stations and the list of time slots in one place

Student-facing page:
- Pick a date, then see a grid of time slots x stations
- Open slots show a "Sign up" button; taken slots show the booked name (or just
  "Reserved" if I turn name-hiding on)
- Submitting writes the booking to the Sheet and refreshes the grid
- Also a "Save to file" / "Load from file" option that exports and imports the bookings as a JSON file (handy for backups or moving the demo between devices)
- Prevents double-booking the same slot/station

Admin page:
- Password-protected; view all bookings for a date and cancel any with one click

Design:
- Mobile-first; the grid scrolls horizontally on phones with sticky time labels
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A; open vs. taken slots clearly distinct
- A confirmation animation when a booking succeeds

Walk me through the Sheet setup and deployment. Give me all the files.
```

**VIBES**
- **V** — Replace the paper clipboard with a live, double-booking-proof sign-up sheet.
- **I** — Define your stations, slots, and Sheet columns; specify the double-booking guard.
- **B** — Read + render-the-grid first; add booking writes + the conflict check; add admin cancel.
- **E** — Have two people try the same slot at once; confirm only one wins and the grid updates.
- **S** — Deploy and embed in Google Sites; bookmark it on the Makerspace tablet.

---

### Prompt 17 — Mock Caldecott / Newbery Award Voting Station *(library learning exercise)*

```
I am a school librarian. I am not a developer, but I can follow setup steps. Build
me a Google Apps Script web app, backed by a Google Sheet, for running a "Mock
Caldecott" (or Mock Newbery) student book-award vote.

Setup:
- I maintain a Google Sheet of nominee books: Title, Author, cover image URL, and a
  one-line description
- A second sheet/tab stores votes: Timestamp, Class, and the book voted for
- Also a "Save to file" / "Load from file" option that exports and imports the votes as a JSON file (handy for backups or moving the demo between devices)
- I can open and close voting with a setting

Student-facing ballot page:
- A gallery of nominee cards (cover, title, author, blurb)
- A student picks ONE book and submits a short "because..." reason (optional)
- One friendly confirmation; simple guard against rapid repeat votes from one device

Results page:
- A live, animated bar chart of votes per book
- A toggle to show or hide results while voting is open (so it doesn't sway voters)
- A scrolling wall of the "because..." reasons (no student names shown)

Admin page:
- Password-protected; open/close voting, clear the results, and export

Design:
- Mobile-first AND projector-friendly for the reveal assembly
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A; a gold winner's medal/glow on the leader
- Bars grow with a smooth animation

Walk me through the Sheet setup and deployment. Give me all the files.
```

**VIBES**
- **V** — Run a real democratic reading event: students read, deliberate, and vote on a winner.
- **I** — Load your nominee list with covers; decide whether reasons are required and results hidden.
- **B** — Build the ballot + vote storage first; add the results chart; add the open/close admin controls.
- **E** — Cast votes across classes, confirm the tally and the "hide results" toggle behave.
- **S** — Embed the ballot in Google Sites; project the animated results at the award-reveal assembly.

---

### Prompt 18 — Collection Diversity Snapshot Dashboard *(unique librarian problem)*

```
I am a school librarian. I am not a developer, but I can follow setup steps. Build
me a Google Apps Script web app, backed by a Google Sheet, that gives me a visual
"Collection Snapshot" dashboard from a list of my titles — to support weeding,
diversity audits, and collection-development conversations.

Setup:
- My Google Sheet has columns I'll define, such as: Title, Author, Genre, Format,
  Copyright Year, Last Checkout Date, and Representation Tags (free text I add)
- The dashboard reads the Sheet live; treat missing cells gracefully

Dashboard (for me, the librarian — password-protected):
- Headline stats: total titles, average/median copyright year, % checked out in the
  last 12 months
- A bar chart of titles by Genre and one by Format
- A histogram of titles by copyright decade (spotlights an aging collection)
- A "Weeding candidates" list: titles older than a year cutoff I set AND not checked
  out since a date I set (basic CREW/MUSTIE-style flag), with a reason shown
- A simple breakdown of Representation Tags so I can see gaps at a glance

Design:
- Mobile-first but data-dense on desktop; clean charts drawn in plain
  HTML/CSS/Canvas (no chart libraries)
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A; charts animate on load
- Every chart has a plain-language caption explaining what it suggests

Walk me through the Sheet setup and deployment. Give me all the files.
```

**VIBES**
- **V** — Turn an export you already have into evidence for weeding and budget requests.
- **I** — Map your real column names and set your weeding cutoffs (age + last-checkout date).
- **B** — Get the headline stats + one chart working first; add the rest of the charts; add the weeding flag last.
- **E** — Sanity-check the numbers against the raw Sheet; confirm weeding candidates match your judgment.
- **S** — Keep it private (password-gated); screenshot charts for your collection-development report.

---

## Quick reference — pick by level

| # | Project | Level | Type | Stores data? | Best host |
|---|---------|-------|------|--------------|-----------|
| 1 | Library Welcome & Hours Card | 🟢 Beginner | Operations | No | GitHub Pages / Sites embed |
| 2 | "Find Your Next Read" Genre Quiz | 🟢 Beginner | Reader advisory | No | GitHub Pages / Sites embed |
| 3 | Reading Challenge Tracker | 🟢 Beginner | Engagement | Device (localStorage) | GitHub Pages / Sites embed |
| 4 | Dewey Decimal Explorer Wheel | 🟢 Beginner | Library skill | No | Projector / Sites embed |
| 5 | Event Countdown Banner | 🟢 Beginner | Promotion | No | Lobby screen / Sites embed |
| 6 | Call Number Shelving Game | 🟢 Beginner | Library skill | No | GitHub Pages / Sites embed |
| 7 | Book Spine Poetry Maker | 🟢 Beginner | Creative literacy | No | Projector / Sites embed |
| 8 | Reading Bingo Generator | 🟡 Intermediate | Engagement | Device (localStorage) | GitHub Pages / Sites embed |
| 9 | Book of the Week Carousel | 🟡 Intermediate | Promotion | No (edit array) | Lobby screen / Sites embed |
| 10 | Citation Quick-Helper | 🟡 Intermediate | Info literacy | No | Sites embed |
| 11 | Interactive Library Floor Map | 🟡 Intermediate | Operations | No | QR at entrance / Sites embed |
| 12 | Source Evaluation Lab (CRAAP) | 🟡 Intermediate | Info literacy | No | Sites embed |
| 13 | Boolean Search Trainer | 🟡 Intermediate | Research skills | No | Sites embed |
| 14 | Primary vs. Secondary Sorter | 🟡 Intermediate | Info literacy | No | Sites embed |
| 15 | "Is It On the Shelf?" Lookup | 🔴 Advanced | Operations | Google Sheet | Apps Script + Sites |
| 16 | Makerspace Sign-Up Board | 🔴 Advanced | Operations | Google Sheet | Apps Script + Sites |
| 17 | Mock Award Voting Station | 🔴 Advanced | Library event | Google Sheet | Apps Script + Sites |
| 18 | Collection Diversity Snapshot | 🔴 Advanced | Operations | Google Sheet | Apps Script + Sites |

---

*VibeLib v1 — a fresh-from-scratch, library-focused companion to the "Vibe Your Way to Free" / TeacherHive collection. The four originals (ShareSpace, WonderWall, StickyBoard, Book Recommendation Gallery) stay as they are. Tell me which numbers you'd like to build into a new component of `index.html` and I'll wire them up.*
