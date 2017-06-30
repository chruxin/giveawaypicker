import React, { Component } from 'react';
import { Button } from 'reactstrap';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    alert('Log in button in clicked: ' + window.location.href);
  }

  render() {
    return (
    <Button color="primary" onClick={this.handleLogin}>Instagram Log In</Button>
    );
  }
}

export default LoginButton;
