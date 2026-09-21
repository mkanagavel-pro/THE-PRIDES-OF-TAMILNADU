# TPOTN — The Prides of Tamil Nadu

An interactive digital platform for exploring Tamil Nadu's living culture —
its people, language, food, arts, festivals, history, and everyday life —
district by district, rather than as a static list of tourist spots.

> Tamil Nadu's pride is not only in its places. It is in its people,
> language, food, traditions, arts, history, and way of life.

## Current status

**Step 7 complete: every page now runs on real data from the API.**

- Design system (`public/css/global.css`, `public/css/components.css`)
- Reusable navbar + footer markup (`public/index.html`)
- Home page, Explore page (interactive 38-district map), District Details
  template, all 7 category pages, and the Discover page.
- Express + MongoDB backend (`server/`) — see `server/README.md`.
- **Every page fetches its content from the API** (`GET /api/districts`,
  `/api/districts/:slug`, `/api/categories/:key`, `/api/facts`,
  `/api/quiz`) instead of reading static `public/js/*.js` files. Those
  static files (`data.js`, `districts-data.js`, `categories-data.js`)
  are no longer loaded by any page — they stay in the repo only as the
  source the seed script (`server/seed/data/`) was generated from.
  Requires the backend running (`npm start`) with a seeded database
  (`npm run seed`) — the frontend has no fallback if the server is down,
  by design, to keep this step simple.

Tested end-to-end with a running server (mocked database layer, real
seed-shaped data, real HTTP) rather than just by reading the code: every
page — Home, Explore, District, Culture, Discover — was loaded and its
real fetch calls hit real running routes, confirmed correct data
rendered in each case.

## Adding real images

Every district and category now has named image slots — see
**`public/assets/images/IMAGE_GUIDE.md`** for the exact filename, folder,
and a one-line description of what each of the 80 slots should show.

**Run `npm run seed` once now** — this update added `heroImage` and
`image` fields to the district/category data, and your existing
database was seeded before that, so it doesn't have these fields yet.
After that one reseed, adding image files is just: drop a correctly
named file into the matching `public/assets/images/<folder>/` and
refresh the page — no reseed needed for that part, since the path
already exists in the database and the file is served as a plain static
asset. No missing file ever breaks a page — it just falls back to the
current gradient + icon placeholder.

## Running it right now

The frontend now fetches its content from the API, so the backend needs
to be running with a seeded database:

```bash
npm install
npm run seed    # loads content into MongoDB — see server/README.md
npm start       # serves the site + API at http://localhost:5000
```

Then open `http://localhost:5000`. Opening `public/index.html` directly
in a browser (no server) will no longer show content — pages fetch from
`/api/*`, which only exists when the Express server is running.

## Folder structure

```
TPOTN/
├── public/          # everything the browser loads
│   ├── index.html
│   ├── pages/       # one HTML file per section (built one at a time)
│   ├── css/         # global.css + components.css + css/pages/*.css
│   ├── js/          # main.js + components.js + data.js + js/pages/*.js
│   ├── assets/      # images, icons, fonts
│   └── svg/         # kolam pattern, Tamil Nadu map artwork
├── server/          # Express app (not built yet)
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── controllers/
├── .env
├── .gitignore
└── package.json
```

## Tech direction

HTML, CSS, JavaScript on the frontend. Node.js, Express, and MongoDB now
power a read-only API (`server/`) — see `server/README.md` — but the
frontend doesn't call it yet. Kept deliberately simple — no frameworks
or build tools unless a real need comes up.

## Roadmap (one step at a time)

1. ✅ Frontend foundation + Home Page
2. ✅ Explore page (interactive Tamil Nadu map)
3. ✅ District page template + 6 seed districts
4. ✅ Category pages — Culture, Food, Arts, Festivals, History, People, Places
5. ✅ Discover page (facts, quiz, random-district explorer)
6. ✅ Express + MongoDB backend (read-only API, not yet wired to the frontend)
7. ✅ Wire pages to real data — every page now fetches from the API
8. ✅ Image slots — 80 named placeholders (heroes + food/arts/festivals/places), graceful fallback if missing
"# THE-PRIDES-OF-TAMILNADU" 
