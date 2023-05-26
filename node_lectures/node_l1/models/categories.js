
const mongoose = require('../database');

// 1. Define Schema
const categorySchema = new mongoose.Schema({
    "title": {type: String},
})

// 2. Create Model
const Category = mongoose.model('Category', categorySchema);

//  Export Model
module.exports = Category;
