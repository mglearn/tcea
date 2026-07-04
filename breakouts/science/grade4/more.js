/* Grade 4 "More" — short single-concept Critical Thinking Online Breakouts, one per
   key TEKS concept (§112.6), pitched to upper-elementary readers. The player (play.html)
   merges MORE_BASE_UI with each entry's ui overrides and hands the result to the shared
   engine. 6 clues (1 decoy) + 4 locks (seq/mc/multi/word); each reason names the move. */
window.MORE_BASE_UI = {
  en: {
    "sect.clues": "🔍 The Clues",
    "sect.cluesHint": "Tap each clue to read it. You can open them again anytime.",
    "sect.locks": "🔒 The Locks",
    "sect.locksHint": "Use the clues to open each lock.",
    "crumb.teacher": "‹ More Grade 4 breakouts",
    "crumb.suite": "Grade 4 Science",
    "ui.reset": "↺ Start over", "ui.check": "Check", "ui.gotit": "Got it", "ui.playagain": "Play Again",
    "ui.solved": "🔓 Open!", "ui.pcount": "{n} of {total} locks open",
    "ui.wordph": "Type your answer", "ui.clear": "clear",
    "fb.digit": "Not quite. Look at the clues again.",
    "fb.word": "Look at the clues for the word that fits.",
    "fb.mc": "That one isn't supported by the clues. Look again.",
    "fb.multiExtra": "One pick isn't strong evidence. Pick only what the clues show.",
    "fb.multiMissing": "You're missing one. Find them all.",
    "fb.seq": "That order doesn't match the clues. Try again.",
    "footer.privacy": "Privacy & compliance", "footer.text": "Grade 4 Science · Critical Thinking Online Breakouts · Runs in your browser — no logins, no data collected.",
    "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.6, Grade 4). Good-faith paraphrase; confirm before adoption.",
    "header.eyebrow": "Grade 4 Science · Quick Breakout",
    "brief.label": "🎯 Warm-Up"
  }
};

