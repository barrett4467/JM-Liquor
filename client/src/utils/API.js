import axios from "axios";

export default {
  // Gets all books
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("/api/item/" + id);
  },
  // Saves a book to the database
  saveItem: function(itemData) {
    return axios.post("/api/item", itemData);
  }
};
