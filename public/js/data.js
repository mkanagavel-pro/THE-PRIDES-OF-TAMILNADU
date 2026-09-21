/* =========================================================================
   TPOTN — data.js
   Central place for content data that pages render into the DOM.
   For now this is a static in-file pool (no backend yet). Once the
   Express + MongoDB layer exists, these arrays are what the API responses
   will replace — the shape is kept simple on purpose so that swap is easy.
   ========================================================================= */

/**
 * "Did You Know?" pool for the Hidden Pride / Discover section.
 * Each entry is a short question (front of the card) and a short answer
 * (back of the card, revealed on flip). Keep both under ~2 lines.
 */
const TPOTN_FACTS = [
  {
    question: 'Why is a fresh kolam drawn at the threshold every morning?',
    answer:
      "It's meant to welcome prosperity and quietly feed insects and birds with rice flour — hospitality before the day even begins."
  },
  {
    question: "What's unusual about how Karagattam is danced?",
    answer:
      'Dancers balance a tall, decorated pot on their head — sometimes lit with a flame — while dancing at full tempo.'
  },
  {
    question: "How old is Thanjavur's bronze-casting tradition?",
    answer:
      'Over a thousand years, using the same lost-wax method — and it still runs in the same families today.'
  },
  {
    question: 'What makes Chettinad cooking so distinct?',
    answer:
      'A single dish can carry a dozen freshly roasted, hand-ground spices — no two kitchens blend them quite the same way.'
  },
  {
    question: 'Why do Tamil festival dates shift every year?',
    answer:
      'Festivals like Pongal and Aadi Perukku follow the Tamil solar calendar, not the Gregorian one, so the date moves.'
  },
  {
    question: "What's carved across Madurai's Meenakshi Amman temple towers?",
    answer:
      'An estimated 33,000 sculptures — a stone encyclopedia of myth, color, and craft, still being repainted by hand.'
  },
  {
    question: "What does 'Kongu Nadu' refer to?",
    answer:
      'A cultural region around Coimbatore, Erode, and nearby districts, with its own dialect and customs distinct from other parts of Tamil Nadu.'
  },
  {
    question: 'What is Sungudi, and where does it come from?',
    answer: 'A traditional tie-dye cotton saree craft closely associated with Madurai.'
  },
  {
    question: 'Why is Thanjavur called the cradle of the Cholas?',
    answer:
      'It served as the Chola empire\u2019s capital — Raja Raja Chola I built the Brihadeeswarar Temple there around 1010 CE.'
  },
  {
    question: "What's unusual about Tamil Nadu's coastline?",
    answer:
      'It runs from Chennai in the northeast all the way down to Kanniyakumari, taking in old port towns and long fishing coasts.'
  },
  {
    question: 'What craft uses gold foil and comes from Thanjavur?',
    answer:
      'Thanjavur painting — a GI-tagged art form traditionally depicting deities in rich color and gold relief work.'
  },
  {
    question: 'What is Jigarthanda, and where is it from?',
    answer: 'A layered cold drink — almond gum, milk, and ice cream — that originated in Madurai.'
  },
  {
    question: "What's distinctive about Karthikai Deepam?",
    answer:
      'A festival of lights, most famously marked by a giant flame lit atop the hill at Thiruvannamalai.'
  },
  {
    question: "Why do Chennai's evenings sound different every December?",
    answer:
      'The Margazhi season fills the city with Carnatic music and Bharatanatyam performances across dozens of sabha halls.'
  },
  {
    question: "What is a temple 'ther' festival?",
    answer: 'A car festival, where the deity is taken through the streets in a large, decorated wooden chariot.'
  },
  {
    question: 'Where was Fort St. George built, and when?',
    answer: 'In what\u2019s now Chennai, completed in 1644 — the seed of the modern city.'
  },
  {
    question: 'What is Aadi Perukku?',
    answer:
      'A festival marking the rise of water in the Cauvery and other rivers during the Tamil month of Aadi, celebrated on riverbanks.'
  },
  {
    question: "Why doesn't the Tamil New Year fall on January 1st?",
    answer: 'It follows the Tamil solar calendar, so Puthandu usually lands in mid-April instead.'
  }
];

