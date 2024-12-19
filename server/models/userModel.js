const mongoose = require("mongoose");

//need to add post count or post ids to the user, followers and following.
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    age: {
      type: Number
    },
    plainPassword: {
      type: String,
      required: false
    },
    role: {
      type: String,
      enum: ["משתמש", "מנטור", "developer", "מומחה"],
      required: false,
      default: 'משתמש'
    },
    highSchoolGraduate: {
      type: Boolean,
      required: false,
      default: true
    },
    averageBagrutScore: {
      type: Number,
      required: false,
      default: 75
    },
    psychometricScore: {
      type: Number,
      required: false,
      default: 580
    },
    wantedSalary: {
      type: Number,
      default:8000
    },
    wantedWeeklyHours: {
      type: Number,
      default:40
    },
    personality: [
      {
        type: { personality: String, description: String }
      }
    ],
    skills:[
      {
          type: { skill:String, description:String }
      }
    ],
    abilities:[
      {
          type: { ability:String, description:String }
      }
    ],
    training: [
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:"Training",
          required:false
      }
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);


// profilePic: {
//   type: String,
//   required: false,
//   default: "https://loremflickr.com/500/500?lock=8792450353592873",
// },