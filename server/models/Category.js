/**
 * TPOTN — server/models/Category.js
 * Mirrors the shape of public/js/categories-data.js.
 */

const mongoose = require('mongoose');

const overviewItemSchema = new mongoose.Schema(
  { title: { type: String, required: true }, text: { type: String, required: true } },
  { _id: false }
);

const categorySchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    name: { type: String, required: true },
    tamilName: { type: String, required: true },
    tagline: { type: String, required: true },
    accent: { type: String, required: true },
    glyph: { type: String, required: true },
    heroImage: { type: String },
    intro: { type: String, required: true },
    overview: { type: [overviewItemSchema], default: [] },
    districtField: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
