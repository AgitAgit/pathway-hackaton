const Comment = require("../models/commentModel.js");
const Post = require("../models/postModel.js");
const User = require("../models/userModel.js");

module.exports = { getAllComments, addComments }

async function getAllComments(req, res, next) {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        next(error)
    }
}

async function addComments(req, res, next) {
    try {
        const { postName, username, comments } = req.body;
        const post = await Post.findOne({ name: postName });
        const user = await User.findOne({ username: username });
        comments.forEach(comment => {
            comment.parentPostId = post._id;
            comment.authorId = user._id;
        });
        const response = await Comment.insertMany(comments);
        response.forEach(newComment => {
            post.commentIds.push(newComment._id);
        })
        const result = await post.save();
        res.json(result, response);
    } catch (error) {
        next(error);
    }
}


// //path params:postId
// //query params:none
// //example request body:none
// /*example response: { {
//     "postId": *entered post id*,
//     "comments": [*selected post comments*]
//     }}*/
// async function getPostComments(req, res, next) {
//   try {
//     const postId = req.params.postId;
//     const comments = await Comment.find({ parentPostId: postId });

//     res.json({ postId: postId, comments: comments });
//   } catch (error) {
//     next(error);
//   }
// }

// //path params:none
// //query params:none
// /*example request body:{
//   "parentPostId":"674444e4810707ebc8505bb2",
//   "content": "test3",
//   "authorId":"67432e35d9cabb6b21047e40"
//   }*/
// /*example response:{
//   "yourComment": {
//     "parentPostId": "674444e4810707ebc8505bb2",
//     "content": "test3",
//     "authorId": "67432e35d9cabb6b21047e40",
//         "_id": "674466c3ab88a86725c6c0a8",
//         "__v": 0
//         },
//         "parentPost":*post data*
//         }*/

// async function addComment(req, res, next) {
//   try {
//     const { postId } = req.params;
//     console.log(postId);
//     const { content } = req.body;

//     const comment = new Comment({
//       parentPostId: postId,
//       commentContent: content,
//       authorId: req.user.userId,
//     });

//     const response = await comment.save();

//     const updateResult = await Post.findOneAndUpdate(
//       { _id: postId },
//       { $push: { commentIds: response._id } }
//     );

//     res.json({
//       yourComment: response,
//       parentPost: updateResult,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// async function toggleCommentLike(req, res, next) {
//   try {
//     const { userId } = req.user;
//     const { commentId } = req.params; //the id of the comment to update
//     //check if the user likes the comment
//     let updateResult;
//     let textMessage;
//     const comment = await Comment.findOne({ _id: commentId }); //need to test this...
//     const likes = comment.likedBy.includes(userId);
//     console.log("commentsController.toggleCommentLike likes says:", likes);
//     if (likes) {
//       textMessage =
//         "The user already likes this comment. The like will be removed";
//       updateResult = await Comment.findOneAndUpdate(
//         { _id: commentId },
//         { $pull: { likedBy: userId } }
//       );
//     } else {
//       textMessage = "Liked comment successfully";
//       updateResult = await Comment.findOneAndUpdate(
//         { _id: commentId },
//         { $push: { likedBy: userId } }
//       );
//     }
//     res.json({ textMessage, message: updateResult });
//   } catch (error) {
//     next(error);
//   }
// }

// async function updateComment(req, res, next) {
//   try {
//     const { userId } = req.user;
//     const { commentId } = req.params;
//     const { content } = req.body;
//     const comment = await Comment.findById(commentId);
//     const existingUser = await User.findById(userId);
//     if (!existingUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (comment.authorId.toString() !== userId) {
//       return res.status(404).json({ message: "Not this users comment" });
//     }

//     comment.commentContent = content;
//     const updatedComment = await comment.save();

//     res
//       .status(201)
//       .json({ message: "Comment updated successfully!", updatedComment });
//   } catch (error) {
//     next(error);
//   }
// }

// async function deleteComment(req, res, next) {
//   try {
//     const { commentId } = req.params;
//     if (!commentId) {
//       return res.status(400).json({ message: "Undefined/missing comment id" });
//     }
//     const deletedComment = await Comment.deleteOne({ _id: commentId });
//     if (deletedComment.deletedCount === 0) {
//       return res.status(400).json({ message: "Comment doesn't exist" });
//     }
//     return res.status(200).json({
//       message: "Message deleted successfully",
//       comment: deletedComment,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// module.exports = {
//   getPostComments,
//   addComment,
//   toggleCommentLike,
//   updateComment,
//   deleteComment,
// };
