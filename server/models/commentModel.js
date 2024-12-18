// const mongoose = require("mongoose");

// const commentSchema = new mongoose.Schema(
//   {
//     parentPostId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Post",
//       required: true,
//     },
//     commentContent: {
//       type: String,
//       required: true,
//     },
//     likedBy: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: false,
//       },
//     ],
//     authorId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// commentSchema.virtual("likesCount").get(function () {
//   return this.likedBy.length;
// });

// commentSchema.set("toJSON", {
//   virtuals: true,
// });

// module.exports = mongoose.model("Comment", commentSchema);
