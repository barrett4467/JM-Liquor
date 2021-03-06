import axios from "axios";

export default {
  // Gets all 
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves an item to the database
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  }
};
