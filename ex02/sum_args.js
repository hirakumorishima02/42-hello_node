let result;
let i;

result = 0;
i = 2

while(i < process.argv.length)
{
	result += parseInt(process.argv[i++]);
}

console.log(result);
