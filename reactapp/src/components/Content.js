/* ************************************************************************** */
/*                                                                            */
/*  Content.js                                                                */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Thu Jan 01 01:00:00 1970                        by elhmn        */
/*   Updated: Mon Sep 17 23:00:45 2018                        by elhmn        */
/*                                                                            */
/* ************************************************************************** */

import	'antd/dist/antd.css';
import	'../css/Content.css';
import	React from 'react';
import	{ Row, Col } from 'antd';
import	{ Input } from 'antd';
import	{ Button } from 'antd';
import	FeaturedActionsSection from './FeaturedActionsSection.js'
import  ExplainParticipationSection from './ExplainParticipationSection.js'
import  ExplainCreateSection from './ExplainCreateSection.js'
import	CreateSection from './ExplainCreateSection.js'

import	SearchSection from './SearchSection.js'

class	Content extends React.Component
{
	render ()
	{
		return (
			<div>
				<Row type="flex" justify="space-around" align="middle">
					<Col span={24}>
						<SearchSection/>
					</Col>
				</Row>
				<Row id="expl-part-container" type="flex" justify="space-around" align="middle">
					<Col span={16}>
						<ExplainParticipationSection />
					</Col>
				</Row>
				<Row id="featured-section-container" type="flex" justify="space-around" align="middle">
					<Col span={16}>
						<FeaturedActionsSection />
					</Col>
				</Row>
				<Row id="expl-create-container" type="flex" justify="space-around" align="middle">
					<Col span={16}>
						<ExplainCreateSection />
					</Col>
				</Row>
				<Row id="create-container" type="flex" justify="space-around" align="middle">
					<Col span={16}>
						<CreateSection />
					</Col>
				</Row>
			</div>
		);
	}
};

export default Content;
