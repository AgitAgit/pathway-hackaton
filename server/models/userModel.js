const mongoose = require("mongoose");

//need to add post count or post ids to the user, followers and following.
const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: false,
      unique: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    plainPassword: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    role: {
      type: String,
      required: false,
      default: 'user'
    },
    profileFilters: {
      //need to fill this
    },
    profilePic: {
      type: String,
      required: false,
      default: "https://loremflickr.com/500/500?lock=8792450353592873",
    },
    savedPosts: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Post",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
