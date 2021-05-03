import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  findBooks: function (q) {
    console.log("Called findBooks");
    return axios.get("/googlebooks/", { params: { q: "title:" + q } });
  },
  saveBook: function (bookObject) {
    return axios.post("/books/", bookObject);
  },

  getBooks: () => {
    return axios.get("/books/");
  },

  deleteBook: (id) => {
    return axios.delete("/books/" + id);
  },

  updateBook: (newBookData, id) => {
    return axios.put("/books/" + id, newBookData);
  },
};
