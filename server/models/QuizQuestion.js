/**
 * TPOTN — server/models/QuizQuestion.js
 * Mirrors TPOTN_QUIZ from public/js/data.js (the Discover-page quiz bank).
 */

const mongoose = require('mongoose');

const quizQuestionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length === 4,
        message: 'A quiz question must have exactly 4 options.'
      }
    },
    correct: { type: Number, required: true, min: 0, max: 3 },
    explanation: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('QuizQuestion', quizQuestionSchema);
