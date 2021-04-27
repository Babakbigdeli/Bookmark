const router = require("express").Router();

const GoogleBooksController = require("../../controllers/GoogleBooksController");

router.route("/").get(GoogleBooksController.getGoogleBooks);

module.exports = router;