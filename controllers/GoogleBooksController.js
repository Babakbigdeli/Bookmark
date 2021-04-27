const axios = require("axios");

module.exports = {
  getGoogleBooks: function (req, res) {
    console.log("requesting books from google books");
    const { query } = req;

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=", {
        params: query,
      })
      .then((response) =>
        response.data.docs.filter(
          (book) =>
          book.volumeInfo.title &&
          book.volumeInfo.pageCount &&
          book.volumeInfo.authors &&
          book.volumeInfo.description &&
          book.volumeInfo.imageLinks &&
          book.volumeInfo.language &&
          book.volumeInfo.imageLinks.thumbnail
            
        )
      )
      .then((filteredBooks) => res.json(filteredBooks))
      .catch((err) => res.status(422).json(err));
  },
};

