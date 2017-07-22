import React, { Component } from 'react';

// import components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Facebook extends Component {
  render () {
    document.title = "Facebook";

    return (
      <div>
        <NavBar />
        <div className="text-center">
          <h1>Page under development. Thanks for visiting.</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Facebook;
