/**
 * TPOTN — server/models/Fact.js
 * Mirrors TPOTN_FACTS from public/js/data.js (the "Did You Know?" pool).
 */

const mongoose = require('mongoose');

const factSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Fact', factSchema);
