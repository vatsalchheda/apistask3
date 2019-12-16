import React, { Component, useEffect } from "react";
import Nav from "./Nav";
class PageNotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Error: Page Not Found</h1>
      </div>
    );
  }
}

export default PageNotFound;
