// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//     postImageUrl: {
//       type: String,
//       required: false,
//       default: "https://loremflickr.com/500/500?lock=8792450353592873",
//     },
//     authorId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     likedBy: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: false,
//       },
//     ],
//     commentIds: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment",
//         required: false,
//       },
//     ],
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// postSchema.virtual("likesCount").get(function () {
//   return this.likedBy.length;
// });

// postSchema.set("toJSON", {
//   virtuals: true,
// });

// module.exports = mongoose.model("Post", postSchema);
