const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// DB bağlantısını burda yapmayacaz.

const PhotoSchema = new Schema(
   {
      title: String,
      description: String,
      image: String,
      dateCreated: {
         type: Date,
         default: Date.now,
      },
   },
   { timestamps: true }
);

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
