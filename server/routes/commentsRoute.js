const express = require("express");
const {
  getAllComments,
  addComments
} = require("../controllers/commentsController.js");
// const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.get('/', getAllComments);

router.post('/', addComments);

// router.post("/:postId", authUser, addComment);

// router.get("/:postId", getPostComments);

// router.post("/like/:commentId", authUser, toggleCommentLike);

// router.put("/:commentId", authUser, updateComment);

// router.delete("/:commentId", authUser, deleteComment);

module.exports = router;
