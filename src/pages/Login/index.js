import LoginButton from '../../components/LoginButton';
import React, { Component } from 'react';

class Login extends Component {
  render () {
    return (
      <div className="text-center">
        <h1>Welcome! Please log in.</h1>
        <LoginButton page='instagram'/>
        <br></br>
        <LoginButton page='facebook'/>
      </div>
    );
  }
}

export default Login;