/**
 * Tamil Nadu Quiz pool for the Discover page. Each round shows a random
 * subset (see js/pages/discover.js). `correct` is the index into
 * `options`. Facts are drawn from the same well-documented material used
 * across the site (districts-data.js, categories-data.js) — nothing new
 * or unverified introduced here.
 */
const TPOTN_QUIZ = [
  {
    question: "Which river delta is known as the \"Rice Bowl of Tamil Nadu\"?",
    options: ['Cauvery delta', 'Vaigai delta', 'Palar delta', 'Tamiraparani delta'],
    correct: 0,
    explanation: 'Thanjavur and the surrounding Cauvery delta have long been Tamil Nadu\u2019s most productive paddy-growing region.'
  },
  {
    question: "Which temple's gopurams are said to carry about 33,000 sculptures?",
    options: ['Brihadeeswarar Temple', 'Meenakshi Amman Temple', 'Kapaleeshwarar Temple', 'Ramanathaswamy Temple'],
    correct: 1,
    explanation: 'Madurai\u2019s Meenakshi Amman Temple towers are covered in an estimated 33,000 sculptures.'
  },
  {
    question: 'What is drawn fresh at the threshold of many Tamil homes every morning?',
    options: ['A garland', 'A lamp', 'A kolam', 'A flag'],
    correct: 2,
    explanation: 'A kolam — a rice-flour or chalk pattern — is redrawn at the doorstep each morning in many households.'
  },
  {
    question: "Which Tamil Nadu city is nicknamed the \"Manchester of South India\"?",
    options: ['Madurai', 'Coimbatore', 'Salem', 'Tiruchirappalli'],
    correct: 1,
    explanation: 'Coimbatore earned the nickname through its long history of textile mills.'
  },
  {
    question: 'Along with painting and bronze casting, which craft is Thanjavur especially known for?',
    options: ['Veena making', 'Pottery', 'Glassblowing', 'Leatherwork'],
    correct: 0,
    explanation: 'Thanjavur veena making is a GI-tagged craft producing the instrument central to Carnatic music.'
  },
  {
    question: 'Where did Swami Vivekananda famously meditate in 1892?',
    options: ['Rameswaram', 'Kanniyakumari', 'Thanjavur', 'Madurai'],
    correct: 1,
    explanation: 'The Vivekananda Rock Memorial at Kanniyakumari now marks the site.'
  },
  {
    question: 'Which festival marks the Tamil harvest season?',
    options: ['Diwali', 'Pongal', 'Navratri', 'Holi'],
    correct: 1,
    explanation: 'Pongal is the harvest festival and the most widely celebrated Tamil festival.'
  },
  {
    question: 'Alongside steel, what is Salem particularly known for producing?',
    options: ['Tea', 'Mangoes', 'Cotton only', 'Coffee beans'],
    correct: 1,
    explanation: 'Salem is one of Tamil Nadu\u2019s major mango-growing regions.'
  },
  {
    question: 'Which district sits at the very southern tip of mainland India?',
    options: ['Tirunelveli', 'Kanniyakumari', 'Thoothukudi', 'Ramanathapuram'],
    correct: 1,
    explanation: 'Kanniyakumari is the southernmost point of the Indian mainland.'
  },
  {
    question: 'Chettinad cuisine is best known for its use of what?',
    options: ['Only sweet dishes', 'Freshly roasted, hand-ground spices', 'Raw, uncooked vegetables', 'Mild, low-spice cooking'],
    correct: 1,
    explanation: 'A single Chettinad dish can carry a dozen freshly roasted and ground spices.'
  }
];
