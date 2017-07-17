import React, { Component } from 'react';

// import components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LoginButton from '../../components/LoginButton';

function verfiyToken (token) {
  // TODO: verifyToken in background
  return true;
}

class Instagram extends Component {
  render () {
    const token = localStorage.getItem('access_token');
    let isTokenValid = false;
    if (token) {
      if (verfiyToken(token)) {
        isTokenValid = true;
      }
    }
    let body;

    if (isTokenValid) {
      body = <p>{ token }</p>;
    } else {
      body = (
        <div>
          <h1>Please log in.</h1>
          <LoginButton page='instagram'/>
        </div>
      );
    }

    return (
      <div>
        <NavBar />
        <div className="text-center">
          <h1>Instagram page</h1>
          <p>{ body }</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Instagram;
