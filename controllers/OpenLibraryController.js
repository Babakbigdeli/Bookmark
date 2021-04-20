const axios = require("axios");

module.exports = {
  getOpenLibraryBooks: function (req, res) {
    const { query } = req;

    axios
      .get("http://openlibrary.org/search.json?q=", {
        params: query,
      })
      .then((response) => {
        console.log(response);
        res.json(response.data);
      })
      .catch((err) => res.status(422).json(err));
  },
};
