const express = require("express");
const {
  createUser,
  getUsers,
  userLogin,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers); // Get all users
router.post("/", createUser); // Create a new user
router.post("/login", userLogin);
module.exports = router;
