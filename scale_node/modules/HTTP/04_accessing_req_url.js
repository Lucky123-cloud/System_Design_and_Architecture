const http = require('http');
const PORT = 8080;
const server = http.createServer((req, res) => {
    // Log the request URL
    console.log(`Request URL: ${req.url}`);

    const { url, method } = req;

    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body with the requested URL
    res.end(`You requested ${url} using ${method} method\n`);
});

server.listen(PORT, 'localhost', () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});