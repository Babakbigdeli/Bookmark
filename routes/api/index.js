const router = require("express").Router();

const bookmarkRoutes = require("./bookmark");
const guardianRoutes = require("./guardian");
const openlibraryRoutes = require("./openlibrary");

// API Routes
router.use("/books", bookmarkRoutes);
router.use("/openlibrary", openlibraryRoutes);
router.use("/guardian", guardianRoutes);

// In case no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;
