window.BREAKOUT = {
 "id": "science-grade2",
 "band": "2",
 "confetti": ["#2b5fa5", "#7c5cbf", "#2f8f7f", "#e0902a", "#e0533a", "#f0c419"],
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
   "fb.multiExtra": "One pick is not right. Pick only the ones that make sound.",
   "fb.multiMissing": "You missed one. Find them all.",
   "fb.seq": "Not that order. Try again.",
   "footer.privacy": "Privacy & compliance",
   "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.4, Grade 2). Good-faith paraphrase; confirm before adoption.",
   "header.eyebrow": "Science Breakout · Grade 2",
   "header.h1": "Make Some Noise!",
   "header.sub": "Your class is putting on a show! Read the clues and open all four locks to learn how sound is made and how it gets to your ears.",
   "brief.label": "🔊 Your Job",
   "brief.h": "Find out how sound works",
   "brief.p": "Drums, guitars, and voices all make sound — but how? The secret is <b>vibrating</b> (moving back and forth fast). Tap each clue, then open all four locks!",
   "footer.text": "Science Critical Thinking Breakouts · Grade 2 · Runs in your browser — no logins, no data collected.",
   "win.stamp": "SOUND ON ✓",
   "win.h": "You did it!",
   "win.p": "You learned that sound is made by things that vibrate, and that sound travels through the air to your ears. Now you know the secret of every drum, string, and voice!"
  }
 },
 "CONTENT": {
  "en": {
   "clues": [
    {"id":"c1","ico":"🔊","nm":"Sound","title":"What Makes Sound","body":"Sound happens when something <b>vibrates</b> — moves back and forth very fast."},
    {"id":"c2","ico":"🥁","nm":"Drum","title":"A Drum","body":"Hit a drum and the top <b>vibrates</b> up and down. That makes the drum sound."},
    {"id":"c3","ico":"🎸","nm":"Guitar","title":"A Guitar","body":"Pluck a guitar string and it <b>vibrates</b> back and forth to make a note."},
    {"id":"c4","ico":"🗣️","nm":"Your Voice","title":"Your Voice","body":"When you talk or sing, parts inside your throat <b>vibrate</b> to make your voice."},
    {"id":"c5","ico":"👂","nm":"To Your Ears","title":"Sound Travels","body":"The vibrations move through the <b>air</b> until they reach your <b>ears</b>. Then you hear the sound."},
    {"id":"c6","ico":"🌈","nm":"Sky Fact","title":"A Rainbow Fact","body":"A rainbow shows up after rain when the Sun comes out. That is true and pretty — but it is not about sound."}
   ],
   "locks": [
    {"id":"L1","type":"seq","color":"#2b5fa5","title":"Hear the Drum","q":"You hit a drum. Put it in order. Tap the pads in order.",
     "pads":[{"k":"ear","e":"👂 You hear it","c":"#2f8f7f"},{"k":"hit","e":"🥁 You hit the drum","c":"#2b5fa5"},{"k":"vibe","e":"〰️ The drum top vibrates","c":"#7c5cbf"}],
     "answer":["hit","vibe","ear"],"reason":"You hit the drum, the top vibrates, and the sound travels to your ear. Vibrating makes the sound."},
    {"id":"L2","type":"mc","color":"#7c5cbf","title":"What Makes Sound?","q":"What makes a sound?",
     "options":["Something sitting very still.","Something vibrating (moving back and forth fast).","A bright color."],
     "answerIndex":1,"reason":"Sound comes from something that vibrates. A still object with no movement makes no sound."},
    {"id":"L3","type":"multi","color":"#2f8f7f","title":"Things That Vibrate","q":"Tap ONLY the things that make sound by vibrating. Leave out the fun fact.",
     "items":[{"t":"A plucked guitar string.","strong":true},{"t":"A drum being hit.","strong":true},{"t":"Your voice when you sing.","strong":true},{"t":"A rainbow after the rain.","strong":false}],
     "reason":"A string, a drum, and your voice all vibrate to make sound. The rainbow fact is true but makes no sound."},
    {"id":"L4","type":"word","color":"#e0533a","title":"Name It","q":"Sound is made when something moves back and forth fast. We say it will ____. Type the word.",
     "answer":["vibrate","vibrates","vibrating","vibra","vibrar"],"reason":"Things vibrate to make sound. Naming the cause is the first science step."}
   ]
  }
 }
};
