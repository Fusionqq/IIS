import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {Home, Rules, Header} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="mainContainer">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/rules" component={Rules}/>
        </div>
      </Router>
    );
  }
}

export default App;
