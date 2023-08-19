const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const photoController = require('./controllers/photoController');
const pageController = require('./controllers/pageController');
const app = express();
require('dotenv').config();
// CONNECT DB
mongoose.connect('mongodb://localhost:27017/Pcat-Db');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // bodyparser yerine express ile gelen middlevare işimize yarıyor.
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

// ROUTES

// PhotoController
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);
app.get('/photos/edit/:id', photoController.getEditPage);

// PageController
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
