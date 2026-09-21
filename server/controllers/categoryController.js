const Category = require('../models/Category');
const { isDbConnected } = require('../config/db');

const DB_DOWN_MESSAGE = 'Database not connected. Check MONGO_URI in .env and that MongoDB is reachable.';

/** GET /api/categories — list of all categories (Culture, Food, etc.). */
async function getAllCategories(req, res) {
  if (!isDbConnected()) return res.status(503).json({ error: DB_DOWN_MESSAGE });

  try {
    const categories = await Category.find({}, 'key name tamilName tagline accent glyph heroImage').sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories.', details: err.message });
  }
}

/** GET /api/categories/:key — full detail for a category page. */
async function getCategoryByKey(req, res) {
  if (!isDbConnected()) return res.status(503).json({ error: DB_DOWN_MESSAGE });

  try {
    const category = await Category.findOne({ key: req.params.key.toLowerCase() });
    if (!category) {
      return res.status(404).json({ error: `No category found for key "${req.params.key}".` });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch category.', details: err.message });
  }
}

module.exports = { getAllCategories, getCategoryByKey };
