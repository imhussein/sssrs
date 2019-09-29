import "regenerator-runtime/runtime";
import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter as Router } from "react-router-dom";
import Routes from "../Routes";
const app = express();
import createStore from "./server_store";
import { Provider } from "react-redux";

app.use("/assets", express.static("src/public"));

app.use(function(req, res, next) {
  const store = createStore();

  const content = renderToString(
    <Provider store={store}>
      <Router location={req.path} context={{}}>
        <Routes />
      </Router>
    </Provider>
  );
  const markup = `
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/assets/client_bundle.js"></script>
      </body>
    </html>
  `;
  res.send(markup);
  next();
});

const port = process.env.PORT || 5003;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
