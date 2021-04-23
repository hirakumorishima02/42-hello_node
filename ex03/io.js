if (process.argv.length <= 2)
	console.log("No File Name in your argments");
else
{
	const	fs = require("fs");
	const	file_path = process.argv[2];
	try
	{
		const	file = fs.readFileSync(file_path);
		const	text = file.toString();
		const	len = file.length;
		let		sum = 0;
		for (let i = 0; i < len; i++)
		{
			if (text[i] == '\n')
				sum++;
		}
		console.log(sum);
	}
	catch (err)
	{
		console.log (err.message);
	}
}
