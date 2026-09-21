const express = require('express');
const router = express.Router();
const { getAllFacts } = require('../controllers/factController');

router.get('/', getAllFacts);

module.exports = router;
