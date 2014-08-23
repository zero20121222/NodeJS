var net = require('http');

net.createServer(function(req , res){
	res.writeHead(200 , {'Content-Type' : 'text/plain'});
	res.end('Hello World!\n');
}).listen(8989);

console.log('Server running on port 8989!');