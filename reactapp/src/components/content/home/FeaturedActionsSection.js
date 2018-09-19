/* ************************************************************************** */
/*                                                                            */
/*  FeaturedActionsSection.js                                                 */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Thu Jan 01 01:00:00 1970                        by elhmn        */
/*   Updated: Wed Sep 19 11:41:25 2018                        by bmbarga      */
/*                                                                            */
/* ************************************************************************** */

import	React from 'react';
import	{ Row, Col } from 'antd';
import	{ Input } from 'antd';
import	'antd/dist/antd.css';
import CardMeta from '../../common/CardMeta.js'

class	FeaturedActionsSection extends React.Component
{
	render ()
	{
		return (
			<div>
				<Row id="featured-actions-section" type="flex" justify="space-around" align="middle">
					<Col>
						<CardMeta />
					</Col>
					<Col>
						<CardMeta />
					</Col>
					<Col>
						<CardMeta />
					</Col>
					<Col>
						<CardMeta />
					</Col>
					<Col>
						<CardMeta />
					</Col>
					<Col>
						<CardMeta />
					</Col>
					<Col>
						<CardMeta />
					</Col>
					<Col>
						<CardMeta />
					</Col>
				</Row>
			</div>
		);
	}
};

export default FeaturedActionsSection;
