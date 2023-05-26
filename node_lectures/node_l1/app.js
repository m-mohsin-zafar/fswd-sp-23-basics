
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const ProductController = require('./Controllers/products');

// INITIALIZATION of Express Object aka App
const app = express()

// Defining middlewares
app.use(cors());
// General format for middleware
// function xyz(req, res, next){
//     // Apply some processing here...
//     next();
// }
app.use(morgan('tiny'));
app.use(express.json());
// We are registering Product Controller/Router
app.use('/api/product', ProductController);

const port = 3000

// ROUTES / ENDPOINT Definition
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
