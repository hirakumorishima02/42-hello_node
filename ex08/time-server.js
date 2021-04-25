/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hmorishi <hmorishi@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/04/23 18:27:46 by hmorishi          #+#    #+#             */
/*   Updated: 2021/04/23 18:35:57 by hmorishi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length < 3)
	console.log('Error:less argments');
else {
	const	net = require("net");
	const	port = Number.parseInt(process.argv[2], 10);
	const	getDate = () => {
		const	t = new Date();
		const	y = t.getFullYear().toString().padStart(4, "0");
		const	m = (t.getMonth() + 1).toString().padStart(2, "0");
		const	d = t.getDate().toString().padStart(2, "0");
		const	h = t.getHours().toString().padStart(2, "0");
		const	mt = t.getMinutes().toString().padStart(2, "0");
	
		return (`${y}-${m}-${d} ${h}:${mt}\n`);
	}
	const	invalidPort = (port) => {
		return (port >= 0 && port <= 65535);
	}
	const	execute = (p) => {
		if (!invalidPort(p)) {
			console.error("Port Number Is Invalid");
			return ;
		}
		const	server = net.createServer((socket) => {
				const date = getDate();
				socket.on("error", (err) => {
					console.log ("Error:" + err.message);
				});
				socket.write(date);
				socket.end();
		});
		server.on("error", (err) => {
			console.log ("Error:" + err.message);
		});
		server.listen(p, () => {
			console.log(`listen on ${p}`);
		});
	};
	execute(port);
}
