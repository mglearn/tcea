/* The Vanished Classroom — a technology-graveyard-style investigation about
   instructional practices from the 1800s that classrooms no longer use.

   LOGIC IS LANGUAGE-AGNOSTIC. Exhibit content lives per-language in EXHIBITS,
   but every language keeps the same exhibit order and the same choice order,
   with the CORRECT option always authored at index 0. The saved state stores
   answers as the original choice index (0-3), so switching languages mid-run
   never breaks scoring or the saved reveal. UI chrome is translated through the
   shared BreakoutI18n engine (../assets/i18n.js). */

const STORAGE_KEY = "tceaVanishedClassroomV1";
const POINTS_PER_EXHIBIT = 3;
const EXHIBIT_COUNT = 9;
const TOTAL_POINTS = EXHIBIT_COUNT * POINTS_PER_EXHIBIT;

/* Approximate era of common classroom use -> decline, engraved on each
   tombstone like birth-death dates. Language-independent (numerals + "c." for
   circa); kept identical across languages. */
const ERAS = {
  slate: "c. 1800 – 1930s",
  hornbook: "c. 1450 – 1800",
  recitation: "c. 1600s – 1920s",
  dunce: "c. 1840s – 1950s",
  blab: "c. 1790s – 1860s",
  copybook: "c. 1840s – 1920s",
  rod: "c. 1700s – 1980s",
  monitorial: "c. 1798 – 1840s",
  oneroom: "c. 1700s – 1950s"
};

/* Verifiable reference links per exhibit (checked to resolve). English
   Wikipedia is used as a stable, cited starting point across all languages. */
const SOURCES = {
  slate: [{ label: "Wikipedia: Slate (writing)", url: "https://en.wikipedia.org/wiki/Slate_(writing)" }],
  hornbook: [{ label: "Wikipedia: Hornbook", url: "https://en.wikipedia.org/wiki/Hornbook" }],
  recitation: [{ label: "Wikipedia: Rote learning", url: "https://en.wikipedia.org/wiki/Rote_learning" }],
  dunce: [{ label: "Wikipedia: Dunce", url: "https://en.wikipedia.org/wiki/Dunce" }],
  blab: [{ label: "Wikipedia: Blab school", url: "https://en.wikipedia.org/wiki/Blab_school" }],
  copybook: [
    { label: "Wikipedia: Penmanship", url: "https://en.wikipedia.org/wiki/Penmanship" },
    { label: "Wikipedia: Spencerian script", url: "https://en.wikipedia.org/wiki/Spencerian_script" }
  ],
  rod: [{ label: "Wikipedia: School corporal punishment", url: "https://en.wikipedia.org/wiki/School_corporal_punishment" }],
  monitorial: [{ label: "Wikipedia: Monitorial System", url: "https://en.wikipedia.org/wiki/Monitorial_System" }],
  oneroom: [{ label: "Wikipedia: One-room school", url: "https://en.wikipedia.org/wiki/One-room_school" }]
};

