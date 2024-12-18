const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    kind: {
        type: String,
        enum: ["ba", "ma", "phd", "certificate", "other"],
        required: true
    },
    durationMonths: {
        type: Number,
        required: false
    },
    highSchoolGraduate: {
        type: Boolean,
        required: false
    },
    averageBagrutScore: {
        type: Number,
        required: false
    },
    psychometricScore: {
        type: Number,
        required: false
    },
    costNIS: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model("Training", trainingSchema);
