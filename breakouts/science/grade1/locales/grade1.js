window.BREAKOUT = {
 "id": "science-grade1",
 "band": "1",
 "confetti": ["#e88b1a", "#e0533a", "#2f8f7f", "#2f6fe0", "#f0c419", "#7c5cbf"],
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
   "ui.wordph": "Type here",
   "ui.clear": "clear",
   "fb.digit": "Not yet. Look at the clues again.",
   "fb.word": "Look at the clues for the right word.",
   "fb.mc": "Not that one. Check the clues again.",
   "fb.multiExtra": "One pick is not right. Pick only the ones that move things.",
   "fb.multiMissing": "You missed one. Find them all.",
   "fb.seq": "Not that order. Try again.",
   "footer.privacy": "Privacy & compliance",
   "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.3, Grade 1). Good-faith paraphrase; confirm before adoption.",
   "header.eyebrow": "Science Breakout · Grade 1",
   "header.h1": "Push, Pull, and Play!",
   "header.sub": "It is recess! Help your class at the playground. Read the clues and open all four locks to learn how pushes and pulls make things move.",
   "brief.label": "🛝 Your Job",
   "brief.h": "Get the playground going",
   "brief.p": "The swings, the wagon, and the ball are all still. To make them move, you need a <b>push</b> or a <b>pull</b>. Tap each clue, then open all four locks!",
   "footer.text": "Science Critical Thinking Breakouts · Grade 1 · Runs in your browser — no logins, no data collected.",
   "win.stamp": "RECESS CHAMP ✓",
   "win.h": "You did it!",
   "win.p": "You know that a push moves things away, a pull moves things closer, and a bigger push moves things faster. That is how forces make everything move!"
  }
 },
 "CONTENT": {
  "en": {
   "clues": [
    {"id":"c1","ico":"👋","nm":"Push","title":"A Push","body":"A <b>push</b> moves something <b>away</b> from you. You push a swing to make it go."},
    {"id":"c2","ico":"🤚","nm":"Pull","title":"A Pull","body":"A <b>pull</b> moves something <b>toward</b> you. You pull a wagon to bring it close."},
    {"id":"c3","ico":"🛝","nm":"Start & Stop","title":"Start, Stop, Turn","body":"A push or a pull can make something <b>start</b>, <b>stop</b>, go <b>faster</b>, or <b>change direction</b>."},
    {"id":"c4","ico":"💪","nm":"Big Push","title":"Big or Small","body":"A <b>bigger</b> push moves something <b>faster</b> and <b>farther</b>. A small push moves it a little."},
    {"id":"c5","ico":"🧲","nm":"Magnet","title":"A Magnet","body":"A <b>magnet</b> can pull some things, like paper clips, even without touching them."},
    {"id":"c6","ico":"🦋","nm":"Bug Fact","title":"A Butterfly Fact","body":"A butterfly has six legs and tastes with its feet. That is true and fun — but it is not about pushes and pulls."}
   ],
   "locks": [
    {"id":"L1","type":"seq","color":"#e88b1a","title":"The Swing","q":"You push a swing. Put the swing's moves in order. Tap the pads in order.",
     "pads":[{"k":"stop","e":"🛑 It slows and stops","c":"#2f6fe0"},{"k":"push","e":"👋 You push it","c":"#e88b1a"},{"k":"up","e":"⬆️ It swings up high","c":"#2f8f7f"}],
     "answer":["push","up","stop"],"reason":"Your push makes the swing start and go up. Then it slows and stops. A push starts the motion."},
    {"id":"L2","type":"mc","color":"#2f8f7f","title":"The Wagon","q":"You want the wagon to come to YOU. What should you do?",
     "options":["Push it away.","Pull it toward you.","Just look at it."],
     "answerIndex":1,"reason":"A pull brings something toward you. A push would move it away."},
    {"id":"L3","type":"multi","color":"#2f6fe0","title":"What Moves Things?","q":"Tap ONLY the things that are a push or a pull that makes something move. Leave out the fun fact that is not about moving.",
     "items":[{"t":"Kicking a ball to make it roll.","strong":true},{"t":"Pulling a wagon down the sidewalk.","strong":true},{"t":"Pushing a friend on the swing.","strong":true},{"t":"A butterfly has six legs.","strong":false}],
     "reason":"Kicking, pulling, and pushing all move things with a force. The butterfly fact is true but does not move anything."},
    {"id":"L4","type":"word","color":"#e0533a","title":"Name It","q":"When you move a ball AWAY from you, you give it a ____. Type the word.",
     "answer":["push","pushes","empuje","empujón","empujon"],"reason":"A push moves things away from you. Naming the force is the first science step."}
   ]
  }
 }
};
