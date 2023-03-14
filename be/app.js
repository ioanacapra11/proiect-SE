const express = require("express");
const bodyParser = require("body-parser");
const { connectDatabase } = require("./database.js");
const movies = require("./routes/movies.js");

const app = express();

const PORT = 1234;

app.use(bodyParser.json());

app.use("/", movies);

connectDatabase();

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("app is listening on port", PORT);
});
