const axios = require("axios");

module.exports = {
  getOpenLibraryBooks: function (req, res) {
    console.log("requesting books from open library");
    const { query } = req;

    axios
      .get("http://openlibrary.org/search.json?q=", {
        params: query,
      })
      .then((response) =>
        response.data.docs.filter(
          (book) =>
            book.key &&
            book.cover_i &&
            book.title &&
            book.author_name &&
            
            book.first_sentence &&
            book.type &&
            book.cover_edition_key &&
            book.publish_year &&
            book.language
            
        )
      )
      .then((filteredBooks) => res.json(filteredBooks))
      .catch((err) => res.status(422).json(err));
  },
};
