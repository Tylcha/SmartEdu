import express from 'express';
import session from 'express-session';

import conn from './models/conn.js';

import pageRoutes from './routes/pageRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import categoryRoutes from './routes/categoryRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();

//DBI connection
conn();

global.userIN = null; //user ID first false if(null)=false

//Middlewares
//public folder
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'Smarth_Edu_S',
        resave: false,
        saveUninitialized: true,
    })
);

//view engine = ejs
app.set('view engine', 'ejs');

//Rotes
app.use('*', (req, res, next) => {
    //everyrequest is have user session
    userIN = req.session.userID; //if user session true , userin true 
    next();
});
app.use('/', pageRoutes);
app.use('/Courses', courseRoutes);
app.use('/Categories', categoryRoutes);
app.use('/users', userRoute);

//server oto port if empty take 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    `App is listening on ${PORT}`;
});
