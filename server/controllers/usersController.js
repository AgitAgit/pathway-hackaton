const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");
const Post = require("../models/postModel.js");

const secretKey = "secretKey";

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    next(error);
  }
}

async function getUserByUsername(req, res, next){
  try {
    const { username } = req.params;
    const user = await User.findOne({ username: username});
    res.json({ message: { foundUser: user } });
  } catch (error) {
    next(error);
  }
}

async function getUserData(req, res, next) {
  try {
    const userId = req.params.id ? req.params.id : req.user.userId;

    const user = await User.findById(userId);

    const userPosts = await Post.find({ authorId: userId });
    const followers = await Follower.countDocuments({ userId });
    const following = await Follower.countDocuments({ followerId: userId });

    const userPostData = userPosts.map((post) => ({
      _id: post._id,
      postImageUrl: post.postImageUrl,
    }));

    res.json({ user, Posts: userPostData, followers, following });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function addUser(req, res, next) {
  try {
    const { displayName, username, password, email, role, profilePic } =
      req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({
      displayName,
      username,
      password: hashedPass,
      email,
      role,
      profilePic,
    });
    const newUser = await user.save();
    res.status(201).json({ mongoMessage: newUser });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body; //extract uname and pword from the req
    if (!username || !password)
      return res
        .status(400)
        .json({ message: "username and password are required..." });
    const storedUser = await User.findOne({ username: username }); //check if the user exists and extract it from the db
    // console.log("stored user:", storedUser);
    if (!storedUser)
      return res
        .status(400)
        .json({ message: `could not find user ${username}` });
    const isValid = bcrypt.compareSync(password, storedUser.password); //use bcrypt to test if the login password matches the stored one
    if (!isValid)
      return res.status(400).json({ message: "Invalid password..." });
    const token = jwt.sign(
      //generate a jwt token with payload containing the username, userId, and user role.
      {
        user: {
          username,
          userId: storedUser._id,
          role: storedUser.role || "user",
        },
      },
      secretKey,
      { expiresIn: "1h" }
    );
    console.log("a user has logged in...");
    res
      .cookie("jwt", token, {
        //attach the jwt token to the response's cookie.
        httpOnly: false,
        secure: true, // Ensure the cookie is sent over HTTPS.(Do I need it to be true? I think we're sending http requests...)
        sameSite: "strict", // Prevent cross-site requests.(Probably depends on the CORS middleware to define the allowed origin)
        maxAge: 3600000, // Cookie lifespan of 1 hour (in milliseconds).
      })
      .status(200)
      .json({ message: `User ${username} logged in successfully.`, token });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {
    // Clear the JWT cookie
    res
      .clearCookie("jwt", {
        httpOnly: false,
        secure: true,
        sameSite: "strict",
      })
      .status(200)
      .json({ message: "User logged out successfully." });
    console.log("A user has logged out...");
  } catch (error) {
    next(error);
  }
}

async function followUser(req, res, next) {
  try {
    const follower = new Follower({
      userId: req.params.id,
      followerId: req.user.userId,
    });
    console.log(follower);
    const newFollower = await follower.save();
    res
      .status(201)
      .json({ message: "Followed successfully!", followerField: newFollower });
  } catch (error) {
    next(error);
  }
}

async function updateUserData(req, res, next) {
  try {
    const { userId } = req.user;
    const { displayName, profilePic } = req.body;
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { displayName, profilePic },
      { new: true }
    );

    res
      .status(201)
      .json({ message: "User updated successfully!", updatedUser });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    const userPosts = await Post.deleteMany({ authorId: id });
    const userComments = await Comment.deleteMany({ authorId: id });
    const followers = await Follower.deleteMany({
      $or: [{ userId: id }, { followerId: id }],
    });
    res.json({ result, userPosts, userComments, followers });
  } catch (error) {
    next(error);
  }
}

async function catchAll(err, req, res, next) {
  // Log the full error for debugging (useful in development or monitoring)
  console.error("Error occurred:", err);

  // Determine if the error has a specific status code; default to 500
  const statusCode = err.status || 500;

  // Send an appropriate response to the client
  res.status(statusCode).json({
    message:
      statusCode === 500
        ? "An internal server error occurred. Please try again later."
        : err.message, // Use the error's message if it's not a 500
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Include stack trace in development mode
  });
}

module.exports = {
  addUser,
  getAllUsers,
  getUserData,
  getUserByUsername,
  login,
  logout,
  followUser,
  updateUserData,
  deleteUser,
  catchAll,
};

// export const deleteUserById = async function (req, res, next) {
//   try {
//     const reply = await User.findByIdAndDelete(req.params.id);
//     res.json({ message: "delete successful", reply });
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
