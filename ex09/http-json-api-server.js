const	http = require('http');
const	url = require('url');
const	port = Number.parseInt(process.argv[2], 10);


const   getTime = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	const	basis = req.url.split('?')[0].split('api/')[1];
	const   ymd = 	req.url.split('?')[1].split('=')[1];
	const   hms = 	ymd.split('T')[1].split(':');
	const	yr  = parseInt(ymd.split('-')[0]);
	const	mon = parseInt(ymd.split('-')[1]);
	const	dt  = parseInt(ymd.split('-')[2].split('T')[0]);
	const   hr  = parseInt(hms[0]);
	const   min = parseInt(hms[1]);
	const   sec = parseInt(hms[2].split('.')[0]);

	if (basis == 'parsetime') {
		console.log(JSON.stringify({hour: hr, minute: min, sec: sec}));	
	}
	else if (basis == 'unixtime') {
		const	param = req.url.split('?')[1];
		let	strParam = new URLSearchParams(param);
		let	date = strParam.get('iso');
		console.log(JSON.stringify({unixtime: Date.UTC(yr, mon, dt, hr, min, sec)}));
	}
	res.end();
};

const	server = http.createServer();
server.on('request', getTime);
server.listen(port);
console.log('Server running');
