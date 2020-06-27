import React from "react";

import withBookstoreService, { withBooksService } from "../hoc";

import "./app.css";

const App = ({ bookstoreService }) => {
   console.log(bookstoreService.getBooks());

   return <div>App</div>;
};

export default withBookstoreService()(App);
