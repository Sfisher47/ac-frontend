import 'antd/dist/antd.css';
import React from 'react';
import	{ Row, Col } from 'antd';
import	{ Input } from 'antd';

class	SearchSection extends React.Component
{
	render ()
	{
		return (
			<Row id="search-section" type="flex" justify="space-around" align="middle">
				<Col span={8}>
					<Input.Search
						id = "search-bar"
						placeholder="input search text"
						onSearch={value => console.log(value)}
						size = "large"
						enterButton
					/>
				</Col>
			</Row>
		);
	}
};

export default SearchSection;
