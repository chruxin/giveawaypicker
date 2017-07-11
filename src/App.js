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
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class About extends Component {
  render () {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}



// class SearchForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     this.handleTextInputChange = this.handleTextInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleTextInputChange(e) {
//     alert('Input update ' + e.target.value);
//     this.setState({value: e.target.value});
//   }
//
//   handleSubmit(e) {
//     alert('Submit in clicked: ' + this.state.value);
//   }
//
//   render() {
//     return (
//       <form>
//         <label>
//           Post link:
//           <input
//             type="text"
//             placeholder="https://www.instagram.com/p/BV5cZJZFiG-/?taken-by=instagram"
//             onChange={this.handleTextInputChange}
//           />
//         </label>
//         <input
//           type="submit"
//           value="Submit"
//           onChange={this.handleSubmit}
//         />
//       </form>
//     );
//   }
// }
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//  handleSubmit(event) {
//    alert("in handleSubmit");
//    event.preventDefault();
//  }
//
//   render() {
//     return (
//       <div className="text-center">
//         <NavBar />
//         <LoginButton />
//         <SearchForm />
//         <Footer />
//       </div>
//     );
//   }
// }

export default App;
