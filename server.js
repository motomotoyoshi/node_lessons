'use strict';

const setting = require('./setting');
const http = require('http');
const server = http.createServer();
let msg;
server.on('request', function (req, res) {
    switch (req.url) {
        case '/about':
            msg = 'about this page';
            break;
        case '/profile':
            msg = 'about me';
            break;
        default:
            msg = 'wrong page';
            break;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(msg);
    res.end();
})
server.listen(setting.port, setting.host);
console.log('server listening ...');