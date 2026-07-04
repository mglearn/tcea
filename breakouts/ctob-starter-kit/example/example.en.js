/* example.en.js — the ENGLISH source for the example breakout.
   Author your breakout HERE in English only. Then write one _i18n/<lang>.json per
   language (same array order/count) and run, from the kit root:
       node build-translations.js example/example
   …which merges them into example.js (all languages). Ship English first; the
   runtime falls back to English for any language you have not translated yet. */
window.BREAKOUT = {
  id: 'example-water-cycle',
  band: '3–5',
  confetti: ['#2f6fe0', '#1aa3b8', '#46a23c', '#f0a316', '#7c5cbf'],

  UI: {
    en: {
      'header.eyebrow': 'Example Breakout · Grades 3–5',
      'header.h1': 'Round and Round: The Water Cycle',
      'header.sub': 'Read the six clues and open all four locks to explain how water moves around the Earth.',
      'brief.label': '💧 Your job',
      'brief.h': 'Follow the water',
      'brief.p': 'Water is always on the move — from the ocean, into the sky, and back again. Use the clues to open all four locks. One clue is <b>true but off-topic</b> — find it and leave it out.',
      'sect.clues': '🔍 The Clues',
      'sect.cluesHint': 'Tap each clue to read it. You can reopen them anytime.',
      'sect.locks': '🔒 The Locks',
      'sect.locksHint': 'Use the clues to open each lock.',
      'win.stamp': 'SOLVED ✓',
      'win.h': 'Nice reasoning!',
      'win.p': 'You traced the whole water cycle using only the evidence.',
      'footer.text': 'Example CTOB · Runs in your browser — no logins, no data collected.',
      'footer.disclaimer': 'A template example distributed with the CTOB Starter Kit. Content CC BY 4.0.',
      'crumb.teacher': '‹ Example hub',
      'crumb.suite': 'CTOB Starter Kit',
      'ui.reset': '↺ Start over',
      'ui.check': 'Check',
      'ui.gotit': 'Got it',
      'ui.playagain': 'Play again',
      'ui.solved': 'Open ✓',
      'ui.pcount': '{n} of {total} locks open',
      'ui.wordph': 'Type your answer',
      'ui.clear': 'Clear',
      'fb.digit': 'Not quite — check the clues and try again.',
      'fb.word': 'Not quite — re-read the clues and try again.',
      'fb.mc': 'Not that one — look back at the evidence.',
      'fb.multiExtra': 'One of those is true but off-topic. Leave it out.',
      'fb.multiMissing': 'You are missing a piece of strong evidence.',
      'fb.seq': 'Not that order — follow the cycle step by step.'
    }
  },

  CONTENT: {
    en: {
      clues: [
        { id: 'c1', ico: '☀️', nm: "Sun's Heat", title: "The Sun's heat", body: 'The Sun heats water in oceans, lakes, and rivers.' },
        { id: 'c2', ico: '💨', nm: 'Evaporation', title: 'Water rises', body: 'Heated water turns into an invisible gas called water vapor and rises into the air.' },
        { id: 'c3', ico: '☁️', nm: 'Condensation', title: 'Clouds form', body: 'High up where the air is cold, water vapor cools into tiny droplets that gather into clouds.' },
        { id: 'c4', ico: '🌧️', nm: 'Precipitation', title: 'Water falls', body: 'When the droplets join and grow heavy, they fall as rain, snow, sleet, or hail.' },
        { id: 'c5', ico: '🏞️', nm: 'Collection', title: 'Back to the start', body: 'Fallen water collects in oceans, lakes, and the ground — and the cycle begins again.' },
        { id: 'c6', ico: '🦎', nm: 'Desert Lizard', title: 'A thirsty-looking fact', body: 'Some desert lizards can live their whole lives without ever drinking liquid water.' }
      ],
      locks: [
        { id: 'L1', type: 'seq', color: '#2f6fe0', title: 'Order the cycle', q: 'Put the four steps of the water cycle in order, starting after the Sun heats the water.',
          pads: [
            { k: 'collect', e: '🏞️ Collection', c: '#46a23c' },
            { k: 'evap', e: '💨 Evaporation', c: '#1aa3b8' },
            { k: 'precip', e: '🌧️ Precipitation', c: '#7c5cbf' },
            { k: 'cond', e: '☁️ Condensation', c: '#f0a316' }
          ],
          answer: ['evap', 'cond', 'precip', 'collect'],
          reason: 'Reading the steps in order is how we see a cycle repeat.' },
        { id: 'L2', type: 'mc', color: '#1aa3b8', title: 'What makes vapor rise?', q: 'According to the clues, what makes water rise into the air as vapor?',
          options: ['It gets heavier than air', "The Sun's heat", 'It freezes solid'],
          answerIndex: 1,
          reason: "The clue says the Sun's heat turns water into vapor — the answer comes from the evidence, not a guess." },
        { id: 'L3', type: 'multi', color: '#46a23c', title: 'Sort the strong evidence', q: 'Check ONLY the statements that help explain the water cycle. Leave out the true-but-off-topic one.',
          items: [
            { t: 'The Sun heats water so it evaporates.', strong: true },
            { t: 'Vapor cools high up and condenses into clouds.', strong: true },
            { t: 'Heavy droplets fall as rain or snow.', strong: true },
            { t: 'Some desert lizards never drink water.', strong: false }
          ],
          reason: 'Strong evidence is only what actually explains the cycle — the lizard fact is true but off-topic.' },
        { id: 'L4', type: 'word', color: '#f0a316', title: 'Name the process', q: 'In one short phrase, what is this whole process called?',
          answer: ['water cycle', 'the water cycle'],
          reason: 'Naming the process is how we make the idea our own.' }
      ]
    }
  }
};
