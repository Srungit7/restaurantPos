const express = require("express");
const { createUser, getUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers); // Get all users
router.post("/", createUser); // Create a new user

module.exports = router;
