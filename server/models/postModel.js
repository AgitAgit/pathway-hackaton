const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    parentForumId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Forum",
        required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true
    },
    content: {
      type: String,
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    ],
    commentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Post", postSchema);