import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../utils/history";
import Expenses from "../pages/Expenses";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Expenses} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
