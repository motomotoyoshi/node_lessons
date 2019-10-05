'use strict';

const setting = require('./setting');
const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request', function (req, res) {
    fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Not found');
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    })
});
server.listen(setting.port, setting.host);
console.log('server listening ...');