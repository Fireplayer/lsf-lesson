import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
// import Button from 'antd/es/button';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field)=> fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this); 
  }

  handleSubmit(e) {
    console.log("hor =========submit", this.props);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator, isFieldTouched, getFieldError, getFieldsError} = this.props.form;
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout='horizontal' onSubmit={this.handleSubmit} >
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('nickname', {
            rules: [{required: true, message: 'please input'}],
          })(
            <Input 
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder='nickname'
            />
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder="password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            submit
          </Button>
        </Form.Item>
      </Form>     
    );
  }  
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'default'
    }
    this.handleClickSubmit=this.handleClickSubmit.bind(this);
  }
  
  handleClickSubmit(e) {
    const name= e.target.value;
    return this.setState({nickname: name});
  }

  render() {
    const {nickname} = this.state;
    return (
      <form action="1">
        name: <input type="inpue" value={nickname} onChange={this.handleClickSubmit}/>
        <input type="submit" onSubmit={(e)=> {
          e.preventDefault();
          console.log("===========submit");
        }}/>
      </form> 
    );
  }
} 

class Game extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <Login />
        <WrappedHorizontalLoginForm />
      </div>
    );
  }
} 

export {Game};