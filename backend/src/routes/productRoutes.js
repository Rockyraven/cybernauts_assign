// routes/productRoutes.js

const express = require('express');
const multer = require('multer');
const { registerProduct } = require('../controllers/productController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/register-product', upload.single('fileUpload'), registerProduct);

module.exports = router;
