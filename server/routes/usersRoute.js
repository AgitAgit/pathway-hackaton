const express = require("express");
const {
  getAllUsers,
  getUserByUsername,
  addUser,
  login,
  logout,
  catchAll,
  getUserData,
  followUser,
  updateUserData,
  deleteUser,
} = require("../controllers/usersController.js");

const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/data", authUser, getUserData);

router.get("/data/:id", authUser, getUserData);

router.get("/:username", authUser, getUserByUsername);

router.post("/signup", addUser);

router.post("/login", login);

router.post("/logout", logout);

router.post("/follow/:id", authUser, followUser);

router.put("/edit-profile", authUser, updateUserData);

router.delete("/:id", authUser, deleteUser);

router.use(catchAll);

module.exports = router;
