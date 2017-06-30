import React, { Component } from 'react';
import { Button } from 'reactstrap';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="bg-faded">
          <div className="container mt-0">
            <nav className="navbar navbar-toggleable-sm navbar-light">
              <a className="navbar-brand" href="http://www.mandychen.me">
                &#60;MANDY CHEN /&#62;
              </a>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button" data-toggle="collapse"
                data-target="#bd-main-nav"
                aria-controls="bd-main-nav"
                aria-expanded="false"
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>


              <div className="collapse navbar-collapse" id="bd-main-nav">
                <ul className="nav navbar-nav mr-right">
                  <li className="nav-item">
                    <a className="nav-item nav-link" href="#">INSTAGRAM <span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-item nav-link" href="#">FACEBOOK</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">INSTAGRAM <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FACEBOOK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
