/* The Relic Rooms series — single source of truth for the hub (index.html).
   status: "live" (has href) or "planned" (coming soon, no link yet).
   Flip a room to live + set href when it ships. */
window.RELIC_ROOMS = [
  { id: "tvc", title: "The Vanished Classroom", grades: "4–8", subject: "Social Studies",
    teks: "19 TAC Ch. 113", accent: "#a86a1e", href: "../tvc/", status: "live",
    desc: "Instructional practices from the 1800s that classrooms no longer use — slate, hornbook, the dunce cap, and more." },

  { id: "ec", title: "Extinct Creatures", grades: "3–7", subject: "Science",
    teks: "19 TAC Ch. 112", accent: "#54b28c", href: "ec/", status: "live",
    desc: "Creatures lost to time — identify each, its niche and adaptation, and its closest living relative today." },

  { id: "vt", title: "Vanished Trades", grades: "5–8 / HS", subject: "Social Studies · Career",
    teks: "19 TAC Ch. 113 + Ch. 127", accent: "#cf9a4a", href: "vt/", status: "live",
    desc: "Jobs that disappeared — lamplighter, switchboard operator, ice cutter — what they did and what replaced them." },

  { id: "tg", title: "The Transportation Graveyard", grades: "3–6", subject: "Social Studies",
    teks: "19 TAC Ch. 113", accent: "#5b6b8c", href: "tg/", status: "planned",
    desc: "Ways we used to get around — penny-farthing, steam locomotive, zeppelin — their job and their successor." },

  { id: "dc", title: "Dead Communications", grades: "4–8", subject: "Technology Applications",
    teks: "19 TAC Ch. 126", accent: "#7a5c8c", href: "dc/", status: "planned",
    desc: "How we used to reach each other — telegraph, pneumatic tubes, the party line — and the modern equivalent." },

  { id: "hoi", title: "Hall of Inventions", grades: "4–8", subject: "Social Studies · Tech Apps",
    teks: "19 TAC Ch. 113 + Ch. 126", accent: "#9b6a3c", href: "hoi/", status: "planned",
    desc: "Breakthroughs that changed daily life — the problem each solved and what it made possible." },

  { id: "et", title: "Endangered Today", grades: "6–8 / HS", subject: "Tech Apps · Economics",
    teks: "19 TAC Ch. 126", accent: "#6f8f52", href: "et/", status: "planned",
    desc: "Things predicted to disappear — cursive, cash, physical keys — their current use and likely successor." },

  { id: "mm", title: "Mystery Minerals", grades: "5–8", subject: "Science",
    teks: "19 TAC Ch. 112", accent: "#4a6b8a", href: "mm/", status: "planned",
    desc: "Specimens from the earth — identify each mineral, a key property, and how people use it." },

  { id: "clouds", title: "Cloud Detective", grades: "3–5", subject: "Science",
    teks: "19 TAC Ch. 112", accent: "#4d7ba0", href: "clouds/", status: "planned",
    desc: "Read the sky — identify each cloud, how it forms, and the weather it signals." },
];
