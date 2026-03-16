const express = require('express');
const router = express.Router();
const { getHousePrediction } = require('../controller/predictController');

// POST request to /api/houses/predict
router.post('api/houses/predict', getHousePrediction);

module.exports = router;