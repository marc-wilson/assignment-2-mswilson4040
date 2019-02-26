// start by navigating to the folder, and type 'node ../simple-http-file-server'
// access the app from you browser at http://localhost:8080/ (add any arbitrary path)

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const MyParser = require('./mymodule');

var server = http.createServer((req, res) => {
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(currentTime);
    const parser = new MyParser();
    const queryParam = parser.parseUrl(req.url);
    const contentType = parser.getContentType(queryParam);
    if (contentType) {
        res.writeHead(200, {'Content-Type': contentType});
    }
    const filePath = path.join(__dirname, '/htdocs/index.html');
    fs.readFile(filePath, 'utf8', (err, text) => {
        res.end(text);
    });
});

var port = 8080;
server.listen(port, () => {
  console.log("Listening " + port);
});
