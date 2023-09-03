const Photo = require('../models/Photo');
const fs = require('fs');

exports.getAllPhotos = async (req, res) => {
   const page = req.query.page || 1;
   const photosPerPage = 2;
   const totalPhotos = 100;

   const photos = await Photo.find({})
      .sort('createdAt')
      .skip((page - 1) * photosPerPage)
      .limit(photosPerPage);

   res.render('index', {
      photos,
      current: page,
      pages: Math.ceil(totalPhotos / photosPerPage),
   });
};

exports.getPhoto = async (req, res) => {
   // res.render('about');
   // console.log(req.params.id);
   const photo = await Photo.findById(req.params.id);
   res.render('photo', {
      photo,
   });
};

exports.createPhoto = async (req, res) => {
   const uploadDir = 'public/uploads';
   if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
   }

   let uploadedImage = req.files.image;
   // let uploadPath = __dirname + '/public/uploads/' + uploadedImage;
   let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name;

   uploadedImage.mv(uploadPath, async (err) => {
      if (err) console.log(err); // Bu kısımda önemli olan add.ejs'nin içerisine form elemanı olarak encType="multipart/form-data" atribute eklemek
      await Photo.create({
         ...req.body,
         image: '/uploads/' + uploadedImage.name,
      });
   });
   res.redirect('/');
};

exports.updatePhoto = async (req, res) => {
   const photo = await Photo.findOne({ _id: req.params.id });
   photo.title = req.body.title;
   photo.description = req.body.description;
   photo.save();

   res.redirect(`/photos/${req.params.id}`);
};

exports.deletePhoto = async (req, res) => {
   const photo = await Photo.findOne({ _id: req.params.id });
   let deletedImage = __dirname + '/../public' + photo.image;
   fs.unlinkSync(deletedImage);
   await Photo.deleteOne(photo._id);

   res.redirect('/');
};

exports.getEditPage = async (req, res) => {
   const photo = await Photo.findOne({ _id: req.params.id });
   res.render('edit', {
      photo,
   });
};
