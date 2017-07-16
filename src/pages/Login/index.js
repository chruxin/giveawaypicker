import React, { Component } from 'react';

// import components
import LoginButton from '../../components/LoginButton';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Login extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className="text-center">
          <h1>Welcome! Please log in.</h1>
          <LoginButton page='instagram'/>
          <br></br>
          <LoginButton page='facebook'/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
