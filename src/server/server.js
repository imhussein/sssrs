import "regenerator-runtime/runtime";
import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import createStore from "./server_store";
import { Provider } from "react-redux";
import { renderRoutes, matchRoutes } from "react-router-config";
import serialize from "serialize-javascript";
const app = express();

app.use("/assets", express.static("src/public"));

app.use(function(req, res, next) {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    if (route.loadData) {
      return route.loadData(store);
    } else {
      return null;
    }
  });

  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <Router location={req.path} context={{}}>
          <div>{renderRoutes(Routes)}</div>
        </Router>
      </Provider>
    );
    const markup = `
      <html>
        <head>
        </head>
        <body>
          <div id="root">${content}</div> 
          <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
          <script src="/assets/client_bundle.js"></script>
        </body>
      </html>
    `;
    res.send(markup);
    next();
  });
});

const port = process.env.PORT || 5003;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
