const { Book, UserInfo } = require("../models");

module.exports = {
  addBook: function (req, res) {
    const { email, bookId } = req.body;

    console.log("body: ", req.body);

    console.log("Email and bookid: ", email);

    UserInfo.findOne({ email }).then((user) => {
      console.log("I am the user: ", user);
      console.log("user: ", user);

      UserInfo.findOneAndUpdate({ email }, { $push: { books: bookId } })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    });
  },
  getBooks: function (req, res) {
    const email = req.query.email;
    console.log("email: ", email);

    UserInfo.findOne({ email })
      .then(async (user) => {
        const books = [];

        console.log("user: ", user);

        for (const bookId of user.books) {
          books.push(await Book.findById({ _id: bookId }));
        }

        console.log("Books: ", books);

        res.json(books);
      })
      .catch((err) => res.status(404).json(err));
  },
};
