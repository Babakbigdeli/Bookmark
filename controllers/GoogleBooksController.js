const axios = require("axios");
module.exports = {
  getGoogleBooks: function (req, res) {
    console.log("requesting books from google books");
    //const { query } = req;
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params,
      })
      .then((results) =>
        results.data.items.filter(
          (result) =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )

      .then((results) => res.json(results));
  },
};