/* ---------------------------------------------------------------------------
   UI chrome dictionary (BreakoutI18n). English is the source language.
   The es/vi/ar/hi/ur/zh packs are merged in from lang-packs below.
--------------------------------------------------------------------------- */
const UI = {
  en: {
    "skip": "Skip to activity",
    "progress.title": "Investigation Progress",
    "progress.completed": "of {total} exhibits completed",
    "progress.points": "/ {total} points",
    "reset": "Reset Activity",
    "reset.confirm": "Reset the activity and clear saved progress on this device?",
    "welcome.eyebrow": "Upper Elementary & Middle School Investigation",
    "welcome.title": "The Vanished Classroom",
    "welcome.subtitle": "Can you uncover the classroom practices that time left behind?",
    "welcome.body": "Classrooms have changed enormously over the last two hundred years. Some practices that once seemed normal have disappeared from schools completely. Step inside the vanished classroom to investigate nine teaching relics from the 1800s and discover what eventually replaced them.",
    "welcome.enter": "Enter the Schoolhouse",
    "directions.eyebrow": "Student Directions",
    "directions.title": "How to investigate each exhibit",
    "directions.body1": "Visit each exhibit and study the image and clues. First, identify the classroom practice or tool. Next, decide what problem it was meant to solve. Finally, choose the practice or technology that eventually replaced it.",
    "directions.body2": "You may revisit exhibits before submitting your final answers.",
    "directions.step1title": "Identify it",
    "directions.step1body": "Use the clues and image area to decide what the practice or tool is.",
    "directions.step2title": "Find its purpose",
    "directions.step2body": "Choose the problem this practice was meant to solve.",
    "directions.step3title": "Track its replacement",
    "directions.step3body": "Select what classrooms use today in its place.",
    "directions.start": "Start Investigating",
    "list.eyebrow": "Nine Classroom Relics",
    "list.title": "Choose an exhibit to investigate",
    "list.body": "Each desk opens a three-part investigation. Finished exhibits stay available for review.",
    "list.finish": "See My Final Score",
    "exhibit.back": "Back to Exhibits",
    "exhibit.label": "Exhibit {n}",
    "exhibit.mystery": "Mystery Practice",
    "exhibit.check": "Check My Investigation",
    "exhibit.tryagain": "Try One More Time",
    "exhibit.continue": "Continue",
    "placeholder.label": "Image Placeholder: Exhibit {n}",
    "placeholder.add": "Add image: {path}",
    "placeholder.alt": "Image for Exhibit {n}. If no custom image appears, use the clues and add a file at {path}.",
    "questions.identify": "What classroom practice or tool is this?",
    "questions.purpose": "What problem was it meant to solve?",
    "questions.replacement": "What replaced it in classrooms today?",
    "label.identify": "Identification",
    "label.purpose": "Purpose",
    "label.replacement": "Replacement",
    "feedback.notice": "Notice:",
    "feedback.answerAll": "Answer all three questions before checking this exhibit.",
    "feedback.correct": "Correct:",
    "feedback.needs": "Needs another look:",
    "feedback.recorded": "Investigation recorded. You earned {points} of {max} points for this exhibit.",
    "feedback.attempt": "Attempt {n} recorded. Check the items marked “Needs another look” and try once more.",
    "reveal.title": "Exhibit Reveal",
    "reveal.relic": "Practice",
    "reveal.purpose": "Original purpose",
    "reveal.limitation": "Major limitation",
    "reveal.replacement": "Modern replacement",
    "reveal.era": "Era of common use",
    "reveal.sources": "Learn more",
    "reveal.score": "Score",
    "reveal.points": "{points} of {max} points",
    "card.needs": "Needs investigation",
    "card.review": "Review Reveal",
    "card.investigate": "Investigate",
    "score.eyebrow": "Final Score",
    "score.title": "Your Vanished Classroom Result",
    "score.review": "Review Exhibits",
    "score.reflection": "History Detective Reflection",
    "score.tryagain": "Try Again",
    "level.1": "History Time Traveler",
    "level.2": "Classroom Historian",
    "level.3": "Schoolhouse Detective",
    "level.4": "History Apprentice in Training",
    "level.msg1": "You tracked these classroom relics across time with expert-level accuracy.",
    "level.msg2": "You uncovered strong evidence about how old practices shaped today's classrooms.",
    "level.msg3": "You spotted many important clues and connected several relics to their replacements.",
    "level.msg4": "You are building your investigation skills. Review the exhibits and look closely at the clues.",
    "reflection.eyebrow": "History Detective Reflection",
    "reflection.title": "Explain what you discovered",
    "reflection.relicLabel": "The classroom practice I chose",
    "reflection.relicChoose": "Choose a practice",
    "reflection.purposeLabel": "The problem it was meant to solve",
    "reflection.limitationLabel": "One limitation it had",
    "reflection.replacementLabel": "The practice or tool that replaced it",
    "reflection.futureLabel": "One practice used in classrooms today that I think may disappear someday",
    "reflection.back": "Back to Score",
    "reflection.print": "Print My Investigation",
    "print.scoreLine": "Score: {score} of {total} points - {level}",
    "footer.tagline": "No logins · no accounts · no data collected · runs entirely in your browser.",
    "footer.privacy": "Privacy & compliance"
  }
};

