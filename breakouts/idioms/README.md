# Idioms & Sayings for Multilingual Learners

A multilingual CTOB suite that teaches **idioms and sayings** to multilingual learners (ESL) and in
world-language / multilingual classrooms, **grades 3–12**, using each learner's home language as a
resource. See **[PLAN.md](PLAN.md)** for the full instructional plan, standards alignment, and sources.

**Status:** Live — **12 breakouts fully translated into all 7 languages** (EN/ES/VI/AR/HI/UR/ZH)
across three grade bands (incl. Phase 3 **French idioms** and **Latin roots** units for the LOTE /
Classical-Languages classroom), a search-first landing with a random **trilingual (EN/ES/FR) idiom
spotlight of 66 idioms**, an **[Idiom Arcade](#idiom-arcade)** of three arcade games below the search,
**teacher-support pages** ([UDL](udl.html) · [ELPS](elps.html) · [guide](guide.html), 7 languages),
printable **[companion pieces](cards.html)**, and an **[ELPS/TEKS alignment page](correlation.html)**.
See the full inventory under [Complete list of idioms & sayings](#complete-list-of-idioms--sayings).

## Idiom Arcade

Three self-contained, arcade-style browser games are featured below the search on `index.html`, all
sharing `games/idiom-data.js` (no logins, no data collected, playable by touch/mouse/keyboard, and
respecting `prefers-reduced-motion`):

- **`games/match-blitz.html`** — *Idiom Match Blitz*: race a countdown to match idioms with meanings; streak multiplier.
- **`games/meaning-meteors.html`** — *Meaning Meteors*: a canvas catcher — grab the correct meaning as it falls, dodge the traps; 3 lives.
- **`games/trap-escape.html`** — *Trap Escape*: literal-vs-figurative reflex game; decide fast before the timer empties; combo scoring.

## Layout

```
idioms/
├── PLAN.md              The instructional plan (why, standards, phasing, sources)
├── README.md            This file
├── index.html           Search-first landing (reads breakouts.js → window.IDIOMS_LIB)
├── build.js             Generator: _specs (+ _i18n) → breakout .js + student .html + breakouts.js
├── breakouts.js         window.IDIOMS_LIB — landing manifest (generated)
└── grades/
    ├── _specs-<band>.json          English source specs per band (g35 / g68 / g912)
    ├── _i18n-<band>-<slug>.json    Translations {es:{chrome,clues,locks}, …} (optional per breakout)
    ├── <band>-<slug>.js            window.BREAKOUT data (generated)
    └── <band>-<slug>-student.html  Student page (generated) — loads ../../assets/{i18n,breakout}.js
```

Bands: **g35 (3–5), g68 (6–8), g912 (9–12)** — no K–2 (this suite is grades 3–12).

## Build

```bash
node breakouts/idioms/build.js
```

Reads each `grades/_specs-<band>.json`, zips in any `grades/_i18n-<band>-<slug>.json` translations, and
writes the breakout `.js` + `-student.html` + the landing manifest `breakouts.js`. Shared UI chrome (all 7
languages) is imported from `../build-ml.js`'s `COMMON`; the engine falls back to English for any missing
language, so **English-only content works in all 7 languages immediately** and translations layer in later.

## Add a breakout

1. Append a spec to the right `grades/_specs-<band>.json`:
   ```json
   {
     "slug": "kebab-unique", "h1": "...", "sub": "...", "kw": "search terms idiom names languages",
     "brief": { "label": "Your mission", "h": "...", "p": "..." },
     "win":   { "stamp": "...", "h": "...", "p": "..." },
     "clues": [ { "ico": "🖐️", "nm": "...", "title": "...", "body": "..." }, … ×6 ],
     "locks": [ <one seq, one mc, one multi, one word — omit ids/colors> ]
   }
   ```
   Keep **6 clues** (incl. one true-but-off-topic decoy) and **4 locks** (one of each type). Multi = exactly
   3 `strong:true` + 1 `strong:false`.
2. Optional: add `grades/_i18n-<band>-<slug>.json` with translated `chrome`, `clues`, and `locks` (arrays in
   the same order/count as English; `seq` pads keep their leading emoji; `word` answers give native terms —
   English answers are merged automatically).
3. Run `node breakouts/idioms/build.js`.

## Complete list of idioms & sayings

### Taught in the breakouts (what students work with)

**Grades 3–5**
- **Body Idioms** — *lend a hand* (echar una mano) · *cost an arm and a leg* (costar un ojo de la cara) · *pull someone's leg* (tomar el pelo)
- **Animal Idioms** — *it's raining cats and dogs* (llueve a cántaros) · *hold your horses* (para el carro) · *a little bird told me* (me lo dijo un pajarito) · *let the cat out of the bag* (descubrir el pastel)
- **Food Idioms** — *a piece of cake* (pan comido) · *spill the beans* (descubrir el pastel) · *the apple of my eye* (la niña de mis ojos) · *bring home the bacon* (ganarse el pan)

**Grades 6–8**
- **Game On: Sports & School** — *hit the books* (ponerse a estudiar / hincar los codos) · *a ballpark figure* (una cifra aproximada) · *drop the ball* (meter la pata) · *the ball is in your court* (la pelota está en tu tejado)
- **Time & Money** — *time flies* (el tiempo vuela) · *break the bank* (costar un dineral) · *once in a blue moon* (de vez en cuando / de Pascuas a Ramos) · *save / spend / waste time* (ahorrar / gastar / perder el tiempo)

**Grades 9–12**
- **Proverbs, Sayings & Latin Roots** — *the apple doesn't fall far from the tree* (de tal palo, tal astilla) · *better late than never* (más vale tarde que nunca) · *carpe diem* → Spanish *día* (a shared Latin root) · *the early bird catches the worm* (camarón que se duerme se lo lleva la corriente)

### The landing "Idiom Spotlight" bank (66, trilingual)

Every load of `index.html` shows a random popular idiom with its meaning and its **Spanish and French** equivalents, tagged *same picture* / *different picture* (whether the languages use the same image). The bank grew from 40 to **66** with a curated, K–12-screened set drawn from englishstudyonline, 7ESL, and the cogweb Spanish–English proverbs list (source of record: the `IDIOMS` array + `FR` map in `index.html`). A representative slice of the rotating bank:

| English idiom | Meaning | Spanish (literal) | French (literal) |
| --- | --- | --- | --- |
| Break the ice | to ease tension or get a conversation started | *romper el hielo* (break the ice) | *briser la glace* (break the ice) |
| Kill two birds with one stone | to solve two problems with one action | *matar dos pájaros de un tiro* (kill two birds with one shot) | *faire d'une pierre deux coups* (make two hits with one stone) |
| Hit the nail on the head | to be exactly right | *dar en el clavo* (hit the nail) | *taper dans le mille* (hit the bullseye) |
| A piece of cake | something very easy | *pan comido* (eaten bread) | *c'est du gâteau* (it's cake) |
| It's raining cats and dogs | it's raining very hard | *llueve a cántaros* (it's raining pitchers) | *il pleut des cordes* (it's raining ropes) |
| Cost an arm and a leg | to be very expensive | *costar un ojo de la cara* (cost an eye of the face) | *coûter les yeux de la tête* (cost the eyes of the head) |
| Lend a hand | to help someone | *echar una mano* (throw a hand) | *donner un coup de main* (give a stroke of the hand) |
| Pull someone's leg | to joke with or tease someone | *tomar el pelo* (take the hair) | *faire marcher quelqu'un* (make someone walk) |
| Spill the beans | to reveal a secret | *descubrir el pastel* (uncover the cake) | *vendre la mèche* (sell the fuse) |
| Time flies | time passes very quickly | *el tiempo vuela* (time flies) | *le temps file* (time races off) |
| The ball is in your court | it's your turn to decide or act | *la pelota está en tu tejado* (the ball is on your roof) | *la balle est dans ton camp* (the ball is in your camp) |
| Once in a blue moon | very rarely | *de Pascuas a Ramos* (from Easter to Palm Sunday) | *tous les trente-six du mois* (every thirty-sixth of the month) |
| When pigs fly | something that will never happen | *cuando las ranas críen pelo* (when frogs grow hair) | *quand les poules auront des dents* (when hens have teeth) |
| Speak of the devil | the person we were talking about just showed up | *hablando del rey de Roma* (speaking of the king of Rome) | *quand on parle du loup, on en voit la queue* (when you speak of the wolf, you see its tail) |
| Better late than never | doing something late beats not at all | *más vale tarde que nunca* (late is worth more than never) | *mieux vaut tard que jamais* (better late than never) |
| A little bird told me | I heard it secretly — I won't say from whom | *me lo dijo un pajarito* (a little bird told me) | *mon petit doigt me l'a dit* (my little finger told me) |
| Hold your horses | wait — be patient | *para el carro* (stop the cart) | *doucement les chevaux* (gently, the horses) |
| Carpe diem | seize the day — make the most of now (from Latin) | *aprovecha el día* (Latin *diem* → Spanish *día*) | *cueille le jour présent* (pluck the present day) |
| Cross your fingers | to hope for good luck | *cruzar los dedos* (cross your fingers) | *croiser les doigts* (cross the fingers) |
| Butterflies in your stomach | to feel nervous or excited | *tener mariposas en el estómago* (butterflies in your stomach) | *avoir des papillons dans le ventre* (butterflies in the belly) |
| The tip of the iceberg | a small, visible part of a much bigger problem | *la punta del iceberg* (the tip of the iceberg) | *la partie émergée de l'iceberg* (the emerged part of the iceberg) |
| Head in the clouds | daydreaming; not paying attention | *estar en las nubes* (to be in the clouds) | *être dans les nuages* (to be in the clouds) |
| Read between the lines | to find a hidden or unstated meaning | *leer entre líneas* (read between the lines) | *lire entre les lignes* (read between the lines) |
| Add fuel to the fire | to make a bad situation worse | *echar leña al fuego* (add wood to the fire) | *jeter de l'huile sur le feu* (throw oil on the fire) |
| Don't judge a book by its cover | don't judge by appearances | *las apariencias engañan* (appearances deceive) | *l'habit ne fait pas le moine* (the robe doesn't make the monk) |
| Practice makes perfect | you improve by doing something repeatedly | *la práctica hace al maestro* (practice makes the master) | *c'est en forgeant qu'on devient forgeron* (by forging one becomes a blacksmith) |
| Two heads are better than one | two people solve problems better than one | *cuatro ojos ven más que dos* (four eyes see more than two) | *deux avis valent mieux qu'un* (two opinions are worth more than one) |
| Beat around the bush | to avoid getting to the point | *andarse por las ramas* (walk around the branches) | *tourner autour du pot* (turn around the pot) |
| It's not rocket science | it isn't complicated | *no es física cuántica* (it's not quantum physics) | *ce n'est pas sorcier* (it's not witchcraft) |
| That rings a bell | that sounds familiar | *me suena* (that sounds to me) | *ça me dit quelque chose* (that says something to me) |
| Get the ball rolling | to start something | *poner algo en marcha* (set something in motion) | *lancer la machine* (get the machine going) |
| Back to the drawing board | to start over after a failure | *volver a empezar* (to start over) | *retour à la case départ* (back to the starting square) |
| In a nutshell | in short; briefly | *en pocas palabras* (in few words) | *en un mot* (in a word) |
| By the skin of your teeth | just barely; only just | *por los pelos* (by the hairs) | *à un cheveu près* (within a hair's breadth) |
| Keep your chin up | stay positive and brave | *no bajes los brazos* (don't lower your arms) | *garde le moral* (keep your spirits up) |
| Every cloud has a silver lining | there's something good in every bad situation | *no hay mal que por bien no venga* (no bad comes without some good) | *après la pluie, le beau temps* (after the rain, fine weather) |
| Bite the bullet | to face something hard and get it over with | *apretar los dientes* (clench your teeth) | *serrer les dents* (clench your teeth) |
| Give it a shot | to try something | *darle una oportunidad* (give it a chance) | *tenter le coup* (attempt the try) |
| Actions speak louder than words | what you do matters more than what you say | *obras son amores, y no buenas razones* (deeds are love, not fine words) | *les actes valent mieux que les paroles* (deeds are worth more than words) |
| Learn the ropes | to learn how something works | *aprender los trucos del oficio* (learn the tricks of the trade) | *apprendre les ficelles du métier* (learn the strings of the trade) |

### High-school world languages

Languages commonly taught in Texas high schools — **Spanish, French, German, Latin, Mandarin Chinese, ASL** — are the natural next audience, aligned to the **LOTE TEKS (19 TAC Ch. 114; Latin is Subchapter D, Classical Languages)**. The spotlight already shows **French** equivalents and flags **Latin** roots (*carpe diem*, *día*/*jour*). German, Mandarin (already in the 7-language engine as `zh`), and others can be added by extending the `FR`-style map in `index.html`; full French/Latin **breakouts** are Phase 3 of the [plan](PLAN.md).

### Adding more idioms — K–12 appropriateness criteria

When adding idioms (to the spotlight bank or a new breakout), keep them **used in everyday speech but classroom-safe**:
- **High-frequency & vernacular** — idioms students actually hear.
- **No crude, violent, adult, alcohol/gambling, or faith-asserting content.** (Example: we swapped the proverb *"a quien madruga, Dios le ayuda"* for the secular *"camarón que se duerme se lo lleva la corriente."*)
- **Give an accurate L1 equivalent** — or a plain paraphrase if none exists — and tag whether the image is the **same** or **different** across languages. That contrast is the metalinguistic teaching point.
- **Where to add:** the `IDIOMS` and `FR` arrays in `index.html` (spotlight), or a new breakout spec in `grades/_specs-<band>.json` (then `node build.js`).

## Design principles (from the plan)

- **Cross-linguistic comparison is the point.** Every idiom clue names the L1 equivalent and whether the
  image is the **same** (hand ↔ *mano*), **different** (arm & leg ↔ *un ojo*), or **has no parallel**.
- **Transparent / L1-similar idioms first**, then opaque ones (research-backed).
- **`word` locks accept the L1 answer**, not just English — the home language is a valid answer.
- Standards: **ELPS** (idiomatic expressions), **WIDA** (figurative language), **TEKS ELAR** & World Languages.

## Gotcha (shared across all breakout suites)

`data-i18n` / `esc()`-rendered values (titles, labels, clue/lock text) must hold **literal characters, not
HTML entities** — write `&`, never `&amp;` (an `&amp;` there renders literally or double-escapes). Only
`data-i18n-html` values may carry entities. See the project pack §4 for the full rule.
