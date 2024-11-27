import { Restaurant } from '../models/index.js';

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createRestaurant = async (req, res) => {
  const { name, location } = req.body;
  try {
    const newRestaurant = await Restaurant.create({ name, location });
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