window.MORE = {

 "mixtures-solutions": {
  id: "sci4-mixtures-solutions", teks: "4.6(B,C)", concept: "Mixtures & Solutions",
  ui: {
   h1: "Mix It Up", sub: "What is a solution, and where does the matter go? Read the clues and open all four locks.",
   briefH: "Mix and separate", briefP: "A solution is a special mixture where one thing dissolves evenly into another. And no matter how you mix, the total amount of matter stays the same. Use the clues to open the locks!",
   winStamp: "MIXED ✓", winH: "Mixture master!", winP: "You separated a solution, spotted the even mix, and named it. When things mix, matter is conserved — none is lost or made."
  },
  clues: [
   {id:"c1",ico:"🥣",nm:"Mixture",title:"Mixtures",body:"A mixture is two or more things mixed together but not joined. Many mixtures can be separated again."},
   {id:"c2",ico:"🧂",nm:"Solution",title:"Solutions",body:"A solution is a special mixture where one thing dissolves so evenly you can't see it, like salt in water or sugar in tea."},
   {id:"c3",ico:"💧",nm:"Kinds",title:"Two Kinds",body:"Solutions can be a solid in a liquid (salt in water) or a liquid in a liquid (juice mix in water)."},
   {id:"c4",ico:"⚖️",nm:"Conserved",title:"Matter Is Conserved",body:"When you mix things, the total amount of matter stays the same. Mix 10 grams of salt into water and the mass adds up to the same total."},
   {id:"c5",ico:"☀️",nm:"Separate",title:"Getting It Back",body:"You can separate salt from salt water by letting the water evaporate. The salt is left behind, proving it was still there."},
   {id:"c6",ico:"🦋",nm:"Bug Fact",title:"A Butterfly Fact",body:"A butterfly tastes with its feet. That is true and fun — but it is not about mixtures."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"Separate the Solution",q:"Get the salt back from salt water. Put it in order. Tap the pads in order.",
    pads:[{k:"left",e:"🧂 Salt is left behind",c:"#dc2626"},{k:"mix",e:"🥣 Stir salt into water (a solution)",c:"#166534"},{k:"evap",e:"☀️ Let the water evaporate",c:"#ca8a04"}],
    answer:["mix","evap","left"],reason:"Stir salt into water to make a solution, let the water evaporate, and the salt is left behind — proving the matter was conserved."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"Which Is a Solution?",q:"Which of these is a solution?",
    options:["A bowl of mixed nuts and raisins.","Salt dissolved evenly in water.","A pile of pebbles."],
    answerIndex:1,reason:"A solution is a mixture where one thing dissolves evenly, like salt in water. Mixed nuts stay visible and separate."},
   {id:"L3",type:"multi",color:"#dc2626",title:"True About Mixing",q:"Tap ONLY the true clues about mixtures and solutions. Leave out the fun fact.",
    items:[{t:"In a solution, one thing dissolves evenly into another.",strong:true},{t:"You can separate salt water by evaporating the water.",strong:true},{t:"When you mix, the total amount of matter stays the same.",strong:true},{t:"A butterfly tastes with its feet.",strong:false}],
    reason:"Solutions are evenly mixed, separable, and conserve matter. The butterfly fact is true but is not about mixing."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"A mixture where one thing dissolves evenly into another, like salt in water, is a ____. Type the word.",
    answer:["solution","solutions","solución","solucion"],reason:"A solution is an evenly-mixed mixture. Naming it helps us describe how matter combines."}
  ]
 },

 "energy-transfer": {
  id: "sci4-energy-transfer", teks: "4.8(A)", concept: "Transferring Energy",
  ui: {
   h1: "Pass the Energy", sub: "How does energy move from one thing to another? Read the clues and open all four locks.",
   briefH: "Move the energy", briefP: "Energy can move — or transfer — from one object to another, through motion, water waves, and sound. Use the clues to open the locks!",
   winStamp: "PASSED ON ✓", winH: "Energy expert!", winP: "You transferred energy with a bowling ball, saw what a moving object does, and named it. Energy can move from place to place through motion, waves, and sound."
  },
  clues: [
   {id:"c1",ico:"🎳",nm:"Motion",title:"Moving Objects",body:"A moving object carries energy. A rolling bowling ball can transfer its energy to the pins and knock them down."},
   {id:"c2",ico:"🌊",nm:"Water Waves",title:"Water Waves",body:"Waves in water carry energy. Ripples can push a toy boat, even though the water mostly stays in place."},
   {id:"c3",ico:"🔊",nm:"Sound",title:"Sound",body:"Sound is energy that travels through the air from a source to your ears."},
   {id:"c4",ico:"➡️",nm:"Transfer",title:"Passing It Along",body:"When one object hits another, it transfers some of its energy to it. The energy moves, even if the first object slows down."},
   {id:"c5",ico:"🎱",nm:"Example",title:"Marble Hit",body:"A moving marble that hits a still marble passes its energy along, making the still one move."},
   {id:"c6",ico:"🐧",nm:"Bird Fact",title:"A Penguin Fact",body:"Penguins huddle together to stay warm. That is true and cute — but it is not about transferring energy."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"Knock Down the Pins",q:"Roll a bowling ball. Put it in order. Tap the pads in order.",
    pads:[{k:"fall",e:"🎳 The pins fall (energy transferred)",c:"#dc2626"},{k:"roll",e:"🟢 You roll the ball",c:"#166534"},{k:"hit",e:"💥 The ball hits the pins",c:"#ca8a04"}],
    answer:["roll","hit","fall"],reason:"You roll the ball, it hits the pins, and it transfers its energy to knock them down. Energy moved from the ball to the pins."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"Marble Hits Marble",q:"A moving marble hits a still marble. What happens?",
    options:["Nothing changes.","The moving marble transfers energy, making the still one move.","Both marbles disappear."],
    answerIndex:1,reason:"The moving marble transfers some of its energy to the still marble, making it move. Energy passes from one object to another."},
   {id:"L3",type:"multi",color:"#dc2626",title:"Ways Energy Transfers",q:"Tap ONLY the ways energy is being transferred. Leave out the fun fact.",
    items:[{t:"A ball knocking down pins.",strong:true},{t:"A water wave pushing a boat.",strong:true},{t:"Sound traveling to your ear.",strong:true},{t:"Penguins huddle to stay warm.",strong:false}],
    reason:"Motion, water waves, and sound all transfer energy. The penguin fact is true but is not an energy transfer."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"The thing that moves from a bowling ball to the pins when it hits them is ____. Type the word.",
    answer:["energy","energía","energia"],reason:"Energy transfers from one object to another. Tracing it shows how motion, waves, and sound carry energy."}
  ]
 },

 "conductors-insulators": {
  id: "sci4-conductors-insulators", teks: "4.8(B)", concept: "Conductors & Insulators",
  ui: {
   h1: "Let It Through, or Block It?", sub: "Which materials carry heat and electricity, and which stop them? Read the clues and open all four locks.",
   briefH: "Sort the materials", briefP: "A conductor lets heat and electricity pass through easily. An insulator blocks or slows them. Use the clues to open the locks!",
   winStamp: "SORTED ✓", winH: "Material master!", winP: "You followed heat up a spoon, found the best conductor, and named the blockers. Metals conduct energy; plastic, rubber, and wood insulate it."
  },
  clues: [
   {id:"c1",ico:"🥄",nm:"Conductor",title:"Conductors",body:"A conductor lets heat and electricity pass through easily. Metal is a good conductor."},
   {id:"c2",ico:"🧤",nm:"Insulator",title:"Insulators",body:"An insulator blocks or slows heat and electricity. Plastic, rubber, and wood are insulators."},
   {id:"c3",ico:"🍲",nm:"Hot Spoon",title:"A Metal Spoon",body:"A metal spoon in hot soup gets hot all the way up the handle, because metal conducts heat."},
   {id:"c4",ico:"🪵",nm:"Cool Handle",title:"A Wooden Handle",body:"A wooden or plastic handle stays cool to touch, because it insulates and slows the heat."},
   {id:"c5",ico:"🔌",nm:"Wires",title:"Both in One",body:"A wire uses both: metal inside to carry the electricity (conductor) and plastic outside to keep you safe (insulator)."},
   {id:"c6",ico:"🦒",nm:"Tall Fact",title:"A Giraffe Fact",body:"A giraffe is the tallest land animal. That is true and cool — but it is not about conductors."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"Heat Up the Spoon",q:"Put it in order to show heat moving up a metal spoon. Tap the pads in order.",
    pads:[{k:"handle",e:"🥄 The handle gets hot too",c:"#dc2626"},{k:"soup",e:"🍲 The spoon sits in hot soup",c:"#166534"},{k:"conduct",e:"➡️ Metal conducts the heat up",c:"#ca8a04"}],
    answer:["soup","conduct","handle"],reason:"The spoon sits in hot soup, the metal conducts the heat up, and the handle gets hot. Metal is a good conductor."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"Best Conductor",q:"Which material is the best conductor of heat and electricity?",
    options:["Rubber.","Metal.","Wood."],
    answerIndex:1,reason:"Metal lets heat and electricity pass through easily, so it is a good conductor. Rubber and wood are insulators."},
   {id:"L3",type:"multi",color:"#dc2626",title:"Find the Insulators",q:"Tap ONLY the insulators (materials that block or slow energy). Leave out the fun fact.",
    items:[{t:"Plastic.",strong:true},{t:"Rubber.",strong:true},{t:"Wood.",strong:true},{t:"A giraffe is the tallest land animal.",strong:false}],
    reason:"Plastic, rubber, and wood block or slow heat and electricity, so they are insulators. The giraffe fact is true but is not a material property here."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"A material like metal that lets heat and electricity pass through easily is a ____. Type the word.",
    answer:["conductor","conductors","conductor de calor","conductor electrico"],reason:"A conductor carries heat and electricity; an insulator blocks them. Naming them helps us choose the right material."}
  ]
 },

 "moon-phases": {
  id: "sci4-moon-phases", teks: "4.9(B)", concept: "Moon Phases",
  ui: {
   h1: "Why the Moon Changes", sub: "Why does the Moon look different each night? Read the clues and open all four locks.",
   briefH: "Watch the Moon change", briefP: "The Moon seems to change shape through the month, but it doesn't really — we just see different amounts of its sunlit side. Use the clues to open the locks!",
   winStamp: "PHASED ✓", winH: "Moon watcher!", winP: "You ordered the phases, learned why they happen, and named the pattern. The Moon's phases repeat about every month as we see more or less of its sunlit side."
  },
  clues: [
   {id:"c1",ico:"🌑",nm:"New Moon",title:"New Moon",body:"At a new moon, the side facing us gets no sunlight, so we can barely see the Moon."},
   {id:"c2",ico:"🌓",nm:"Growing",title:"Getting Bigger",body:"Night by night we see more of the sunlit side: a thin crescent, then a half, then more."},
   {id:"c3",ico:"🌕",nm:"Full Moon",title:"Full Moon",body:"At a full moon, we see the whole sunlit side, so the Moon looks like a bright circle."},
   {id:"c4",ico:"🔁",nm:"A Pattern",title:"It Repeats",body:"The phases follow a pattern that repeats about every month, then starts over."},
   {id:"c5",ico:"💡",nm:"Same Shape",title:"Sunlight, Not Shape",body:"The Moon does not really change shape. We just see different amounts of its sunlit half as it orbits Earth."},
   {id:"c6",ico:"🐙",nm:"Sea Fact",title:"An Octopus Fact",body:"An octopus has three hearts. That is true and neat — but it is not about the Moon."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"The Moon Grows",q:"Order the Moon's phases from smallest to fullest. Tap the pads in order.",
    pads:[{k:"full",e:"🌕 Full moon",c:"#dc2626"},{k:"new",e:"🌑 New moon",c:"#166534"},{k:"half",e:"🌓 Half moon",c:"#2563eb"},{k:"cres",e:"🌒 Crescent",c:"#ca8a04"}],
    answer:["new","cres","half","full"],reason:"From new moon we see more and more sunlight: crescent, then half, then full. The phases follow a repeating pattern."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"Why It Changes",q:"Why does the Moon look different on different nights?",
    options:["The Moon really changes shape.","We see different amounts of its sunlit side as it orbits Earth.","Clouds cover part of it."],
    answerIndex:1,reason:"The Moon doesn't change shape. As it orbits Earth, we see different amounts of its sunlit half — that makes the phases."},
   {id:"L3",type:"multi",color:"#dc2626",title:"True About Phases",q:"Tap ONLY the true clues about the Moon's phases. Leave out the fun fact.",
    items:[{t:"The phases repeat in a pattern about every month.",strong:true},{t:"We are seeing the Moon's sunlit side.",strong:true},{t:"The Moon does not really change shape.",strong:true},{t:"An octopus has three hearts.",strong:false}],
    reason:"The phases repeat monthly, show the sunlit side, and don't change the Moon's real shape. The octopus fact is true but is not about the Moon."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name Them",q:"The different shapes the Moon seems to take through the month are called its ____. Type the word.",
    answer:["phases","phase","moon phases","fases"],reason:"The Moon's phases are its changing sunlit shapes. They follow a repeating monthly pattern."}
  ]
 },

 "water-cycle": {
  id: "sci4-water-cycle", teks: "4.10(A)", concept: "The Water Cycle",
  ui: {
   h1: "The Water Cycle", sub: "How does water move around the Earth? Read the clues and open all four locks.",
   briefH: "Follow the water", briefP: "Water moves around Earth in a never-ending cycle, powered by the Sun. Use the clues to open the locks!",
   winStamp: "CYCLED ✓", winH: "Water scientist!", winP: "You traced the water cycle, found what powers it, and named a step. The Sun drives water up, into clouds, and back down again — over and over."
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"The Sun",title:"The Sun's Power",body:"The Sun is the energy that drives the water cycle. Its heat starts the whole thing."},
   {id:"c2",ico:"💨",nm:"Evaporation",title:"Evaporation",body:"The Sun heats water in oceans and lakes, and it evaporates — rising into the air as water vapor (a gas)."},
   {id:"c3",ico:"☁️",nm:"Condensation",title:"Condensation",body:"High in the sky the vapor cools and condenses into tiny drops that form clouds."},
   {id:"c4",ico:"🌧️",nm:"Precipitation",title:"Precipitation",body:"When the drops get heavy enough, they fall as rain or snow — this is precipitation."},
   {id:"c5",ico:"🏞️",nm:"Collection",title:"Collection",body:"The water collects in rivers, lakes, and oceans, and the cycle starts all over again."},
   {id:"c6",ico:"🦩",nm:"Pink Fact",title:"A Flamingo Fact",body:"Flamingos are pink from the food they eat. That is true and fun — but it is not part of the water cycle."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"Around the Cycle",q:"Put the water cycle in order, starting from the ocean. Tap the pads in order.",
    pads:[{k:"rain",e:"🌧️ Rain falls (precipitation)",c:"#dc2626"},{k:"evap",e:"💨 Water evaporates",c:"#166534"},{k:"cloud",e:"☁️ Clouds form (condensation)",c:"#ca8a04"}],
    answer:["evap","cloud","rain"],reason:"Water evaporates, condenses into clouds, and falls as rain. The Sun powers this never-ending cycle."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"What Powers It?",q:"What gives the energy that drives the water cycle?",
    options:["The wind.","The Sun.","The Moon."],
    answerIndex:1,reason:"The Sun's heat evaporates water and powers the whole water cycle."},
   {id:"L3",type:"multi",color:"#dc2626",title:"Steps of the Cycle",q:"Tap ONLY the steps of the water cycle. Leave out the fun fact.",
    items:[{t:"Water evaporates into the air.",strong:true},{t:"Clouds form by condensation.",strong:true},{t:"Rain falls as precipitation.",strong:true},{t:"Flamingos are pink from their food.",strong:false}],
    reason:"Evaporation, condensation, and precipitation are steps of the water cycle. The flamingo fact is true but is not part of the cycle."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"When the Sun heats water and it rises into the air as a gas, we call it ____. Type the word.",
    answer:["evaporation","evaporate","evaporates","evaporación","evaporacion"],reason:"Evaporation lifts water into the air to begin the water cycle, all powered by the Sun."}
  ]
 },

 "erosion": {
  id: "sci4-erosion", teks: "4.10(B)", concept: "Weathering, Erosion & Deposition",
  ui: {
   h1: "Reshaping the Land", sub: "How do wind and water slowly change the land? Read the clues and open all four locks.",
   briefH: "Move the land", briefP: "Earth's surface changes slowly as rock is broken, carried away, and dropped somewhere new. Use the clues to open the locks!",
   winStamp: "RESHAPED ✓", winH: "Earth scientist!", winP: "You followed rock from a cliff to a sandbar, named the carrying-away step, and sorted the slow changes. Weathering, erosion, and deposition slowly reshape the land."
  },
  clues: [
   {id:"c1",ico:"🪨",nm:"Weathering",title:"Weathering",body:"Weathering breaks big rock into smaller and smaller bits, using wind, water, and freezing."},
   {id:"c2",ico:"🌊",nm:"Erosion",title:"Erosion",body:"Erosion carries the loose bits away. Moving water, wind, and ice pick up soil and rock and move them."},
   {id:"c3",ico:"🏖️",nm:"Deposition",title:"Deposition",body:"Deposition drops the carried bits in a new place, like a river building up a sandbar or a beach."},
   {id:"c4",ico:"🏞️",nm:"Canyon",title:"Carving a Canyon",body:"Over a very long time, a river's erosion can carve a deep canyon into the rock."},
   {id:"c5",ico:"🧊",nm:"Ice Too",title:"Even Ice",body:"Slow-moving ice, like a glacier, can also break, carry, and drop rock as it moves."},
   {id:"c6",ico:"🦜",nm:"Bird Fact",title:"A Parrot Fact",body:"Some parrots can copy words. That is true and fun — but it is not about reshaping the land."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"From Cliff to Sandbar",q:"Put the slow reshaping of land in order. Tap the pads in order.",
    pads:[{k:"drop",e:"🏖️ Bits are dropped downstream (deposition)",c:"#dc2626"},{k:"break",e:"🪨 Rock breaks into bits (weathering)",c:"#166534"},{k:"carry",e:"🌊 Water carries the bits away (erosion)",c:"#ca8a04"}],
    answer:["break","carry","drop"],reason:"Rock is broken by weathering, carried off by erosion, and dropped by deposition. Together they slowly reshape the land."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"Carried Away",q:"What is it called when moving water or wind carries away bits of rock and soil?",
    options:["Deposition.","Erosion.","Condensation."],
    answerIndex:1,reason:"Erosion carries loose bits away. Weathering breaks the rock first, and deposition drops the bits later."},
   {id:"L3",type:"multi",color:"#dc2626",title:"Slow Land Changes",q:"Tap ONLY the ways the land is slowly reshaped. Leave out the fun fact.",
    items:[{t:"Weathering breaking rock into bits.",strong:true},{t:"Water eroding and carrying soil away.",strong:true},{t:"Wind moving and dropping sand.",strong:true},{t:"A parrot copying words.",strong:false}],
    reason:"Weathering, erosion, and deposition slowly reshape the land. The parrot fact is true but does not change the land."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"When moving water or wind carries loose rock and soil away, that is ____. Type the word.",
    answer:["erosion","erosión","erosionar"],reason:"Erosion is the carrying-away step. Weathering, erosion, and deposition work together to reshape Earth."}
  ]
 },

 "weather-climate": {
  id: "sci4-weather-climate", teks: "4.10(C)", concept: "Weather vs. Climate",
  ui: {
   h1: "Weather or Climate?", sub: "What's the difference between today's sky and a place's usual weather? Read the clues and open all four locks.",
   briefH: "Tell them apart", briefP: "Weather is what's happening right now. Climate is the usual weather of a place over many years. Use the clues to open the locks!",
   winStamp: "TOLD APART ✓", winH: "Great thinking!", winP: "You lined up the time scales, sorted weather from climate, and named the long-term one. Weather changes daily; climate is the long-term pattern."
  },
  clues: [
   {id:"c1",ico:"🌦️",nm:"Weather",title:"Weather",body:"Weather is what the sky and air are doing right now — today's temperature, rain, and wind."},
   {id:"c2",ico:"📅",nm:"Climate",title:"Climate",body:"Climate is the usual weather of a place, measured over many years."},
   {id:"c3",ico:"🔀",nm:"Changes",title:"Fast vs. Slow",body:"Weather can change from hour to hour. Climate stays about the same over a long, long time."},
   {id:"c4",ico:"🏜️",nm:"Desert",title:"A Desert Example",body:"A rainy afternoon in the desert is weather. But 'this desert is usually dry all year' describes its climate."},
   {id:"c5",ico:"🗺️",nm:"Places Differ",title:"Different Places",body:"Different places have different climates — some are usually hot, some usually cold, some usually wet."},
   {id:"c6",ico:"🐨",nm:"Sleepy Fact",title:"A Koala Fact",body:"Koalas sleep most of the day. That is true and cute — but it is not about weather or climate."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"Short to Long",q:"Order these from the shortest time to the longest. Tap the pads in order.",
    pads:[{k:"years",e:"📅 Many years (climate)",c:"#dc2626"},{k:"today",e:"🌦️ Right now (weather)",c:"#166534"},{k:"season",e:"🍂 One season",c:"#ca8a04"}],
    answer:["today","season","years"],reason:"Weather is right now, a season is longer, and climate is many years. Climate is the long-term pattern of weather."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"Weather or Climate?",q:"“This place is usually hot and dry all year long.” Is that weather or climate?",
    options:["Weather — it's happening right now.","Climate — the usual weather over many years.","Neither one."],
    answerIndex:1,reason:"‘Usually, all year, over many years’ describes climate. Weather would be today's specific conditions."},
   {id:"L3",type:"multi",color:"#dc2626",title:"That's Climate",q:"Tap ONLY the statements that describe climate (long-term). Leave out the fun fact.",
    items:[{t:"This region is usually snowy every winter.",strong:true},{t:"This desert gets very little rain each year.",strong:true},{t:"Summers here are hot year after year.",strong:true},{t:"Koalas sleep most of the day.",strong:false}],
    reason:"‘Usually,’ ‘each year,’ and ‘year after year’ all describe climate. The koala fact is true but is not about climate."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"The usual weather of a place over many years is its ____. Type the word.",
    answer:["climate","clima"],reason:"Climate is the long-term pattern; weather is day to day. Telling them apart is a key Earth-science idea."}
  ]
 },

 "resources": {
  id: "sci4-resources", teks: "4.11(A)", concept: "Renewable & Nonrenewable Resources",
  ui: {
   h1: "Will It Run Out?", sub: "Which of Earth's resources can we replace, and which can't? Read the clues and open all four locks.",
   briefH: "Sort the resources", briefP: "Some natural resources can be replaced quickly (renewable); others take millions of years and can run out (nonrenewable). Use the clues to open the locks!",
   winStamp: "SORTED ✓", winH: "Resource ranger!", winP: "You saw how coal forms, found a renewable resource, and named the kind that won't run out. Sorting resources helps us use them wisely."
  },
  clues: [
   {id:"c1",ico:"♻️",nm:"Renewable",title:"Renewable",body:"Renewable resources can be replaced quickly or won't run out soon — like sunlight, wind, and moving water."},
   {id:"c2",ico:"⛏️",nm:"Nonrenewable",title:"Nonrenewable",body:"Nonrenewable resources take millions of years to form and can run out — like coal, oil, and natural gas."},
   {id:"c3",ico:"☀️",nm:"Always There",title:"Won't Run Out",body:"The Sun keeps shining and the wind keeps blowing, so we can use them again and again."},
   {id:"c4",ico:"🦕",nm:"Ancient",title:"From Long Ago",body:"Coal and oil formed from plants and animals that were buried millions of years ago. Once used up, they are gone."},
   {id:"c5",ico:"🔋",nm:"For Energy",title:"Making Energy",body:"We use these resources for energy — to make electricity, heat homes, and power cars."},
   {id:"c6",ico:"🎈",nm:"Party Fact",title:"A Balloon Fact",body:"A helium balloon floats. That is true and fun — but it is not about resources."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"How Coal Forms",q:"Put the slow forming of coal in order. Tap the pads in order.",
    pads:[{k:"coal",e:"⛏️ Coal forms (nonrenewable)",c:"#dc2626"},{k:"plants",e:"🌿 Ancient plants die",c:"#166534"},{k:"bury",e:"⏳ Buried for millions of years",c:"#ca8a04"}],
    answer:["plants","bury","coal"],reason:"Ancient plants die, are buried for millions of years, and slowly become coal. Because it takes so long, coal is nonrenewable."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"Which Won't Run Out?",q:"Which is a RENEWABLE resource that won't run out soon?",
    options:["Coal.","Sunlight.","Oil."],
    answerIndex:1,reason:"Sunlight keeps coming, so it is renewable. Coal and oil are nonrenewable — once used up, they are gone."},
   {id:"L3",type:"multi",color:"#dc2626",title:"Find the Nonrenewables",q:"Tap ONLY the nonrenewable resources (they can run out). Leave out the fun fact.",
    items:[{t:"Coal.",strong:true},{t:"Oil.",strong:true},{t:"Natural gas.",strong:true},{t:"A helium balloon floats.",strong:false}],
    reason:"Coal, oil, and natural gas take millions of years to form and can run out. The balloon fact is true but is not a resource here."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"A resource that can be replaced quickly or won't run out soon, like sunlight or wind, is ____. Type the word.",
    answer:["renewable","renovable"],reason:"Renewable resources keep coming; nonrenewable ones can run out. Naming them helps us use resources wisely."}
  ]
 },

 "food-webs": {
  id: "sci4-food-webs", teks: "4.12(B)", concept: "Food Webs",
  ui: {
   h1: "The Web of Life", sub: "How do energy and matter move through an ecosystem? Read the clues and open all four locks.",
   briefH: "Trace the web", briefP: "A food web links many food chains together. Energy flows from the Sun through producers, consumers, and decomposers. Use the clues to open the locks!",
   winStamp: "WEB TRACED ✓", winH: "Ecosystem expert!", winP: "You followed energy through the web, learned what decomposers do, and named them. A food web moves energy from the Sun and recycles matter through every living thing."
  },
  clues: [
   {id:"c1",ico:"🕸️",nm:"Food Web",title:"Many Chains",body:"A food web is many food chains connected together, showing how energy moves through an ecosystem."},
   {id:"c2",ico:"☀️",nm:"The Sun",title:"Energy Starts",body:"The Sun's energy starts every food web. Plants capture it to make food."},
   {id:"c3",ico:"🌿",nm:"Producers",title:"Producers",body:"Producers, like plants, make their own food using sunlight, water, and air."},
   {id:"c4",ico:"🦊",nm:"Consumers",title:"Consumers",body:"Consumers eat other living things. A rabbit eats plants; a fox eats the rabbit."},
   {id:"c5",ico:"🍄",nm:"Decomposers",title:"Decomposers",body:"Decomposers, like fungi and bacteria, break down dead things and return nutrients to the soil, so matter is recycled."},
   {id:"c6",ico:"🌋",nm:"Hot Fact",title:"A Volcano Fact",body:"A volcano can shoot lava high in the air. That is true and wild — but it is not part of a food web."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"Through the Web",q:"Order the roles by how energy flows. Tap the pads in order.",
    pads:[{k:"decomp",e:"🍄 Decomposer breaks it down",c:"#dc2626"},{k:"sun",e:"☀️ The Sun shines",c:"#166534"},{k:"producer",e:"🌿 Producer makes food",c:"#ca8a04"},{k:"consumer",e:"🦊 Consumer eats it",c:"#2563eb"}],
    answer:["sun","producer","consumer","decomp"],reason:"The Sun feeds producers, consumers eat them, and decomposers break down the dead — recycling matter back to the soil."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"The Recyclers",q:"What do decomposers do in a food web?",
    options:["Make their own food from sunlight.","Break down dead things and return nutrients to the soil.","Only eat living plants."],
    answerIndex:1,reason:"Decomposers break down dead plants and animals and recycle their nutrients back into the soil for producers to use."},
   {id:"L3",type:"multi",color:"#dc2626",title:"True About Food Webs",q:"Tap ONLY the true clues about food webs. Leave out the fun fact.",
    items:[{t:"A food web links many food chains together.",strong:true},{t:"The energy starts with the Sun.",strong:true},{t:"Decomposers recycle nutrients back to the soil.",strong:true},{t:"A volcano can shoot lava high.",strong:false}],
    reason:"Food webs link chains, start with the Sun, and recycle matter through decomposers. The volcano fact is true but is not part of a web."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"A living thing like a fungus that breaks down dead things and recycles nutrients is a ____. Type the word.",
    answer:["decomposer","decomposers","descomponedor"],reason:"Decomposers recycle matter in a food web. Producers, consumers, and decomposers together keep energy and matter moving."}
  ]
 },

 "inherited-acquired": {
  id: "sci4-inherited-acquired", teks: "4.13(B)", concept: "Inherited & Acquired Traits",
  ui: {
   h1: "Born With It, or Learned?", sub: "Which traits come from parents, and which come from life? Read the clues and open all four locks.",
   briefH: "Sort the traits", briefP: "Some traits are inherited — passed from parents. Others are acquired — gained during life. Use the clues to open the locks!",
   winStamp: "SORTED ✓", winH: "Trait detective!", winP: "You watched a dog learn a trick, found an inherited trait, and named it. Inherited traits come from parents; acquired traits are learned or gained in life."
  },
  clues: [
   {id:"c1",ico:"🧬",nm:"Inherited",title:"Inherited Traits",body:"Inherited traits are passed from parents to their young. You are born with them, like eye color or a dog's fur color."},
   {id:"c2",ico:"🎓",nm:"Acquired",title:"Acquired Traits",body:"Acquired traits are gained during life, not from parents — like learning to ride a bike or a dog learning a trick."},
   {id:"c3",ico:"🐶",nm:"Fur Color",title:"Born With It",body:"A puppy's fur color comes from its parents, so it is inherited."},
   {id:"c4",ico:"🦴",nm:"A Trick",title:"Learned in Life",body:"A dog that learns to sit or shake gained that skill during life, so it is acquired."},
   {id:"c5",ico:"🌳",nm:"Plants Too",title:"Plants Have Both",body:"A plant's flower color is inherited, but a branch bent by strong wind is an acquired change."},
   {id:"c6",ico:"⚡",nm:"Sky Fact",title:"A Lightning Fact",body:"Lightning is very hot. That is true and powerful — but it is not a trait."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#166534",title:"Learn a Trick",q:"A dog learns to sit — an acquired trait. Put it in order. Tap the pads in order.",
    pads:[{k:"learn",e:"🐕 The dog learns to sit",c:"#dc2626"},{k:"born",e:"🐶 A puppy is born",c:"#166534"},{k:"teach",e:"🎓 A trainer teaches it",c:"#ca8a04"}],
    answer:["born","teach","learn"],reason:"A puppy is born, a trainer teaches it, and the dog learns to sit. A skill learned during life is an acquired trait."},
   {id:"L2",type:"mc",color:"#ca8a04",title:"Which Is Inherited?",q:"Which of these is an INHERITED trait (passed from parents)?",
    options:["The color of a dog's fur.","A trick the dog learned.","A scar from a fall."],
    answerIndex:0,reason:"Fur color is passed from parents, so it is inherited. Learned tricks and scars are acquired during life."},
   {id:"L3",type:"multi",color:"#dc2626",title:"Find the Acquired Traits",q:"Tap ONLY the acquired traits (gained during life). Leave out the fun fact.",
    items:[{t:"Knowing how to ride a bike.",strong:true},{t:"A scar from a fall.",strong:true},{t:"A tree branch bent by the wind.",strong:true},{t:"Lightning is very hot.",strong:false}],
    reason:"Riding a bike, a scar, and a wind-bent branch are all gained during life, so they are acquired. The lightning fact is true but is not a trait."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"A trait that is passed from parents, like eye color, that you are born with, is ____. Type the word.",
    answer:["inherited","inherit","heredado","heredada"],reason:"Inherited traits come from parents; acquired traits are gained in life. Sorting them is a key life-science idea."}
  ]
 }

};
