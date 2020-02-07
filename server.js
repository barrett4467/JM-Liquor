const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();


//Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

//DB connection 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jmliquors");

// Start the API server
app.listen(PORT, function() {
  // console.log(process.env.REACT_APP_API_KEY);
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
