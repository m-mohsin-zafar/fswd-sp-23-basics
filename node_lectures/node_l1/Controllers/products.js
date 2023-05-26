const express = require('express');
const Product = require('../models/products');

const router = express.Router();

// PRODUCTS ENDPOINTS
// GET /api/products -> Read Operation
router.get('/', async (req, res) => {
    try {
        let products = await Product.find();
        console.log(products);
        if (!products) {
            res.status(404).send({'message': 'No products found'});
        }
        res.status(200).send(products);
    } catch (e) {
        console.log(e);
    }
});

// GET /api/product/:id -> Read Operation - GET one Product
router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let product = await Product.findById(id);
        console.log(product);
        if (!product) {
            res.status(404).send({'message': 'No product found'});
        }
        res.status(200).send(product);
    } catch (e) {
        console.log(e);
    }
});

router.get('/one', async (req, res) => {
    try {
        let title = req.query.title;
        console.log(title);
        // let product = await Product.findOne({title: title}).exec();
        // console.log(product);
        // if (!product) {
        //     res.status(404).send({'message': 'No product found'});
        // }
        res.status(200).send('no');
    } catch (e) {
        console.log(e);
    }
});

// POST /api/products -> Create Operation
router.post('/', async (req, res) => {
    let data = req.body;
    let resp = {};
    if (data) {
        try {
            let product = new Product(data);
            resp = await product.save();
        }
        catch (err) {
            console.log(err)
        }
    }
    res.send(resp);
});

// PUT /api/products/:id -> Update Operation
router.put('/:id', (req, res) =>{

});

// DELETE /api/products/:id -> Delete Operation
router.delete('/:id', (req, res) =>{

});


// Export the router
module.exports = router;
