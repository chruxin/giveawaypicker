import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <input
        type="submit"
        value="Instagram Log In"
        onClick={this.handleLogin}
      />
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <LoginButton />
        <SearchForm />
      </div>
    );
  }
}

export default App;
