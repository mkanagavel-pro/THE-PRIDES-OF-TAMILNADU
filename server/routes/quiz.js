const express = require('express');
const router = express.Router();
const { getAllQuizQuestions } = require('../controllers/quizController');

router.get('/', getAllQuizQuestions);

module.exports = router;
