const express = require("express");
const { addProfessions, getProfessions, getProfessionsMinimal, addTrainingToProfessionByNames } = require("../controllers/professionsController.js");

const router = express.Router();

module.exports = router;

//add auth

//add profession
router.post("/many", addProfessions);

//get professions
//get many(default 1000?)
router.get("/", getProfessions);
router.get("/minimal", getProfessionsMinimal);
//get by id
//get by name

//update profession
router.patch('/',(req, res, next) =>{
    // console.log("test test test===============================================");
    next();
},addTrainingToProfessionByNames)
//delete profession