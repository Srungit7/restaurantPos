const { User } = require("../postgres/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const utils = require("../utilities/utils");
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  console.log("Received POST request to create a user");
  const { name, email, password, role } = req.body;
  console.log(name, password, "hello");
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      throw Error("user already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword, "jjjj");
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser) {
      throw Error("user doesnot exists");
    }
    console.log(password, existingUser.password);
    const isPasswordTrue = await bcrypt.compare(
      password,
      existingUser.password
    );

    const access_token = await utils.generateAccessToken(existingUser);
    const refresh_token = await utils.generateRefreshToken(existingUser);

    if (!isPasswordTrue) {
      throw Error("user not registered");
    }
    return res.status(200).json({
      status: 200,
      data: { access_token, refresh_token },
      message: "login Successful",
    });
    // res.status(201).json();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createUser, getUsers, userLogin };
