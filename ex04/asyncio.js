if (process.argv.length <= 2)
	console.log("Not include file name in this argments");
else
{
	try
	{
		const	fs = require('fs');
		const	fp = process.argv[2];
		fs.readFile(fp, (err, file) => {
		if (err) {
			console.log ("ERROR");
		}
		else {
			const	text = file.toString();
			let		sum = 0;
			for (let i = 0; i < text.length; i++)
			{
				if (text[i] == '\n')
					sum++;
			}
			console.log(sum);
		}
		});
	}
	catch (err)
	{
		console.log(err);
	}
}
