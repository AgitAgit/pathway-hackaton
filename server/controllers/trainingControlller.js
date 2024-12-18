const Training = require('../models/trainingModel.js');

module.exports = { getAllTraining, getAllTrainingMinimal };

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