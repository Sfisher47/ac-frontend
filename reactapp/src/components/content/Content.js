/* ************************************************************************** */
/*                                                                            */
/*  Content.js                                                                */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Thu Jan 01 01:00:00 1970                        by elhmn        */
/*   Updated: Wed Sep 19 12:19:18 2018                        by bmbarga      */
/*                                                                            */
/* ************************************************************************** */

import	'antd/dist/antd.css';
import	'../../css/Content.css';
import	React from 'react';
import	{ Row, Col } from 'antd';
import	{ Input } from 'antd';
import	{ Button } from 'antd';
import  Home from './home/Home';
import  Create from './create/Create';
import  LogIn from './login/LogIn';
import  SignIn from './signin/SignIn';
import { PAGES } from '../common/Constants';

class	Content extends React.Component
{
    getPages()
    {
        let   pages = {};
        pages[PAGES.home] = <Home />;
        pages[PAGES.create] = <Create />;
        pages[PAGES.login] = <LogIn />;
        pages[PAGES.signin] = <SignIn />;
        return (pages);
    }

    renderContentPage()
    {
        return (this.getPages()[this.props.contentPage]);
    }

	render ()
	{
		return (
            <div>
                {this.renderContentPage()}
            </div>
		);
	}
};

export default Content;
