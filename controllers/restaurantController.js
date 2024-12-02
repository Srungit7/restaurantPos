const { Restaurant } = require("../postgres/models/Restaurant");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRestaurant = async (req, res) => {
  const { name, location } = req.body;
  try {
    const newRestaurant = await Restaurant.create({ name, location });
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { createRestaurant, getRestaurants };
