const http = require('http');
const fs = require('fs');
const date = require('./dato');

var server = http.createServer(function (req, res) {
    
    fs.readFile('index.html', (error, html) => {

        fs.readFile('counter.json', (err, json) => {

            if (req.url != "/favicon.ico") {

                var count = JSON.parse(json);

                count.count += 1

                fs.writeFile('counter.json', JSON.stringify(count), function (err) {
                    console.log('saved' + req.rul)
                })
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });

            res.write(html + " " + JSON.stringify(count) + " " + date.myDateTime())

            res.end();

        });
    });
}).listen(8080);
