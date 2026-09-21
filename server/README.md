# TPOTN Backend

A small read-only JSON API sitting alongside the existing static site.
**The frontend does not call this yet** — `public/` still runs entirely
off `public/js/*.js`, exactly as before. This is the next layer, built
independently so nothing already shipped could break.

## Setup

```bash
npm install
cp .env .env   # already present — just edit MONGO_URI
```

Edit `.env`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/tpotn        # local
# or
MONGO_URI=mongodb+srv://<user>:<pass>@<cluster>/tpotn?retryWrites=true&w=majority   # Atlas
```

Either works with no code changes — `server/config/db.js` just connects
to whatever `MONGO_URI` points to.

## Seed the database

```bash
npm run seed
```

Loads districts, categories, facts, and quiz questions from
`server/seed/data/*.js` (which mirror `public/js/districts-data.js`,
`categories-data.js`, and `data.js`) into MongoDB. Safe to re-run — it
clears each collection first.

## Run the server

```bash
npm start        # node server/server.js
npm run dev       # nodemon, auto-restarts on file changes
```

Serves the static site at `http://localhost:5000/` exactly as before,
plus:

| Route | Returns |
|---|---|
| `GET /api/health` | `{ status, database }` — quick connectivity check |
| `GET /api/districts` | All districts (light fields, for lists/menus) |
| `GET /api/districts/:slug` | One district, full detail |
| `GET /api/categories` | All categories (light fields) |
| `GET /api/categories/:key` | One category, full detail |
| `GET /api/facts` | The full "Did You Know?" pool |
| `GET /api/quiz` | The full quiz question bank |

## If MongoDB isn't running or MONGO_URI is wrong

The server still starts and serves the static site normally — a broken
or missing database only affects the `/api/*` routes, which respond
`503 { error: "Database not connected..." }` instead of hanging or
crashing the whole app. Check `/api/health` first if something seems
off.

## What's not done yet

- The frontend pages still read from `public/js/*.js`, not this API.
  Wiring them up is the next step, on purpose — keeps each layer
  independently testable.
- No write/auth routes (POST/PUT/DELETE) — read-only for now, matching
  where the frontend actually is.