/* ---------------------------------------------------------------------------
   Exhibit content, per language. Same order in every language; the CORRECT
   option is authored FIRST (index 0) in each choices array.
--------------------------------------------------------------------------- */
const EXHIBITS = {
  en: [
    {
      id: "slate",
      image: "images/slate.png",
      relic: "Slate and slate pencil",
      clues: [
        "Each student wrote on me instead of using paper.",
        "I was a thin sheet of gray stone in a wooden frame.",
        "Students wiped me clean with a cloth after each lesson.",
        "A squeaky pencil made of slate or chalk wrote on my surface."
      ],
      purpose: "Giving each student a reusable surface to practice writing and arithmetic",
      limitation: "Work was erased after each lesson and could never be saved or reviewed",
      replacement: "Paper notebooks, dry-erase whiteboards, and digital tablets",
      choices: {
        identify: ["Slate and slate pencil", "Chalkboard eraser", "Wax writing tablet", "Sandbox tray"],
        purpose: ["Giving each student a reusable surface to practice writing and arithmetic", "Punishing students who misbehaved", "Decorating the classroom walls", "Keeping the room warm in winter"],
        replacement: ["Paper notebooks, dry-erase whiteboards, and digital tablets", "Printed textbooks and readers", "Loudspeakers and microphones", "Wood stoves and lanterns"]
      }
    },
    {
      id: "hornbook",
      image: "images/hornbook.png",
      relic: "Hornbook",
      clues: [
        "The youngest students held me by my wooden handle.",
        "I looked like a small paddle or spoon.",
        "A thin, see-through sheet of animal horn protected my page.",
        "My single page showed the alphabet, syllables, and a short prayer."
      ],
      purpose: "Teaching the alphabet and first reading to beginning students",
      limitation: "I could show only a tiny amount of text on one small page",
      replacement: "Printed primers, leveled readers, and reading apps",
      choices: {
        identify: ["Hornbook", "Wooden ruler", "Hand mirror", "Cutting board"],
        purpose: ["Teaching the alphabet and first reading to beginning students", "Keeping students quiet during lessons", "Measuring lines for penmanship", "Fanning the classroom in hot weather"],
        replacement: ["Printed primers, leveled readers, and reading apps", "Slates and chalk", "Spelling bees and contests", "Radio broadcasts"]
      }
    },
    {
      id: "recitation",
      image: "images/recitation.png",
      relic: "Rote recitation",
      clues: [
        "Students stood by the teacher's desk to say their lesson out loud.",
        "Learning meant memorizing every word exactly.",
        "A student who missed a word often moved to the back of the line.",
        "Understanding the meaning mattered less than repeating it perfectly."
      ],
      purpose: "Fixing facts and passages in memory through constant repetition",
      limitation: "Students often memorized words they did not truly understand",
      replacement: "Discussion, questioning, and comprehension-based learning",
      choices: {
        identify: ["Rote recitation", "Silent reading time", "Group science lab", "Class debate"],
        purpose: ["Fixing facts and passages in memory through constant repetition", "Letting students choose their own books", "Teaching teamwork and cooperation", "Testing students with written essays"],
        replacement: ["Discussion, questioning, and comprehension-based learning", "Larger chalkboards", "Longer school days", "More copying by hand"]
      }
    },
    {
      id: "dunce",
      image: "images/dunce.png",
      relic: "The dunce cap",
      clues: [
        "A student who struggled was sometimes made to wear me.",
        "I was a tall, cone-shaped paper hat.",
        "The student wearing me often sat alone on a stool.",
        "I was meant to shame a learner in front of the whole class."
      ],
      purpose: "Publicly shaming students to pressure them into better work",
      limitation: "Shame discouraged learners instead of helping them improve",
      replacement: "Encouragement, extra support, and positive behavior systems",
      choices: {
        identify: ["The dunce cap", "Graduation cap", "Winter hat", "Paper crown"],
        purpose: ["Publicly shaming students to pressure them into better work", "Rewarding the best student in the class", "Keeping the sun out of a student's eyes", "Marking who would recite next"],
        replacement: ["Encouragement, extra support, and positive behavior systems", "Longer school days", "Harder spelling words", "Assigned seating charts"]
      }
    },
    {
      id: "blab",
      image: "images/blab.png",
      relic: "Blab school",
      clues: [
        "The whole room studied out loud at the same time.",
        "Students repeated their lessons in a steady buzz of voices.",
        "The teacher listened for anyone who fell silent.",
        "My name came from the constant 'blab' of many voices at once."
      ],
      purpose: "Letting a teacher hear that every student was studying at once",
      limitation: "The noise made it hard to think or hear any single student clearly",
      replacement: "Quiet independent work and small-group instruction",
      choices: {
        identify: ["Blab school", "Study hall", "Music class", "Silent library"],
        purpose: ["Letting a teacher hear that every student was studying at once", "Teaching students to sing hymns", "Practicing for a class play", "Calming students before a test"],
        replacement: ["Quiet independent work and small-group instruction", "Bigger classes", "Longer recitations", "More memorizing"]
      }
    },
    {
      id: "copybook",
      image: "images/copybook.png",
      relic: "Copybook penmanship drills",
      clues: [
        "Students copied the same perfect line of writing again and again.",
        "Beautiful, flowing handwriting was the goal of every lesson.",
        "A printed model sat at the top of each page to imitate.",
        "Neatness and exact letter shapes were graded closely."
      ],
      purpose: "Training students to write a uniform, elegant script by hand",
      limitation: "Hours of copying left little time for original ideas or writing",
      replacement: "Keyboarding, typing, and word processing",
      choices: {
        identify: ["Copybook penmanship drills", "Art sketchbook", "Math workbook", "Reading log"],
        purpose: ["Training students to write a uniform, elegant script by hand", "Teaching students to draw maps", "Recording daily attendance", "Practicing multiplication tables"],
        replacement: ["Keyboarding, typing, and word processing", "Colored pencils and markers", "Larger notebooks", "Fountain pens"]
      }
    },
    {
      id: "rod",
      image: "images/rod.png",
      relic: "The rod (corporal punishment)",
      clues: [
        "Teachers once kept me in the corner as a warning.",
        "I was a wooden switch, stick, or paddle.",
        "An old saying about 'sparing' me and 'spoiling' the child described me.",
        "I was used to strike students who broke the rules."
      ],
      purpose: "Enforcing obedience and discipline through physical punishment",
      limitation: "Fear and pain harmed students and did not build real learning",
      replacement: "Clear expectations, restorative practices, and counseling",
      choices: {
        identify: ["The rod (corporal punishment)", "Pointer for the map", "Fishing pole", "Walking cane"],
        purpose: ["Enforcing obedience and discipline through physical punishment", "Pointing to words on the chalkboard", "Measuring the height of students", "Reaching high shelves in the room"],
        replacement: ["Clear expectations, restorative practices, and counseling", "Louder bells", "Longer detentions", "Stricter dress codes"]
      }
    },
    {
      id: "monitorial",
      image: "images/monitorial.png",
      relic: "Monitorial (Lancasterian) system",
      clues: [
        "One teacher could run a school of hundreds of children with me.",
        "Older, advanced students were chosen as 'monitors'.",
        "Each monitor taught a small group a single lesson.",
        "Learning passed down the rows from student to student, not from one teacher."
      ],
      purpose: "Teaching very large groups cheaply by having pupils teach pupils",
      limitation: "Young monitors could pass along mistakes and shallow learning",
      replacement: "Trained teachers leading smaller, graded classes",
      choices: {
        identify: ["Monitorial (Lancasterian) system", "Spelling bee", "Field trip", "Parent volunteer program"],
        purpose: ["Teaching very large groups cheaply by having pupils teach pupils", "Choosing the class president", "Organizing after-school sports", "Grouping students only by their age"],
        replacement: ["Trained teachers leading smaller, graded classes", "One giant lecture hall", "Longer school years", "More textbooks per student"]
      }
    },
    {
      id: "oneroom",
      image: "images/oneroom.png",
      relic: "One-room schoolhouse",
      clues: [
        "Children of every age learned together in a single room.",
        "One teacher taught six-year-olds and teenagers at the same time.",
        "A wood stove in the middle heated the whole class.",
        "Students were grouped by their reading level, not by a grade number."
      ],
      purpose: "Educating children of all ages together where few teachers were available",
      limitation: "One teacher could give little time to each age and level",
      replacement: "Age-based grade levels with a teacher for each grade",
      choices: {
        identify: ["One-room schoolhouse", "Modern high school", "Kindergarten center", "College campus"],
        purpose: ["Educating children of all ages together where few teachers were available", "Separating students by subject", "Teaching only reading and writing", "Training future teachers"],
        replacement: ["Age-based grade levels with a teacher for each grade", "Bigger single rooms", "Year-round one-room classes", "More wood stoves"]
      }
    }
  ]
};

