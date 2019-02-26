import axios from "axios";

export default {
  // Gets all books
  getBooks: async function() {
    const bookCall = await axios.get("/api/books");
    return bookCall.data;
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    console.log(id);
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(Title) {
      console.log(Title)
    return axios.post("/api/books", {Title: `${Title.Title}`});
  }
};
