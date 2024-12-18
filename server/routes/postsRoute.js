const express = require("express");

const {
  addPosts,
  getAllPosts,
  getPostById,
  toggleLikePost,
  //savePost,
  deletePost
} = require("../controllers/postsController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

// router.use("/", authUser);

router.get("/", getAllPosts);

router.get("/:postId", getPostById);

router.post("/", addPosts);

router.post("/:postId/like", toggleLikePost);

// router.post("/:postId/save", savePost);

router.delete("/:postId", deletePost);

module.exports = router;
