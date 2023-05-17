// import statements
const http = require('http');

// Server configuration
const hostname = '127.0.0.1';
const port = 3000;

// Create a server to listen to HTTP requests
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        handleDefaultRoute(req, res);
    } else if (req.url === '/api/index') {
        handleIndexRoute(req, res);
    } else if (req.url === '/api/products') {
        if (req.method === 'POST') {
            handlePostProduct(req, res);
        } else if (req.method === 'GET') {
            handleGetProduct(req, res);
        }
    } else {
        handleNotFound(req, res);
    }
});

// Handle the default route '/'
function handleDefaultRoute(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
}

// Handle the '/api/index' route
function handleIndexRoute(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Up and Running!' }));
}

// Handle the '/api/products' route with POST method
function handlePostProduct(req, res) {
    let data = '';

    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', () => {
        data = JSON.parse(data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
}

// Handle the '/api/products' route with GET method
function handleGetProduct(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
        JSON.stringify({
            title: 'Gucci Bag',
            price: '300',
            rating: 4.5,
        })
    );
}

// Handle 404 - Not Found
function handleNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
