import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App border-bottom">
        <div className="bg-black  ">
          <Link to="/" className="navbar-brand col-sm-3">
            Github
          </Link>
          <Link to="/" className="navbar-brand col-sm-3">
            Home
          </Link>
          <Link to="/Search" className="navbar-brand col-sm-3">
            Search
          </Link>
          <Link to="/Compare" className="navbar-brand col-sm-1">
            Compare
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
