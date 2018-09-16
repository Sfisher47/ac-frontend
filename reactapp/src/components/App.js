/* ************************************************************************** */
/*                                                                            */
/*  App.js                                                                    */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Sun Sep 16 20:04:48 2018                        by elhmn        */
/*   Updated: Mon Sep 17 21:01:51 2018                        by elhmn        */
/*                                                                            */
/* ************************************************************************** */

import 'antd/dist/antd.css';
import React from 'react';
import	Header from './Header';
import	Content from './Content';
import	Footer from './Footer';

class	App	extends React.Component
{
	render ()
	{
		return (
			<div>
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
};

export default App;
