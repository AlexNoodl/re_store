import React from "react";
import { Route, Switch } from "react-router-dom";

import withBookstoreService, { withBooksService } from "../hoc";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";

import "./app.css";

const App = ({ bookstoreService }) => {
   return (
      <main role="main" className="container">
         <ShopHeader numItems={4} total={180} />
         <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/cart" component={CartPage} />
         </Switch>
      </main>
   );
};

export default withBookstoreService()(App);
