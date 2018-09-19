/* ************************************************************************** */
/*                                                                            */
/*  LoginForm.js                                                              */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created:                                                 by elhmn        */
/*   Updated: Wed Sep 19 15:46:00 2018                        by bmbarga      */
/*                                                                            */
/* ************************************************************************** */

import	React from 'react';
import
{
    Row,
    Col,
    Form,
    Button,
    Input,
    Icon
} from 'antd';

class      BaseLoginForm extends React.Component
{
    constructor (props)
    {
        super(props);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.props.form.validateFields((err, values) =>
        {
            if (!err)
            {
                console.log("values : ", values); // Debug
            }
        });
    }

    render ()
    {
        const { getFieldDecorator } = this.props.form;
        const emailLogo = <Icon type="mail"/>;

        return (
            <Form layout="horizontal" onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Item>
                {
                    getFieldDecorator('name')
                    (
                        <Input prefix={emailLogo} size="large" placeholder="email" />
                    )
                }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const   LoginForm = Form.create()(BaseLoginForm);

export default LoginForm;
