var http = require('http');
var url = require('url');
var fs = require('fs');
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var server = http.createServer(function (req, res) {
	if(req.method == 'GET') {
		var query = decodeURI(url.parse(req.url, true).pathname.substr(1));
		if(query) {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			var iso = {};
			if (isNaN(query)) {
				var d = new Date(query + ' 00:00:00');
				if(d == 'Invalid Date') {
					iso = {
						unix: null,
						natural: null
					};
				} else {
					iso = getIso(d.getTime());
				}
			} else {
				iso = getIso(query + '000');
			}
			res.end(JSON.stringify(iso));
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			fs.createReadStream('index.html').pipe(res);
		}
	}
});
server.listen(8080);

function getIso(val) {
	val = parseInt(val);
	var d = new Date(val);
	return {
		unix: val/1000,
		natural: months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() 
	};
}