/* Merge point for translated packs (populated by lang-packs at the bottom). */
window.__TVC_LANG_PACKS__ = window.__TVC_LANG_PACKS__ || {};

/* ===========================================================================
   Engine
=========================================================================== */
const screens = {
  welcome: document.querySelector("#welcome-screen"),
  directions: document.querySelector("#directions-screen"),
  list: document.querySelector("#exhibit-list-screen"),
  exhibit: document.querySelector("#exhibit-screen"),
  score: document.querySelector("#score-screen"),
  reflection: document.querySelector("#reflection-screen")
};

const elements = {
  completed: document.querySelector("#completed-count"),
  completedLabel: document.querySelector("#completed-label"),
  score: document.querySelector("#score-count"),
  pointsLabel: document.querySelector("#points-label"),
  meter: document.querySelector("#progress-meter"),
  grid: document.querySelector("#exhibit-grid"),
  finishButton: document.querySelector("#finish-button"),
  relicImage: document.querySelector("#relic-image"),
  imageFrame: document.querySelector(".image-frame"),
  placeholderLabel: document.querySelector("#placeholder-label"),
  placeholderPath: document.querySelector("#placeholder-path"),
  exhibitNumber: document.querySelector("#exhibit-number-label"),
  exhibitTitle: document.querySelector("#exhibit-title"),
  clueList: document.querySelector("#clue-list"),
  questionList: document.querySelector("#question-list"),
  form: document.querySelector("#investigation-form"),
  feedback: document.querySelector("#feedback-box"),
  reveal: document.querySelector("#reveal-box"),
  checkButton: document.querySelector("#check-button"),
  continueButton: document.querySelector("#continue-button"),
  scoreBadge: document.querySelector("#score-badge"),
  scoreMessage: document.querySelector("#score-message"),
  reflectionRelic: document.querySelector("#reflection-relic"),
  reflectionForm: document.querySelector("#reflection-form"),
  printTemplate: document.querySelector("#print-template")
};

