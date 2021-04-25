/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hmorishi <hmorishi@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/04/23 17:57:43 by hmorishi          #+#    #+#             */
/*   Updated: 2021/04/23 18:05:12 by hmorishi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length < 3)
	console.log('Error:less argments');
else {
	try {
		const	http = require('http');
		const	url = process.argv[2];
		const	req = http.get(url, res => {
					let	data = ""; 
					let	count = 0;

					res.on('data', d => {
						data += d;
						count += d.length;
					})
					res.on('end', () => {
							console.log(count);
							console.log(data);
						})
				}).on('error', function(err) {
						console.log ("Error:" + err.message);
					});
	} catch (err) {
		console.error(err.message);
	}
}
