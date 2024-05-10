import mongoose from 'mongoose';
import 'dotenv/config';

const conn = async() => {
    await mongoose.connect(process.env.DBI_URL);
};

export default conn;