const state = loadState();
let activeExhibitIndex = 0;
let activeChoices = {};

/* --- i18n helpers --------------------------------------------------------- */
function t(key, vars) {
  if (window.BreakoutI18n) return window.BreakoutI18n.t(key, vars);
  const s = (UI.en[key] === undefined ? key : UI.en[key]);
  return interpolate(s, vars);
}
function currentLang() {
  return window.BreakoutI18n ? window.BreakoutI18n.getLang() : "en";
}
function exhibits() {
  return EXHIBITS[currentLang()] || EXHIBITS.en;
}
function interpolate(str, vars) {
  if (!vars || typeof str !== "string") return str;
  return str.replace(/\{([^}]+)\}/g, (m, k) => (vars[k] !== undefined ? String(vars[k]) : m));
}

/* --- registration + boot -------------------------------------------------- */
(function boot() {
  // Fold translated packs (added at the bottom of this file) into UI + EXHIBITS.
  const packs = window.__TVC_LANG_PACKS__ || {};
  Object.keys(packs).forEach((code) => {
    if (packs[code].ui) UI[code] = packs[code].ui;
    if (packs[code].exhibits) EXHIBITS[code] = packs[code].exhibits;
  });

  if (window.BreakoutI18n) {
    window.BreakoutI18n.register("tvc", UI);
    window.addEventListener("breakout-i18n:changed", onLanguageChange);
  }

  wireEvents();
  renderReflectionChoices();
  renderExhibitGrid();
  refreshChrome();
  updateProgress();
  showScreen(state.screen === "exhibit" ? "list" : state.screen || "welcome");
})();

function onLanguageChange() {
  // Re-render everything that holds language-specific content.
  refreshChrome();
  renderReflectionChoices();
  renderExhibitGrid();
  updateProgress();
  if (state.screen === "exhibit") {
    openExhibit(activeExhibitIndex);
  } else if (state.screen === "score") {
    updateScoreDisplay();
  }
}

function refreshChrome() {
  elements.completedLabel.textContent = t("progress.completed", { total: EXHIBIT_COUNT });
  elements.pointsLabel.textContent = t("progress.points", { total: TOTAL_POINTS });
}

function wireEvents() {
  document.querySelector("#enter-button").addEventListener("click", () => showScreen("directions"));
  document.querySelector("#start-exhibits-button").addEventListener("click", () => showScreen("list"));
  document.querySelector("#back-to-list-button").addEventListener("click", () => showScreen("list"));
  elements.continueButton.addEventListener("click", continueAfterExhibit);
  elements.finishButton.addEventListener("click", showFinalScore);
  document.querySelector("#review-button").addEventListener("click", () => showScreen("list"));
  document.querySelector("#reflection-button").addEventListener("click", () => showScreen("reflection"));
  document.querySelector("#back-to-score-button").addEventListener("click", () => showScreen("score"));
  document.querySelector("#print-button").addEventListener("click", printInvestigation);
  document.querySelector("#reset-button").addEventListener("click", resetActivity);
  document.querySelector("#try-again-button").addEventListener("click", resetActivity);
  elements.form.addEventListener("submit", checkInvestigation);
  elements.reflectionForm.addEventListener("input", saveReflection);
  elements.relicImage.addEventListener("load", () => elements.imageFrame.classList.add("has-image"));
  elements.relicImage.addEventListener("error", () => elements.imageFrame.classList.remove("has-image"));
}

