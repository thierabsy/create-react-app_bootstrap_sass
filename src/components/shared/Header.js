import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <Link to="/"><button className="btn btn-default">HOME</button></Link>
          <Link to="/page"><button className="btn btn-default">PAGE2</button></Link>
          <Link to="/dynamic/variable"><button className="btn btn-default">QUERY</button></Link>
        </header>
      </div>
    );
  }
}

export default Header;
