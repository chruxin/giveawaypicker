import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import NavBar from './components/NavBar';
import LoginButton from './components/LoginButton';
import Footer from './components/Footer';

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
        <Footer />
      </div>
    );
  }
}

export default App;
