const { Schema, model } = require("mongoose");

const modelSchema = new Schema({
  title: { type: String, required: true },
  genre: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  showType: {
    type: String,
    enum: ["movie", "series"],
    default: "movie",
    required: true,
  },
  secondType: {
    type: String,
    enum: ["independent", "hollywood", "award-winning"],
    default: "independent",
    required: true,
  },
});

module.exports = model("model", modelSchema);
