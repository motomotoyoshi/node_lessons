'use strict';

const setting = require('./setting');
console.log(setting);
const http = require('http');
const server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();
})
server.listen(setting.port, setting.host);
console.log('server listening ...');