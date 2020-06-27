export default class BookstoreService {
   getBooks() {
      return [
         {
            id: 1,
            title: "React в действии",
            author: "Mark T. Tomas",
            price: 32,
            bookCover:
               "https://e-shop.ru/upload/iblock/b02/b02664fb865181ad7a27ad20b9b96724.jpg",
         },
         {
            id: 2,
            title: "Vue.js в действии",
            author: "Erick Hanchett",
            price: 24,
            bookCover: "https://cook.minemshop.ru/image/1027362663.jpg",
         },
         {
            id: 3,
            title: "Javascript & JQuery",
            author: "David McFarland",
            price: 35,
            bookCover: "https://cdn1.ozone.ru/multimedia/1016412966.jpg",
         },
      ];
   }
}
