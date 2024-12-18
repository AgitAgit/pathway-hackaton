const express = require("express");
const { addForums, getAllForums } = require("../controllers/forumsController.js");

const router = express.Router();

router.post("/many", addForums);

router.get("/", getAllForums);

module.exports = router;