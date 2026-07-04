window.BREAKOUT = {
 "id": "science-grade5",
 "band": "5",
 "confetti": ["#9f1239", "#0891b2", "#ca8a04", "#16a34a", "#7c3aed", "#f0c419"],
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
   "fb.multiExtra": "One pick isn't right. Pick only what the clues show about Earth's spin.",
   "fb.multiMissing": "You're missing one. Find them all.",
   "fb.seq": "That order doesn't match the clues. Try again.",
   "footer.privacy": "Privacy & compliance",
   "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.7, Grade 5). Good-faith paraphrase; confirm before adoption.",
   "header.eyebrow": "Science Breakout · Grade 5",
   "header.h1": "Round and Round: Day, Night, and Shadows",
   "header.sub": "Why does the Sun seem to cross the sky, and why do shadows move? Read the clues and open all four locks to discover how Earth's spin makes day, night, and shadows.",
   "brief.label": "🌍 Your Mission",
   "brief.h": "Solve the spinning Earth",
   "brief.p": "The Sun looks like it moves across the sky, but it's really <b>Earth spinning</b> that makes day, night, and moving shadows. Earth <b>rotates</b> once about every 24 hours. Tap each clue, then open all four locks!",
   "footer.text": "Science Critical Thinking Breakouts · Grade 5 · Runs in your browser — no logins, no data collected.",
   "win.stamp": "SPUN IT ✓",
   "win.h": "You cracked it!",
   "win.p": "You figured out that Earth's spin — not the Sun moving — makes day and night, and moves shadows from long to short and back. Earth rotates once about every 24 hours, and that changes everything we see in the sky!"
  }
 },
 "CONTENT": {
  "en": {
   "clues": [
    {"id":"c1","ico":"🌍","nm":"Earth Spins","title":"Earth Rotates","body":"Earth <b>spins</b> (rotates) on its axis one full turn about every <b>24 hours</b>."},
    {"id":"c2","ico":"🌗","nm":"Day & Night","title":"Day and Night","body":"As Earth spins, the side facing the Sun has <b>day</b>. The side facing away has <b>night</b>."},
    {"id":"c3","ico":"🌅","nm":"Sun's Path","title":"The Sun Only Seems to Move","body":"The Sun appears to rise in the east and set in the west. But it is really <b>we</b> who are spinning — the Sun is not moving around us."},
    {"id":"c4","ico":"🌑","nm":"Shadows","title":"Shadows Form","body":"A <b>shadow</b> forms when an object blocks the Sun's light. As the Sun's position in the sky changes, shadows change position and length."},
    {"id":"c5","ico":"📏","nm":"Long & Short","title":"Long and Short Shadows","body":"Shadows are <b>long</b> in the morning and evening (the Sun is low) and <b>short</b> at midday (the Sun is high)."},
    {"id":"c6","ico":"🦋","nm":"Bug Fact","title":"A Butterfly Fact","body":"A butterfly tastes with its feet. That is true and fun — but it is not about Earth's spin."}
   ],
   "locks": [
    {"id":"L1","type":"seq","color":"#9f1239","title":"A Shadow Through the Day","q":"Track one shadow from morning to evening. Put it in order. Tap the pads in order.",
     "pads":[{"k":"eve","e":"🌆 Long evening shadow","c":"#7c3aed"},{"k":"morn","e":"🌄 Long morning shadow","c":"#9f1239"},{"k":"noon","e":"☀️ Short midday shadow","c":"#ca8a04"}],
     "answer":["morn","noon","eve"],"reason":"Shadows are long in the morning, short at midday, and long again in the evening. They change because Earth's spin changes the Sun's position in the sky."},
    {"id":"L2","type":"mc","color":"#0891b2","title":"Why the Sun Seems to Move","q":"Why does the Sun appear to move across the sky each day?",
     "options":["The Sun orbits the Earth once a day.","Earth is spinning (rotating), so the Sun only seems to move.","The Sun grows and shrinks."],
     "answerIndex":1,"reason":"Earth spins on its axis, so the Sun only appears to move across the sky. It is really us turning, not the Sun."},
    {"id":"L3","type":"multi","color":"#ca8a04","title":"True About Earth's Spin","q":"Tap ONLY the true clues about Earth's rotation. Leave out the fun fact.",
     "items":[{"t":"Earth spins one full turn about every 24 hours.","strong":true},{"t":"The side facing the Sun has day.","strong":true},{"t":"Shadows change as the Sun's position changes.","strong":true},{"t":"A butterfly tastes with its feet.","strong":false}],
     "reason":"Earth spins daily, giving day and night and moving shadows. The butterfly fact is true but is not about Earth's spin."},
    {"id":"L4","type":"word","color":"#16a34a","title":"Name the Spin","q":"Earth spins on its axis once about every 24 hours. We say the Earth will ____. Type the word.",
     "answer":["rotate","rotates","rotating","rotation","spin","spins","rotar","gira"],"reason":"Earth rotates (spins) on its axis. That spin causes day, night, and moving shadows."}
   ]
  }
 }
};
