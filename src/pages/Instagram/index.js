import React, { Component } from 'react';

import './instagram.css';

// import components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LoginButton from '../../components/LoginButton';
import InstagramForm from '../../components/InstagramForm';

function verfiyToken (token) {
  // TODO: verifyToken in background
  return true;
}

class Instagram extends Component {
  render () {
    document.title = "Instagram";

    const token = localStorage.getItem('access_token');
    let isTokenValid = false;
    if (token) {
      if (verfiyToken(token)) {
        isTokenValid = true;
      }
    }
    let body;

    if (isTokenValid) {
      body = (
        <div>
          <p>Random user(s) that followed the following rules will be picked.</p>
          <InstagramForm />
        </div>
      );
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
        <div className="container text-center body">
          <h1>Instagram Picker</h1>
          { body }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Instagram;
