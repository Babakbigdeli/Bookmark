const router = require("express").Router();

const OpenLibraryController = require("../../controllers/OpenLibraryController");

router.route("/").get(OpenLibraryController.getOpenLibraryBooks);