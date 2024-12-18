const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");

const secretKey = "secretKey";

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();
    res.json(users);
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


async function addUser(req, res, next) {
  try {
    const { newUser } = req.body;
    const { password } = newUser;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({
      ...newUser,
      password: hashedPass,
      plainPassword:password
    });
    const result = await user.save();
    res.status(201).json(result);
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
    res.status(200).json({ message: `User ${username} logged in successfully.`, token });
    } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {

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
    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addUser,
  getAllUsers,
  getUserByUsername,
  login,
  logout,
  updateUserData,
  deleteUser,
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

  // async function getUserData(req, res, next) {
  //   try {
  //     const userId = req.params.id ? req.params.id : req.user.userId;
  
  //     const user = await User.findById(userId);
  
  //     const userPosts = await Post.find({ authorId: userId });
  //     const followers = await Follower.countDocuments({ userId });
  //     const following = await Follower.countDocuments({ followerId: userId });
  
  //     const userPostData = userPosts.map((post) => ({
  //       _id: post._id,
  //       postImageUrl: post.postImageUrl,
  //     }));
  
  //     res.json({ user, Posts: userPostData, followers, following });
  //   } catch (error) {
  //     console.log(error);
  //     next(error);
  //   }
  // }
