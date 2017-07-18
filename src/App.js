import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import pages
import Login from './pages/Login';
import Instagram from './pages/Instagram';
import Facebook from './pages/Facebook';
import Privacy from './pages/Privacy';
import Callback from './pages/Callback';

const baseUrl = process.env.PUBLIC_URL;

class App extends Component {
  render () {
    console.log('process.env: ' + JSON.stringify(process.env));
    return (
      <Router>
        <div>
          <Route exact path={baseUrl + "/"} component={Login}/>
          <Route path={baseUrl + "/instagram"} component={Instagram}/>
          <Route path={baseUrl + "/facebook"} component={Facebook}/>
          <Route path={baseUrl + "/callback"} component={Callback}/>
          <Route path={baseUrl + "/privacy"} component={Privacy}/>
        </div>
      </Router>
    );
  }
}

export default App;
