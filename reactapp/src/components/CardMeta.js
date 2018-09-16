/* ************************************************************************** */
/*                                                                            */
/*  CardMeta.js                                                               */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Thu Jan 01 01:00:00 1970                        by elhmn        */
/*   Updated: Mon Sep 17 22:42:02 2018                        by elhmn        */
/*                                                                            */
/* ************************************************************************** */

import	React from 'react';
import	{ Row, Col, Card } from 'antd';
import	'antd/dist/antd.css';

class	CardMeta extends React.Component
{
	render ()
	{
		return (
			<Card
				hoverable
				style={{ width: 240 , margin: 20}}
				cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				>
				<Card.Meta
					title="Europe Street beat"
					description="www.instagram.com"
				/>
			</Card>
		);
	}
};

export default CardMeta;
