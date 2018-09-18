/* ************************************************************************** */
/*                                                                            */
/*  Header.js                                                                 */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Thu Jan 01 01:00:00 1970                        by elhmn        */
/*   Updated: Mon Sep 17 22:58:05 2018                        by elhmn        */
/*                                                                            */
/* ************************************************************************** */

import 'antd/dist/antd.css';
import React from 'react';
import	{ Row, Col } from 'antd';
import	{ Menu } from 'antd';
import '../../css/Header.css';

class	Header extends React.Component
{
	render ()
	{
		return (
			<Row id="header" type="flex" justify="space-between" align="middle">
				<Col>
					Actions Citoyennes
				</Col>
				<Col>
					<ul
						mode="horizontal">
						<li>Home</li>
						<li>Create</li>
						<li>Log In</li>
						<li>Sign In</li>
					</ul>
				</Col>
			</Row>
		);
	}
};

export default Header;
