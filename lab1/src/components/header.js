import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../App.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
            <Link className="link" to="/"><button className="button">Home</button></Link>
            <Link className="link" to="/rules"><button className="button">Rules</button></Link>
        </div>
    );
  }
}

export default Header;
