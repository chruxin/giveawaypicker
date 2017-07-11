import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// import components
import NavBar from './components/NavBar';
import LoginButton from './components/LoginButton';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Instagram}/>
          <Route path="/facebook" component={Facebook}/>
        </div>
      </Router>
    );
  }
}

class Instagram extends Component {
  render () {
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

class Facebook extends Component {
  render () {
    return (
      <div>
        <h2>Facebook</h2>
      </div>
    );
  }
}



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


export default App;
