window.BREAKOUT = {
 "id": "science-grade4",
 "band": "4",
 "confetti": ["#166534", "#ca8a04", "#dc2626", "#2563eb", "#7c3aed", "#0d9488"],
 "UI": {
  "en": {
   "sect.clues": "🔍 The Clues",
   "sect.cluesHint": "Tap each clue to read it. You can open them again anytime.",
   "sect.locks": "🔒 The Locks",
   "sect.locksHint": "Use the clues to open each lock.",
   "crumb.teacher": "‹ Teacher launch",
   "crumb.suite": "Science Critical Thinking Breakouts",
   "ui.reset": "↺ Start over",
   "ui.check": "Check",
   "ui.gotit": "Got it",
   "ui.playagain": "Play Again",
   "ui.solved": "🔓 Open!",
   "ui.pcount": "{n} of {total} locks open",
   "ui.wordph": "Type your answer",
   "ui.clear": "clear",
   "fb.digit": "Not quite. Look at the clues again.",
   "fb.word": "Look at the clues for the word that fits.",
   "fb.mc": "That one isn't supported by the clues. Look again.",
   "fb.multiExtra": "One pick isn't right. Pick only what the clues show about circuits.",
   "fb.multiMissing": "You're missing one. Find them all.",
   "fb.seq": "That order doesn't match the clues. Try again.",
   "footer.privacy": "Privacy & compliance",
   "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.6, Grade 4). Good-faith paraphrase; confirm before adoption.",
   "header.eyebrow": "Science Breakout · Grade 4",
   "header.h1": "Light It Up! The Secret of Circuits",
   "header.sub": "The classroom lamp won't turn on! Read the clues and open all four locks to learn how electricity flows in a circuit to make light and heat.",
   "brief.label": "💡 Your Mission",
   "brief.h": "Get the light working",
   "brief.p": "Electricity is a kind of energy, but it can only flow around a <b>closed path</b> called a <b>circuit</b>. If there is a gap, the light goes out. Tap each clue, then open all four locks to fix the light!",
   "footer.text": "Science Critical Thinking Breakouts · Grade 4 · Runs in your browser — no logins, no data collected.",
   "win.stamp": "LIGHTS ON ✓",
   "win.h": "You fixed it!",
   "win.p": "You traced how electricity flows from the battery, through the wires, to the bulb and back. A closed circuit turns electrical energy into light and heat — and now you know its secret!"
  }
 },
 "CONTENT": {
  "en": {
   "clues": [
    {"id":"c1","ico":"🔌","nm":"Electricity","title":"Electrical Energy","body":"Electricity is a kind of <b>energy</b>. It can light a bulb, ring a bell, or make heat."},
    {"id":"c2","ico":"🔁","nm":"Closed Path","title":"A Closed Loop","body":"Electricity needs a <b>closed path</b> — a full loop with no gaps — to flow. This loop is called a <b>circuit</b>."},
    {"id":"c3","ico":"💡","nm":"The Bulb","title":"How a Bulb Lights","body":"In a working circuit, electricity flows from the <b>battery</b>, through the <b>wires</b>, to the <b>bulb</b>, and back to the battery. That lights the bulb."},
    {"id":"c4","ico":"✂️","nm":"A Gap","title":"A Break Stops It","body":"If there is a <b>gap</b> or break in the path, the electricity stops flowing and the bulb goes dark."},
    {"id":"c5","ico":"🔥","nm":"Light & Heat","title":"Two Kinds of Energy","body":"A circuit can turn electrical energy into <b>light</b> energy (a glowing bulb) and <b>thermal</b> energy (heat)."},
    {"id":"c6","ico":"🦋","nm":"Bug Fact","title":"A Butterfly Fact","body":"A butterfly tastes with its feet. That is true and fun — but it is not about circuits."}
   ],
   "locks": [
    {"id":"L1","type":"seq","color":"#166534","title":"Follow the Electricity","q":"Trace the path electricity takes in a working circuit. Tap the pads in order.",
     "pads":[{"k":"back","e":"↩️ Back to the battery","c":"#2563eb"},{"k":"battery","e":"🔋 Leaves the battery","c":"#166534"},{"k":"bulb","e":"💡 Through the wire to the bulb","c":"#ca8a04"}],
     "answer":["battery","bulb","back"],"reason":"Electricity leaves the battery, flows through the wire to light the bulb, and returns to the battery. A full loop is what makes a circuit work."},
    {"id":"L2","type":"mc","color":"#ca8a04","title":"Why the Bulb Went Out","q":"You cut one of the wires. Why did the bulb go dark?",
     "options":["The battery ran out instantly.","The path is no longer closed, so electricity can't flow.","The bulb got too bright."],
     "answerIndex":1,"reason":"A gap breaks the closed path, so electricity can no longer flow around the loop and the bulb goes out."},
    {"id":"L3","type":"multi","color":"#dc2626","title":"True About Circuits","q":"Tap ONLY the true clues about circuits. Leave out the fun fact.",
     "items":[{"t":"Electricity needs a closed loop to flow.","strong":true},{"t":"A gap in the path stops the electricity.","strong":true},{"t":"A circuit can make light and heat.","strong":true},{"t":"A butterfly tastes with its feet.","strong":false}],
     "reason":"A circuit is a closed loop; a gap stops it; and it can make light and heat. The butterfly fact is true but is not about circuits."},
    {"id":"L4","type":"word","color":"#7c3aed","title":"Name the Loop","q":"A closed path that electricity flows around to light a bulb is called a ____. Type the word.",
     "answer":["circuit","circuits","circuito"],"reason":"A circuit is a closed loop for electricity. Electricity can only flow when the circuit is complete."}
   ]
  }
 }
};
