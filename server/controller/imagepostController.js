const fs = require('fs');
const Image = require('../model/Image'); // Adjust the path based on your project structure

const uploadImage = async (req, res) => {
  try {
    
    const imageData = new Image({
      name:req.body.name,
      image:{
        data:req.file.filename,
        contentType:'image/png'
      }
    })

    await imageData.save();
    res.status(200).send('IMAGE SAVED');

  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  uploadImage,
  getImages,
};
