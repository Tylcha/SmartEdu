import express from 'express';
import * as courseContoller from '../controllers/courseContoller.js';

const router = express.Router();

router.route('/').post(courseContoller.postCoursePage);
router.route('/').get(courseContoller.gettAllCourses);

export default router;
