/* example.js — a COMPLETE, working Critical Thinking Online Breakout.
   Topic: The Water Cycle. Six clues (one true-but-off-topic decoy) and four
   locks — one of each type (seq · mc · multi · word). English + Spanish are
   authored here; the other five languages fall back to English automatically
   (that graceful fallback is what makes "ship English now, translate later" work).
   Copy this file, keep the shape, and replace the content. See ../ctob_project_pack.md §2–3. */
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
    },
    es: {
      'header.eyebrow': 'Actividad de ejemplo · Grados 3–5',
      'header.h1': 'Vuelta y vuelta: el ciclo del agua',
      'header.sub': 'Lee las seis pistas y abre los cuatro candados para explicar cómo se mueve el agua por la Tierra.',
      'brief.label': '💧 Tu tarea',
      'brief.h': 'Sigue el agua',
      'brief.p': 'El agua siempre está en movimiento: del océano al cielo y de vuelta. Usa las pistas para abrir los cuatro candados. Una pista es <b>verdadera pero no viene al caso</b>: encuéntrala y déjala fuera.',
      'sect.clues': '🔍 Las pistas',
      'sect.cluesHint': 'Toca cada pista para leerla. Puedes volver a abrirlas cuando quieras.',
      'sect.locks': '🔒 Los candados',
      'sect.locksHint': 'Usa las pistas para abrir cada candado.',
      'win.stamp': 'RESUELTO ✓',
      'win.h': '¡Buen razonamiento!',
      'win.p': 'Trazaste todo el ciclo del agua usando solo la evidencia.',
      'footer.text': 'CTOB de ejemplo · Funciona en tu navegador: sin cuentas, sin recopilar datos.',
      'footer.disclaimer': 'Ejemplo de plantilla incluido en el CTOB Starter Kit. Contenido CC BY 4.0.',
      'crumb.teacher': '‹ Centro de ejemplo',
      'crumb.suite': 'CTOB Starter Kit',
      'ui.reset': '↺ Empezar de nuevo',
      'ui.check': 'Comprobar',
      'ui.gotit': 'Entendido',
      'ui.playagain': 'Jugar otra vez',
      'ui.solved': 'Abierto ✓',
      'ui.pcount': '{n} de {total} candados abiertos',
      'ui.wordph': 'Escribe tu respuesta',
      'ui.clear': 'Borrar',
      'fb.digit': 'Casi — revisa las pistas e inténtalo de nuevo.',
      'fb.word': 'Casi — vuelve a leer las pistas e inténtalo de nuevo.',
      'fb.mc': 'Esa no — vuelve a mirar la evidencia.',
      'fb.multiExtra': 'Una de esas es verdadera pero no viene al caso. Déjala fuera.',
      'fb.multiMissing': 'Te falta una prueba importante.',
      'fb.seq': 'Ese orden no — sigue el ciclo paso a paso.'
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
    },
    es: {
      clues: [
        { id: 'c1', ico: '☀️', nm: 'El calor del Sol', title: 'El calor del Sol', body: 'El Sol calienta el agua de los océanos, lagos y ríos.' },
        { id: 'c2', ico: '💨', nm: 'Evaporación', title: 'El agua sube', body: 'El agua caliente se convierte en un gas invisible llamado vapor de agua y sube al aire.' },
        { id: 'c3', ico: '☁️', nm: 'Condensación', title: 'Se forman nubes', body: 'Allá arriba, donde el aire es frío, el vapor se enfría en gotitas que se juntan en nubes.' },
        { id: 'c4', ico: '🌧️', nm: 'Precipitación', title: 'El agua cae', body: 'Cuando las gotitas se juntan y pesan, caen como lluvia, nieve, aguanieve o granizo.' },
        { id: 'c5', ico: '🏞️', nm: 'Acumulación', title: 'De vuelta al inicio', body: 'El agua caída se acumula en océanos, lagos y el suelo, y el ciclo vuelve a empezar.' },
        { id: 'c6', ico: '🦎', nm: 'Lagarto del desierto', title: 'Un dato que parece venir al caso', body: 'Algunos lagartos del desierto pueden vivir toda su vida sin beber agua líquida.' }
      ],
      locks: [
        { id: 'L1', type: 'seq', color: '#2f6fe0', title: 'Ordena el ciclo', q: 'Ordena los cuatro pasos del ciclo del agua, empezando después de que el Sol calienta el agua.',
          pads: [
            { k: 'collect', e: '🏞️ Acumulación', c: '#46a23c' },
            { k: 'evap', e: '💨 Evaporación', c: '#1aa3b8' },
            { k: 'precip', e: '🌧️ Precipitación', c: '#7c5cbf' },
            { k: 'cond', e: '☁️ Condensación', c: '#f0a316' }
          ],
          answer: ['evap', 'cond', 'precip', 'collect'],
          reason: 'Leer los pasos en orden es cómo vemos que un ciclo se repite.' },
        { id: 'L2', type: 'mc', color: '#1aa3b8', title: '¿Qué hace subir el vapor?', q: 'Según las pistas, ¿qué hace que el agua suba al aire como vapor?',
          options: ['Se vuelve más pesada que el aire', 'El calor del Sol', 'Se congela'],
          answerIndex: 1,
          reason: 'La pista dice que el calor del Sol convierte el agua en vapor: la respuesta viene de la evidencia, no de una suposición.' },
        { id: 'L3', type: 'multi', color: '#46a23c', title: 'Separa la evidencia fuerte', q: 'Marca SOLO las afirmaciones que ayudan a explicar el ciclo del agua. Deja fuera la que es verdadera pero no viene al caso.',
          items: [
            { t: 'El Sol calienta el agua y esta se evapora.', strong: true },
            { t: 'El vapor se enfría arriba y se condensa en nubes.', strong: true },
            { t: 'Las gotas pesadas caen como lluvia o nieve.', strong: true },
            { t: 'Algunos lagartos del desierto nunca beben agua.', strong: false }
          ],
          reason: 'La evidencia fuerte es solo lo que de verdad explica el ciclo: el dato del lagarto es verdadero pero no viene al caso.' },
        { id: 'L4', type: 'word', color: '#f0a316', title: 'Nombra el proceso', q: 'En una frase corta, ¿cómo se llama todo este proceso?',
          answer: ['ciclo del agua', 'el ciclo del agua', 'water cycle'],
          reason: 'Nombrar el proceso es cómo hacemos nuestra la idea.' }
      ]
    }
  }
};
