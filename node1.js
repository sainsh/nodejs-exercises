const http = require('http');
const fs = require('fs')

var server = http.createServer(function(req,res){
        fs.readFile('./counter.json',  (err, json) => {
            if (err) {
                console.log(err)
                return
                
            }
                var file = JSON.parse(json);
            
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.write(JSON.stringify(file));
        
            fs.writeFile('./counter.json', (err, json )=>{

                
            })
            
            res.end();
        
});
}).listen(8080);
