/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hmorishi <hmorishi@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/04/23 17:57:22 by hmorishi          #+#    #+#             */
/*   Updated: 2021/04/23 17:57:24 by hmorishi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length < 3)
	console.log('Error:less argments');
else {
	try {
	const	http = require('http');
	const	url = process.argv[2];
	const	req = http.get(url, function(res) {
			let	data = "";

			res.on('data', d => {
				data += d;
			})
			res.on('end', () => {
				console.log(data);
			})
		}).on('error', function(err){
			console.log ("Error:" + err.message);
		});
	} catch (err) {
		console.error(err.message);
	}
}

