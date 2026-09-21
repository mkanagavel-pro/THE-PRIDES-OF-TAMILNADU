/* =========================================================================
   TPOTN — districts-data.js
   Structured content for the reusable District Details page
   (public/pages/district.html + js/pages/district.js).

   One object per district, keyed by slug (matches the `id` on each <path>
   in svg/tamil-nadu-map.svg). Add a new district by adding a new key here
   — no new HTML page required.

   Content notes:
   - Facts here are kept to well-documented, widely known information
     (temples, dates, crafts, geography). Nothing about named living
     individuals has been invented — "People & Stories" entries either
     name a specific, well-documented historical figure with a real,
     factual tie to the district, or describe a community/tradition in
     general terms rather than inventing a person.
   - `accent` picks which palette tone (see css/pages/district.css) tints
     that district's hero and card art placeholders, since no photography
     exists yet.
   ========================================================================= */

const DISTRICTS = {
  salem: {
    name: 'Salem',
    tamilName: 'சேலம்',
    tagline: 'Where steel meets silk, and hills meet plains',
    heroImage: 'assets/images/districts/salem-hero.jpg',
    accent: 'terracotta',
    glyph: 'hills',
    intro: 'Salem sits where the Shevaroy Hills meet the plains — a district known equally for its steel plants and its long handloom tradition. Mango orchards ring the city, and the cool air of Yercaud is never far away.',
    highlights: {
      famousFor: 'Steel, silk & mangoes',
      culture: 'Shevaroy hill traditions',
      food: 'Mangoes & filter coffee',
      arts: 'Handloom weaving',
      heritage: 'Kottai Mariamman Temple'
    },
    culture: [
      {
        title: 'A hill-and-plain rhythm',
        text: 'Salem town sits on the plains, but Yercaud — up in the Shevaroy Hills — has always shaped its pace: cooler, slower, and a short drive from the industrial center below.'
      },
      {
        title: 'A steel city with older roots',
        text: 'Long before its steel plants, Salem was a temple and market town — the Kottai Mariamman Temple at its center still anchors the old city\'s daily life.'
      }
    ],
    food: [
      {
        name: 'Salem Mangoes',
        desc: 'The district is one of Tamil Nadu’s major mango-growing regions, with orchards supplying markets across the state in season.',
        image: 'assets/images/food/salem-mangoes.jpg'
      },
      {
        name: 'Filter Coffee',
        desc: 'As in most of Tamil Nadu, the day runs on strong decoction coffee — Salem’s tiffin stalls take their coffee seriously.',
        image: 'assets/images/food/salem-filter-coffee.jpg'
      },
      {
        name: 'Traditional Thali',
        desc: 'A full South Indian meal — rice, sambar, rasam, and vegetables — served on a banana leaf remains the everyday standard.',
        image: 'assets/images/food/salem-traditional-thali.jpg'
      }
    ],
    arts: [
      {
        name: 'Handloom Weaving',
        desc: 'Salem has a long-standing handloom cotton and silk weaving tradition, historically supplying weavers’ cooperatives across the region.',
        image: 'assets/images/arts/salem-handloom-weaving.jpg'
      },
      {
        name: 'Silverware & Metalwork',
        desc: 'Alongside its modern steel industry, Salem carries an older tradition of silver and metal craftsmanship.',
        image: 'assets/images/arts/salem-silverware-metalwork.jpg'
      }
    ],
    festivals: [
      {
        name: 'Kottai Mariamman Festival',
        desc: 'The annual festival at Salem’s Kottai Mariamman Temple draws large crowds from across the district.',
        image: 'assets/images/festivals/salem-kottai-mariamman-festival.jpg'
      },
      {
        name: 'Pongal',
        desc: 'The Tamil harvest festival is celebrated across Salem’s farming communities with the same rituals observed statewide.',
        image: 'assets/images/festivals/salem-pongal.jpg'
      }
    ],
    history: [
      {
        era: 'Ancient & Medieval',
        title: 'Part of successive Tamil kingdoms',
        text: 'The region passed through the hands of the Gangas, Cholas, and later the Vijayanagar empire, as much of the western Tamil country did.'
      },
      {
        era: 'Colonial Era',
        title: 'Mettur Dam, 1934',
        text: 'Nearby Mettur Dam, one of the largest dams on the Cauvery, was completed in 1934 and remains central to the region’s irrigation and power supply.'
      },
      {
        era: 'Present Day',
        title: 'An industrial and agricultural hub',
        text: 'Salem today is known for steel manufacturing, handloom textiles, and its mango and mineral (magnesite, bauxite) production.'
      }
    ],
    people: [
      {
        title: 'Weaving families',
        text: 'Generations of handloom weaving families have kept Salem’s textile tradition running alongside its newer steel industry.'
      },
      {
        title: 'Steel and mining workers',
        text: 'Salem’s identity as an industrial center owes much to generations of steel plant and mine workers in and around the district.'
      }
    ],
    places: [
      {
        name: 'Yercaud',
        desc: 'A hill station in the Shevaroy Hills, known for coffee estates and a cooler climate, a short drive from Salem town.',
        hidden: false,
        image: 'assets/images/places/salem-yercaud.jpg'
      },
      {
        name: 'Mettur Dam',
        desc: 'One of the largest dams on the Cauvery river, with a large reservoir and gardens nearby.',
        hidden: false,
        image: 'assets/images/places/salem-mettur-dam.jpg'
      },
      {
        name: 'Kottai Mariamman Temple',
        desc: 'The old fort-area temple that anchors much of the city\'s traditional festival calendar.',
        hidden: false,
        image: 'assets/images/places/salem-kottai-mariamman-temple.jpg'
      },
      {
        name: 'Kariyamanickam',
        desc: 'A quieter countryside stretch near Salem known for its Shevaroy foothill views, off the usual tourist route.',
        hidden: true,
        image: 'assets/images/places/salem-kariyamanickam.jpg'
      }
    ]
  },
  madurai: {
    name: 'Madurai',
    tamilName: 'மதுரை',
    tagline: 'The city that never sleeps, built around a temple',
    heroImage: 'assets/images/districts/madurai-hero.jpg',
    accent: 'maroon',
    glyph: 'temple',
    intro: 'One of the oldest continuously inhabited cities in India, Madurai grew up around the Meenakshi Amman Temple and has never really slowed down — its streets, markets, and midnight snack stalls still seem to run on temple time.',
    highlights: {
      famousFor: 'Meenakshi Amman Temple',
      culture: 'Sangam-era temple town',
      food: 'Jigarthanda & Madurai idli',
      arts: 'Sungudi tie-dye sarees',
      heritage: 'Thirumalai Nayakkar Mahal'
    },
    culture: [
      {
        title: 'A city that runs on temple time',
        text: 'Daily life in Madurai still circles the Meenakshi Amman Temple — its opening and closing rituals have shaped the city\'s rhythm for centuries.'
      },
      {
        title: 'A seat of classical Tamil literature',
        text: 'Madurai is traditionally identified as the seat of the last of the three Sangam-era Tamil literary academies, a period foundational to classical Tamil poetry.'
      }
    ],
    food: [
      {
        name: 'Jigarthanda',
        desc: 'A cold, layered dessert drink — almond gum, milk, and ice cream — that originated in Madurai and is still sold at stalls named after it.',
        image: 'assets/images/food/madurai-jigarthanda.jpg'
      },
      {
        name: 'Madurai Idli',
        desc: 'Madurai’s idli stalls, some open since the mid-20th century, are locally famous enough to have built a following well beyond the city.',
        image: 'assets/images/food/madurai-idli.jpg'
      },
      {
        name: 'Paruthi Paal',
        desc: 'A traditional cotton-seed milk drink, sold as a night-time specialty in parts of old Madurai.',
        image: 'assets/images/food/madurai-paruthi-paal.jpg'
      }
    ],
    arts: [
      {
        name: 'Sungudi Sarees',
        desc: 'A traditional tie-dye cotton saree craft associated with Madurai, historically produced by local dyeing communities.',
        image: 'assets/images/arts/madurai-sungudi-sarees.jpg'
      },
      {
        name: 'Temple Stone Sculpture',
        desc: 'The carving tradition behind Meenakshi Temple\'s gopurams (tower gateways) continues in more modest form in workshops around the city.',
        image: 'assets/images/arts/madurai-temple-stone-sculpture.jpg'
      }
    ],
    festivals: [
      {
        name: 'Chithirai Festival',
        desc: 'A major annual Madurai festival re-enacting the celestial wedding of Meenakshi and Sundareswarar, drawing enormous crowds each year.',
        image: 'assets/images/festivals/madurai-chithirai-festival.jpg'
      },
      {
        name: 'Float Festival (Teppam)',
        desc: 'Held at the Mariamman Teppakulam tank, where temple deities are taken out on decorated floats.',
        image: 'assets/images/festivals/madurai-float-festival-teppam.jpg'
      }
    ],
    history: [
      {
        era: 'Sangam Age',
        title: 'Seat of classical Tamil literature',
        text: 'Madurai is traditionally associated with the third and final Sangam, the classical academy credited with much of early Tamil literature.'
      },
      {
        era: 'Pandya Period',
        title: 'Capital of the Pandya dynasty',
        text: 'For long stretches of its ancient and medieval history, Madurai served as the capital of the Pandya kings.'
      },
      {
        era: 'Nayak Period',
        title: 'Thirumalai Nayakkar Mahal, 17th century',
        text: 'Built by Thirumalai Nayak in 1636, this palace remains one of Madurai’s major Nayak-era landmarks.'
      }
    ],
    people: [
      {
        title: 'Sangam-era poets and scholars',
        text: 'Classical Tamil poetry traditionally traces part of its roots to the Sangam academy said to have convened in Madurai.'
      },
      {
        title: 'Temple sculptors and priests',
        text: 'Generations of sculptors and ritual specialists have maintained the Meenakshi Temple\'s architecture and daily rites.'
      }
    ],
    places: [
      {
        name: 'Meenakshi Amman Temple',
        desc: 'The city’s enormous temple complex, with towering, sculpture-covered gopurams at each entrance.',
        hidden: false,
        image: 'assets/images/places/madurai-meenakshi-amman-temple.jpg'
      },
      {
        name: 'Thirumalai Nayakkar Mahal',
        desc: 'A 17th-century Indo-Saracenic palace built by Thirumalai Nayak.',
        hidden: false,
        image: 'assets/images/places/madurai-thirumalai-nayakkar-mahal.jpg'
      },
      {
        name: 'Gandhi Memorial Museum',
        desc: 'Housed in a former palace, the museum holds artifacts from Gandhi’s life, including the cloth he was wearing when he was assassinated.',
        hidden: false,
        image: 'assets/images/places/madurai-gandhi-memorial-museum.jpg'
      },
      {
        name: 'Vandiyur Mariamman Teppakulam',
        desc: 'A large temple tank away from the main temple crowds, striking when filled for the annual Float Festival.',
        hidden: true,
        image: 'assets/images/places/madurai-vandiyur-mariamman-teppakulam.jpg'
      }
    ]
  },
  chennai: {
    name: 'Chennai',
    tamilName: 'சென்னை',
    tagline: 'Where classical music, cinema, and the sea meet',
    heroImage: 'assets/images/districts/chennai-hero.jpg',
    accent: 'gold',
    glyph: 'waves',
    intro: 'Tamil Nadu\'s capital is a city of contrasts: IT parks beside centuries-old temples, film studios beside a Carnatic music season that fills the winter calendar, and one of the longest urban beaches in the country along its edge.',
    highlights: {
      famousFor: 'Marina Beach & Carnatic music',
      culture: 'Margazhi music season',
      food: 'Filter coffee & "meals"',
      arts: 'Bharatanatyam & Tamil cinema',
      heritage: 'Fort St. George, 1644'
    },
    culture: [
      {
        title: 'The Margazhi music season',
        text: 'Every December–January, Chennai hosts one of the world’s largest concentrations of Carnatic music and Bharatanatyam performances, known as the Margazhi or "December Season."'
      },
      {
        title: 'A city built by trade',
        text: 'Chennai grew from a cluster of fishing and weaving villages into a major port city after the British East India Company established Fort St. George here in 1644.'
      }
    ],
    food: [
      {
        name: 'Filter Coffee',
        desc: 'Strong decoction coffee, served in the traditional davara-tumbler set, is a genuine daily ritual across the city.',
        image: 'assets/images/food/chennai-filter-coffee.jpg'
      },
      {
        name: '"Meals"',
        desc: 'A full banana-leaf lunch — rice, sambar, rasam, curries, and payasam — served at everyday "meals" restaurants across the city.',
        image: 'assets/images/food/chennai-meals.jpg'
      },
      {
        name: 'Chettinad Cuisine',
        desc: 'Though native to the Chettinad region, its restaurants and spice-forward dishes have become closely associated with Chennai’s food scene.',
        image: 'assets/images/food/chennai-chettinad-cuisine.jpg'
      }
    ],
    arts: [
      {
        name: 'Bharatanatyam',
        desc: 'Chennai is one of the classical dance form’s major training centers, anchored institutionally by schools such as Kalakshetra, founded in the city in 1936.',
        image: 'assets/images/arts/chennai-bharatanatyam.jpg'
      },
      {
        name: 'Tamil Cinema (Kollywood)',
        desc: 'The Tamil film industry is headquartered in and around Chennai, and has been for most of its history.',
        image: 'assets/images/arts/chennai-tamil-cinema-kollywood.jpg'
      }
    ],
    festivals: [
      {
        name: 'Margazhi (December) Season',
        desc: 'A season-long series of Carnatic music and dance performances (Bharatanatyam among them) across the city’s sabha halls.',
        image: 'assets/images/festivals/chennai-margazhi-december-season.jpg'
      },
      {
        name: 'Kapaleeshwarar Temple Festival',
        desc: 'The Mylapore temple’s annual car festival, known as Panguni Peruvizha, is one of the city’s major traditional celebrations.',
        image: 'assets/images/festivals/chennai-kapaleeshwarar-temple-festival.jpg'
      }
    ],
    history: [
      {
        era: 'Pre-colonial',
        title: 'A cluster of coastal villages',
        text: 'Before European trade, the area was home to fishing and weaving settlements, including Mylapore, one of Chennai’s oldest neighborhoods.'
      },
      {
        era: '1639–1644',
        title: 'Founding of Madraspatnam',
        text: 'The British East India Company acquired the coastal strip in 1639 and built Fort St. George by 1644, the seed of the modern city.'
      },
      {
        era: '1996',
        title: 'Renamed Chennai',
        text: 'The city, long known as Madras, was officially renamed Chennai in 1996.'
      }
    ],
    people: [
      {
        title: 'Rukmini Devi Arundale',
        text: 'A pivotal figure in reviving and codifying Bharatanatyam as a respected classical art form, she founded the Kalakshetra dance academy in Chennai in 1936.'
      },
      {
        title: 'Carnatic musicians and sabha communities',
        text: 'Chennai’s network of sabhas (music halls) and the musicians who perform in them sustain the city’s classical music season each year.'
      }
    ],
    places: [
      {
        name: 'Marina Beach',
        desc: 'One of the longest urban beaches in the country, running along the city’s eastern edge.',
        hidden: false,
        image: 'assets/images/places/chennai-marina-beach.jpg'
      },
      {
        name: 'Fort St. George',
        desc: 'Built in 1644, the first English fortress in India and the origin point of the city.',
        hidden: false,
        image: 'assets/images/places/chennai-fort-st-george.jpg'
      },
      {
        name: 'Kapaleeshwarar Temple',
        desc: 'A Dravidian-style temple at the heart of Mylapore, one of Chennai’s oldest neighborhoods.',
        hidden: false,
        image: 'assets/images/places/chennai-kapaleeshwarar-temple.jpg'
      },
      {
        name: 'San Thome Basilica',
        desc: 'A basilica built, per tradition, over the tomb of St. Thomas the Apostle — a quieter heritage stop near the beach.',
        hidden: true,
        image: 'assets/images/places/chennai-san-thome-basilica.jpg'
      }
    ]
  },
  coimbatore: {
    name: 'Coimbatore',
    tamilName: 'கோயம்புத்தூர்',
    tagline: 'The looms and machines of the Kongu heartland',
    heroImage: 'assets/images/districts/coimbatore-hero.jpg',
    accent: 'green',
    glyph: 'gear',
    intro: 'Known as the "Manchester of South India," Coimbatore built its identity on textile mills and precision engineering, set against the backdrop of the Western Ghats and the road up to Ooty.',
    highlights: {
      famousFor: 'Textile mills & engineering',
      culture: 'Kongu Nadu heritage',
      food: 'Kongunadu-style meals',
      arts: 'Handloom & power-loom weaving',
      heritage: 'Perur Pateeswarar Temple'
    },
    culture: [
      {
        title: 'Kongu Nadu identity',
        text: 'Coimbatore sits within the Kongu region, with its own dialect inflections, farming traditions, and a strong regional identity distinct from other parts of Tamil Nadu.'
      },
      {
        title: 'A mill town at heart',
        text: 'From the early 20th century onward, textile mills reshaped Coimbatore from an agricultural market town into an industrial city.'
      }
    ],
    food: [
      {
        name: 'Kongunadu-style Meals',
        desc: 'Regional Kongu cooking favors robust, spice-forward vegetable and meat dishes distinct from other Tamil regional cuisines.',
        image: 'assets/images/food/coimbatore-kongunadu-style-meals.jpg'
      },
      {
        name: 'Traditional Podi',
        desc: 'Dry spice powders (podi), mixed with rice and ghee, are a Kongu-region staple accompaniment.',
        image: 'assets/images/food/coimbatore-traditional-podi.jpg'
      },
      {
        name: 'Filter Coffee',
        desc: 'As across Tamil Nadu, strong filter coffee is central to Coimbatore’s everyday food culture.',
        image: 'assets/images/food/coimbatore-filter-coffee.jpg'
      }
    ],
    arts: [
      {
        name: 'Handloom & Textile Craft',
        desc: 'Coimbatore’s shift from handloom to power-loom and mill-based textile production defines much of its craft and industrial history.',
        image: 'assets/images/arts/coimbatore-handloom-textile-craft.jpg'
      },
      {
        name: 'Kongu Regional Weaving',
        desc: 'Traditional weaving communities in the wider Kongu region have long supplied cotton textiles to markets across South India.',
        image: 'assets/images/arts/coimbatore-kongu-regional-weaving.jpg'
      }
    ],
    festivals: [
      {
        name: 'Perur Temple Festival',
        desc: 'The annual festival at the ancient Perur Pateeswarar Temple is one of Coimbatore’s major traditional celebrations.',
        image: 'assets/images/festivals/coimbatore-perur-temple-festival.jpg'
      },
      {
        name: 'Pongal',
        desc: 'Celebrated across Coimbatore’s farming communities with the same rituals observed statewide.',
        image: 'assets/images/festivals/coimbatore-pongal.jpg'
      }
    ],
    history: [
      {
        era: 'Ancient & Medieval',
        title: 'Part of the Kongu region',
        text: 'The area was successively part of Chera, Chola, and Vijayanagar-era territories, as with much of the wider Kongu Nadu region.'
      },
      {
        era: 'Early 20th Century',
        title: 'Rise of the textile mills',
        text: 'Coimbatore’s modern industrial identity took shape as textile mills were established from the early 1900s onward.'
      },
      {
        era: 'Present Day',
        title: 'An engineering and industrial hub',
        text: 'Today Coimbatore is known for textile manufacturing, pump and motor engineering, and its educational institutions.'
      }
    ],
    people: [
      {
        title: 'Mill-owning and working families',
        text: 'Coimbatore\'s growth into an industrial city is closely tied to generations of textile mill founders and workers.'
      },
      {
        title: 'Kongu farming communities',
        text: 'The surrounding agricultural communities of the Kongu region have shaped much of the district’s food and cultural traditions.'
      }
    ],
    places: [
      {
        name: 'Perur Pateeswarar Temple',
        desc: 'An ancient Shiva temple on the banks of the Noyyal river, known for its Dravidian architecture.',
        hidden: false,
        image: 'assets/images/places/coimbatore-perur-pateeswarar-temple.jpg'
      },
      {
        name: 'Marudamalai Temple',
        desc: 'A hill temple dedicated to Murugan, offering views over the city.',
        hidden: false,
        image: 'assets/images/places/coimbatore-marudamalai-temple.jpg'
      },
      {
        name: 'Gateway to Ooty',
        desc: 'Coimbatore is the usual starting point for the mountain road up to Ooty in the Nilgiris.',
        hidden: false,
        image: 'assets/images/places/coimbatore-gateway-to-ooty.jpg'
      },
      {
        name: 'Vydehi Falls',
        desc: 'A quieter, less-visited waterfall in the foothills outside the city.',
        hidden: true,
        image: 'assets/images/places/coimbatore-vydehi-falls.jpg'
      }
    ]
  },
  thanjavur: {
    name: 'Thanjavur',
    tamilName: 'தஞ்சாவூர்',
    tagline: 'Rice bowl of Tamil Nadu, cradle of the Cholas',
    heroImage: 'assets/images/districts/thanjavur-hero.jpg',
    accent: 'maroon',
    glyph: 'pot',
    intro: 'Thanjavur is the historic seat of the Chola empire and the heart of the Cauvery delta — a district where a thousand-year-old temple, a palace library, and three living craft traditions all still stand within walking distance of each other.',
    highlights: {
      famousFor: 'Brihadeeswarar Temple',
      culture: 'Cauvery delta & Carnatic music',
      food: 'Temple-town thalis',
      arts: 'Bronze, painting & veena crafts',
      heritage: 'Saraswathi Mahal Library'
    },
    culture: [
      {
        title: 'The Cauvery delta’s heart',
        text: 'Thanjavur district sits in the fertile Cauvery river delta, long known as the "Rice Bowl of Tamil Nadu" for its paddy cultivation.'
      },
      {
        title: 'A center of Carnatic music',
        text: 'Thanjavur’s musical heritage includes the "Tanjore Quartet," four 19th-century brothers credited with shaping much of the modern Bharatanatyam repertoire.'
      }
    ],
    food: [
      {
        name: 'Temple Prasadam Traditions',
        desc: 'Thanjavur’s temples, including the Brihadeeswarar Temple, have long traditions of preparing and distributing vegetarian temple food.',
        image: 'assets/images/food/thanjavur-temple-prasadam-traditions.jpg'
      },
      {
        name: 'Delta-grown Rice',
        desc: 'As the heart of the Cauvery delta, Thanjavur’s rice forms the base of its everyday thalis.',
        image: 'assets/images/food/thanjavur-delta-grown-rice.jpg'
      },
      {
        name: 'Traditional Vegetarian Thali',
        desc: 'A full vegetarian meal on a banana leaf remains the everyday standard across the district.',
        image: 'assets/images/food/thanjavur-traditional-vegetarian-thali.jpg'
      }
    ],
    arts: [
      {
        name: 'Thanjavur Painting',
        desc: 'A GI-tagged art form using gold foil relief work and rich color, traditionally depicting deities and religious themes.',
        image: 'assets/images/arts/thanjavur-painting.jpg'
      },
      {
        name: 'Thanjavur Bronze Casting',
        desc: 'A GI-tagged lost-wax ("cire perdue") bronze casting tradition over a thousand years old, still practiced by the same artisan families.',
        image: 'assets/images/arts/thanjavur-bronze-casting.jpg'
      },
      {
        name: 'Thanjavur Veena',
        desc: 'A GI-tagged craft producing the traditional stringed instrument central to Carnatic music.',
        image: 'assets/images/arts/thanjavur-veena.jpg'
      }
    ],
    festivals: [
      {
        name: 'Brihadeeswarar Temple Festival',
        desc: 'The temple’s annual car festival draws visitors from across the region.',
        image: 'assets/images/festivals/thanjavur-brihadeeswarar-temple-festival.jpg'
      },
      {
        name: 'Pongal',
        desc: 'Celebrated with particular significance across the Cauvery delta’s farming communities.',
        image: 'assets/images/festivals/thanjavur-pongal.jpg'
      }
    ],
    history: [
      {
        era: 'Chola Period',
        title: 'Imperial capital, ~1010 CE',
        text: 'Thanjavur served as the capital of the Chola empire; Raja Raja Chola I completed the Brihadeeswarar Temple around 1010 CE.'
      },
      {
        era: 'Nayak Period',
        title: 'Continued as a royal seat',
        text: 'The Thanjavur Nayaks governed from the city after Chola and later Vijayanagar rule, adding to its palace complex.'
      },
      {
        era: 'Maratha Period',
        title: 'Serfoji II and Saraswathi Mahal',
        text: 'Under Maratha rule, particularly Raja Serfoji II, the Saraswathi Mahal Library was expanded into one of Asia’s oldest manuscript libraries.'
      }
    ],
    people: [
      {
        title: 'Raja Raja Chola I',
        text: 'The Chola emperor who commissioned the Brihadeeswarar Temple, completed around 1010 CE — one of the most significant patrons in Tamil architectural history.'
      },
      {
        title: 'Serfoji II',
        text: 'The Maratha ruler of Thanjavur known for his patronage of the Saraswathi Mahal Library and its manuscript collection.'
      }
    ],
    places: [
      {
        name: 'Brihadeeswarar Temple',
        desc: 'A UNESCO World Heritage Site and one of the great examples of Chola architecture, completed around 1010 CE.',
        hidden: false,
        image: 'assets/images/places/thanjavur-brihadeeswarar-temple.jpg'
      },
      {
        name: 'Thanjavur Maratha Palace',
        desc: 'The royal palace complex of the later Nayak and Maratha rulers of Thanjavur.',
        hidden: false,
        image: 'assets/images/places/thanjavur-maratha-palace.jpg'
      },
      {
        name: 'Saraswathi Mahal Library',
        desc: 'One of Asia’s oldest libraries, holding a significant collection of palm-leaf manuscripts.',
        hidden: false,
        image: 'assets/images/places/thanjavur-saraswathi-mahal-library.jpg'
      },
      {
        name: 'Bronze artisan workshops',
        desc: 'Small workshops around the town still cast bronze using the same lost-wax method used a thousand years ago.',
        hidden: true,
        image: 'assets/images/places/thanjavur-bronze-artisan-workshops.jpg'
      }
    ]
  },
  kanniyakumari: {
    name: 'Kanniyakumari',
    altName: 'Kanyakumari',
    tamilName: 'கன்னியாகுமரி',
    tagline: 'Where the land of India comes to an end',
    heroImage: 'assets/images/districts/kanniyakumari-hero.jpg',
    accent: 'bronze',
    glyph: 'horizon',
    intro: 'At the very tip of mainland India, Kanniyakumari (also spelled Kanyakumari) is where the sun rises and sets over the same stretch of water — a pilgrimage town, a memorial to a turning point in modern Indian history, and a fishing coast all at once.',
    highlights: {
      famousFor: 'Land\'s end of India',
      culture: 'Coastal fishing communities',
      food: 'Fresh seafood & coconut curries',
      arts: 'Seashell & coir crafts',
      heritage: 'Vivekananda Rock Memorial'
    },
    culture: [
      {
        title: 'A meeting point, traditionally',
        text: 'Kanyakumari is traditionally described as the point where the Arabian Sea, Bay of Bengal, and Indian Ocean meet — a meeting of waters as much cultural as geographic.'
      },
      {
        title: 'A coastal fishing economy',
        text: 'Fishing communities along Kanyakumari\'s coast have shaped much of the district\'s food, festivals, and daily rhythm.'
      }
    ],
    food: [
      {
        name: 'Fresh Seafood',
        desc: 'As a coastal district, Kanyakumari’s everyday food leans heavily on fresh catch and coconut-based preparations.',
        image: 'assets/images/food/kanniyakumari-fresh-seafood.jpg'
      },
      {
        name: 'Coconut Curries',
        desc: 'Coconut features heavily in the district’s cooking, reflecting its coastal geography and proximity to Kerala.',
        image: 'assets/images/food/kanniyakumari-coconut-curries.jpg'
      },
      {
        name: 'Banana Chips',
        desc: 'A common regional snack across the southern tip of Tamil Nadu and neighboring Kerala.',
        image: 'assets/images/food/kanniyakumari-banana-chips.jpg'
      }
    ],
    arts: [
      {
        name: 'Seashell Crafts',
        desc: 'Locally made seashell handicrafts are a long-standing small-scale craft tradition in the coastal town.',
        image: 'assets/images/arts/kanniyakumari-seashell-crafts.jpg'
      },
      {
        name: 'Coir Crafts',
        desc: 'Coconut-fiber (coir) craftwork is common along this stretch of the Tamil Nadu coast.',
        image: 'assets/images/arts/kanniyakumari-coir-crafts.jpg'
      }
    ],
    festivals: [
      {
        name: 'Kanyakumari Amman Temple Festival',
        desc: 'The annual festival at the ancient Kumari Amman temple, mentioned in classical Tamil literature, is a major local celebration.',
        image: 'assets/images/festivals/kanniyakumari-kanyakumari-amman-temple-festival.jpg'
      },
      {
        name: 'Pongal',
        desc: 'Celebrated across the district’s farming and fishing communities alike.',
        image: 'assets/images/festivals/kanniyakumari-pongal.jpg'
      }
    ],
    history: [
      {
        era: 'Sangam Age',
        title: 'An ancient port town',
        text: 'Kanyakumari is referenced in classical Sangam-era Tamil literature as a southern coastal and pilgrimage point.'
      },
      {
        era: '1892',
        title: 'Vivekananda\'s meditation',
        text: 'Swami Vivekananda meditated on the rocky islet off Kanyakumari’s coast in 1892, shortly before his address at the 1893 World’s Parliament of Religions in Chicago.'
      },
      {
        era: '1970',
        title: 'The Vivekananda Rock Memorial',
        text: 'Built by public subscription and completed in 1970, the memorial now stands on the meditation site.'
      }
    ],
    people: [
      {
        title: 'Swami Vivekananda',
        text: 'The philosopher-monk meditated at Kanyakumari in 1892; the Vivekananda Rock Memorial now marks the site.'
      },
      {
        title: 'Thiruvalluvar',
        text: 'The celebrated Tamil poet-philosopher traditionally credited with the Thirukkural is honored by the 133-foot statue on the adjacent islet, its height said to represent the text’s 133 chapters.'
      }
    ],
    places: [
      {
        name: 'Vivekananda Rock Memorial',
        desc: 'A memorial on the rocky islet where Swami Vivekananda is said to have meditated in 1892, reached by ferry.',
        hidden: false,
        image: 'assets/images/places/kanniyakumari-vivekananda-rock-memorial.jpg'
      },
      {
        name: 'Thiruvalluvar Statue',
        desc: 'A 133-foot statue of the poet-philosopher Thiruvalluvar, standing on a neighboring islet.',
        hidden: false,
        image: 'assets/images/places/kanniyakumari-thiruvalluvar-statue.jpg'
      },
      {
        name: 'Kanyakumari Amman Temple',
        desc: 'An ancient coastal temple dedicated to the Devi, referenced in classical Tamil literature.',
        hidden: false,
        image: 'assets/images/places/kanniyakumari-kanyakumari-amman-temple.jpg'
      },
      {
        name: 'Padmanabhapuram Palace',
        desc: 'A historic wooden palace just across the district border, associated with the former Travancore kingdom.',
        hidden: true,
        image: 'assets/images/places/kanniyakumari-padmanabhapuram-palace.jpg'
      }
    ]
  }
};

/** Ordered list of currently available district slugs (used for prev/next navigation). */
const DISTRICT_ORDER = Object.keys(DISTRICTS);
