// models/productModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    serialNumber: {
        type: String,
        required: true
    },
    invoiceDate: {
        type: Date,
        required: true
    },
    fileUpload: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
