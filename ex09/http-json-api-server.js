/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hmorishi <hmorishi@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/04/23 18:44:10 by hmorishi          #+#    #+#             */
/*   Updated: 2021/04/26 07:20:24 by hmorishi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length < 3) {
	console.log('Error:less argments');
	return ;
}

const	http = require('http');
const	url =  require('url');
const	port = Number.parseInt(process.argv[2], 10);

if (!(port >= 0 && port < 65536)) {
	console.log(`Error:port ${port} is invalid(port should be >= 0 and < 65536)`);
	return ;
}
  
const	getUnix = (time) => {
	return {
		unixtime: Date.parse(time)
	}
}

const	getParse = (time) => {
	const	date = new Date(time);
	return {
		hour: date.getUTCHours(),
		minute: 
		date.getUTCMinutes(),
		second: date.getUTCSeconds()
	}
}

const   fetchData = (req, res) => {
	try {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		const	json_data = url.parse(req.url);
		const	basis = json_data.pathname;
		const	time = new URLSearchParams(json_data.query).get('iso');
	
		if (basis == '/api/unixtime') {
			res.end(JSON.stringify(getUnix(time)) + "\n");
		} else if (basis == '/api/parsetime') {
			res.end(JSON.stringify(getParse(time)) + "\n");
		} else
			res.end(JSON.stringify({}));
	} catch(e) {
		console.error(e);
	}
};

const	server = http.createServer();
server.on('request', fetchData);
server.on("error", (e) => {
	console.log("Error:" + e.message);
});
server.listen(port);
