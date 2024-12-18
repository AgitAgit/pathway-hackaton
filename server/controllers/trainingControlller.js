const Training = require('../models/trainingModel.js');

module.exports = { getAllTraining, getAllTrainingMinimal };

async function addTraining(req, res, next){
    try{
        const { training } = req.body;
        const result = await Training.insertOne(training);
        res.json(result);
    } catch (error) {
        next(error)
    }
}

async function getAllTraining(req, res, next){
    try{
        const training = await Training.find();
        res.json(training);
    } catch (error){
        next(error);
    }
}

async function getAllTrainingMinimal(req, res, next){
    try{
        const training = await Training.find({}, { name: 1, _id: 1});
        res.json(training);
    } catch (error){
        next(error);
    }
}

// try{

// } catch (error){
//     next(error);
// }