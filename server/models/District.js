/**
 * TPOTN — server/models/District.js
 * Mirrors the shape of public/js/districts-data.js so seeding and,
 * later, the frontend fetch layer don't need to reshape anything.
 */

const mongoose = require('mongoose');

const highlightsSchema = new mongoose.Schema(
  {
    famousFor: { type: String, required: true },
    culture: { type: String, required: true },
    food: { type: String, required: true },
    arts: { type: String, required: true },
    heritage: { type: String, required: true }
  },
  { _id: false }
);

const titleTextSchema = new mongoose.Schema(
  { title: { type: String, required: true }, text: { type: String, required: true } },
  { _id: false }
);

const nameDescSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String }
  },
  { _id: false }
);

const historyEntrySchema = new mongoose.Schema(
  {
    era: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true }
  },
  { _id: false }
);

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    hidden: { type: Boolean, default: false },
    image: { type: String }
  },
  { _id: false }
);

const districtSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    name: { type: String, required: true },
    tamilName: { type: String, required: true },
    altName: { type: String },
    tagline: { type: String, required: true },
    accent: { type: String, required: true },
    glyph: { type: String, required: true },
    heroImage: { type: String },
    intro: { type: String, required: true },
    highlights: { type: highlightsSchema, required: true },
    culture: { type: [titleTextSchema], default: [] },
    food: { type: [nameDescSchema], default: [] },
    arts: { type: [nameDescSchema], default: [] },
    festivals: { type: [nameDescSchema], default: [] },
    history: { type: [historyEntrySchema], default: [] },
    people: { type: [titleTextSchema], default: [] },
    places: { type: [placeSchema], default: [] }
  },
  { timestamps: true }
);

module.exports = mongoose.model('District', districtSchema);
