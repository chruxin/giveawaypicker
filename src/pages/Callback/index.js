import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Callback extends Component {
  render () {
    const tokenFragment = window.location.hash;
    const errorFragment = window.location.search;
    console.log('Token fragment: ' + tokenFragment);
    console.log('Error fragment: ' + errorFragment);
    if (tokenFragment) {
      console.log('in sucess');
      // URL is: http://redirect-uri#access_token=ACCESS-TOKEN
      const accessToken = tokenFragment.split('=')[1];
      return (
          <Redirect to={{
            pathname: '/instagram',
            state: { token: accessToken }
          }} />
      );
    } else {
      console.log('in unsucessful');
      // URL is: http://redirect-uri?error=access_denied&error_reason=user_denied&error_description=The+user+denied+your+request
      const error = errorFragment.split('?')[1];
      return (
        <Redirect to={{
          pathname: '/',
          from: this.props.location
        }} />
      );
    }
  }
}

export default Callback;
