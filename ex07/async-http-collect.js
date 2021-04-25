/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hmorishi <hmorishi@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/04/23 18:07:26 by hmorishi          #+#    #+#             */
/*   Updated: 2021/04/26 08:40:22 by hmorishi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const	http = require('http');
let	arry = [];

if (process.argv.length != 5) {
	console.log('Error:invalid argments number');
	return ;
}

function fetchData(i) {
	const	url = process.argv[i];

	return new Promise(function(resolve) {
		try {
			http.get(url, res => {
				let	str = "";

				res.on('data', d => {
					str += d;
				});
				res.on('end', () => {
					resolve(str)
				})
			}).on('error', (err) => {
				console.log("Error:" + err.message);
				process.exit(-1);
			});
		} catch (err) {
			console.log(err.message);
			process.exit(-1);
		}
	});
}

async function execute() {
	const	len = process.argv.length;

	for (let i = 2; i < len; i++) {
		arry[i] = await fetchData(i);
	}
	for (let i = 2; i < len; i++) {
		console.log(arry[i]);
	}
}

execute();
