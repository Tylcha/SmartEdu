import express from 'express';

import pageRoutes from './routes/pageRoutes.js';

import conn from './models/conn.js';

const app = express();

//DBI connection
conn();

//public folder
app.use(express.static('public'));

//view engine = ejs
app.set('view engine', 'ejs');

//Rotes
app.use('/', pageRoutes);

//server oto port if empty take 3000
const PORT = process.env.PORT || 3000;;

app.listen(PORT, () => {
    `App is listening on ${PORT}`;
});
