const Forum = require("../models/forumModel.js");

module.exports = { addForums, getAllForums }

async function addForums(req, res, next){
    try{
        const { forums } = req.body;
        const result = await Forum.insertMany(forums);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

async function getAllForums(req, res, next){
    try {
        const forums = await Forum.find();
        res.json(forums);
    } catch (error) {
        next(error);
    }
}