import express from 'express';

const app = express();

//public folder
app.use(express.static('public'));

//view engine = ejs
app.set('view engine', 'ejs');

//first page
app.get('/', (req, res) => {
    res.status(200).render('index');
});

const PORT = 3000;

app.listen(PORT, () => {
    `App is listening on ${PORT}`;
});
