/**
 * TPOTN — server/seed/seed.js
 * Populates MongoDB from the data in server/seed/data/*.js (which is
 * itself derived from the frontend's public/js/*.js content — see each
 * file's header comment). Safe to re-run: it clears each collection
 * before inserting, so it always leaves the DB matching this data.
 *
 * Usage:
 *   npm run seed
 */

require('dotenv').config();
const mongoose = require('mongoose');

const District = require('../models/District');
const Category = require('../models/Category');
const Fact = require('../models/Fact');
const QuizQuestion = require('../models/QuizQuestion');
const { explainConnectionError } = require('../config/db');

const districtsData = require('./data/districts');
const categoriesData = require('./data/categories');
const factsData = require('./data/facts');
const quizData = require('./data/quiz');

async function seed() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('[seed] MONGO_URI is not set in .env — nothing to connect to. Aborting.');
    process.exit(1);
  }

  console.log('[seed] Connecting to', uri.replace(/\/\/.*@/, '//<credentials>@'));

  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
    console.log('[seed] Connected.');

    // Districts — object keyed by slug -> array of documents with slug attached.
    const districtDocs = Object.entries(districtsData).map(([slug, d]) => ({ slug, ...d }));
    await District.deleteMany({});
    await District.insertMany(districtDocs);
    console.log(`[seed] Districts: inserted ${districtDocs.length} (${districtDocs.map((d) => d.slug).join(', ')})`);

    // Categories — object keyed by category key -> array of documents with key attached.
    const categoryDocs = Object.entries(categoriesData).map(([key, c]) => ({ key, ...c }));
    await Category.deleteMany({});
    await Category.insertMany(categoryDocs);
    console.log(`[seed] Categories: inserted ${categoryDocs.length} (${categoryDocs.map((c) => c.key).join(', ')})`);

    // Facts
    await Fact.deleteMany({});
    await Fact.insertMany(factsData);
    console.log(`[seed] Facts: inserted ${factsData.length}`);

    // Quiz questions
    await QuizQuestion.deleteMany({});
    await QuizQuestion.insertMany(quizData);
    console.log(`[seed] Quiz questions: inserted ${quizData.length}`);

    console.log('[seed] Done.');
  } catch (err) {
    console.error('[seed] Failed:', err.message);
    const hint = explainConnectionError(err);
    console.error('[seed] Hint:', hint || 'Check that MONGO_URI in .env points to a running, reachable MongoDB.');
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect().catch(() => {});
  }
}

seed().catch((err) => {
  console.error('[seed] Unexpected error:', err.message);
  process.exit(1);
});
