/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hmorishi <hmorishi@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/04/23 17:56:59 by hmorishi          #+#    #+#             */
/*   Updated: 2021/04/23 17:57:06 by hmorishi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length < 3)
	console.log('Error:no file name');
else {
	const	fs = require("fs");
	const	file_path = process.argv[2];
	try {
		const	file = fs.readFileSync(file_path);
		const	text = file.toString();
		const	len = file.length;
		let		sum = 0;

		for (let i = 0; i < len; i++) {
			if (text[i] == '\n')
				sum++;
		}
		console.log(sum);
	} catch (err) {
		console.error(err.message);
	}
}