/* --- state ---------------------------------------------------------------- */
function loadState() {
  const startingState = { screen: "welcome", exhibits: {}, reflection: {} };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...startingState, ...saved } : startingState;
  } catch {
    return startingState;
  }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
}
function getRecord(id) {
  return state.exhibits[id] || {};
}

/* --- navigation ----------------------------------------------------------- */
function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  if (name === "score") updateScoreDisplay();
  screens[name].classList.add("active");
  state.screen = name;
  saveState();
  updateProgress();

  const heading = screens[name].querySelector("h1, h2");
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: false });
  }
}

/* --- exhibit list --------------------------------------------------------- */
function renderExhibitGrid() {
  elements.grid.innerHTML = "";
  exhibits().forEach((exhibit, index) => {
    const record = getRecord(exhibit.id);
    const button = document.createElement("button");
    button.className = "tombstone-card tomb-v" + (index + 1);
    button.type = "button";
    button.innerHTML = `
      <span class="tomb-rip" aria-hidden="true">R·I·P</span>
      <span class="tomb-ex">${t("exhibit.label", { n: index + 1 })}</span>
      <strong class="tomb-name">${record.completed ? escapeHTML(exhibit.relic) : t("exhibit.mystery")}</strong>
      <span class="tomb-dates">${ERAS[exhibit.id] || ""}</span>
      <span class="tomb-status">${record.completed ? t("reveal.points", { points: record.points, max: POINTS_PER_EXHIBIT }) : t("card.needs")}</span>
      <span class="status-pill">${record.completed ? t("card.review") : t("card.investigate")}</span>
    `;
    button.addEventListener("click", () => openExhibit(index));
    elements.grid.append(button);
  });
  elements.finishButton.disabled = completedCount() !== EXHIBIT_COUNT;
}

/* --- exhibit view --------------------------------------------------------- */
function openExhibit(index) {
  activeExhibitIndex = index;
  const exhibit = exhibits()[index];
  const record = getRecord(exhibit.id);
  activeChoices = buildChoices(exhibit.id, record);

  elements.exhibitNumber.textContent = t("exhibit.label", { n: index + 1 });
  elements.exhibitTitle.textContent = record.completed ? exhibit.relic : t("exhibit.mystery");
  elements.clueList.innerHTML = exhibit.clues.map((clue) => `<li>${escapeHTML(clue)}</li>`).join("");
  elements.placeholderLabel.textContent = t("placeholder.label", { n: index + 1 });
  elements.placeholderPath.textContent = t("placeholder.add", { path: exhibit.image });
  elements.relicImage.alt = t("placeholder.alt", { n: index + 1, path: exhibit.image });
  elements.relicImage.src = exhibit.image;
  elements.imageFrame.classList.remove("has-image");
  elements.feedback.classList.remove("active");
  elements.feedback.innerHTML = "";
  elements.reveal.classList.remove("active");
  elements.reveal.innerHTML = "";
  elements.continueButton.classList.add("hidden");
  elements.checkButton.classList.remove("hidden");
  elements.checkButton.disabled = false;
  elements.checkButton.textContent = t("exhibit.check");

  renderQuestions(exhibit, record);
  if (record.completed) showCompletedReveal(exhibit, record);

  showScreen("exhibit");
}

function buildChoices(id, record) {
  if (record.choiceOrder) return record.choiceOrder;
  const order = {
    identify: shuffle([0, 1, 2, 3]),
    purpose: shuffle([0, 1, 2, 3]),
    replacement: shuffle([0, 1, 2, 3])
  };
  state.exhibits[id] = { ...record, choiceOrder: order };
  saveState();
  return order;
}

function renderQuestions(exhibit, record) {
  const questions = [
    ["identify", t("questions.identify")],
    ["purpose", t("questions.purpose")],
    ["replacement", t("questions.replacement")]
  ];

  elements.questionList.innerHTML = questions.map(([key, prompt]) => {
    const choices = activeChoices[key].map((orig) => {
      const checked = record.answers && record.answers[key] === orig ? "checked" : "";
      const disabled = record.completed ? "disabled" : "";
      return `
        <label class="choice" data-question="${key}" data-orig="${orig}">
          <input type="radio" name="${key}" value="${orig}" ${checked} ${disabled}>
          <span>${escapeHTML(exhibit.choices[key][orig])}</span>
        </label>
      `;
    }).join("");
    return `
      <fieldset class="question-group" data-question="${key}">
        <legend>${escapeHTML(prompt)}</legend>
        <div class="choice-list">${choices}</div>
      </fieldset>
    `;
  }).join("");
}

