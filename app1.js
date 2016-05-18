var http = require('http');
http.createServer( function (request, response,dd) {  

 request.on('data',function(chunk){
         console.log(chunk.toString('utf-8'))
 })
}).listen(8082);
