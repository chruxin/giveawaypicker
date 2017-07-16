import React, { Component } from 'react';

// import components
import LoginButton from '../../components/LoginButton';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Login extends Component {
  render () {
    let error;
    let message;
    console.log('this.props' + JSON.stringify(this.props));
    if (this.props.location.state) {
      error = this.props.location.state.error;
      message = (
        <div>
          <h1>Error encountered! </h1>
          <p>{ error }</p>
        </div>
      );
    } else {
      message = <h1>Welcome! Please log in.</h1>
    }

    return (
      <div>
        <NavBar />
        <div className="text-center">
          {message}
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