function checkInvestigation(event) {
  event.preventDefault();
  const exhibit = exhibits()[activeExhibitIndex];
  const record = getRecord(exhibit.id);
  const formData = new FormData(elements.form);
  const raw = {
    identify: formData.get("identify"),
    purpose: formData.get("purpose"),
    replacement: formData.get("replacement")
  };

  if (raw.identify === null || raw.purpose === null || raw.replacement === null) {
    elements.feedback.innerHTML = `<strong>${t("feedback.notice")}</strong> ${t("feedback.answerAll")}`;
    elements.feedback.classList.add("active");
    return;
  }

  const answers = {
    identify: Number(raw.identify),
    purpose: Number(raw.purpose),
    replacement: Number(raw.replacement)
  };

  const attempt = Math.min((record.attempts || 0) + 1, 2);
  const result = scoreAnswers(answers);
  const completed = result.points === POINTS_PER_EXHIBIT || attempt >= 2;

  state.exhibits[exhibit.id] = {
    ...record,
    attempts: attempt,
    answers,
    points: completed ? result.points : 0,
    completed
  };

  markChoices(answers);
  showFeedback(result, completed, attempt);

  if (completed) {
    showCompletedReveal(exhibit, state.exhibits[exhibit.id]);
  } else {
    elements.checkButton.textContent = t("exhibit.tryagain");
  }

  renderExhibitGrid();
  updateProgress();
  saveState();
}

function scoreAnswers(answers) {
  // The correct option is always the one whose original index is 0.
  const checks = {
    identify: answers.identify === 0,
    purpose: answers.purpose === 0,
    replacement: answers.replacement === 0
  };
  return { checks, points: Object.values(checks).filter(Boolean).length };
}

function markChoices(answers) {
  document.querySelectorAll(".choice").forEach((choice) => {
    const key = choice.dataset.question;
    const orig = Number(choice.dataset.orig);
    const selected = answers[key] === orig;
    choice.classList.remove("correct-choice", "needs-look");
    if (selected && orig === 0) choice.classList.add("correct-choice");
    if (selected && orig !== 0) choice.classList.add("needs-look");
  });
}

function showFeedback(result, completed, attempt) {
  const labels = {
    identify: t("label.identify"),
    purpose: t("label.purpose"),
    replacement: t("label.replacement")
  };
  const lines = Object.entries(result.checks).map(([key, correct]) => {
    const icon = correct ? t("feedback.correct") : t("feedback.needs");
    return `<li><strong>${icon}</strong> ${labels[key]}</li>`;
  }).join("");

  const lead = completed
    ? t("feedback.recorded", { points: result.points, max: POINTS_PER_EXHIBIT })
    : t("feedback.attempt", { n: attempt });

  elements.feedback.innerHTML = `<p>${lead}</p><ul>${lines}</ul>`;
  elements.feedback.classList.add("active");
}

