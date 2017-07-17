import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

function storeAccessToken (accessToken) {
  if (typeof(Storage) !== "undefined") {
    // browser supports localStorage
    localStorage.setItem('access_token', accessToken);
  }
}

class Callback extends Component {
  render () {
    const tokenFragment = window.location.hash;
    const errorFragment = window.location.search;
    if (tokenFragment) {
      // URL is: http://redirect-uri#access_token=ACCESS-TOKEN
      const accessToken = tokenFragment.split('=')[1];
      storeAccessToken(accessToken);
      return (
          <Redirect to={{
            pathname: '/instagram'//,
            //state: { token: accessToken }
          }} />
      );
    } else if (errorFragment){
      // URL is: http://redirect-uri?error=access_denied&error_reason=user_denied&error_description=The+user+denied+your+request
      return (
        <Redirect to={{
          pathname: '/',
          from: this.props.location
        }} />
      );
    } else {
      // TODO: more thorough checks
    }
  }
}

export default Callback;
