window.BREAKOUT = {
 "id": "science-gradeK",
 "band": "K",
 "confetti": ["#0e7490", "#f59e0b", "#e11d48", "#16a34a", "#7c3aed", "#f0c419"],
 "UI": {
  "en": {
   "sect.clues": "🔍 The Clues",
   "sect.cluesHint": "Tap each clue to see it. You can open them again anytime.",
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
   "ui.wordph": "Type here",
   "ui.clear": "clear",
   "fb.digit": "Not yet. Look again.",
   "fb.word": "Look at the clues for the word.",
   "fb.mc": "Not that one. Look again.",
   "fb.multiExtra": "One pick is not right. Pick only the ones that make a shadow.",
   "fb.multiMissing": "You missed one. Find them all.",
   "fb.seq": "Not that order. Try again.",
   "footer.privacy": "Privacy & compliance",
   "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.2, Kindergarten). Good-faith paraphrase; confirm before adoption.",
   "header.eyebrow": "Science Breakout · Kindergarten",
   "header.h1": "Light and Shadows",
   "header.sub": "Turn on a light and watch what happens! Tap the clues and open all four locks to learn about light and shadows.",
   "brief.label": "🔦 Your Job",
   "brief.h": "Find the shadows",
   "brief.p": "We need <b>light</b> to see. When something blocks the light, it makes a dark <b>shadow</b>. Tap each clue, then open all four locks!",
   "footer.text": "Science Critical Thinking Breakouts · Kindergarten · Runs in your browser — no logins, no data collected.",
   "win.stamp": "GREAT JOB ✓",
   "win.h": "You did it!",
   "win.p": "You learned that we need light to see, and that blocking light makes a shadow. Now go make some shadows of your own!"
  }
 },
 "CONTENT": {
  "en": {
   "clues": [
    {"id":"c1","ico":"💡","nm":"Light","title":"We Need Light","body":"We can only see things when there is <b>light</b>. In the dark, we cannot see."},
    {"id":"c2","ico":"🔦","nm":"Flashlight","title":"A Flashlight","body":"A flashlight makes light. It helps us see in the dark."},
    {"id":"c3","ico":"🌑","nm":"Shadow","title":"A Shadow","body":"When something blocks the light, it makes a dark <b>shadow</b>."},
    {"id":"c4","ico":"🖐️","nm":"Hand Shadow","title":"Make a Shadow","body":"Put your hand in front of a light. It makes a hand <b>shadow</b> on the wall."},
    {"id":"c5","ico":"☀️","nm":"The Sun","title":"Sun Shadows","body":"The Sun gives light in the day. Trees and people make shadows in the sun."},
    {"id":"c6","ico":"🐟","nm":"Fish Fact","title":"A Fish Fact","body":"A fish can swim in the water. That is true and fun — but it is not about light or shadows."}
   ],
   "locks": [
    {"id":"L1","type":"seq","color":"#0e7490","title":"Make a Shadow","q":"Make a shadow with a flashlight. Put it in order. Tap the pads in order.",
     "pads":[{"k":"shadow","e":"🌑 A shadow shows on the wall","c":"#e11d48"},{"k":"light","e":"🔦 Turn on the light","c":"#0e7490"},{"k":"hand","e":"🖐️ Put your hand in the way","c":"#f59e0b"}],
     "answer":["light","hand","shadow"],"reason":"Turn on the light, put your hand in the way, and a shadow shows up. Blocking light makes a shadow."},
    {"id":"L2","type":"mc","color":"#f59e0b","title":"What Do You Need?","q":"What do you need to see something?",
     "options":["Light.","A magnet.","A rock."],
     "answerIndex":0,"reason":"We need light to see. In the dark, we cannot see things."},
    {"id":"L3","type":"multi","color":"#e11d48","title":"What Makes a Shadow?","q":"Tap ONLY the things that make a shadow by blocking light. Leave out the fun fact.",
     "items":[{"t":"A hand in front of a flashlight.","strong":true},{"t":"A tree in the sunlight.","strong":true},{"t":"A toy blocking a lamp.","strong":true},{"t":"A fish swimming in water.","strong":false}],
     "reason":"A hand, a tree, and a toy all block light and make shadows. The fish fact is true but does not make a shadow."},
    {"id":"L4","type":"word","color":"#16a34a","title":"Name It","q":"When something blocks the light, it makes a dark ____. Type the word.",
     "answer":["shadow","shadows","sombra"],"reason":"Blocking light makes a shadow. We need light to see, and shadows show where the light is blocked."}
   ]
  }
 }
};
