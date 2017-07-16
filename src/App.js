import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import components
import NavBar from './components/NavBar';
import LoginButton from './components/LoginButton';
import Footer from './components/Footer';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />

          <Route exact path="/" component={Login}/>
          <Route path="/instagram" component={Instagram}/>
          <Route path="/facebook" component={Facebook}/>
          <Route path="/privacy" component={Privacy}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

class Login extends Component {
  render () {
    return (
      <div className="text-center">
        <h1>Welcome! Please log in.</h1>
        <LoginButton page='instagram'/>
        <br></br>
        <LoginButton page='facebook'/>
      </div>
    );
  }
}

class Instagram extends Component {
  render () {
    return (
      <div className="text-center">

        <h1>Instagram page</h1>

      </div>
    );
  }
}

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

class Privacy extends Component {
  render () {
    return (
      <div className="text-center">
        <h1>Privacy Policies</h1>
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
