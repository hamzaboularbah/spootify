import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import VerifyToken from "../components/VerifyToken";
import Dashboard from "../components/index";

let DashboardRoutes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth/callback" component={VerifyToken} />
      <Route path="/app" component={Dashboard} />
    </Switch>
  );
};

export default DashboardRoutes;
