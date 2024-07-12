import User from '../models/User.js';
import bcrypt from 'bcrypt';
import session from 'express-session';
import Course from '../models/Courses.js';
import Category from "../models/Category.js";

const CreateUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        // res.status(201).json({
        //     status: 'success',
        //     user,
        // });
        res.status(201).redirect('/login')
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};

const postLoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same) {
                    req.session.userID = user._id;
                    //res.status(200).send('YOU ARE LOGGED IN');
                    res.status(200).redirect('/users/dashboard');
                } else {
                    res.status(401).send('Invalid password');
                }
            });
        }
        else{
            res.status(401).send('invalid password')
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};
const LogoutUser = async (req, res) => {
    try {
        req.session.destroy(() => {
            res.redirect('/');
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};

//users/dashboard
const getDashboardPage = async (req, res) => {
    if (!req.session.userID) {
        res.status(401).send('Unauth');
    }
    const user = await User.findOne({_id:req.session.userID})
    const categories = await Category.find({});
    const course = await Course.find({user:req.session.userID}).populate('user');
    console.log(course);
    res.status(200).render('dashboard', {
        page_name: 'dashboard',
        user,
        course,
        categories,
    });
};

export { CreateUser, postLoginUser, LogoutUser, getDashboardPage };
