const Training = require("../models/trainingModel.js");

const defaultTraining = [
    {
        "name": "Computer Science BSc",
        "kind": "ba",
        "durationMonths": 36,
        "highSchoolGraduate": true,
        "averageBagrutScore": 85,
        "psychometricScore": 680,
        "costNIS": 70000
    },
    {
        "name": "Data Science MSc",
        "kind": "ma",
        "durationMonths": 24,
        "highSchoolGraduate": true,
        "averageBagrutScore": 90,
        "psychometricScore": 720,
        "costNIS": 50000
    },
    {
        "name": "Physics PhD",
        "kind": "phd",
        "durationMonths": 48,
        "highSchoolGraduate": true,
        "averageBagrutScore": 95,
        "psychometricScore": 750,
        "costNIS": 100000
    },
    {
        "name": "Web Development Certificate",
        "kind": "certificate",
        "durationMonths": 6,
        "highSchoolGraduate": false,
        "averageBagrutScore": null,
        "psychometricScore": null,
        "costNIS": 15000
    },
    {
        "name": "Yoga Teacher Training",
        "kind": "other",
        "durationMonths": 12,
        "highSchoolGraduate": false,
        "averageBagrutScore": null,
        "psychometricScore": null,
        "costNIS": 20000
    },
    {
        "name": "Business Administration MBA",
        "kind": "ma",
        "durationMonths": 18,
        "highSchoolGraduate": true,
        "averageBagrutScore": 80,
        "psychometricScore": 650,
        "costNIS": 60000
    },
    {
        "name": "Electrical Engineering BSc",
        "kind": "ba",
        "durationMonths": 42,
        "highSchoolGraduate": true,
        "averageBagrutScore": 88,
        "psychometricScore": 700,
        "costNIS": 80000
    },
    {
        "name": "Graphic Design Certificate",
        "kind": "certificate",
        "durationMonths": 3,
        "highSchoolGraduate": false,
        "averageBagrutScore": null,
        "psychometricScore": null,
        "costNIS": 8000
    },
    {
        "name": "Psychology MA",
        "kind": "ma",
        "durationMonths": 24,
        "highSchoolGraduate": true,
        "averageBagrutScore": 82,
        "psychometricScore": 660,
        "costNIS": 45000
    },
    {
        "name": "Culinary Arts Diploma",
        "kind": "other",
        "durationMonths": 10,
        "highSchoolGraduate": false,
        "averageBagrutScore": null,
        "psychometricScore": null,
        "costNIS": 18000
    }
]

const defaultProfessions = []

async function addTrainingArr(arr){
    try{
        const result = await Training.insertMany(arr);
        return result;
    } catch (error) {
        console.log("failed to add 'training' data",error);
    }
}