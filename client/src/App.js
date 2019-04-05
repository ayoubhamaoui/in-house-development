import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar}/>
      </Router>
    );
  }
}

export default App;
