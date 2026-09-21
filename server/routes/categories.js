const express = require('express');
const router = express.Router();
const { getAllCategories, getCategoryByKey } = require('../controllers/categoryController');

router.get('/', getAllCategories);
router.get('/:key', getCategoryByKey);

module.exports = router;
