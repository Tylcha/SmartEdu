import express from 'express';
import * as userController from '../controllers/authController.js';

const router = express.Router();
//  / = //http://localhost:3000/users
router.route('/signup').post(userController.CreateUser);//http://localhost:3000/users/signup
router.route('/login').post(userController.postLoginUser);

export default router;
