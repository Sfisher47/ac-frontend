/* ************************************************************************** */
/*                                                                            */
/*  Home.js                                                                   */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created:                                                 by elhmn        */
/*   Updated: Wed Sep 19 15:20:22 2018                        by bmbarga      */
/*                                                                            */
/* ************************************************************************** */

import	'antd/dist/antd.css';
import	'../../../css/Home.css';
import	React from 'react';
import	{ Row, Col } from 'antd';
import	{ Input } from 'antd';
import	{ Button } from 'antd';

import	FeaturedActionsSection from './FeaturedActionsSection';
import  ExplainParticipationSection from './ExplainParticipationSection';
import  ExplainCreateSection from './ExplainCreateSection';
import	CreateSection from './ExplainCreateSection';
import	SearchSection from './SearchSection';

class	Home extends React.Component
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

export default Home;
