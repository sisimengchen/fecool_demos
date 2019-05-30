import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NotFound from "./components/Error/404";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
