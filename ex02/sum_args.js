/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hmorishi <hmorishi@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/04/23 17:56:43 by hmorishi          #+#    #+#             */
/*   Updated: 2021/04/23 17:56:45 by hmorishi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let res;
let i;
let	len;

res = 0;
i = 2
len = process.argv.length;

while(i < len)
	res += Number.parseInt(process.argv[i++], 10);

if (len < 3)
	console.log('Error:less arguments');
else if (res != res)
	console.log('Error:convert fault');
else
	console.log(res);
