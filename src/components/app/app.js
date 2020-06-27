import React from "react";
import { Route, Switch } from "react-router-dom";

import withBookstoreService, { withBooksService } from "../hoc";
import { HomePage, CartPage } from "../pages";

import "./app.css";

const App = ({ bookstoreService }) => {
   return (
      <Switch>
         <Route path="/" component={HomePage} exact />
         <Route path="/cart" component={CartPage} />
      </Switch>
   );
};

export default withBookstoreService()(App);
