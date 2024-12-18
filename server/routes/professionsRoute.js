const express = require("express");
const { addProfessions, getProfessions } = require("../controllers/professionsController.js");

const router = express.Router();

module.exports = router;

//add auth

//add profession
router.post("/many", addProfessions);

//get professions
//get many(default 1000?)
router.get("/", getProfessions);
//get by id
//get by name
//update profession
//delete profession