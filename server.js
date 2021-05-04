//Requiring in packages
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

//Set up express servers
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Assign PORT value
const PORT = process.env.PORT || 5000;

//Set up serving of static assets from build in client when in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhos/bookmark", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });

    //Start the serverr
    app.listen(PORT, () => {
      console.log("Connected on port:" + PORT);
    });


