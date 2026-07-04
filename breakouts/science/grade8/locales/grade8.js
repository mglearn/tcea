window.BREAKOUT = {
 "id": "science-grade8",
 "band": "8",
 "confetti": ["#3b46b5", "#2f8fd0", "#7c5cbf", "#e0533a", "#0a8a5f", "#f0a316"],
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
   "fb.multiExtra": "One pick isn't strong evidence that mass is conserved. Strong means what the sealed reaction actually shows.",
   "fb.multiMissing": "You're missing a piece of strong evidence. Find them all.",
   "fb.seq": "That order doesn't show mass being conserved. Try again.",
   "footer.privacy": "Privacy & compliance",
   "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.28, Grade 8). Good-faith paraphrase; confirm before adoption.",
   "header.eyebrow": "Science Critical Thinking Breakout · Grade 8",
   "header.h1": "Launch Control",
   "header.sub": "T-minus ten minutes. Before the rocket can fly, mission control must clear three systems: the fuel chemistry, the thrust math, and the telemetry link. You're the launch director. Read the data, solve all four locks, and give the go for launch.",
   "brief.label": "🚀 Mission Brief",
   "brief.h": "Give the go for launch",
   "brief.p": "Flight control calls out: <b>«Fuel team needs the mass checked, guidance needs the acceleration, and comms needs the wavelength — all before the window closes.»</b> Every answer is hidden in the evidence: conservation of mass, Newton's Second Law, and waves. Open each piece, decide what it proves, and clear all four locks for launch.",
   "footer.text": "Science Critical Thinking Breakouts · Runs entirely in your browser — no logins, no data collected.",
   "win.stamp": "GO FOR LAUNCH ✓",
   "win.h": "We have liftoff!",
   "win.p": "You proved mass is conserved in a sealed reaction, predicted how added mass slows acceleration with a = F ÷ m, ruled out an off-topic fact, and named the wavelength on the telemetry link. That's the disciplined, evidence-first thinking aerospace engineers launch rockets on."
  }
 },
 "CONTENT": {
  "en": {
   "clues": [
    {
     "id": "c1",
     "ico": "⚗️",
     "nm": "Conservation of Mass",
     "title": "Atoms Are Never Lost",
     "body": "In any chemical reaction, atoms are only <b>rearranged</b> — never created or destroyed. So the <b>total mass of the reactants equals the total mass of the products</b>. Even when fuel burns and seems to «disappear», the atoms simply become new gases. This is the <b>law of conservation of mass</b>."
    },
    {
     "id": "c2",
     "ico": "🚀",
     "nm": "Newton's 2nd Law",
     "title": "Force, Mass, and Acceleration",
     "body": "Newton's Second Law: <b>acceleration = net force ÷ mass</b>, or a = F ÷ m. For a fixed engine thrust (force), adding <b>more mass</b> gives <b>less</b> acceleration. Adding more force to the same mass gives more acceleration. Mass and acceleration pull in opposite directions."
    },
    {
     "id": "c3",
     "ico": "〰️",
     "nm": "Wave Anatomy",
     "title": "Parts of a Wave",
     "body": "A wave has <b>amplitude</b> (its height — how much energy it carries), a <b>wavelength</b> (the distance from one crest to the next), and a <b>frequency</b> (how many waves pass each second). Amplitude is about energy; wavelength and frequency are about spacing and timing."
    },
    {
     "id": "c4",
     "ico": "🔒",
     "nm": "The Sealed Bag",
     "title": "Why the Bag Stays Sealed",
     "body": "The fuel test runs inside a <b>sealed</b> container so <b>no gas can escape</b>. That is what lets the scale prove conservation of mass: if nothing enters or leaves, the mass before the reaction must equal the mass after — even when bubbles of gas form inside."
    },
    {
     "id": "c5",
     "ico": "📡",
     "nm": "Telemetry Link",
     "title": "Radioing the Rocket",
     "body": "Telemetry travels on <b>electromagnetic waves</b>. Their speed is fixed (the speed of light), so <b>frequency and wavelength trade off</b>: a higher frequency means a <b>shorter</b> wavelength. Engineers pick a wavelength that carries the data cleanly through the atmosphere."
    },
    {
     "id": "c6",
     "ico": "🐢",
     "nm": "Coastal Fact",
     "title": "A Launch-Coast Fact",
     "body": "Sea turtles can navigate across entire oceans using Earth's <b>magnetic field</b>, returning to the very beach where they hatched. The launch crew loves watching them near the coast. It's a true, amazing fact — but it has nothing to do with the fuel, the thrust, or the telemetry."
    }
   ],
   "locks": [
    {
     "id": "L1",
     "type": "seq",
     "color": "#0a8a5f",
     "title": "Prove the Mass Is Conserved",
     "q": "Show the fuel team that mass is conserved. Put the three steps in order. Tap the pads in order.",
     "pads": [
      {"k": "before", "e": "⚖️ Weigh sealed bag: 50 g", "c": "#2f8fd0"},
      {"k": "react", "e": "🔁 Atoms rearrange (none lost)", "c": "#7c5cbf"},
      {"k": "after", "e": "⚖️ Weigh again: 50 g", "c": "#0a8a5f"}
     ],
     "answer": ["before", "react", "after"],
     "reason": "Weigh the sealed system, let the atoms rearrange (nothing enters or leaves), and weigh again — the mass is unchanged. That is conservation of mass, in order."
    },
    {
     "id": "L2",
     "type": "mc",
     "color": "#3b46b5",
     "title": "What Happens to Acceleration?",
     "q": "The engines give a fixed thrust. Just before launch, engineers bolt on heavy extra cargo. Using a = F ÷ m, what happens to the rocket's acceleration?",
     "options": [
      "It increases, because the rocket is now bigger.",
      "It decreases, because more mass means less acceleration for the same force.",
      "It stays the same, because mass doesn't affect acceleration."
     ],
     "answerIndex": 1,
     "reason": "In a = F ÷ m, force is fixed but mass is now larger, so acceleration must be smaller. More mass always means less acceleration for the same force."
    },
    {
     "id": "L3",
     "type": "multi",
     "color": "#e0533a",
     "title": "Evidence That Mass Is Conserved",
     "q": "Check ONLY the strong evidence that mass is conserved in the sealed fuel test. Leave out the true-but-off-topic fact.",
     "items": [
      {"t": "The scale reads the same mass before and after the reaction.", "strong": true},
      {"t": "Atoms are only rearranged, not created or destroyed.", "strong": true},
      {"t": "The bag is sealed, so no gas can enter or escape.", "strong": true},
      {"t": "Sea turtles navigate the ocean using Earth's magnetic field.", "strong": false}
     ],
     "reason": "Mass is conserved because a sealed system keeps every atom inside, so before-mass equals after-mass. The sea-turtle fact is true but irrelevant to the reaction."
    },
    {
     "id": "L4",
     "type": "word",
     "color": "#7c5cbf",
     "title": "Name the Measurement",
     "q": "On the telemetry link, engineers measure the distance from one wave crest to the next. What is that distance called? Type the word.",
     "answer": ["wavelength", "wave length", "longitud de onda", "longitud"],
     "reason": "The crest-to-crest distance is the wavelength. Because wave speed is fixed, a higher frequency means a shorter wavelength — engineers balance the two for a clean signal."
    }
   ]
  }
 }
};
