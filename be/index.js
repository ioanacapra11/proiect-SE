const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MovieDB = require("node-themoviedb");
const movieGenre = require("./models/movieGenre");
const Movie = require("./models/movie");
const movieRouter = require("./routes/movie");
const movieGenresRouter = require("./routes/movieGenres");
const mdb = new MovieDB("508eab5114758447c19cf43c80dfb2c0", {});
const cors = require("cors");

const app = express();

const PORT = 1234;

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use("/movies", movieRouter);
app.use("/movie-genres", movieGenresRouter);

const getMovieGenre = async () => {
  try {
    const MovieGenre = await mdb.genre.getMovieList();
    movieGenre.insertMany(MovieGenre.data.genres);
  } catch (err) {
    console.log("error getting genres");
  }
};

const getMovies = async () => {
  try {
    for (let i = 1; i <= 200; i++) {
      const movies = await mdb.discover.movie({ query: { page: i } });
      Movie.insertMany(movies.data.results);
    }
  } catch (err) {
    console.log("error getting movies");
  }
};

const initialSeeding = async () => {
  const movieGenreCount = await movieGenre.estimatedDocumentCount();
  if (movieGenreCount === 0) {
    getMovieGenre();
  }
  const movieCount = await Movie.estimatedDocumentCount();
  if (movieCount === 0) {
    getMovies();
  }
};

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/movies");
    console.log("db connected");
  } catch (err) {
    console.log("db error", err);
  }
};

connectDB();
initialSeeding();

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("app is listening on port", PORT);
});
