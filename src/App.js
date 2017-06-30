import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import NavBar from './components/NavBar';

class SearchForm extends Component {
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

class LoginButton extends Component {
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
