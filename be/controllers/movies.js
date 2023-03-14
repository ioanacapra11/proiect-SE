const Model = require("../models/model.js");

exports.addMovies = async (req, res) => {
  try {
    const newMovie = new Model({ ...req.body });
    await newMovie.save();
    return res.status(201).json({
      message: "movie added successfully",
      movie: newMovie,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("unable to add movie");
  }
};
