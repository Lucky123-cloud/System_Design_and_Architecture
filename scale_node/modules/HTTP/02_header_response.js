const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*', // Allow CORS for all origins
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'cache-control': 'no-cache, no-store, must-revalidate', // Disable caching
        'Pragma': 'no-cache',
        'set-cookie': 'session'
    });

    // Send the response body "Hello, World!"
    res.end('<h1>Hello, World!</h1>');
});

server.listen(PORT, 'localhost', () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});