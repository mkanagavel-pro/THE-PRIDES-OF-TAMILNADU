const QuizQuestion = require('../models/QuizQuestion');
const { isDbConnected } = require('../config/db');

const DB_DOWN_MESSAGE = 'Database not connected. Check MONGO_URI in .env and that MongoDB is reachable.';

/** GET /api/quiz — the full quiz question bank (client picks a random round). */
async function getAllQuizQuestions(req, res) {
  if (!isDbConnected()) return res.status(503).json({ error: DB_DOWN_MESSAGE });

  try {
    const questions = await QuizQuestion.find({}, 'question options correct explanation');
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quiz questions.', details: err.message });
  }
}

module.exports = { getAllQuizQuestions };
