import React, { Component } from 'react';
import { Button } from 'reactstrap';

const clientID = 'b7252bba23044035ab81490a6ba5e11d';

/*
    Helper to get the current redirect uri
    that authentification should go to
    so that both local testing and website work
*/
function getInstagramRedirectURL () {
  if (window.location.hostname === 'localhost') {
    // testing locally on http://localhost:3000
    return 'http://localhost:3000/callback';
  } else {
    // on website http://mandychen.me/giveawaypicker
    return 'http://www.mandychen.me/giveawaypicker/callback';
  }
}

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleInstagramLogin = this.handleInstagramLogin.bind(this);
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
  }

  /*
    Client-side authentification using Instagram API.
    Docs: https://www.instagram.com/developer/authentication/
  */
  handleInstagramLogin(e) {
    e.preventDefault();
    const redirectURL = getInstagramRedirectURL();
    const authenLink = 'https://api.instagram.com/oauth/authorize/?client_id='
                        + clientID + '&redirect_uri=' + redirectURL
                        + '&response_type=token';
    window.location.assign(authenLink); //TODO: use react-router instead
  }

  handleFacebookLogin(e) {
    e.preventDefault();
    alert('Facebook login.');
  }

  render() {
    let page = null;
    if (this.props.page === 'instagram') {
      page = <Button color="primary" onClick={this.handleInstagramLogin}>Instagram Log In</Button>;
    } else if (this.props.page === 'facebook') {
      page = <Button color="primary" onClick={this.handleFacebookLogin}>Facebook Log In</Button>;
    }

    return (
      <div className="text-center">
        { page }
      </div>
    );
  }
}

export default LoginButton;
