import mongoose, { Schema, Types } from 'mongoose';
import slugify from 'slugify';

const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
    },
});

//save before this.slug is name attribute
CategorySchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true,
    });
    next();
});
const Category = mongoose.model('Category', CategorySchema);

export default Category;
