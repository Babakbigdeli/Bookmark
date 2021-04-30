const router = require("express").Router();

const UserController = require("../../controllers/UserController");

router
  .route("/addBook")
  .post(UserController.addBook)


  module.exports = router;