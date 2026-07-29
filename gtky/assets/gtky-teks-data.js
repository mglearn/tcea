/* TEKS correlation data for the "Getting to Know You" worksheets.
   These worksheets are INTEREST INVENTORIES, not instructional or assessment
   tasks, so this is a THEMATIC alignment to TEKS strands — strongest to each
   subject's process / inquiry / response strand — not a claim that a sheet
   teaches or assesses a specific student expectation. Strand descriptions are
   paraphrased (not official TEKS text). Confirm specifics against the current
   TEKS at tea.texas.gov. Content is kept in English (TEKS are English-language
   Texas standards). */
window.GTKY_TEKS = {
  // Per-subject: TEA chapter, the named strands, and how an interest inventory aligns.
  subjects: {
    science: {
      chapter: '19 TAC §112 — Science',
      url: 'https://tea.texas.gov/academics/curriculum-standards/teks/texas-essential-knowledge-and-skills',
      strands: [
        'Scientific & engineering practices',
        'Recurring themes & concepts',
        'Matter & its properties',
        'Force, motion & energy',
        'Earth & space',
        'Organisms & environments',
      ],
      align: 'Aligns most strongly with the Scientific & Engineering Practices (asking questions, investigating, using tools) and Recurring Themes & Concepts. Individual prompts about weather, the sky, living things, and materials connect to the Earth & Space, Organisms & Environments, Matter, and Force/Motion/Energy strands.',
    },
    math: {
      chapter: '19 TAC §111 — Mathematics',
      url: 'https://tea.texas.gov/academics/subject-areas/mathematics',
      strands: [
        'Mathematical process standards (X.1)',
        'Number & operations',
        'Algebraic reasoning',
        'Geometry & measurement',
        'Data analysis',
        'Personal financial literacy',
      ],
      align: 'Aligns most directly with the Mathematical Process Standards (X.1) — solving problems, communicating, and representing ideas. Individual prompts touch the Number & Operations, Algebraic Reasoning, Geometry & Measurement, and Data Analysis strands.',
    },
    ela: {
      chapter: '19 TAC §110 — English Language Arts & Reading',
      url: 'https://tea.texas.gov/academics/subject-areas/english-language-arts-and-reading',
      strands: [
        'Foundational language skills',
        'Comprehension',
        'Response',
        'Multiple genres',
        'Author’s purpose & craft',
        'Composition',
        'Inquiry & research',
      ],
      align: 'Prompts about favorite genres, reading, writing goals, and questions align with the Response and Inquiry & Research strands, plus Multiple Genres, Composition, and Author’s Purpose & Craft as students describe what and how they like to read and write.',
    },
    'social-studies': {
      chapter: '19 TAC §113 — Social Studies',
      url: 'https://tea.texas.gov/academics/subject-areas/social-studies',
      strands: [
        'History', 'Geography', 'Economics', 'Government',
        'Citizenship', 'Culture', 'Science, technology & society', 'Social studies skills',
      ],
      align: 'Prompts about places, time periods, leaders, rights, traditions, and goods/services map across the History, Geography, Economics, Government, Citizenship, and Culture strands, and align most directly with the Social Studies Skills strand (asking questions, using maps and sources).',
    },
    'fine-arts': {
      chapter: '19 TAC §117 — Fine Arts (Art, Music, Theatre, Dance)',
      url: 'https://tea.texas.gov/academics/subject-areas/fine-arts',
      strands: [
        'Foundations: observation & perception',
        'Creative expression',
        'Historical & cultural relevance',
        'Critical evaluation & response',
      ],
      align: 'Prompts about how students like to create and perform, and what inspires them, align with the Creative Expression and Foundations (observation & perception) strands; admiring artists/works and reflecting on feelings connect to Historical & Cultural Relevance and Critical Evaluation & Response — across the Art, Music, Theatre, and Dance disciplines.',
    },
  },

  // Per-subject, per-grade focus (paraphrased grade-level emphasis).
  focus: {
    science: {
      kindergarten: 'Observing nature, weather, the sky, and how things move through the five senses.',
      'grade-1': 'Light and sound, weather, plants and animals, and objects that move.',
      'grade-2': 'Properties of matter, life cycles, weather patterns, habitats, and natural resources.',
      'grade-3': 'Forces, matter, adaptations, patterns on Earth and in the sky, and ecosystems.',
      'grade-4': 'Energy and forces, changes in matter, Earth’s landforms, and structures/functions of living things.',
      'grade-5': 'Properties of matter, energy, forces and motion, Earth systems, and organisms & environments.',
      '6-8': 'Matter & energy, force/motion/energy, Earth & space, and organisms & environments (Grades 6–8).',
      '9-12': 'High-school course standards — Biology, Chemistry, Physics, and IPC (§112 Subchapter C).',
    },
    math: {
      kindergarten: 'Counting, sorting and comparing, naming shapes, and simple patterns.',
      'grade-1': 'Whole numbers to 120, addition/subtraction, coins, and skip counting.',
      'grade-2': 'Place value to 1,200, addition/subtraction, fractional parts, time, and data.',
      'grade-3': 'Place value, multiplication/division, fractions, area/perimeter, and data.',
      'grade-4': 'Place value & decimals (4.2), fractions (4.3), computation (4.4), patterns (4.5), angles & measurement (4.7–4.8), data (4.9).',
      'grade-5': 'Decimals to thousandths (5.2), operations with fractions & decimals (5.3), patterns & the coordinate plane (5.4, 5.8), volume/measurement, data (5.9).',
      '6-8': 'Proportional reasoning, expressions & equations, geometry, and data & probability (Grades 6–8).',
      '9-12': 'High-school course standards — Algebra I, Geometry, Algebra II, and beyond (§111 Subchapter C).',
    },
    ela: {
      kindergarten: 'A letter, a sound, rhyming, favorite books, and stories.',
      'grade-1': 'Words, story parts, word families, and favorite books/authors.',
      'grade-2': 'Genres, topics, describing words, writing, and lessons from stories.',
      'grade-3': 'Genres, characters, writing goals, and topics to research.',
      'grade-4': 'Genres, author’s craft, writing habits, and discussion questions.',
      'grade-5': 'Text types, themes, writing skills, and inquiry questions.',
      '6-8': 'Multiple genres, author’s craft, composition, and inquiry (Grades 6–8).',
      '9-12': 'High-school English I–IV — argument, media, literary analysis, and composition.',
    },
    'social-studies': {
      kindergarten: 'Self, family, community helpers, symbols, and good citizenship.',
      'grade-1': 'Community, maps, holidays, leaders, and being a good citizen.',
      'grade-2': 'Communities, geography, historical figures, and goods & services.',
      'grade-3': 'Communities, geography, government, economics, and citizenship.',
      'grade-4': 'Texas history, geography, economics, government, and citizenship (§113.15).',
      'grade-5': 'United States history, geography, government, economics, and citizenship (§113.16).',
      '6-8': 'World cultures/geography (6), Texas history (7), and U.S. history (8).',
      '9-12': 'World Geography, World History, U.S. History, Government, and Economics.',
    },
    'fine-arts': {
      kindergarten: 'Favorite colors, songs, ways to move, and making art.',
      'grade-1': 'Favorite songs, art tools, movement, and performing.',
      'grade-2': 'Art forms, music styles, materials, and creative challenges.',
      'grade-3': 'Art forms, colors, songs, roles to act out, and creating.',
      'grade-4': 'Art forms, admired artists, skills to grow, and inspiration.',
      'grade-5': 'Art forms, admired works, techniques, and creative goals.',
      '6-8': 'Foundations, creative expression, and evaluation across Art, Music, Theatre, and Dance.',
      '9-12': 'High-school Fine Arts — Levels I–IV in Art, Music, Theatre, and Dance.',
    },
  },
};
