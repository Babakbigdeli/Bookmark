const router = require("express").Router();

const bookmarkRoutes = require("./bookmark");
const guardianRoutes = require("./guardian");
const googlebooksRoutes = require("./googlebooks");
const userRoutes = require("./user");

// API Routes
router.use("/books", bookmarkRoutes);
router.use("/user", userRoutes);
router.use("/googlebooks", googlebooksRoutes);
router.use("/guardian", guardianRoutes);

// In case no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;
