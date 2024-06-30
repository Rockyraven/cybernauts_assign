// controllers/productController.js

const Product = require("../model/productModel");


const registerProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File not uploaded' });
    }

    const { category, model, serialNumber, invoiceDate } = req.body;
    const fileUpload = req.file.path;

    const product = new Product({
      category,
      model,
      serialNumber,
      invoiceDate,
      fileUpload,
    });

    await product.save();
    res.status(201).json({ message: 'Product registered successfully!' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registerProduct,
};
