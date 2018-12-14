import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/loginForm';
import Button from '@material-ui/core/Button';

class LoginPage extends React.Component {
  submit (e) {
    e.preventDefault();
    console.log('it works!');
  }
  render () {
    return (
      <div>
        <h1>Login page2!!</h1>
        <LoginForm onSubmit={this.submit}/>
      </div>
    );
  }
}

export default LoginPage;
