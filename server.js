'use strict';

const
    setting = require('./setting'),
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring'),
    http = require('http'),
    server = http.createServer();
const template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
let posts = [];

function renderForm(posts, res) {
    let data = ejs.render(template, {
        posts: posts
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
}
server.on('request', function (req, res) {
    if (req.method === 'POST') {
        req.data = '';
        req.on('data', function (chunk) {
            req.data += chunk;
        });
        req.on('end', function () {
            let query = qs.parse(req.data);
            posts.push(query.name);
            renderForm(posts, res);
        });
    } else {
        renderForm(posts, res);
    }
});
server.listen(setting.port, setting.host);
console.log('server listening ...');