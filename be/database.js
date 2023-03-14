const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.URI);
    console.log("database connected!");
  } catch (error) {
    console.log(error);
  }
};