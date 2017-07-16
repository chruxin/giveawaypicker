import React, { Component } from 'react';

// import components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Instagram extends Component {
  render () {
    let token;
    if (this.props.location.state) {
      token = this.props.location.state.token;
    }

    return (
      <div>
        <NavBar />
        <div className="text-center">
          <h1>Instagram page</h1>
          <p>{ token }</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Instagram;
