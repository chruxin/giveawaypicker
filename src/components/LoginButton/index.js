import React, { Component } from 'react';
import { Button } from 'reactstrap';

const clientID = 'b7252bba23044035ab81490a6ba5e11d';

// Helper to get the current redirect uri
// that authentification should go to
// so that both local testing and website work
function getCurrentRedirectURI () {
  if (window.location.href.indexOf('localhost') !== -1) {
    // local testing on http://localhost:3000
    return 'http://localhost:3000';
  } else {
    // on website http://mandychen.me/giveawaypicker
    return 'http://mandychen.me/giveawaypicker';
  }
}

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleLogin = this.handleLogin.bind(this);
  }

  // Client-side authentification using Instagram API.
  // Docs: https://www.instagram.com/developer/authentication/
  handleLogin(e) {
    e.preventDefault();
    const redirectURI = getCurrentRedirectURI();
    const authenLink = 'https://api.instagram.com/oauth/authorize/?client_id='
                        + clientID + '&redirect_uri=' + redirectURI
                        + '&response_type=token';
    window.location.assign(authenLink);
    // TODO: check if user authorized or not
    const accessToken = window.location.href.split('=')[1];
  }

  render() {
    return (
    <Button color="primary" onClick={this.handleLogin}>Instagram Log In</Button>
    );
  }
}

export default LoginButton;
