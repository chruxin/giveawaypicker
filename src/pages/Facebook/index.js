import React, { Component } from 'react';

class Facebook extends Component {
  render () {
    const loggedIn = false;
    let heading = null;
    if (loggedIn) {
      heading = <h1>Facebook</h1>;
    } else {
      heading = <h1>Facebook - Please log in</h1>;
    }

    return (
      <div className="text-center">
        { heading }
      </div>
    );
  }
}

export default Facebook;
