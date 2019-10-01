import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "../Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { renderRoutes } from "react-router-config";

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(Routes)}</div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
