window.BREAKOUT = {
 "id": "science-grade3",
 "band": "3",
 "confetti": ["#5b3a9e", "#0d9488", "#e0902a", "#e0533a", "#2f6fe0", "#f0c419"],
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
   "fb.multiExtra": "One pick isn't right. Pick only what the clues show about space.",
   "fb.multiMissing": "You're missing one. Find them all.",
   "fb.seq": "That order doesn't match the clues. Try again.",
   "footer.privacy": "Privacy & compliance",
   "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.5, Grade 3). Good-faith paraphrase; confirm before adoption.",
   "header.eyebrow": "Science Breakout · Grade 3",
   "header.h1": "Blast Off! A Trip Through Space",
   "header.sub": "You are the pilot of a spaceship! Read the clues and open all four locks to learn how the Sun, planets, and Moon move through our solar system.",
   "brief.label": "🚀 Your Mission",
   "brief.h": "Chart the solar system",
   "brief.p": "To fly safely, you must know your way around space. The Sun sits at the center, the planets <b>orbit</b> (travel around) the Sun, and the Moon orbits the Earth. Tap each clue, then open all four locks!",
   "footer.text": "Science Critical Thinking Breakouts · Grade 3 · Runs in your browser — no logins, no data collected.",
   "win.stamp": "MISSION COMPLETE ✓",
   "win.h": "Great flying, pilot!",
   "win.p": "You put the planets in order, learned that the Moon orbits the Earth while the Earth orbits the Sun, and named what it means to orbit. Now you can chart a course through our solar system!"
  }
 },
 "CONTENT": {
  "en": {
   "clues": [
    {"id":"c1","ico":"☀️","nm":"The Sun","title":"The Center","body":"The <b>Sun</b> sits at the center of our solar system. It is a giant <b>star</b> that gives off light and heat."},
    {"id":"c2","ico":"🪐","nm":"Planets","title":"Planets Orbit","body":"Eight <b>planets</b> travel around the Sun. Earth is one of them. Their path around the Sun is called an <b>orbit</b>."},
    {"id":"c3","ico":"🌍","nm":"Planet Order","title":"Closest First","body":"The four planets closest to the Sun, in order, are <b>Mercury, Venus, Earth, Mars</b>."},
    {"id":"c4","ico":"🌙","nm":"The Moon","title":"The Moon's Path","body":"The <b>Moon</b> orbits (goes around) the <b>Earth</b>. At the same time, the Earth orbits the Sun."},
    {"id":"c5","ico":"🔭","nm":"Orbit","title":"What Orbit Means","body":"To <b>orbit</b> means to travel around something in a path. The planets orbit the Sun; the Moon orbits the Earth."},
    {"id":"c6","ico":"🦖","nm":"Dino Fact","title":"A Dinosaur Fact","body":"The biggest dinosaurs were as long as a basketball court. That is true and amazing — but it is not about space."}
   ],
   "locks": [
    {"id":"L1","type":"seq","color":"#5b3a9e","title":"Order the Planets","q":"Put the four closest planets in order, starting nearest the Sun. Tap the pads in order.",
     "pads":[{"k":"mars","e":"🔴 Mars","c":"#e0533a"},{"k":"mercury","e":"⚫ Mercury","c":"#5b3a9e"},{"k":"earth","e":"🌍 Earth","c":"#2f6fe0"},{"k":"venus","e":"🟡 Venus","c":"#e0902a"}],
     "answer":["mercury","venus","earth","mars"],"reason":"From the Sun outward: Mercury, Venus, Earth, then Mars. The planets travel in order around the Sun."},
    {"id":"L2","type":"mc","color":"#0d9488","title":"The Moon's Orbit","q":"What does the Moon travel around (orbit)?",
     "options":["The Sun.","The Earth.","Mars."],
     "answerIndex":1,"reason":"The Moon orbits the Earth. The Earth (with the Moon) orbits the Sun."},
    {"id":"L3","type":"multi","color":"#e0902a","title":"True About Space","q":"Tap ONLY the true clues about our solar system. Leave out the fact that is not about space.",
     "items":[{"t":"The planets orbit the Sun.","strong":true},{"t":"The Moon orbits the Earth.","strong":true},{"t":"The Sun is at the center.","strong":true},{"t":"The biggest dinosaurs were very long.","strong":false}],
     "reason":"Planets orbit the Sun, the Moon orbits Earth, and the Sun is the center. The dinosaur fact is true but is not about space."},
    {"id":"L4","type":"word","color":"#e0533a","title":"Name the Path","q":"To travel around the Sun in a path is to ____. Type the word.",
     "answer":["orbit","orbits","orbiting","órbita","orbita","orbitar"],"reason":"To orbit is to travel around something in a path. Planets orbit the Sun; the Moon orbits the Earth."}
   ]
  }
 }
};