function showCompletedReveal(exhibit, record) {
  elements.exhibitTitle.textContent = exhibit.relic;
  const era = ERAS[exhibit.id] || "";
  const links = (SOURCES[exhibit.id] || [])
    .map((s) => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.label)}</a>`)
    .join(" · ");
  elements.reveal.innerHTML = `
    <h3>${t("reveal.title")}</h3>
    <dl>
      <dt>${t("reveal.relic")}</dt><dd>${escapeHTML(exhibit.relic)}</dd>
      ${era ? `<dt>${t("reveal.era")}</dt><dd>${escapeHTML(era)}</dd>` : ""}
      <dt>${t("reveal.purpose")}</dt><dd>${escapeHTML(exhibit.purpose)}</dd>
      <dt>${t("reveal.limitation")}</dt><dd>${escapeHTML(exhibit.limitation)}</dd>
      <dt>${t("reveal.replacement")}</dt><dd>${escapeHTML(exhibit.replacement)}</dd>
      <dt>${t("reveal.score")}</dt><dd>${t("reveal.points", { points: record.points, max: POINTS_PER_EXHIBIT })}</dd>
    </dl>
    ${links ? `<p class="reveal-sources"><strong>${t("reveal.sources")}:</strong> ${links}</p>` : ""}
  `;
  elements.reveal.classList.add("active");
  elements.checkButton.classList.add("hidden");
  elements.continueButton.classList.remove("hidden");
  elements.form.querySelectorAll("input").forEach((input) => { input.disabled = true; });
  if (record.answers) markChoices(record.answers);
}

function continueAfterExhibit() {
  if (completedCount() === EXHIBIT_COUNT) { showFinalScore(); return; }
  showScreen("list");
}

/* --- score ---------------------------------------------------------------- */
function showFinalScore() {
  updateScoreDisplay();
  showScreen("score");
}
function updateScoreDisplay() {
  const score = totalScore();
  elements.scoreBadge.textContent = `${score} / ${TOTAL_POINTS}`;
  elements.scoreMessage.innerHTML = `<strong>${getLevel(score)}</strong><br>${getLevelMessage(score)}`;
}
function getLevel(score) {
  if (score >= 24) return t("level.1");
  if (score >= 19) return t("level.2");
  if (score >= 13) return t("level.3");
  return t("level.4");
}
function getLevelMessage(score) {
  if (score >= 24) return t("level.msg1");
  if (score >= 19) return t("level.msg2");
  if (score >= 13) return t("level.msg3");
  return t("level.msg4");
}

/* --- progress ------------------------------------------------------------- */
function updateProgress() {
  elements.completed.textContent = completedCount();
  elements.score.textContent = totalScore();
  elements.meter.style.width = `${(completedCount() / EXHIBIT_COUNT) * 100}%`;
}
function completedCount() {
  return exhibits().filter((exhibit) => getRecord(exhibit.id).completed).length;
}
function totalScore() {
  return exhibits().reduce((sum, exhibit) => sum + (getRecord(exhibit.id).points || 0), 0);
}

/* --- reflection ----------------------------------------------------------- */
function renderReflectionChoices() {
  const list = exhibits();
  elements.reflectionRelic.innerHTML =
    `<option value="">${t("reflection.relicChoose")}</option>` +
    list.map((exhibit) => `<option value="${escapeAttribute(exhibit.id)}">${escapeHTML(exhibit.relic)}</option>`).join("");

  // Restore saved values (relic stored by stable id; text fields free-form).
  if (state.reflection.reflectionRelicId) {
    elements.reflectionRelic.value = state.reflection.reflectionRelicId;
  }
  ["reflectionPurpose", "reflectionLimitation", "reflectionReplacement", "reflectionFuture"].forEach((name) => {
    const field = elements.reflectionForm.elements[name];
    if (field && state.reflection[name] !== undefined) field.value = state.reflection[name];
  });
}

function saveReflection() {
  const data = Object.fromEntries(new FormData(elements.reflectionForm).entries());
  state.reflection = {
    reflectionRelicId: data.reflectionRelic || "",
    reflectionPurpose: data.reflectionPurpose || "",
    reflectionLimitation: data.reflectionLimitation || "",
    reflectionReplacement: data.reflectionReplacement || "",
    reflectionFuture: data.reflectionFuture || ""
  };
  saveState();
}

function relicNameById(id) {
  const found = exhibits().find((exhibit) => exhibit.id === id);
  return found ? found.relic : "";
}

function printInvestigation() {
  saveReflection();
  const previousPrint = document.querySelector(".print-page");
  if (previousPrint) previousPrint.remove();

  const page = elements.printTemplate.content.firstElementChild.cloneNode(true);
  page.querySelector("h1").textContent = t("welcome.title");
  page.querySelector("h2").textContent = t("reflection.eyebrow");
  page.querySelector(".print-score").textContent = t("print.scoreLine", {
    score: totalScore(), total: TOTAL_POINTS, level: getLevel(totalScore())
  });

  const prompts = [
    [t("reflection.relicLabel"), relicNameById(state.reflection.reflectionRelicId)],
    [t("reflection.purposeLabel"), state.reflection.reflectionPurpose],
    [t("reflection.limitationLabel"), state.reflection.reflectionLimitation],
    [t("reflection.replacementLabel"), state.reflection.reflectionReplacement],
    [t("reflection.futureLabel"), state.reflection.reflectionFuture]
  ];
  const list = page.querySelector("dl");
  list.innerHTML = prompts.map(([label, value]) => `<dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value || "")}</dd>`).join("");
  document.body.append(page);
  window.print();
}

/* --- reset + utils -------------------------------------------------------- */
function resetActivity() {
  if (!confirm(t("reset.confirm"))) return;
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
  window.location.reload();
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
function escapeAttribute(value) {
  return escapeHTML(value).replaceAll('"', "&quot;");
}
