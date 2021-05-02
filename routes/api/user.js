const router = require("express").Router();

const UserController = require("../../controllers/UserController");

router
  .route("/books/:email")
  .post(UserController.addBook)
  .get(UserController.getBooks)


  module.exports = router;