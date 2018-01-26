var http = require('http');

http.createServer(function(req, res){
    res.write('my first node js application');
    res.end();
}).listen(8000);