const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.static('public')); // middleware static dosyaların kullanımı

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

app.listen(PORT, () => {
   console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
