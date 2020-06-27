import React from "react";

import BookList from "../book-list/";

const HomePage = () => {
   const books = [
      { id: 1, title: "React в действии", author: "Mark T. Tomas" },
      { id: 2, title: "Vue.js в действии", author: "Erick Hanchett" },
      { id: 3, title: "Javascript & JQuery", author: "David McFarland" },
   ];
   return <BookList books={books} />;
};

export default HomePage;
