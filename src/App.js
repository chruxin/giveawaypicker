import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextInputChange(e) {
    alert('Input update ' + e.target.value);
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert('Submit in clicked: ' + this.state.value);
  }

  render() {
    return (
      <form>
        <label>
          Post link:
          <input
            type="text"
            placeholder="https://www.instagram.com/p/BV5cZJZFiG-/?taken-by=instagram"
            onChange={this.handleTextInputChange}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onChange={this.handleSubmit}
        />
      </form>
    );
  }
}

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    alert('Log in button in clicked: ' + this.state.value);
  }

  render() {
    return (
    <Button color="primary" onClick={this.handleLogin}>Instagram Log In</Button>
    );
  }
}

class NavBar extends React.Component {
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
                    <a className="nav-item nav-link" href="http://mandychen.me/projects">INSTAGRAM <span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-item nav-link" href="http://mandychen.me/about">FACEBOOK</a>
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


class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleSubmit(event) {
   alert("in handleSubmit");
   event.preventDefault();
 }

  render() {
    return (
      <div className="text-center">
        <NavBar />
        <LoginButton />
        <SearchForm />
      </div>
    );
  }
}

export default App;
