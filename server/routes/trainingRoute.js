const express = require('express');
const { getAllTraining, getAllTrainingMinimal } = require('../controllers/trainingControlller.js');

const router = express.Router();

router.get('/', getAllTraining);

router.get('/minimal', getAllTrainingMinimal);

module.exports = router;