import Courses from '../models/Courses.js';
import Category from '../models/Category.js';

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
        //take request query parameters categories exmp:http://localhost:3000/Courses?categories=programming
        const categorySlug = req.query.categories;
        //console.log(categorySlug);

        //filter for course categories
        let filter = {};

        //if categorySlug is not empty
        if (categorySlug) {
            //find categorySlug in category
            const category = await Category.findOne({ slug: categorySlug });

            /*
            filter in course in category: category id, look course model ,exmp:
            category: {
            type: mongoose.Schema.Types.ObjectId, !!!!!!!!!!!!!!!!!!!
            ref: 'Category',
            },
            */
            filter = { category: category._id };
        }

        //show course and categories

        //filt the course for category if query empty showw all
        const courses = await Courses.find(filter);
        const category = await Category.find({});
        res.status(200).render('courses', {
            page_name: 'Courses',
            courses,
            category,
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
        const course = await Courses.findOne({ slug: req.params.slug });
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
