/* Relic Rooms — shared engine.
   ---------------------------------------------------------------------------
   Generic, data-driven version of the proven "Vanished Classroom" engine.
   A room supplies its content on window.__ROOM__ (English) and its translations
   on window.__ROOM_LANGS__; this engine renders, scores, saves, reflects, and
   prints, and drives the shared BreakoutI18n language switcher (assets/i18n.js).

   window.__ROOM__ = {
     id, storageKey?, noGround?,          // id used as the i18n namespace
     ui: { ...81 UI strings, English },
     exhibits: [ {id,image,relic,clues[4],purpose,limitation,replacement,
                  choices:{identify[4],purpose[4],replacement[4]}} x9 ],  // correct = index 0
     eras: { <exhibitId>: "c. 1800 – 1930s" },
     sources: { <exhibitId>: [{label,url}] },
     ground?: ["grass"|"rubble"|"both"|"none", ...9]
   };
   Load order in a room page: assets/i18n.js -> data.en.js -> lang/*.js -> assets/relic-engine.js
--------------------------------------------------------------------------- */
const R = window.__ROOM__ || {};
const ROOM_ID = R.id || "relic-room";
const STORAGE_KEY = R.storageKey || ("relicRoom." + ROOM_ID + ".v1");
const POINTS_PER_EXHIBIT = 3;
const EXHIBIT_COUNT = Array.isArray(R.exhibits) ? R.exhibits.length : 9;
const TOTAL_POINTS = EXHIBIT_COUNT * POINTS_PER_EXHIBIT;

const ERAS = R.eras || {};
const SOURCES = R.sources || {};

const TOMB_GRASS =
  '<g fill="none" stroke-linecap="round">' +
  '<path d="M16 44 C14 33 13 27 10 17" stroke="#4e6b39" stroke-width="3.2"/>' +
  '<path d="M22 44 C22 31 23 25 26 15" stroke="#5f7d47" stroke-width="3"/>' +
  '<path d="M28 44 C29 34 31 29 35 21" stroke="#6f8f52" stroke-width="2.6"/>' +
  '<path d="M34 44 C36 35 39 31 45 25" stroke="#557143" stroke-width="2.4"/>' +
  '<path d="M116 44 C114 32 113 26 111 18" stroke="#4e6b39" stroke-width="3"/>' +
  '<path d="M122 44 C122 30 123 24 125 15" stroke="#6f8f52" stroke-width="2.8"/>' +
  '<path d="M128 44 C130 33 133 28 138 22" stroke="#5f7d47" stroke-width="2.5"/>' +
  '<path d="M206 44 C205 33 205 27 203 19" stroke="#557143" stroke-width="2.8"/>' +
  '<path d="M212 44 C212 31 213 25 216 16" stroke="#5f7d47" stroke-width="3"/>' +
  '<path d="M218 44 C220 34 223 30 229 23" stroke="#6f8f52" stroke-width="2.5"/>' +
  '</g>';
const TOMB_RUBBLE =
  '<g>' +
  '<polygon points="24,44 35,29 50,32 57,44" fill="#9a94a0"/>' +
  '<polygon points="50,44 59,33 70,37 74,44" fill="#8b8491"/>' +
  '<polygon points="14,44 22,37 31,39 33,44" fill="#b3adb6"/>' +
  '<polygon points="197,44 204,25 214,27 213,44" fill="#a29ba6"/>' +
  '<polygon points="211,44 216,34 225,38 228,44" fill="#8b8491"/>' +
  '<polygon points="186,44 192,38 200,40 201,44" fill="#b3adb6"/>' +
  '</g>';
const TOMB_GROUND = R.ground || ["grass", "rubble", "grass", "both", "none", "rubble", "both", "grass", "rubble"];
function groundSVG(index) {
  if (R.noGround) return "";
  const kind = TOMB_GROUND[index] || "none";
  if (kind === "none") return "";
  const inner = kind === "grass" ? TOMB_GRASS
    : kind === "rubble" ? TOMB_RUBBLE
    : TOMB_RUBBLE + TOMB_GRASS;
  return '<span class="tomb-base" aria-hidden="true"><svg viewBox="0 0 240 44" ' +
    'preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">' + inner + '</svg></span>';
}

const UI = { en: R.ui || {} };
const EXHIBITS = { en: R.exhibits || [] };

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
  // Card style: "headstone" (default) or "plaque" (museum/specimen look).
  if (R.cardStyle && document.body) document.body.classList.add("room-" + R.cardStyle);

  // Fold translated packs (added at the bottom of this file) into UI + EXHIBITS.
  const packs = window.__ROOM_LANGS__ || {};
  Object.keys(packs).forEach((code) => {
    if (packs[code].ui) UI[code] = packs[code].ui;
    if (packs[code].exhibits) EXHIBITS[code] = packs[code].exhibits;
  });

  if (window.BreakoutI18n) {
    window.BreakoutI18n.register(ROOM_ID, UI);
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
      ${groundSVG(index)}
    `;
    button.addEventListener("click", () => openExhibit(index));
    elements.grid.append(button);
  });
  elements.finishButton.disabled = completedCount() !== EXHIBIT_COUNT;
}

/* --- exhibit view --------------------------------------------------------- */
// The picture would give the identification away, so it stays hidden while the
// student investigates and is revealed only when they solve the exhibit.
const MYSTERY_PROMPT = {
  en: "The picture is hidden — use the clues to identify it.",
  es: "La imagen está oculta: usa las pistas para identificarla.",
  vi: "Hình ảnh đang được ẩn — hãy dùng các manh mối để nhận ra nó.",
  ar: "الصورة مخفية — استخدم الأدلة للتعرّف عليها.",
  hi: "तस्वीर छिपी हुई है — इसे पहचानने के लिए संकेतों का उपयोग करें।",
  ur: "تصویر چھپی ہوئی ہے — اسے پہچاننے کے لیے اشاروں کا استعمال کریں۔",
  zh: "图片已隐藏——请根据线索来辨认它。",
};
function mysteryPrompt() {
  return MYSTERY_PROMPT[currentLang()] || MYSTERY_PROMPT.en;
}

function openExhibit(index) {
  activeExhibitIndex = index;
  const exhibit = exhibits()[index];
  const record = getRecord(exhibit.id);
  activeChoices = buildChoices(exhibit.id, record);

  elements.exhibitNumber.textContent = t("exhibit.label", { n: index + 1 });
  elements.exhibitTitle.textContent = record.completed ? exhibit.relic : t("exhibit.mystery");
  elements.clueList.innerHTML = exhibit.clues.map((clue) => `<li>${escapeHTML(clue)}</li>`).join("");
  if (record.completed) {
    elements.placeholderLabel.textContent = t("placeholder.label", { n: index + 1 });
    elements.placeholderPath.textContent = "";
    elements.relicImage.alt = escapeHTML(exhibit.relic);
    elements.relicImage.src = exhibit.image;
  } else {
    // hide the image; it is part of the reveal
    elements.relicImage.removeAttribute("src");
    elements.relicImage.alt = "";
    elements.placeholderLabel.textContent = mysteryPrompt();
    elements.placeholderPath.textContent = "";
  }
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
  // reveal the picture now that the exhibit is solved
  elements.relicImage.alt = exhibit.relic;
  elements.relicImage.src = exhibit.image;
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
