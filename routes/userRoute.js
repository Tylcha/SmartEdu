import express from 'express';
import * as userController from '../controllers/authController.js';
import authMiddleware from "../middlewares/authMiddlewares.js";

const router = express.Router();
//  / = //http://localhost:3000/users
router.route('/signup').post(userController.CreateUser); //http://localhost:3000/users/signup
router.route('/login').post(userController.postLoginUser);
router.route('/logout').get(userController.LogoutUser);
router.route('/dashboard').get(authMiddleware, userController.getDashboardPage);// /users/dashboard

export default router;
