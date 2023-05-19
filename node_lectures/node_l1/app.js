
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// INITIALIZATION of Express Object aka App
const app = express()

// Defining middlewares
app.use(cors());
// function xyz(req, res, next){
//     // Apply some processing here...
//     next();
// }
app.use(morgan('tiny'));
app.use(express.json());

const port = 3000

// ROUTES / ENDPOINT Definition
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// PRODUCTS ENDPOINTS
// GET /api/products -> Read Operation
app.get('/api/products', (req, res) => {

});

// POST /api/products -> Create Operation
app.post('/api/products', (req, res) => {

});

// PUT /api/products/:id -> Update Operation
app.put('/api/products/:id', (req, res) =>{

});

// DELETE /api/products/:id -> Delete Operation
app.delete('/api/products/:id', (req, res) =>{

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
