const Profession = require('../models/professionModel.js');
const Training = require('../models/trainingModel.js');

module.exports = { addProfessions, getProfessions, getProfessionsMinimal, addTrainingToProfessionByNames }
//add profession
async function addProfessions(req, res, next) {
    try {
        const { professions } = req.body;
        const result = await Profession.insertMany(professions);
        res.json({ resultOfInsert: result });
    } catch (error) {
        next(error);
    }
}

//get professions
//get many(default 1000? all?)
async function getProfessions(req, res, next) {
    try {
        const professions = await Profession.find().populate('requiredTrainingIds');
        res.json(professions);
    } catch (error) {
        next(error);
    }
}

async function getProfessionsMinimal(req, res, next) {
    try {
        const professions = await Profession.find({},{name:1, _id:1});
        res.json(professions);
    } catch (error) {
        next(error);
    }
}


//get by id
//update profession
async function addTrainingToProfessionByNames(req, res, next) {
    try {
        const { professionName, trainingName } = req.body;
        const profession = await Profession.findOne({name:professionName});
        const training = await Training.findOne({name:trainingName});
        if(profession.requiredTrainingIds.includes(training._id)){
            res.json({message:"can not add duplicates..."});
        } 
        else {
            profession.requiredTrainingIds.push(training._id);
        }
        await profession.save();
        res.json({ pro:profession, tra:training});
    } catch (error) {
        next(error);
    }
}
//delete profession
