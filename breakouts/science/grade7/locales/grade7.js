window.BREAKOUT = {
 "id": "science-grade7",
 "band": "7",
 "confetti": ["#b5531f", "#e0902a", "#2f8f7f", "#2f6fe0", "#7c5cbf", "#e0533a"],
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
   "fb.multiExtra": "One pick isn't a real reading of the graph. Strong means what the graph actually shows.",
   "fb.multiMissing": "You're missing a valid reading of the graph. Find them all.",
   "fb.seq": "That order doesn't match the mission story. Try again.",
   "footer.privacy": "Privacy & compliance",
   "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.27, Grade 7). Good-faith paraphrase; confirm before adoption.",
   "header.eyebrow": "Science Critical Thinking Breakout · Grade 7",
   "header.h1": "Rescue Run",
   "header.sub": "A hiker is missing in a Big Bend canyon and a storm is coming. You're on the search-and-rescue command team. Read the drone's motion data, keep the medical cooler cold, and solve all four locks to launch the rescue in time.",
   "brief.label": "🚁 Mission Brief",
   "brief.h": "Launch the rescue run",
   "brief.p": "Command radios you: <b>“Drone's back with a distance–time graph, the med-cooler is warming in the sun, and we need a route — now.”</b> The clues you need are motion and heat. Open each piece of evidence, decide what it actually proves, and solve all four locks to send the team out safely.",
   "footer.text": "Science Critical Thinking Breakouts · Runs entirely in your browser — no logins, no data collected.",
   "win.stamp": "RESCUE LAUNCHED ✓",
   "win.h": "The team rolls out!",
   "win.p": "You read the drone's distance–time graph, told speed from velocity, ruled out a tempting off-topic fact, and named thermal equilibrium so the medicine stays cold. That's the exact reasoning real search-and-rescue crews use under pressure."
  }
 },
 "CONTENT": {
  "en": {
   "clues": [
    {
     "id": "c1",
     "ico": "📏",
     "nm": "Average Speed",
     "title": "How Fast on Average",
     "body": "<b>Average speed = total distance ÷ total time.</b> If the drone flies 6 kilometers in 30 minutes, its average speed is 12 km/h — no matter how it wiggled along the way. Speed is just how fast, with no direction attached."
    },
    {
     "id": "c2",
     "ico": "🧭",
     "nm": "Speed vs. Velocity",
     "title": "Speed Is Not Velocity",
     "body": "<b>Velocity</b> is speed <b>with a direction</b>. It depends on <b>displacement</b> — the straight-line distance and direction from start to finish. Fly out and loop all the way back to base and your displacement is <b>zero</b>, so your average velocity is zero — even though your speed was never zero."
    },
    {
     "id": "c3",
     "ico": "📈",
     "nm": "Reading the Graph",
     "title": "A Distance–Time Graph Tells a Story",
     "body": "On a <b>distance–time graph</b>, the line's <b>slope</b> is the speed. A <b>steeper</b> line means the drone moved <b>faster</b>. A <b>flat</b> line means the distance isn't changing — the drone is <b>not moving</b> (hovering). A line sloping back down toward <b>zero</b> means the drone is <b>returning</b> to base."
    },
    {
     "id": "c4",
     "ico": "🌡️",
     "nm": "Heat Moves",
     "title": "Which Way Heat Flows",
     "body": "Heat always flows from <b>hot to cold</b> — by <b>conduction</b> (touch), <b>convection</b> (moving fluids/air), and <b>radiation</b> (rays from the sun). It keeps flowing until everything reaches the <b>same temperature</b>. That balance point is called <b>thermal equilibrium</b>."
    },
    {
     "id": "c5",
     "ico": "🧊",
     "nm": "The Cold Cooler",
     "title": "Why the Cooler Works",
     "body": "The med-cooler's <b>insulation</b> doesn't add cold — it <b>slows the heat</b> from the hot desert air from reaching the medicine inside. Insulation can only slow the flow of heat; it can never stop it. Given enough time, the inside and outside will still reach the same temperature."
    },
    {
     "id": "c6",
     "ico": "🦎",
     "nm": "Desert Speedster",
     "title": "A Canyon Speed Fact",
     "body": "A greater roadrunner can sprint about <b>32 km/h</b>, and a collared lizard can run on just its two back legs. The crew loves spotting them near the trailhead. It's a true desert fact — but it is not something you can read off the drone's graph."
    }
   ],
   "locks": [
    {
     "id": "L1",
     "type": "seq",
     "color": "#e0902a",
     "title": "Match the Graph to the Mission",
     "q": "The drone left base, scanned the canyon, then flew home. Put the distance–time graph's segments in the order the mission happened. Tap the pads in order.",
     "pads": [
      {"k": "rise", "e": "📈 Line rising from 0", "c": "#2f8f7f"},
      {"k": "flat", "e": "➖ Flat line", "c": "#e0902a"},
      {"k": "fall", "e": "📉 Line falling to 0", "c": "#2f6fe0"}
     ],
     "answer": ["rise", "flat", "fall"],
     "reason": "A distance–time graph tells the story in order: rising = moving away from base, flat = hovering (not moving), falling back to zero = returning. Slope is speed."
    },
    {
     "id": "L2",
     "type": "mc",
     "color": "#b5531f",
     "title": "Speed or Velocity?",
     "q": "Two drones each fly 6 km in 30 minutes. Drone A ends 6 km away at the canyon. Drone B loops all the way back to base. Which statement does the evidence support?",
     "options": [
      "Drone B was slower because it came back to base.",
      "They had the same average speed, but different velocities — velocity depends on displacement and direction.",
      "Speed and velocity are the same thing, so both are identical."
     ],
     "answerIndex": 1,
     "reason": "Same distance in the same time means the same average speed. But Drone B's displacement is zero, so its velocity differs — velocity always includes direction."
    },
    {
     "id": "L3",
     "type": "multi",
     "color": "#2f6fe0",
     "title": "Read the Drone's Graph",
     "q": "Check ONLY the conclusions you can actually read from the drone's distance–time graph. Leave out the true-but-off-topic fact.",
     "items": [
      {"t": "A steeper part of the line means the drone was moving faster.", "strong": true},
      {"t": "A flat part of the line means the drone was not moving.", "strong": true},
      {"t": "A line sloping back down to zero means the drone returned to base.", "strong": true},
      {"t": "A greater roadrunner can sprint about 32 km/h.", "strong": false}
     ],
     "reason": "On a distance–time graph, slope is speed and a flat line is a stop. A true animal fact is not something the graph shows — strong evidence is only what the graph proves."
    },
    {
     "id": "L4",
     "type": "word",
     "color": "#2f8f7f",
     "title": "Name the Balance Point",
     "q": "Heat keeps flowing from the hot air into the cooler until the inside and outside reach the same temperature. That balance point is thermal ____. Type the word.",
     "answer": ["equilibrium", "thermal equilibrium", "equilibrio", "equilibrio termico", "equilibrio térmico"],
     "reason": "Heat always flows from warmer to cooler until temperatures equalize — thermal equilibrium. Insulation only slows that process; it can never stop it."
    }
   ]
  }
 }
};
