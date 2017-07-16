import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// import pages
import Login from './pages/Login';
import Instagram from './pages/Instagram';
import Facebook from './pages/Facebook';
import Privacy from './pages/Privacy';

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

export default App;
