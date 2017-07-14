import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    const currentYear = (new Date()).getFullYear();

    return (
      <footer className="footer">
        <div className="container pt-3 text-center">
          <span>
            Hosted on&nbsp;
            <a href="https://github.com/42mandychen/giveawaypicker" className="site-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <br></br>
            Copyright © { currentYear }&nbsp;
            <a href="http://mandychen.me" className="site-link" target="_blank" rel="noopener noreferrer">
              Mandy Chen
            </a>.
            &nbsp;<a href="/privacy" className="site-link">Privacy</a>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
