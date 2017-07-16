import React, { Component } from 'react';

// import components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Privacy extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className="text-center">
          <h1>Privacy Policies</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Privacy;
