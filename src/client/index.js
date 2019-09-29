import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "../Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
