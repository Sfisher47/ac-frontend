/* ************************************************************************** */
/*                                                                            */
/*  App.js                                                                    */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Sun Sep 16 20:04:48 2018                        by elhmn        */
/*   Updated: Wed Sep 19 12:22:22 2018                        by bmbarga      */
/*                                                                            */
/* ************************************************************************** */

import 'antd/dist/antd.css';
import React from 'react';
import	Header from './header/Header';
import	Content from './content/Content';
import	Footer from './footer/Footer';
import { PAGES } from './common/Constants';

class	App	extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { contentPage: PAGES.home };
    }

    changeContentPage(data)
    {
        this.setState({ contentPage: data.key});
    }

	render ()
	{
		return (
			<div>
				<Header
                    changeContentPage = {(data) => this.changeContentPage(data)}
                    contentPage = {this.state.contentPage}
                />
				<Content contentPage = {this.state.contentPage}/>
				<Footer />
			</div>
		);
	}
};

export default App;
