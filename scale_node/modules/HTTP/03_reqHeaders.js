const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
    console.log(`Request Headers: ${req.headers}`);
    const userAgent = req.headers['user-agent'];
    const acceptLanguage = req.headers['accept-language'];
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body "Hello, World!"
    res.end(`User-Agent: ${userAgent}\nAccept-Language: ${acceptLanguage}`);
});

server.listen(PORT, 'localhost', () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});