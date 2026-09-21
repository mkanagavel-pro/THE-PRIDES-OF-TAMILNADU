const Fact = require('../models/Fact');
const { isDbConnected } = require('../config/db');

const DB_DOWN_MESSAGE = 'Database not connected. Check MONGO_URI in .env and that MongoDB is reachable.';

/** GET /api/facts — the full "Did You Know?" pool (client picks a random subset). */
async function getAllFacts(req, res) {
  if (!isDbConnected()) return res.status(503).json({ error: DB_DOWN_MESSAGE });

  try {
    const facts = await Fact.find({}, 'question answer');
    res.json(facts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch facts.', details: err.message });
  }
}

module.exports = { getAllFacts };
