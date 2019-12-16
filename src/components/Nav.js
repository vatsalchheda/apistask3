import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App border-bottom">
        <div className="bg-black  ">
          <a className="navbar-brand col-sm-3">Github</a>
          <a className="navbar-brand col-sm-3">Home</a>
          <a className="navbar-brand col-sm-3">Search</a>
          <a className="navbar-brand col-sm-1">Compare</a>
        </div>
      </div>
    );
  }
}

export default Home;
