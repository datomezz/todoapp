import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/author" exact render={() => <h1>Datomezz</h1>} />
          <Route render={() => <h1>404</h1>} />
          <Redirect to={"/"} />
        </Switch>
      </Router>
    </ErrorBoundry>
  </Provider>
  , document.getElementById("root"));
