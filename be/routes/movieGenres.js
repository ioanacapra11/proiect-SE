const express = require("express");
const router = express.Router();
const MovieGenres = require("../models/movieGenre");

router.get("/", async (req, res) => {
  try {
    const moviesGenres = await MovieGenres.find({});
    return res.status(200).send(moviesGenres);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send(err);
  }
});

module.exports = router;
