import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class QueryString extends Component {

  render() {

    let queries = queryString.parse(this.props.location.search);
    let query = queries.query;
    return (
      <div className="App container" style={{textAlign: "center"}} >
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <div> <i className="fa fa-cogs" /> </div>
        </header>
        <h3>VARIABLE<Link to="This_Page">(/This_Page)</Link>: { this.props.match.params.variable } </h3>
        <h3>QUERY<Link to="?query=dynamic">(?query=dynamic)</Link>: { query } </h3>
      </div>
    );
  }
}

export default QueryString;
