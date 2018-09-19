/* ************************************************************************** */
/*                                                                            */
/*  Header.js                                                                 */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Thu Jan 01 01:00:00 1970                        by elhmn        */
/*   Updated: Wed Sep 19 16:38:10 2018                        by bmbarga      */
/*                                                                            */
/* ************************************************************************** */

import 'antd/dist/antd.css';
import React from 'react';
import	{ Row, Col } from 'antd';
import	{ Menu } from 'antd';
import '../../css/Header.css';
import { PAGES } from '../common/Constants';

class	Header extends React.Component
{

	render ()
	{
		return (
			<Row id="header" type="flex" justify="space-between" align="bottom">
				<Col className="h-100" id="header-logo">
                        <Row id="header" type="flex" justify="space-between" align="middle">
                            Actions Citoyennes
                        </Row>
				</Col>
				<Col>
					<Menu
                        style={{height:60}}
                        size="large"
						mode="horizontal"
                        onClick={this.props.changeContentPage}>
						<Menu.Item key={PAGES.home}>Home</Menu.Item>
						<Menu.Item key={PAGES.create}>Create</Menu.Item>
						<Menu.Item key={PAGES.login}>Log In</Menu.Item>
						<Menu.Item key={PAGES.signin}>Sign In</Menu.Item>
					</Menu>
				</Col>
			</Row>
		);
	}
};

export default Header;
