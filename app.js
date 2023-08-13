const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const ejs = require('ejs');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // bodyparser yerine express ile gelen middlevare işimize yarıyor.
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
   console.log(req.body); // veritabanına atma yeri aslında
   res.redirect('/'); //  Bu metot, HTTP isteğini belirtilen hedef URL'ye yönlendirir.
   //  Genellikle kullanıcı bir sayfada işlem tamamladığında veya belirli bir URL'ye erişim izni olmadığında bu yönlendirmeyi kullanabilirsiniz.
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
