/* LibVibes shared prompt data — used by the main page (collection cards)
   and the prompt library page (libvibes-library.html). */
window.LV_PROMPTS = [
{n:1,level:"beginner",type:"Operations",host:"GitHub Pages / Sites",title:"Library Welcome & Hours Card",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (HTML, CSS, and JavaScript in one file, no external libraries) that is a beautiful, mobile-first "Library at a Glance" info card I can embed in Google Sites.

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

Put placeholder text I can easily edit at the top of the file with clear comments. Give me the complete file in one response.`,
vibes:["A no-login info card answering \"are you open and what can I do here?\" for students and parents.","Hand the AI your real hours and policies; name the navy/gold palette and the Google Sites embed.","Get the layout first, then the live \"open now\" clock logic, then the polish.","Change your clock (or the test time) to confirm the right day highlights and the pill flips.","Save as index.html, push to GitHub Pages, paste the URL into Google Sites → Embed."]},

{n:2,level:"beginner",type:"Reader advisory",host:"GitHub Pages / Sites",title:"\"Find Your Next Read\" Genre Quiz",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a fun "What Should I Read Next?" quiz for students in grades 4 through 8.

How it works:
- 5 light, friendly multiple-choice questions about mood, pace, and interests
- At the end it reveals ONE recommended genre (Fantasy, Mystery, Realistic Fiction, Graphic Novel, Nonfiction, or Sci-Fi) with a short blurb and 3 sample titles
- A "Try again" button resets the quiz

Design:
- Mobile-first, one question on screen at a time with a progress bar
- Each genre result has its own accent color and a small emoji or icon
- Smooth slide or fade transition between questions
- Palette base: navy #0A3476 and gold #FCB040; let each result tint the card

Make the questions and book titles easy to edit in clearly-labeled arrays at the top of the script. Give me the complete file in one response.`,
vibes:["Turn \"I don't know what to read\" into a 60-second interactive recommendation.","Give it your actual collection's titles so recommendations point at books you own.","Build the question engine first; add the result-reveal animation and per-genre colors second.","Click through every answer path; confirm every genre result fires and the titles are real.","Embed in your catalog page or post a QR code at the shelf ends."]},

{n:3,level:"beginner",type:"Engagement",host:"GitHub Pages / Sites",title:"Reading Challenge Tracker",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a personal "Reading Challenge" tracker a student can use on their own Chromebook or phone.

Features:
- A goal of 20 books for the year (let me change the number in one place)
- A "+ Add a book I finished" button that asks for the title and saves it
- A big animated progress ring or bar showing books read vs. the goal
- A list of finished books with the date added and a delete (x) on each
- Milestone celebrations: a little confetti burst or badge at 25%, 50%, 75%, 100%
- All data saved in the browser with localStorage so it survives a refresh

Design:
- Mobile-first, celebratory feel, palette navy #0A3476 + gold #FCB040 + teal #0E6B8A
- The progress ring animates when a book is added

Give me the complete file in one response.`,
vibes:["A private, no-account habit tracker that makes progress feel rewarding.","Specify localStorage (no login, data stays on the device) and the celebration moments.","Get add/list/delete working first, then the animated ring, then the confetti milestones.","Add books, refresh, confirm the list persists; hit a milestone to see the celebration.","Link it from your library homepage; students bookmark it on their own devices."]},

{n:4,level:"beginner",type:"Library skill",host:"Projector / Sites",title:"Dewey Decimal Explorer Wheel",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is an interactive "Dewey Decimal Explorer" for elementary and middle school students.

It should:
- Show the 10 main Dewey classes (000 Computers/Info, 100 Philosophy/Psychology, 200 Religion, 300 Social Sciences, 400 Language, 500 Science, 600 Technology, 700 Arts/Recreation, 800 Literature, 900 History/Geography) as 10 clickable segments of a colorful wheel or a grid of cards
- When a student clicks one, reveal a plain-language description, 2 or 3 example topics, and a "where to find it in our library" placeholder line I can edit
- A search box where a student types a topic (like "dinosaurs" or "soccer") and it highlights the most likely Dewey class

Design:
- Mobile-first; the wheel becomes a stacked grid on small screens
- 10 distinct, friendly colors, one per class
- A smooth highlight/zoom animation on the selected class

Make the topic-to-class keyword list easy to edit. Give me the complete file.`,
vibes:["Make the Dewey system feel like a game board instead of a wall chart.","Provide local shelf-location notes and a starter keyword list (dinosaurs → 500s, etc.).","Render the 10 segments first; wire up click-to-reveal; add the search-highlight last.","Test on a tablet at the shelf; try odd topics in the search box and fix misroutes.","Project it during orientation, or embed in your Google Site as a self-serve station."]},

{n:5,level:"beginner",type:"Promotion",host:"Lobby screen / Sites",title:"Library Event Countdown Banner",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a bold, animated countdown banner for a library event (for example Banned Books Week, a Book Fair, or an author visit).

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

Give me the complete file in one response, with the date, event name, and tag lines clearly marked for editing at the top.`,
vibes:["Build hype for one upcoming event with a screen that earns a glance.","Give it the exact date/time, event name, and link; specify the high-drama navy/gold look.","Get the countdown math right first, then the zero-state switch, then the rotating taglines.","Set the target a minute out to watch the zero-state trigger; check it on the hallway display.","Loop it on a lobby monitor and embed a small version in your Google Site sidebar."]},

{n:6,level:"beginner",type:"Library skill",host:"GitHub Pages / Sites",title:"Call Number Shelving Game",built:"callnumber-game.html",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a "Shelve It Right!" game where students practice putting books in correct shelf order — a real library skill that nothing else teaches well.

Two modes I can switch between:
- DEWEY mode: students drag a row of scrambled nonfiction spine labels (e.g. 595.7, 595.789, 595.79, 599.2, 599.65) into correct ascending order
- FICTION mode: students order scrambled author-last-name labels (e.g. ROW, ROWE, ROWLING, ROY) the way fiction is shelved alphabetically

How it plays:
- 5 spine "labels" appear scrambled; students drag to reorder them on a shelf
- A "Check my shelf" button marks each spine correct (green) or out of place (red) and shows the number it should move to
- A short "Why?" tooltip explains the rule when something is wrong
- A "New round" button generates a fresh scrambled set
- A simple score/streak counter

Design:
- Mobile-first and touch-draggable; spines reflow smoothly
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A; a wooden-shelf-tone backdrop
- Satisfying snap animation when a spine drops into place

Make the practice sets easy to edit. Give me the complete file in one response.`,
vibes:["Drill the one hands-on skill (shelf order) that students and aides genuinely need.","Provide real call numbers and author names from your stacks so the practice is authentic.","Get drag-reorder working first, then the check/feedback logic, then the \"why\" rules.","Test the trickiest cases (e.g., 595.7 vs 595.789) on a touchscreen; confirm the ordering is correct.","Use it to train student library aides; embed in Google Sites for whole-class practice."]},

{n:7,level:"beginner",type:"Creative literacy",host:"Projector / Sites",title:"Book Spine Poetry Maker",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a digital "Book Spine Poetry" maker — a classic library creativity activity where stacked book titles become a poem.

Features:
- A palette of draggable "book spines," each a colored bar with an editable title
- Students drag spines into a vertical stack to compose a poem from the titles
- They can add their own spine, type any title on it, and pick its color
- A "Shuffle the shelf" button reorders the unused spines for inspiration
- A "Download my poem" button that saves the finished stack as an image (PNG)
- A starter set of 12 evocative titles I can edit

Design:
- Mobile-first; touch-draggable spines that look like real book spines (varied heights, fonts, and colors)
- Warm, bookish palette; gentle tilt and shadow on each spine
- A clean "stage" area where the stacked poem reads top to bottom

Give me the complete file in one response.`,
vibes:["A low-floor, high-ceiling poetry activity that celebrates the collection itself.","Seed it with real titles from your shelves; ask for PNG export so poems can be displayed.","Get drag-into-stack working first; add custom spines + colors; add the image export last.","Compose a poem on a phone, download the PNG, and confirm it looks shareable.","Print the downloads for a hallway display; embed the maker in Google Sites for National Poetry Month."]},

{n:8,level:"intermediate",type:"Engagement",host:"GitHub Pages / Sites",title:"Reading Bingo Board Generator",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that generates a 5x5 "Reading Bingo" board for a summer or seasonal reading program.

Features:
- A pool of about 30 reading challenges I can edit (e.g. "Read a book set in space," "Read a graphic novel," "Read outside") shuffled into a 5x5 grid with a FREE center
- A "Shuffle new board" button so each student gets a different board
- Click/tap a square to mark it done; marked squares get a colored stamp
- Auto-detects and celebrates a completed row, column, or diagonal (BINGO!)
- A "Print my board" button that prints cleanly on one page
- localStorage so a student's marked squares survive a refresh

Design:
- Mobile-first; the 5x5 grid stays square and tappable on phones
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A; stamped squares animate in
- Clean black-and-white print layout when printed

Give me the complete file in one response.`,
vibes:["One board that works as a digital game and a printable handout.","Supply your real challenge list; specify shuffle, stamp, BINGO detection, and print.","Grid + shuffle first; tap-to-stamp + persistence next; BINGO detection and print styles last.","Force a row to fill and confirm the BINGO fires; print to PDF and check it fits one page.","Embed in Google Sites for at-home play; print copies for the front desk."]},

{n:9,level:"intermediate",type:"Promotion",host:"Lobby screen / Sites",title:"Book of the Week Spotlight Carousel",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a rotating "Staff Picks / Book of the Week" spotlight I can embed in Google Sites and on a lobby screen.

Features:
- A data array of books, each with: cover image URL, title, author, a one-sentence pitch, a genre tag, and an optional "Reserve / Find it" link
- A carousel that auto-advances every several seconds with manual next/prev arrows and clickable dots
- Each slide shows the cover, the pitch, the author, and a colored genre pill
- Pause auto-advance when a viewer hovers or focuses the carousel
- Keyboard arrow support and swipe support on touch screens

Design:
- Mobile-first; on wide screens show cover on the left, text on the right
- Palette navy #0A3476 + gold #FCB040; each genre pill has its own color
- Smooth cross-fade or slide transition between books

Put the book list in a clearly-labeled array at the top. Give me the complete file.`,
vibes:["A self-running display that keeps fresh recommendations in front of students.","Provide 5-10 real books with cover URLs and pitches; name the auto-advance timing.","Static slide first, then navigation (arrows/dots/swipe), then auto-advance + pause-on-hover.","Test swipe on a phone, arrows on a keyboard, and confirm hover pauses the timer.","Embed in Google Sites and loop it on the lobby monitor; update the array weekly."]},

{n:10,level:"intermediate",type:"Info literacy",host:"Sites embed",title:"Citation Quick-Helper (MLA & APA)",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a friendly "Citation Quick-Helper" for students citing a book or a website.

Features:
- A toggle between MLA and APA style
- A toggle between "Book" and "Website" source type
- A short form (author, title, publisher/site name, year, URL, date accessed) that shows only the fields relevant to the chosen source type
- A live-updating formatted citation as the student types
- A "Copy citation" button with a confirmation message
- A small "Double-check with your teacher" disclaimer line

Design:
- Mobile-first, calm and clean, palette navy #0A3476 + teal #0E6B8A
- Fields that don't apply hide with a smooth height/fade transition
- The formatted output sits in a highlighted card with the right hanging-indent look

Be accurate with MLA 9th and APA 7th formatting rules. Give me the complete file.`,
vibes:["A guided helper that teaches the shape of a citation, not a black box.","Tell it which styles/source types you need and to show fields conditionally.","Build the form + live output first; add the MLA/APA logic; add copy + transitions.","Accuracy matters most — verify several examples against an official MLA/APA guide.","Embed in your research-help Google Site next to your database links."]},

{n:11,level:"intermediate",type:"Operations",host:"QR / Sites embed",title:"Interactive Library Floor Map",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is an interactive floor map of the library so students can find sections fast.

Features:
- A simple top-down layout drawn with HTML/CSS boxes (no image needed) representing zones: Fiction, Nonfiction, Graphic Novels, Picture Books, Makerspace, Computers, Quiet Reading, and the Front Desk — I'll rename/rearrange them
- Clicking a zone highlights it and opens a small panel with a description, the Dewey range or genre it holds, and a tip ("Ask at the desk for...")
- A search box: type a topic and it highlights the matching zone
- A legend with a color per zone

Design:
- Mobile-first; the map scales to fit the screen and zones stay tappable
- Distinct, accessible colors per zone; selected zone gets an outline + gentle zoom
- Palette anchored in navy #0A3476 and gold #FCB040

Make the zone names, positions, and descriptions easy to edit. Give me the complete file.`,
vibes:["Replace \"where is it?\" with a tap-and-find map students use solo.","Describe your actual room layout in rough rows/columns so the AI can place the boxes.","Lay out the zones first; add click-to-highlight + info panel; add the search last.","Hand a student a phone and watch them find Graphic Novels without help.","Post a QR code at the entrance that opens the embedded Google Sites version."]},

{n:12,level:"intermediate",type:"Info literacy",host:"Sites embed",title:"Source Evaluation Lab (CRAAP Test)",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is an interactive "Is This Source Trustworthy?" lab teaching the CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose) to middle and high school students.

How it works:
- A short intro card explaining the 5 CRAAP factors in student-friendly language
- The student works through a sample source (I can provide a few example "sources" with title, author, date, publisher, and a snippet)
- For each of the 5 factors, the student rates it 1-5 with a slider and reads a guiding question (e.g., Authority: "Who wrote this and are they qualified?")
- At the end, a "Source Confidence" meter combines the ratings into a visual score with a plain-language verdict (Strong / Mixed / Be Careful)
- A "Try another source" button loads the next example

Design:
- Mobile-first; one factor at a time with a progress indicator
- Each factor has its own accent color; the final meter animates as it fills
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A

Make the example sources and guiding questions easy to edit. Give me the complete file.`,
vibes:["Turn an abstract checklist into a hands-on judgment students actually practice.","Provide 2-3 realistic example sources (one strong, one weak) so the lesson lands.","Build the factor-by-factor flow first; add the combined confidence meter; add multiple sources.","Run a weak source and confirm the verdict reads \"Be Careful\"; check the wording with a teacher.","Assign it during a research unit; embed in your info-literacy Google Site."]},

{n:13,level:"intermediate",type:"Research skills",host:"Sites embed",title:"Boolean Search Trainer",built:"boolean-trainer.html",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a "Boolean Search Trainer" game teaching AND, OR, NOT, quotes, and parentheses to students using databases.

How it works:
- A small built-in pretend "database" of ~20 fake article cards, each with a few keyword tags (I can edit these)
- The student types a Boolean query (supports AND, OR, NOT, "quoted phrases", and parentheses) and the matching cards appear live
- Challenge mode: a prompt like "Find articles about sharks but NOT shark attacks" with a target result set; the app checks whether their query returns the right cards
- A hints panel explaining each operator with a quick example
- A score for challenges solved

Design:
- Mobile-first; a clean query bar at the top, results as cards below
- Matching keywords highlight inside the result cards
- Palette navy #0A3476 + teal #0E6B8A; correct-challenge feedback animates in

Make the fake article set and the challenges easy to edit. Build a small, correct Boolean parser. Give me the complete file in one response.`,
vibes:["Let students feel how operators change results before they touch a real database.","Define your fake article tags and the specific challenges you want students to solve.","Get the parser + live filtering working first; add challenge-checking; add hints and scoring.","Test edge cases: NOT, nested parentheses, quoted phrases — confirm results are correct.","Pair it with a screencast of your real databases; embed in your research Google Site."]},

{n:14,level:"intermediate",type:"Info literacy",host:"Sites embed",title:"Primary vs. Secondary Source Sorter",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a drag-and-sort game for "Primary vs. Secondary Sources," a core social-studies and research concept.

How it works:
- A deck of source cards (e.g., "a soldier's wartime diary," "a textbook chapter," "a photograph from the event," "an encyclopedia entry," "a recorded interview") that I can fully edit
- Two labeled drop zones: PRIMARY and SECONDARY
- Students drag each card into a zone; a "Check" button marks each right or wrong
- Wrong answers flip to show a one-line explanation of why
- A score and a "Play again" button that reshuffles the deck

Design:
- Mobile-first and touch-draggable; cards animate into the drop zones
- Clear color coding for the two zones; correct cards glow, wrong cards shake gently
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A

Make the card deck and explanations easy to edit. Give me the complete file.`,
vibes:["A quick, replayable check that a tricky distinction actually clicked.","Write source examples that match the units your teachers teach (history, science, ELA).","Get drag-to-zone working first; add the check + explanations; add scoring and reshuffle.","Sort a full deck on a touchscreen; confirm every explanation is accurate and fair.","Hand it to a teacher as a station; embed in your Google Site for review."]},

{n:15,level:"advanced",type:"Operations",host:"Apps Script + Sites",title:"\"Is It On the Shelf?\" Catalog Lookup",
prompt:`I am a school librarian. I am not a developer, but I can follow setup steps. Build me a Google Apps Script web app, backed by a Google Sheet, that lets students check whether a book is available without logging in.

Setup:
- My Google Sheet has columns: Title, Author, Genre, Call Number, Status (In / Checked Out / On Hold), and Location
- The web app reads from this Sheet live

Student-facing search page:
- One search box that matches title OR author as the student types (live filtering)
- Results as cards: title, author, call number, location, and a color-coded status pill (green In, amber On Hold, red Checked Out)
- A genre filter and a "show only available" toggle
- A friendly empty state when nothing matches, suggesting they ask at the desk

Design:
- Mobile-first; fast, no page reloads; palette navy #0A3476 + gold #FCB040
- Status pills are color-coded AND labeled in text (don't rely on color alone)
- Subtle skeleton/loading shimmer while results fetch

Walk me through connecting the Sheet and deploying. Give me all the files.`,
vibes:["Turn a spreadsheet you already keep into a self-serve availability checker.","Give it your exact column names and status values so the backend maps cleanly.","Sheet read + search first; add filters and status colors; add loading states.","Search real titles, flip a status in the Sheet, confirm the app reflects it.","Embed the search page in your catalog Google Site; share the link on signage."]},

{n:16,level:"advanced",type:"Operations",host:"Apps Script + Sites",title:"Makerspace / Study Room Sign-Up Board",
prompt:`I am a school librarian. I am not a developer, but I can follow setup steps. Build me a Google Apps Script web app, backed by a Google Sheet, for signing up to use the Makerspace stations (or study rooms) during set time slots.

Setup:
- A Google Sheet stores bookings: Date, Time Slot, Station/Room, Student Name, Grade
- I can edit the list of stations and the list of time slots in one place

Student-facing page:
- Pick a date, then see a grid of time slots x stations
- Open slots show a "Sign up" button; taken slots show the booked name (or just "Reserved" if I turn name-hiding on)
- Submitting writes the booking to the Sheet and refreshes the grid
- Prevents double-booking the same slot/station

Admin page:
- Password-protected; view all bookings for a date and cancel any with one click

Design:
- Mobile-first; the grid scrolls horizontally on phones with sticky time labels
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A; open vs. taken slots clearly distinct
- A confirmation animation when a booking succeeds

Walk me through the Sheet setup and deployment. Give me all the files.`,
vibes:["Replace the paper clipboard with a live, double-booking-proof sign-up sheet.","Define your stations, slots, and Sheet columns; specify the double-booking guard.","Read + render-the-grid first; add booking writes + the conflict check; add admin cancel.","Have two people try the same slot at once; confirm only one wins and the grid updates.","Deploy and embed in Google Sites; bookmark it on the Makerspace tablet."]},

{n:17,level:"advanced",type:"Library event",host:"Apps Script + Sites",title:"Mock Caldecott / Newbery Award Voting Station",built:"mock-award.html",
prompt:`I am a school librarian. I am not a developer, but I can follow setup steps. Build me a Google Apps Script web app, backed by a Google Sheet, for running a "Mock Caldecott" (or Mock Newbery) student book-award vote.

Setup:
- I maintain a Google Sheet of nominee books: Title, Author, cover image URL, and a one-line description
- A second sheet/tab stores votes: Timestamp, Class, and the book voted for
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

Walk me through the Sheet setup and deployment. Give me all the files.`,
vibes:["Run a real democratic reading event: students read, deliberate, and vote on a winner.","Load your nominee list with covers; decide whether reasons are required and results hidden.","Build the ballot + vote storage first; add the results chart; add the open/close admin controls.","Cast votes across classes, confirm the tally and the \"hide results\" toggle behave.","Embed the ballot in Google Sites; project the animated results at the award-reveal assembly."]},

{n:18,level:"advanced",type:"Operations",host:"Apps Script + Sites",title:"Collection Diversity Snapshot Dashboard",
prompt:`I am a school librarian. I am not a developer, but I can follow setup steps. Build me a Google Apps Script web app, backed by a Google Sheet, that gives me a visual "Collection Snapshot" dashboard from a list of my titles — to support weeding, diversity audits, and collection-development conversations.

Setup:
- My Google Sheet has columns I'll define, such as: Title, Author, Genre, Format, Copyright Year, Last Checkout Date, and Representation Tags (free text I add)
- The dashboard reads the Sheet live; treat missing cells gracefully

Dashboard (for me, the librarian — password-protected):
- Headline stats: total titles, average/median copyright year, % checked out in the last 12 months
- A bar chart of titles by Genre and one by Format
- A histogram of titles by copyright decade (spotlights an aging collection)
- A "Weeding candidates" list: titles older than a year cutoff I set AND not checked out since a date I set (basic CREW/MUSTIE-style flag), with a reason shown
- A simple breakdown of Representation Tags so I can see gaps at a glance

Design:
- Mobile-first but data-dense on desktop; clean charts drawn in plain HTML/CSS/Canvas (no chart libraries)
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A; charts animate on load
- Every chart has a plain-language caption explaining what it suggests

Walk me through the Sheet setup and deployment. Give me all the files.`,
vibes:["Turn an export you already have into evidence for weeding and budget requests.","Map your real column names and set your weeding cutoffs (age + last-checkout date).","Get the headline stats + one chart working first; add the rest of the charts; add the weeding flag last.","Sanity-check the numbers against the raw Sheet; confirm weeding candidates match your judgment.","Keep it private (password-gated); screenshot charts for your collection-development report."]},

{n:19,level:"intermediate",type:"Digital citizenship",host:"GitHub Pages / Sites",title:"Post or Pass? Digital Citizenship Game",
prompt:`I am a school librarian. I am not a developer. Build me a single self-contained index.html file (no external libraries) that is a "digital citizenship" decision game for students in grades 4 through 9.

How it works:
- A deck of about 10 real online situations (a quiz app asking for personal info, a phishing "you won!" pop-up, a friend asking for a password, a mean group chat, a viral fake headline, a stranger asking for a selfie and location, four hours of gaming vs. homework, using an image without permission, a threatening DM)
- For each situation the student picks one of 2 to 4 actions; the game marks it best / okay / risky, reveals the best answer, and explains WHY in student-friendly language
- Each situation is tagged with one of six skills: Privacy, Kindness, Credibility, Security, Digital Footprint, and Balance
- A running score and a progress bar across the deck
- At the end, a "Digital Citizen Report" shows the total score and a per-skill breakdown bar so I can see where the class is strong or needs work
- A "Play again" button reshuffles the deck

Design:
- Mobile-first; one situation on screen at a time with instant, animated feedback
- Each of the six skills has its own color and icon; the chosen answer and the best answer are both highlighted
- Palette navy #0A3476, gold #FCB040, teal #0E6B8A on a soft off-white

Make the scenarios, skills, and explanations easy to edit in clearly-labeled arrays at the top of the script. Give me the complete file in one response.`,
vibes:["Turn abstract \"be safe and kind online\" rules into real decisions students practice and feel.","Feed it scenarios from your own acceptable-use policy and recent situations so the cases ring true.","Get the scenario → choose → feedback loop working first; add scoring and the progress bar; add the per-skill report last.","Play every path on a phone; confirm each \"best\" answer and explanation is accurate and age-appropriate; check with a counselor.","Use it as a station or bell-ringer; embed in your digital-citizenship Google Site or project it for a class discussion."]}
];
window.LV_SLUGS = {1:"library-hours-card",2:"genre-quiz",3:"reading-challenge-tracker",4:"dewey-explorer-wheel",5:"event-countdown-banner",6:"call-number-shelving-game",7:"book-spine-poetry",8:"reading-bingo-generator",9:"book-of-the-week-carousel",10:"citation-quick-helper",11:"library-floor-map",12:"source-evaluation-lab",13:"boolean-search-trainer",14:"primary-secondary-sorter",15:"catalog-lookup",16:"signup-board",17:"mock-award-voting",18:"collection-diversity-dashboard",19:"digital-citizenship-detective"};
