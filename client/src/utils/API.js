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

  // getBooks: (email) => {
  //   return axios
  //      .get(`/user/books?email=${email}`)
  //     .then(({ data }) => data || [])
  //     .catch((err) => {
  //       throw new Error(err);
  //     });
  // },

  saveBookToUser: (email, bookId) => {
    return axios.post("/user/books", {
      email,
      bookId,
    });
  },
};
