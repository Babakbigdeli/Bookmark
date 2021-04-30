const User = require("../models/user");


module.exports = {
  addBook: function(req, res) {
    console.log("Controller hit")
        const {email, bookId} = req.body;

        console.log("Email and bookid: ", email)

        const user = User.findOne({_id: "608b2002a9c17c001686af99"}).then((user) => {
          console.log("I am the user: ", user)
          console.log("user: ", user)
  
          User.findOneAndUpdate({ email }, {$push: {books: bookId}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        })

      },
}

  