const router = require("express").Router();
const { addMovies } = require("../controllers/movies.js");

router.post("/add-movies", addMovies);

module.exports = router;
