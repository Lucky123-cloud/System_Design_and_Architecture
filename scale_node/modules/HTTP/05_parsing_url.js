const http = require('http');
const url = require('url');
const PORT = 8080;


const server = http.createServer((req, res) => {
    //parse the url 
    const parsedUrl = url.parse(req.url, true)

    //get different parts of the url
    let pathname = parsedUrl.pathname;
    let query = parsedUrl.query;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        pathname,
        query,
        fullUrl: req.url
    }, null, 2));
});

server.listen(PORT, 'localhost', () => {
    console.log(`Server is listening from PORT ${PORT} and here is the full url: http://localhost:${PORT}`)
})