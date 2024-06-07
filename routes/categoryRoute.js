import express from 'express';
import * as categoryContoller from '../controllers/categoryController.js';

const router = express.Router();

router.route('/').post(categoryContoller.postCategory);//http://localhost:3000/Categories
router.route('/').get(categoryContoller.gettAllCategory);


export default router;
