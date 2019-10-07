const http = require('http');
const dato = require('./dato.js');

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end("<html><body>"+ dato.myDateTime()+"</body></html>");
}).listen(8080);