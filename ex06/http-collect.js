 if (process.argv.length < 3)
	process.exit(-1);
else
{
	try
	{
		const	http = require('http');
		const	url = process.argv[2];
		const	req = 
			http.get(url, res =>
				{
					let	data = ""; 
					let	count = 0;
					res.on
					('data', d => {
						data += d;
						count += d.length;
					})
					res.on
					('end', () =>
						{
							console.log(count);
							console.log(data);
						})
				}).on('error', function(err)
					{
						console.log ("Error:" + err.message);
					});
	}
	catch (err)
	{
		console.log(err.message);
	}
}
