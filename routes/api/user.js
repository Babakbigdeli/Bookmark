const router = require("express").Router();

const UserController = require("../../controllers/UserController");

router
  .route("/books")
  .post(UserController.addBook)
  .get(UserController.getBooks)


  module.exports = router;