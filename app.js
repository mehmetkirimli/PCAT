const express = require('express');
const app = express();
require('dotenv').config();

const myLogger = (req, res, next) => {
   console.log('Middleware Log 1');
   next();
};

app.use(express.static('public')); // middleware static dosyaların kullanımı
app.use(myLogger);

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
   const photo = {
      id: 1,
      name: 'Photo Name Kartal',
      description: 'KARA KARTAL',
   };
   res.send(photo);
});

app.listen(PORT, () => {
   console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
