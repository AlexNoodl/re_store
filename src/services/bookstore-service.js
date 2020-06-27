export default class BookstoreService {
   getBooks() {
      return [
         { id: 1, title: "React в действии", author: "Mark T. Tomas" },
         { id: 2, title: "Vue.js в действии", author: "Erick Hanchett" },
         { id: 3, title: "Javascript & JQuery", author: "David McFarland" },
      ];
   }
}
