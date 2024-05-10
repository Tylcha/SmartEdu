import express from 'express';

const app = express();

//public folder
app.use(express.static('public'));

//view engine = ejs
app.set('view engine', 'ejs');

//first page
app.get('/', (req, res) => {
    res.status(200).render('index', {
        page_name: 'index',
    });
});
app.get('/about', (req, res) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    `App is listening on ${PORT}`;
});
