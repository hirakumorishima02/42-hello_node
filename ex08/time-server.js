if (process.argv.length < 3)
{
	console.log("No argments");
	process.exit(-1);
}

const	net = require("net");
const	port = Number.parseInt(process.argv[2], 10);

const	getDate = () => {
	const	t = new Date();
	const	y = t.getFullYear();
	const	m = t.getMonth() + 1;
	const	d = t.getDate();
	const	h = t.getHours();
	const	mt = t.getMinutes();

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
				console.log(err.message);
			});
			socket.write(date);
			socket.end();
	});
	server.on("error", (e) => {
		console.log(e.message);
	});
	server.listen(p, () => {
		console.log(`listen on ${p}`);
	});
};

execute(port);
