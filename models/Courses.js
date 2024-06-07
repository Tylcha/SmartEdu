import mongoose, { Schema, Types } from 'mongoose';
import slugify from 'slugify';

const CourseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
    slug: {
        type: String,
        unique: true,
    },
});

//save before this.slug is name attribute
CourseSchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true,
    });
    next();
});
const Course = mongoose.model('Course', CourseSchema);

export default Course;
