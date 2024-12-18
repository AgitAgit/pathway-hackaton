const Profession = require('../models/professionModel.js');
const Training = require('../models/trainingModel.js');

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
//get by id
//update profession
async function addTrainingToProfessionByNames(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
//delete profession

module.exports = { addProfessions, getProfessions }