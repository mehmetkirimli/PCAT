const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();
const path = require('path');
const ejs = require('ejs');
const Photo = require('./models/Photo');
// CONNECT DB
mongoose.connect('mongodb://localhost:27017/Pcat-Db');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // bodyparser yerine express ile gelen middlevare işimize yarıyor.
app.use(express.json());

// ROUTES
app.get('/', async (req, res) => {
   const photos = await Photo.find({});
   res.render('index', {
      photos,
   });
});

app.get('/photos/:id', async (req, res) => {
   // res.render('about');
   // console.log(req.params.id);
   const photo = await Photo.findById(req.params.id);
   res.render('photo', {
      photo,
   });
});

app.get('/about', (req, res) => {
   res.render('about');
});
app.get('/add', (req, res) => {
   res.render('add');
});

app.post('/photos', async (req, res) => {
   await Photo.create(req.body);
   res.redirect('/'); //  Bu metot, HTTP isteğini belirtilen hedef URL'ye yönlendirir.
   //  Genellikle kullanıcı bir sayfada işlem tamamladığında veya belirli bir URL'ye erişim izni olmadığında bu yönlendirmeyi kullanabilirsiniz.
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
