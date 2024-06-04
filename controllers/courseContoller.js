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
    const courses = await Courses.find({});
    res.status(200).render('course-grid-2', {
        page_name: 'Courses',
        courses,
    });

}; 

export { postCoursePage, gettAllCourses };
