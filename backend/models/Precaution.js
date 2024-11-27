const mongoose = require("mongoose");

const PrecautionsSchema = new mongoose.Schema({
  location: String,
  weather: Object, // Store detailed weather data as an object
  precautions: [String], // Store precautions as an array of strings
});

const Precaution = mongoose.model("Precaution", PrecautionsSchema);

module.exports = Precaution;
