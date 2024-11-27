const https = require("https");
const mongoose = require("mongoose");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const Precaution = require("../models/Precaution");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to fetch weather data
const fetchWeatherData = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

    https.get(url, (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          if (parsedData.cod !== 200) {
            reject(new Error(parsedData.message));
          } else {
            const detailedWeather = {
              temperature: parsedData.main.temp,
              feels_like: parsedData.main.feels_like,
              humidity: parsedData.main.humidity,
              pressure: parsedData.main.pressure,
              wind_speed: parsedData.wind.speed,
              weather_description: parsedData.weather[0].description,
              weather_main: parsedData.weather[0].main,
              visibility: parsedData.visibility,
              sunrise: parsedData.sys.sunrise,
              sunset: parsedData.sys.sunset,
            };
            resolve(detailedWeather);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", (err) => {
      reject(err);
    });
  });
};

// Function to fetch precautions using Google Generative AI
const fetchPrecautions = async (weatherDescription, locationName) => {
  try {
    const prompt = `Given the current weather conditions:
           Temperature: ${weatherDescription.temperature}°C,
           Feels like: ${weatherDescription.feels_like}°C,
           Humidity: ${weatherDescription.humidity}%,
           Pressure: ${weatherDescription.pressure} hPa,
           Wind Speed: ${weatherDescription.wind_speed} m/s,
           Weather Description: ${weatherDescription.weather_description},
           Visibility: ${weatherDescription.visibility} meters,
           Sunrise: ${new Date(
             weatherDescription.sunrise * 1000
           ).toLocaleTimeString()},
           Sunset: ${new Date(
             weatherDescription.sunset * 1000
           ).toLocaleTimeString()}
           at ${locationName}, what precautions should be taken?`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const precautionsArray = text
      .split("\n")
      .filter((item) => item.trim() !== "");
    return precautionsArray;
  } catch (error) {
    console.error("Error generating text with Google Generative AI:", error);
    throw new Error("Error generating text with Google Generative AI");
  }
};

// Controller function to handle the weather and precautions logic
const getWeatherAndPrecautions = async (req, res) => {
  const { latitude, longitude, locationName } = req.body;

  try {
    const weatherDescription = await fetchWeatherData(latitude, longitude);
    const precautions = await fetchPrecautions(
      weatherDescription,
      locationName
    );

    const newPrecaution = new Precaution({
      location: locationName,
      weather: weatherDescription,
      precautions,
    });
    await newPrecaution.save();

    res.json({ weather: weatherDescription, precautions });
  } catch (error) {
    console.error("Error fetching weather or precautions:", error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

module.exports = { getWeatherAndPrecautions };
