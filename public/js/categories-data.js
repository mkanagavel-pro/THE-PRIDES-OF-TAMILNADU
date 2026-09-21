/* =========================================================================
   TPOTN — categories-data.js
   Shared content for every category page (culture.html, food.html,
   arts.html, festivals.html, history.html, people.html, places.html).
   Each category page is its own thin HTML file (per the agreed folder
   structure), but all of them are rendered by the one shared
   js/pages/category.js using <body data-category="..."> to pick the
   right entry here — so adding "Food" later means adding a data entry
   and a food.html shell, not rewriting the renderer.

   `districtField` says how to pull a one-line teaser for that category
   out of an existing district entry in districts-data.js, so the
   "See it in each district" grid needs no separate content of its own.
   ========================================================================= */

const CATEGORIES = {
  culture: {
    name: 'Culture & Traditions',
    tamilName: 'பண்பாடு',
    tagline: 'The customs that shape everyday life',
    heroImage: 'assets/images/categories/culture-hero.jpg',
    accent: 'maroon',
    glyph: 'culture',
    intro: 'Tamil Nadu\'s culture isn\'t one fixed thing — it\'s a set of everyday habits, courtesies, and rituals that vary a little from district to district but stay recognizable across the state.',
    overview: [
      {
        title: 'Extended Family Life',
        text: 'Many households, especially outside the big cities, still center around extended or joint family living, with multiple generations sharing a home.'
      },
      {
        title: 'Respect for Elders',
        text: 'Touching the feet of elders and parents as a mark of respect is common across the state, especially during festivals and family occasions.'
      },
      {
        title: 'The Daily Kolam',
        text: 'In many homes, a kolam — a rice-flour or chalk pattern — is drawn fresh at the threshold every morning, a small ritual repeated daily.'
      },
      {
        title: 'Traditional Dress',
        text: 'Veshti (dhoti) and shirt for men, and saree or half-saree for women, remain common traditional wear, especially for festivals and temple visits.'
      },
      {
        title: 'Temple-Centered Towns',
        text: 'In many Tamil Nadu towns, daily rhythm and the local calendar still revolve around the nearest temple\'s rituals and festival cycle.'
      },
      {
        title: 'A Patchwork of Dialects',
        text: 'Spoken Tamil changes noticeably by district — Kongu Tamil, Madurai Tamil, and Chennai Tamil are all recognizably different from one another.'
      }
    ],
    districtField: 'culture'
  },
  food: {
    name: 'Food & Cuisine',
    tamilName: 'உணவுப் பண்பாடு',
    tagline: 'Flavors that carry memory, region, and season',
    heroImage: 'assets/images/categories/food-hero.jpg',
    accent: 'gold',
    glyph: 'food',
    intro: 'Tamil food isn\'t one cuisine — it\'s dozens of regional kitchens, each shaped by its own soil, coastline, and climate, all still built around rice, spice, and a banana leaf.',
    overview: [
      {
        title: 'Rice, the Everyday Staple',
        text: 'Rice forms the base of most everyday meals across Tamil Nadu, prepared as plain rice, curd rice, or in dozens of regional variations.'
      },
      {
        title: 'Banana Leaf Dining',
        text: 'Serving a full meal on a banana leaf remains common for both everyday lunches and festival meals, valued for taste and practicality alike.'
      },
      {
        title: 'The Filter Coffee Ritual',
        text: 'Strong decoction coffee, poured between tumbler and davara to cool and froth it, is a genuine daily ritual in most households.'
      },
      {
        title: 'Spice Changes by Region',
        text: 'Chettinad cooking leans on roasted, ground spice blends; coastal districts lean on coconut and seafood; each region tastes distinctly different.'
      },
      {
        title: 'Tiffin Culture',
        text: 'Idli, dosa, vada, and pongal are eaten as breakfast or evening snacks statewide, with each town claiming its own favorite version.'
      },
      {
        title: 'Temple Prasadam',
        text: 'Many temples prepare and distribute food as prasadam (a sacred offering) — a tradition that ties food directly to daily worship.'
      }
    ],
    districtField: 'food'
  },
  arts: {
    name: 'Arts & Crafts',
    tamilName: 'கலைகளும் கைவினைகளும்',
    tagline: 'Made by hand, passed down through generations',
    heroImage: 'assets/images/categories/arts-hero.jpg',
    accent: 'terracotta',
    glyph: 'arts',
    intro: 'Tamil Nadu\'s arts live in temples, festivals, and workshops as much as on any stage — classical dance, folk percussion, bronze casting, and weaving are all still practiced much as they were generations ago.',
    overview: [
      {
        title: 'Bharatanatyam',
        text: 'One of the oldest classical dance forms in India, closely associated with Tamil Nadu’s temples and still taught and performed across the state.'
      },
      {
        title: 'Folk Percussion & Dance',
        text: 'Forms like parai melam and karagattam remain part of festival and temple processions, especially in rural areas.'
      },
      {
        title: 'Temple Sculpture & Bronze Casting',
        text: 'The stone sculpture tradition behind temple gopurams, and the lost-wax bronze casting made famous in Thanjavur, both continue in workshops today.'
      },
      {
        title: 'Handloom Weaving',
        text: 'Silk and cotton weaving traditions vary by district — Kanchipuram silk and Madurai’s Sungudi tie-dye cotton are two well-known examples.'
      },
      {
        title: 'Thanjavur Painting',
        text: 'A distinctive gold-foil relief painting style, traditionally depicting deities, that remains a recognized GI-tagged craft.'
      },
      {
        title: 'Therukoothu (Street Theatre)',
        text: 'A traditional folk theatre form performed outdoors, usually enacting stories from the Mahabharata and other epics.'
      }
    ],
    districtField: 'arts'
  },
  festivals: {
    name: 'Festivals & Celebrations',
    tamilName: 'திருவிழாக்கள்',
    tagline: 'When the streets turn into celebration',
    heroImage: 'assets/images/categories/festivals-hero.jpg',
    accent: 'green',
    glyph: 'festivals',
    intro: 'Tamil Nadu\'s calendar is dense with festivals — some statewide, some specific to a single temple town — and many still follow the Tamil solar calendar rather than the Gregorian one.',
    overview: [
      {
        title: 'Pongal',
        text: 'The harvest festival and most widely celebrated Tamil festival, marked over four days with rituals centered on the new rice harvest.'
      },
      {
        title: 'Puthandu (Tamil New Year)',
        text: 'The Tamil New Year is marked with a special meal, new clothes, and visits to temples, typically in mid-April.'
      },
      {
        title: 'Temple Car Festivals',
        text: 'Many temple towns hold an annual car (ther) festival, where the deity is taken through the streets in a large, decorated wooden chariot.'
      },
      {
        title: 'Jallikattu',
        text: 'A traditional bull-taming sport tied to the Pongal season, most associated with the Madurai belt, including Alanganallur.'
      },
      {
        title: 'Aadi Perukku',
        text: 'A river festival marking the rise of water in the Cauvery and other rivers during the Tamil month of Aadi, celebrated on riverbanks.'
      },
      {
        title: 'Karthikai Deepam',
        text: 'A festival of lights, with rows of lamps lit at homes and temples — most famously marked by a giant flame atop Thiruvannamalai’s hill.'
      }
    ],
    districtField: 'festivals'
  },
  history: {
    name: 'History & Heritage',
    tamilName: 'வரலாறும் பாரம்பரியமும்',
    tagline: 'Stone, bronze, and empires that still stand',
    heroImage: 'assets/images/categories/history-hero.jpg',
    accent: 'bronze',
    glyph: 'history',
    intro: 'Tamil Nadu\'s history runs from the Sangam-age literary academies through the great temple-building dynasties to the colonial era — and much of it is still standing, not just written down.',
    overview: [
      {
        title: 'The Sangam Age',
        text: 'Some of the earliest Tamil literature comes from the Sangam period, when academies of poets convened in cities including Madurai.'
      },
      {
        title: 'The Chola Empire',
        text: 'The Cholas, ruling from Thanjavur at their height, built some of Tamil Nadu’s greatest temples and extended Tamil influence overseas.'
      },
      {
        title: 'The Pandya & Chera Dynasties',
        text: 'Alongside the Cholas, the Pandyas (centered on Madurai) and the Cheras were among the three great ancient Tamil dynasties.'
      },
      {
        title: 'Vijayanagar & Nayak Rule',
        text: 'After the Cholas, the Vijayanagar empire and its Nayak governors shaped much of Tamil Nadu’s later medieval architecture and administration.'
      },
      {
        title: 'The Colonial Era',
        text: 'British rule brought the Madras Presidency, new port cities, and infrastructure like Mettur Dam, reshaping the region’s economy.'
      },
      {
        title: 'Modern Tamil Nadu',
        text: 'The state was reorganized on linguistic lines in 1956 and renamed Tamil Nadu (from Madras State) in 1969.'
      }
    ],
    districtField: 'history'
  },
  people: {
    name: 'People & Stories',
    tamilName: 'மக்களும் கதைகளும்',
    tagline: 'The people who keep it all alive',
    heroImage: 'assets/images/categories/people-hero.jpg',
    accent: 'gold',
    glyph: 'people',
    intro: 'Tamil Nadu\'s traditions survive because someone keeps doing them — farmers, priests, weavers, musicians, and elders, mostly unnamed in any history book, carrying on work that’s generations old.',
    overview: [
      {
        title: 'Farmers of the Delta',
        text: 'Generations of farming families in the Cauvery delta have sustained Tamil Nadu’s reputation as its "rice bowl."'
      },
      {
        title: 'Temple Priests & Ritual Specialists',
        text: 'Hereditary priestly families maintain the daily rituals and festival calendars of temples across the state, some going back centuries.'
      },
      {
        title: 'Weavers & Artisans',
        text: 'Handloom weaving, bronze casting, and painting families pass their craft down directly, often within the same household.'
      },
      {
        title: 'Fisherfolk of the Coast',
        text: 'Coastal communities along Tamil Nadu’s long shoreline shape much of the state’s food, festivals, and daily rhythm.'
      },
      {
        title: 'Classical & Folk Performers',
        text: 'Musicians, dancers, and folk artists keep traditions like Carnatic music, Bharatanatyam, and parai melam performed, not just preserved.'
      },
      {
        title: 'Everyday Storytellers',
        text: 'Grandparents and local elders remain the main way customs, recipes, and dialect quietly pass from one generation to the next.'
      }
    ],
    districtField: 'people'
  },
  places: {
    name: 'Places & Hidden Gems',
    tamilName: 'இடங்களும் மறைந்த அழகுகளும்',
    tagline: 'The corners no guidebook mentions',
    heroImage: 'assets/images/categories/places-hero.jpg',
    accent: 'green',
    glyph: 'places',
    intro: 'Tamil Nadu\'s map holds more than its famous stops — hill stations, temple towns, a long coastline, and quiet villages that rarely make it onto a typical itinerary.',
    overview: [
      {
        title: 'Hill Stations',
        text: 'Ooty, Kodaikanal, and Yercaud sit in the Western Ghats and Shevaroy Hills, offering a cooler break from the plains below.'
      },
      {
        title: 'Temple Towns',
        text: 'Beyond the famous few, hundreds of smaller temple towns anchor daily life across the state, each with its own local festival calendar.'
      },
      {
        title: 'A Long Coastline',
        text: 'Tamil Nadu’s coast runs from Chennai down to Kanniyakumari, taking in old port towns, fishing villages, and long stretches of beach.'
      },
      {
        title: 'The Cauvery Delta',
        text: 'The river delta around Thanjavur forms one of the state’s most fertile agricultural landscapes, dense with paddy fields and canals.'
      },
      {
        title: 'Wildlife Sanctuaries',
        text: 'Reserves like Mudumalai and Anamalai protect Western Ghats forest and wildlife, including elephants and tigers.'
      },
      {
        title: 'Quiet Villages',
        text: 'Away from the main tourist routes, many villages still quietly keep crafts, dialects, and customs that rarely get written about.'
      }
    ],
    districtField: 'places'
  }
};

/**
 * Given a district slug + a category key, returns a short one-line
 * teaser for that district in that category — pulled from the existing
 * DISTRICTS data (districts-data.js) rather than duplicated here.
 */
function getDistrictTeaser(slug, categoryKey) {
  const d = DISTRICTS[slug];
  if (!d) return '';
  const extractors = {
    culture: () => d.highlights.culture,
    food: () => d.highlights.food,
    arts: () => d.highlights.arts,
    history: () => d.highlights.heritage,
    festivals: () => (d.festivals[0] ? d.festivals[0].name : ''),
    people: () => (d.people[0] ? d.people[0].title : ''),
    places: () => (d.places[0] ? d.places[0].name : '')
  };
  return extractors[categoryKey] ? extractors[categoryKey]() : '';
}
