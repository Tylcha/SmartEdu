import express from 'express';
import * as courseContoller from '../controllers/courseContoller.js';

const router = express.Router();

router.route('/').post(courseContoller.postCoursePage);//http://localhost:3000/Courses
router.route('/').get(courseContoller.gettAllCourses);
router.route('/:slug').get(courseContoller.gettCourse);

export default router;
