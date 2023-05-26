
const mongoose = require('../database');

// 1. Define Schema
const ratingSchema = new mongoose.Schema({
    "rate": {type: Number, min: 0, max: 5},
    "count": {type: Number, min: 0}
});

const productSchema = new mongoose.Schema({
    "title": {
        type: String,
    },
    "price": {
        type: Number,
    },
    "description": {
        type: String,
    },
    "category": {
        type: String,
    },
    "image": {
        type: String,
    },
    "rating": ratingSchema,
    tags: [{type: String}],
});

// 2. Create Model
const Product = mongoose.model('Product', productSchema);


// 3. Export Model
module.exports = Product;
