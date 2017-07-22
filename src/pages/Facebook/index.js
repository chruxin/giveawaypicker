import React, { Component } from 'react';

// import components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Facebook extends Component {
  render () {
    document.title = "Facebook";
    
    const loggedIn = false;
    let heading = null;
    if (loggedIn) {
      heading = <h1>Facebook</h1>;
    } else {
      heading = <h1>Facebook - Please log in</h1>;
    }

    return (
      <div>
        <NavBar />
        <div className="text-center">
          { heading }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Facebook;
