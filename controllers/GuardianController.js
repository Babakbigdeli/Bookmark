const axios = require("axios");

module.exports = {
  getBooksNews: function (req, res) {
    const { query } = req;

    axios
      .get(
        "https://content.guardianapis.com/search?q=books&api-key=ea5c2603-5999-43b3-8ddf-e3db33f0592d",
        {
          params: query,
        }
      )
      .then((response) => {
        console.log(response);
        res.json(response.data);
      })
      .catch((err) => res.status(422).json(err));
  },
};
