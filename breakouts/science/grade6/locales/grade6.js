window.BREAKOUT = {
 "id": "science-grade6",
 "band": "6",
 "confetti": ["#0a6b52", "#1aa3b8", "#f0a316", "#2f6fe0", "#e0533a", "#7c5cbf"],
 "UI": {
  "en": {
   "sect.clues": "🔍 The Evidence",
   "sect.cluesHint": "Tap each piece of evidence to read it. (You can reopen them anytime.)",
   "sect.locks": "🔒 The Locks",
   "sect.locksHint": "Solve each lock using only the evidence above.",
   "crumb.teacher": "‹ Teacher launch",
   "crumb.suite": "Science Critical Thinking Breakouts",
   "ui.reset": "↺ Reset",
   "ui.check": "Check",
   "ui.gotit": "Got it",
   "ui.playagain": "Play Again",
   "ui.solved": "🔓 Cleared!",
   "ui.pcount": "{n} of {total} locks open",
   "ui.wordph": "Type your answer",
   "ui.clear": "clear",
   "fb.digit": "That number doesn't match the evidence. Check again.",
   "fb.word": "Check the evidence for the word that fits.",
   "fb.mc": "That one isn't supported by the evidence. Look again.",
   "fb.multiExtra": "One pick isn't strong evidence. Strong means facts the evidence actually proves about the forces.",
   "fb.multiMissing": "You're missing a piece of strong evidence. Find them all.",
   "fb.seq": "That order doesn't match how the energy transfers. Try again.",
   "footer.privacy": "Privacy & compliance",
   "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.26, Grade 6). Good-faith paraphrase; confirm before adoption.",
   "header.eyebrow": "Science Critical Thinking Breakout · Grade 6",
   "header.h1": "Cargo Ship Rescue",
   "header.sub": "The freighter TEKS Voyager is jammed at the Port of Houston. She's riding dangerously low, a deck crate keeps sliding, and the loading crane is bleeding power. You're the harbor engineer. Read the evidence, solve all four locks, and clear the ship to sail.",
   "brief.label": "⚓ Mission Brief",
   "brief.h": "Clear the Voyager to sail",
   "brief.p": "The dock supervisor radios you: <b>«She won't stop settling, a crate slid across the deck, and the crane tripped out.»</b> Every problem has a science reason hiding in the evidence — density, forces, and energy. Open each piece of evidence, weigh what it actually proves, and solve all four locks to send the Voyager safely to sea.",
   "footer.text": "Science Critical Thinking Breakouts · Runs entirely in your browser — no logins, no data collected.",
   "win.stamp": "CLEARED TO SAIL ✓",
   "win.h": "The Voyager sails!",
   "win.p": "You used density to explain why a steel ship floats, proved the crate's forces were balanced, named Newton's Third Law, and traced the crane's energy without losing a joule. That's exactly how marine engineers keep real ships safe."
  }
 },
 "CONTENT": {
  "en": {
   "clues": [
    {
     "id": "c1",
     "ico": "⚖️",
     "nm": "Density Decides",
     "title": "Density Decides Who Floats",
     "body": "Density = mass ÷ volume. An object floats in a fluid when its <b>overall</b> density is <b>less</b> than the fluid's. Steel is far denser than water — a solid steel bar sinks. But a ship's hollow hull spreads the same mass over a huge volume, so the ship's overall density drops below water's, and it floats."
    },
    {
     "id": "c2",
     "ico": "🚢",
     "nm": "Riding Too Low",
     "title": "Why the Voyager Rides Low",
     "body": "Each crate loaded adds <b>mass</b> but not hull <b>volume</b>. More mass in the same volume pushes the ship's overall density up toward the water's. Load past the painted load line and the overall density passes water's — then the ship stops floating and starts to sink."
    },
    {
     "id": "c3",
     "ico": "🧲",
     "nm": "The Sliding Crate",
     "title": "The Crate That Slid",
     "body": "A crate rests on the flat deck. Gravity pulls it down; the deck's <b>normal force</b> pushes up with an equal size; <b>friction</b> holds it against a gentle nudge. When all the forces on the crate add up to <b>zero</b>, the net force is zero and its motion doesn't change — that is <b>balanced</b>. A wave adds one extra sideways push, the net force is no longer zero, and the crate slides."
    },
    {
     "id": "c4",
     "ico": "🔁",
     "nm": "Push Back",
     "title": "The Propeller's Push",
     "body": "Newton's <b>Third Law</b>: for every force there is an equal and opposite force on the <b>other</b> object. The propeller pushes water <b>backward</b>; the water pushes the ship <b>forward</b>. The two forces are equal in size and opposite in direction, but they act on <b>different objects</b>, so they don't cancel — and the ship moves ahead."
    },
    {
     "id": "c5",
     "ico": "⚡",
     "nm": "The Crane's Energy",
     "title": "Where the Crane's Energy Goes",
     "body": "The crane runs on <b>electrical energy</b> from the dock. It lifts a crate high, storing <b>gravitational potential energy</b>. When the crate is lowered, that stored energy transforms into <b>kinetic energy</b> of motion. Energy is never created or destroyed — it only transfers and changes form. Trace it in order and none goes missing."
    },
    {
     "id": "c6",
     "ico": "🐙",
     "nm": "Diver's Fact",
     "title": "A Harbor Diver's Favorite Fact",
     "body": "The giant Pacific octopus has <b>three hearts</b> and blue, copper-based blood, and can squeeze through any gap larger than its beak. Harbor divers love spotting one near the pilings. It's a true and amazing fact — but it tells you nothing about loading or sailing the Voyager."
    }
   ],
   "locks": [
    {
     "id": "L1",
     "type": "seq",
     "color": "#f0a316",
     "title": "Follow the Crane's Energy",
     "q": "Put the crane's energy in the order it transforms as it lifts and then lowers a crate. Tap the pads in order.",
     "pads": [
      {"k": "pot", "e": "⬆️ Potential", "c": "#1aa3b8"},
      {"k": "elec", "e": "🔌 Electrical", "c": "#f0a316"},
      {"k": "kin", "e": "⬇️ Kinetic", "c": "#2f6fe0"}
     ],
     "answer": ["elec", "pot", "kin"],
     "reason": "Electrical energy lifts the crate (storing potential energy), then lowering it releases kinetic energy. Tracing energy transfers in order shows energy is conserved, not lost."
    },
    {
     "id": "L2",
     "type": "mc",
     "color": "#0a6b52",
     "title": "Why the Steel Ship Floats",
     "q": "A solid steel bar sinks, yet the steel Voyager floats. Which explanation does the evidence support?",
     "options": [
      "The ship is simply lighter than the bar.",
      "The hollow hull spreads the ship's mass over a large volume, so its overall density is less than water's.",
      "Water pushes harder on big objects than on small ones."
     ],
     "answerIndex": 1,
     "reason": "Density compares mass to volume. Shaping steel into a hollow hull raises its volume, which lowers overall density below water's — and that is what makes it float."
    },
    {
     "id": "L3",
     "type": "multi",
     "color": "#2f6fe0",
     "title": "Balanced or Not?",
     "q": "Before the wave hit, the crate sat perfectly still. Check ONLY the strong evidence that the forces on the crate were BALANCED (net force = zero). Leave out the true-but-off-topic fact.",
     "items": [
      {"t": "Gravity pulling down and the deck's normal force pushing up are equal in size.", "strong": true},
      {"t": "Friction cancels a gentle sideways nudge, so the crate doesn't budge.", "strong": true},
      {"t": "The crate stays still — its motion is not changing.", "strong": true},
      {"t": "A giant Pacific octopus has three hearts and blue blood.", "strong": false}
     ],
     "reason": "Balanced forces add up to zero, so an object's motion does not change. Strong evidence is only what shows the net force is zero — the octopus fact is true but irrelevant."
    },
    {
     "id": "L4",
     "type": "word",
     "color": "#e0533a",
     "title": "Name the Law",
     "q": "The propeller pushes water backward and the water pushes the ship forward — equal size, opposite direction, on different objects. Which of Newton's laws is this? Type the number word (for example, «first»).",
     "answer": ["third", "3rd", "newton's third", "newtons third", "third law", "newton's third law", "action-reaction", "action reaction", "tercera"],
     "reason": "This is Newton's Third Law. Third-Law force pairs are equal and opposite but act on different objects, so they never cancel — which is exactly why the ship moves forward."
    }
   ]
  }
 }
};
