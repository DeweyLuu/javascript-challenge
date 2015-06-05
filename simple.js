var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	fs.readFile('./index.html', function(err, data){
		if (err) {
			console.error(error);
		}
		response.write(data);
		response.end();
	});
}).listen(8000);
