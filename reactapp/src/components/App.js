/* ************************************************************************** */
/*                                                                            */
/*  App.js                                                                    */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Sun Sep 16 20:04:48 2018                        by elhmn        */
/*   Updated: Tue Sep 18 14:29:57 2018                        by bmbarga      */
/*                                                                            */
/* ************************************************************************** */

import 'antd/dist/antd.css';
import React from 'react';
import	Header from './header/Header';
import	Content from './content/Content';
import	Footer from './footer/Footer';

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
