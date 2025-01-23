
// Create web server
function start() {
var http = require('http'); 
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Node.js</h1>');
    res.write('<p>Learning Node.js</p>');
    res.end();
});
}