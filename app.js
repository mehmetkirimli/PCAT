const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const ejs = require('ejs');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
   res.render('index');
});
app.get('/about', (req, res) => {
   res.render('about');
});
app.get('/add', (req, res) => {
   res.render('add');
});

app.post('/photos', (req, res) => {
   console.log(req.body);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
