/* ************************************************************************** */
/*                                                                            */
/*  LogIn.js                                                                  */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created:                                                 by elhmn        */
/*   Updated: Wed Sep 19 15:45:00 2018                        by bmbarga      */
/*                                                                            */
/* ************************************************************************** */

import	'antd/dist/antd.css';
import	'../../../css/Login.css';
import	React from 'react';
import LoginForm from './LoginForm'
import
{
    Row,
    Col,
} from 'antd';

class	LogIn extends React.Component
{
	render ()
	{
		return (
            <Row id="login-form" type="flex" justify="space-around" align="middle">
					<Col span={6}>
                        <LoginForm />
					</Col>
            </Row>

		);
	}
};

export default LogIn;
