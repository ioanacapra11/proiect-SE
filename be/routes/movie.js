const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

//http://localhost:1234/movies/
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({})
      .skip((req.query.page - 1) * 20)
      .limit(20);
    return res.status(200).send(movies);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send(err);
  }
});

//http://localhost:1234/movies/rating?page=1&min=8&max=10
router.get("/rating", async (req, res) => {
  try {
    const movies = await Movie.find({})
      .$where(
        `this.vote_average >= ${req.query.min} && this.vote_average <= ${req.query.max}`
      )
      .skip((req.query.page - 1) * 20)
      .limit(20);
    return res.status(200).send(movies);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send(err);
  }
});

module.exports = router;
