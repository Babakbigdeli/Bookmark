const router = require("express").Router();

const GuardianController = require("../../controllers/GuardianController");

router.route("/").get(GuardianController.getBooksNews);

module.exports = router;