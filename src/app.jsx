import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NotFound from "./components/Error/404";

const getPath = path => {
  if (window.__args && window.__args.env && window.__args.env == "production") {
    return '/fecool_demos' + path;
  }
  return path;
};

ReactDOM.render(
  <Router>
    <Switch>
      <Route path={getPath('/')} exact component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
