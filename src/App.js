import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import About from "./views/about";
import Home from "./views/home";

const App = () => (
  <Router>
    <div>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul> */}

      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);
export default App;
