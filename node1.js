const http = require('http');
const fs = require('fs')

var server = http.createServer(function (req, res) {
    fs.readFile('counter.json', (err, json) => {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        if (req.url != "/favicon.ico") {

            var count = JSON.parse(json);

            count.count  += 1

            fs.writeFile('counter.json', JSON.stringify(count), function (err) {
                console.log('saved' + req.rul)
            })
            
            res.end(JSON.stringify(count) + " ");
        }





    });
}).listen(8080);
