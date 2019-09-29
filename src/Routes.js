import React from "react";
import { Route } from "react-router-dom";
import Home from "./client/components/Home";
import Users from "./client/components/Users";

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={Users} />
  </div>
);
