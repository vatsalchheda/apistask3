import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
// import Results from './Results'
import Compare from "./Compare";
import PageNotFound from "./PageNotFound";
import Search from "./Search";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Define a React App component here. A component may have:
// - state
// - lifecycle event (e.g. appear / disappear from screen)
// - UI

class App extends React.Component {
  render = () => {
    return (
      <Router>
        <div className="container ">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/compare" component={Compare} />
            {/* <Route path='/compare/results' component={Results} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
