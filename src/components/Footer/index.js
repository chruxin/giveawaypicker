import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    var currentYear = (new Date()).getFullYear();

    return (
      <footer className="footer">
        <div className="container pt-3">
          <span>
            Hosted on&nbsp;
            <a href="https://github.com/42mandychen/giveawaypicker" className="site-link" target="_blank">GitHub</a>
            <br></br>
            Copyright © { currentYear }&nbsp;
            <a href="http://mandychen.me" className="site-link" target="_blank">Mandy Chen</a>.
            &nbsp;<a href="#" className="site-link">Privacy</a>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
