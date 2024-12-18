const Post = require("../models/postModel.js");
const User = require("../models/userModel.js");

async function addPosts(req, res, next) {
  try {
    const { posts } = req.body;
    const response = await Post.insertMany(posts);
    res.json(response);
  } catch (error) {
    next(error);
  }
}

// change to toggleLikePost?
async function toggleLikePost(req, res, next) {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.likedBy.includes(req.user.userId)) {
      post.likedBy.pull(req.user.userId);
      const updatedPost = await post.save();
      res.json({
        message: "You already liked this post. Like will be removed.",
        updatedPost,
      });
    } else {
      post.likedBy.push(req.user.userId);
      const updatedPost = await post.save(); // change to find and update
      res.json({ message: "Post liked successfully", post: updatedPost });
    }
  } catch (error) {
    next(error);
  }
}

async function getAllPosts(req, res, next) {
  try {
      // const limit = req.query.limit || 18;
      // const offset = req.query.offset || 0;
      const posts = await Post.find();
      //   .skip(offset)
      //   .limit(limit)
      //   .populate({
        //     path: "commentIds",
        //     populate: { path: "authorId", select: "username profilePic" },
        //   })
        //   .populate("authorId", "username profilePic");
        res.json(posts);
    } catch (error) {
        next(error);
  }
}

async function getPostById(req, res, next) {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId)
        // await post.populate({
            //   path: "commentIds",
            //   populate: { path: "authorId", select: "username profilePic" },
    // });
    res.json(post);
  } catch (error) {
      next(error);
    }
}

async function deletePost(req, res, next) {
    try {
        const { postId } = req.params;
        const result = await Post.deleteOne({ _id: postId });
        res.json({ message: result });
    } catch (error) {
    next(error);
}
}

module.exports = {
    addPosts,
    getAllPosts,
    getPostById,
    toggleLikePost,
    //savePost,
    deletePost,
};


// async function savePost(req, res, next) {
//   try {
//     const { postId } = req.params;
//     const post = await Post.findById(postId);

//     const user = await User.findById(req.user.userId);

//     if (!post) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     if (user.savedPosts.includes(postId)) {
//       user.savedPosts.pull(postId);
//       const updatedUser = await user.save();
//       return res.json({
//         message: "You already saved this post. Unsaving...",
//         updatedUser,
//       });
//     }

//     user.savedPosts.push(postId);
//     const updatedUser = await user.save(); // change to find and update

//     return res.json({ message: "Post saved successfully", user: updatedUser });
//   } catch (error) {
//     next(error);
//   }
// }