const	http = require('http');

function fetchData(i) {
	const	url = process.argv[i];
	return new Promise(function(resolve, reject) {
		http.get(url, res =>
			{
				let	str = "";
				res.on
				('data', d => {
					str += d;
				});
				res.on
				('end', () => {
					resolve(str)
				})
			}).on('error', (err) => {
				console.log("Error:" + err.message);
			});
	});
}

async function execute() {
	const	len = process.argv.length;
	for (let i = 2; i < len; i++)
	{
		const result = await fetchData(i);
		console.log(result);
	}
}

execute();
