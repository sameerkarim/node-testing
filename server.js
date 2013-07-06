var http = require('http');

var server = http.createServer();
server.on('request', function (req, res) {
	res.writeHead('200', {'Content-type': 'text/plain'});
	res.end('Hello World \n');
});
server.listen(3000);
console.log('Server up and running on http://198.199.96.186:3000/ or http://bizzee-bee.com:3000/');