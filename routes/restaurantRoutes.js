import express from 'express';
import { createRestaurant, getRestaurants } from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/', getRestaurants); // Get all restaurants
router.post('/', createRestaurant); // Create a new restaurant

export default router;
