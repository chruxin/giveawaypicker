import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,  Link, Route } from 'react-router-dom'

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
          <ul>

            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <Route exact path="/" component={Instagram}/>
          <Route path="/facebook" component={Facebook}/>
          <Route path="/privacy" component={Privacy}/>
          <Route path="/topics" component={Topics}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

class Topics extends Component {
  /* Useless constructor
  constructor (props) {
    super(props);
  }
  */

  render () {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
        <Route exact path={this.props.match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    );

  }
}

class Topic extends Component {
  /* Useless constructor
  constructor (props) {
    super(props);
  }
  */

  render () {
    return (
      <div>
        <h3>{this.props.match.params.topicId}</h3>
      </div>
    );
  }
}


class Instagram extends Component {
  render () {
    return (
      <div className="text-center">

        <LoginButton />
        <SearchForm />

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
