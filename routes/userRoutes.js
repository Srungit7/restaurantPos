import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers); // Get all users
router.post('/', createUser); // Create a new user

export default router;
