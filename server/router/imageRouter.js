const express = require('express');
const router = express.Router();
const multer = require('multer');
const imageController = require('../controller/imagepostController'); // Adjust the path based on your project structure

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Route for uploading an image
router.post('/upload', upload.single('image'), imageController.uploadImage);

// Route for retrieving all images
router.get('/images', imageController.getImages);

module.exports = router;
