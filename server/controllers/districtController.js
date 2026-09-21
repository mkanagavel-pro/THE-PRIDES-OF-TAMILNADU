const District = require('../models/District');
const { isDbConnected } = require('../config/db');

const DB_DOWN_MESSAGE = 'Database not connected. Check MONGO_URI in .env and that MongoDB is reachable.';

/** GET /api/districts — lightweight list for menus/grids. */
async function getAllDistricts(req, res) {
  if (!isDbConnected()) return res.status(503).json({ error: DB_DOWN_MESSAGE });

  try {
    const districts = await District.find(
      {},
      'slug name tamilName tagline accent glyph heroImage highlights festivals people places'
    ).sort({ name: 1 });
    res.json(districts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch districts.', details: err.message });
  }
}

/** GET /api/districts/:slug — full detail for the District page. */
async function getDistrictBySlug(req, res) {
  if (!isDbConnected()) return res.status(503).json({ error: DB_DOWN_MESSAGE });

  try {
    const district = await District.findOne({ slug: req.params.slug.toLowerCase() });
    if (!district) {
      return res.status(404).json({ error: `No district found for slug "${req.params.slug}".` });
    }
    res.json(district);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch district.', details: err.message });
  }
}

module.exports = { getAllDistricts, getDistrictBySlug };
