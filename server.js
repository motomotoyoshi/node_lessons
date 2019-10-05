'use strict';

const setting = require('./setting'),
    fs = require('fs'),
    ejs = require('ejs');

const http = require('http');
const server = http.createServer();
const template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
let n = 0;
server.on('request', function (req, res) {
    n++;
    const data = ejs.render(template, {
        title: 'Hello',
        content: '<strong>World.</strong>',
        n: n
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
});
server.listen(setting.port, setting.host);
console.log('server listening ...');