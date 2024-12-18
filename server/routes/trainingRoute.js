const express = require('express');
const { getAllTraining, getAllTrainingMinimal, addTraining } = require('../controllers/trainingControlller.js');

const router = express.Router();

router.get('/', getAllTraining);

router.get('/minimal', getAllTrainingMinimal);

router.post('/', addTraining);

module.exports = router;