const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect DB
mongoose.connect('mongodb://localhost:27017/pcat-test-db');

//Creat Schema
const PhotoSchema = new Schema(
   {
      title: String,
      description: String,
   },
   { timestamps: true }
);

const Photo = mongoose.model('Photo', PhotoSchema);

// Create a photo

// Photo.create({
//    title: 'Photo M1',
//    description: 'First Photo',
// });

// Read a Photo

// async function getData() {
//    try {
//       const result = await Photo.find({});
//       console.log(result);
//    } catch (error) {
//       console.log('Hata Var Mehmet : ' + error);
//    }
// }
// getData();

//Update Photo
// const id = '64cc0a682aec20eab5b1a834';
// async function updateAndRead() {
// try {
//    const updatePhoto = await Photo.findByIdAndUpdate(
//       id,
//       {
//          title: 'Photo 1123 Updated',
//          description: 'Photo 1 UPdate olacak',
//       },
//       {
//          new: true,
//       }
//    );
//    console.log(updatePhoto);
// } catch (error) {
//    console.log(error);
// }
// }
// updateAndRead();
