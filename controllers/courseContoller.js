import Courses from '../models/Courses.js';

const postCoursePage = async (req, res) => {
    try {
        const course = await Courses.create(req.body);
        res.status(201).json({
            status: 'success',
            course,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};

const gettAllCourses = async (req, res) => {
    try {
        const courses = await Courses.find({});
        res.status(200).render('courses', {
            page_name: 'Courses',
            courses,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};
const gettCourse = async (req, res) => {
    try {
        //findone beacuse use slug
        const course = await Courses.findOne({slug: req.params.slug});
        res.status(200).render('course', {
            page_name: 'Course',
            course,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};

export { postCoursePage, gettAllCourses, gettCourse };
