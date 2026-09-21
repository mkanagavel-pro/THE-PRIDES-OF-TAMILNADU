/**
 * TPOTN — server/server.js
 *
 * Serves the existing static frontend (public/) exactly as before, and
 * adds a small read-only JSON API under /api for districts, categories,
 * facts, and quiz questions. The frontend does NOT call this API yet —
 * that's the next step ("wire pages to real data"). For now this runs
 * independently, seeded from the same content already shipped in
 * public/js/*.js.
 *
 * Static frontend keeps working even if MongoDB is unreachable — see
 * server/config/db.js for why.
 */

const path = require('path');
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { connectDB, isDbConnected } = require('./config/db');

const districtsRouter = require('./routes/districts');
const categoriesRouter = require('./routes/categories');
const factsRouter = require('./routes/facts');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ---- Static frontend (unchanged) ------------------------------------
app.use(express.static(path.join(__dirname, '..', 'public')));

// ---- API -------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', database: isDbConnected() ? 'connected' : 'disconnected' });
});

app.use('/api/districts', districtsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/facts', factsRouter);
app.use('/api/quiz', quizRouter);

app.use('/api', (req, res) => {
  res.status(404).json({ error: `No API route matches ${req.method} ${req.originalUrl}` });
});

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`[server] TPOTN running at http://localhost:${PORT}`);
    console.log(`[server] Database: ${isDbConnected() ? 'connected' : 'NOT connected (static site still works; /api/* will return 503)'}`);
  });
}

start();

module.exports = app;
