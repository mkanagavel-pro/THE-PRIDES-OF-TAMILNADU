const express = require('express');
const router = express.Router();
const { getAllDistricts, getDistrictBySlug } = require('../controllers/districtController');

router.get('/', getAllDistricts);
router.get('/:slug', getDistrictBySlug);

module.exports = router;
