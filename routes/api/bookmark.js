const router = require("express").Router();

const BooksController = require("../../controllers/BooksControllers");

router.route("/")..post(BooksController.create);
router
  .route("/:sub")
  .get(BooksController.findAll)
  .put(BooksController.update)
  .delete(BooksController.remove);

  module.exports = router;