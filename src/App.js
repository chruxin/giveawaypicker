import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import pages
import Login from './pages/Login';
import Instagram from './pages/Instagram';
import Facebook from './pages/Facebook';
import Privacy from './pages/Privacy';
import Callback from './pages/Callback';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/instagram" component={Instagram}/>
          <Route path="/facebook" component={Facebook}/>
          <Route path="/callback" component={Callback}/>
          <Route path="/privacy" component={Privacy}/>
        </div>
      </Router>
    );
  }
}

export default App;
