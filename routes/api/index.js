const router = require("express").Router();
const path = require("path");

const bookmarkRoutes = require("./bookmark");
const guardianRoutes = require("./guardian");
const googlebooksRoutes = require("./googlebooks");

// API Routes
router.use("/books", bookmarkRoutes);
router.use("/googlebooks", googlebooksRoutes);
router.use("/guardian", guardianRoutes);

// In case no API routes are hit, send the React app
router.use(function (req, res) {
  console.log("Serving app because no other routes found");
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;
