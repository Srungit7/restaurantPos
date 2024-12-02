// const express = require('express')
// import { createRestaurant, getRestaurants } from '../controllers/restaurantController.js';

// const router = express.Router();

// router.get('/', getRestaurants); // Get all restaurants
// router.post('/', createRestaurant); // Create a new restaurant

// export default router;

const express = require("express");
const {
  createRestaurant,
  getRestaurants,
} = require("../controllers/restaurantController");

const router = express.Router();

router.get("/", getRestaurants); // Get all users
router.post("/", createRestaurant); // Create a new user

module.exports = router;
