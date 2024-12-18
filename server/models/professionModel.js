const mongoose = require("mongoose");

//need to add post count or post ids to the user, followers and following.
const professionSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    categories: [
        {
            type: String
        }
    ],
    tags: [
        {
            type:String
        }
    ],
    averageSalary:{
        type:Number
    },
    averageWeeklyHours:{
        type:Number
    },
    requiredTrainingIds: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Training",
            required:false
        }
    ],
    abilities:[
        {
            type: { ability:String, description:String }
        }
    ],
    skills:[
        {
            type: { skill:String, description:String }
        }
    ],
    personality:[
        {
            type: { personality:String, description:String }
        }
    ]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Profession", professionSchema);
