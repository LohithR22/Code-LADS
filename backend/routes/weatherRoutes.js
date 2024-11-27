const express = require("express");
const router = express.Router();
const { getWeatherAndPrecautions } = require("../controllers/weatherController");

router.post("/weather", getWeatherAndPrecautions);

module.exports = router;
