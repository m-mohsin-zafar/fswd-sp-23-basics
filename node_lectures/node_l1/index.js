// import statements
const http = require('http');

// We wanted to create a server from scratch
const hostname = '127.0.0.1';
const port = 3000;

// Let's crete a server to listen to our  HTTP requests
const server = http.createServer((req, res) => {
    // console.log(req);
    // For Default URL
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello World\n');
        res.end();
    }
    // when url === '/api/index'
    if (req.url === '/api/index') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({message: 'Up and Running!'}));
        res.end();
    }
    // when url === '/api/products' and method === 'POST'
    if (req.url === '/api/products' && req.method === 'POST') {
        let data = '';
        // extract data from req
        req.on('data', (chunk) => {
            data += chunk;

        });
        res.on('end', () => {
            // console.log(JSON.parse(data));
            data = JSON.parse(data);
        })
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    }

    if (req.url === '/api/products' && req.method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({
            "title": "Gucci Bag",
            "price": "300",
            "rating": 4.5
        }));
        res.end();
    }
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
