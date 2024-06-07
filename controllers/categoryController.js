import Category from '../models/Category.js';

const postCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            status: 'success',
            category,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};

const gettAllCategory = async (req, res) => {
    try {
        const category = await Category.find({});
        res.status(200).json({
            status:'success',
            category,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};

export { postCategory, gettAllCategory };
