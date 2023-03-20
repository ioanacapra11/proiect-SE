const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieGenreSchema = new Schema({
  id: String,
  name: String,
});

const movieGenre = new mongoose.model("movieGenre", movieGenreSchema);

module.exports = movieGenre;
