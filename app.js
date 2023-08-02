const express = require('express');
const app = express();
require('dotenv').config();

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
