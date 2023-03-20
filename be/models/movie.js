const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  genre_ids: [Number],
  release_date: String,
  vote_average: Number,
  overview: String,
  original_language: String,
});

const movie = new mongoose.model("Movie", movieSchema);

module.exports = movie;
