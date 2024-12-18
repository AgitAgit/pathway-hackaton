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
      required: false,
      default: 'user'
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
    wantedSalary: {
      type: Number
    },
    wantedWeeklyHours: {
      type: Number
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