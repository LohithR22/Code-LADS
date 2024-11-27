import Sidebar from './Sidebar';
import './HomePage.css'; // Ensure you have a CSS file for styling

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import './HomePage.css';

function HomePage() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [precautions, setPrecautions] = useState(null);

  const REVERSE_GEOCODING_API_KEY = "b0854222795747048ebd1b95ad4568d4"; // Replace with your API key
  const GEOCODING_API_URL = "https://api.opencagedata.com/geocode/v1/json";

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, cityName) => {
      try {
        const response = await fetch("http://localhost:5000/api/weather", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            latitude,
            longitude,
            locationName: cityName,
          }),
        });

        const weatherData = await response.json();
        setWeather(weatherData.weather);

        const precautionsText = Array.isArray(weatherData.precautions)
          ? weatherData.precautions.join("\n")
          : weatherData.precautions;
        setPrecautions(precautionsText);
      } catch (error) {
        console.error("Error fetching weather and precautions:", error);
      }
    };

    const getCityAndCountry = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `${GEOCODING_API_URL}?q=${latitude}+${longitude}&key=${REVERSE_GEOCODING_API_KEY}`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          const { city, country } = data.results[0].components;
          return `${city || "bengaluru"}, ${country || "Unknown Country"}`;
        }
        return "Unknown Location";
      } catch (error) {
        console.error("Error getting city and country:", error);
        return "Unknown Location";
      }
    };

    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });

            const cityName = await getCityAndCountry(latitude, longitude);
            fetchWeather(latitude, longitude, cityName);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <div className="container">
      <h1 id='h1'>Weather and Precautions</h1>
      {location && (
        <p>
          <span>Location coordinates</span><br></br> Latitude: {location.latitude}<br></br> Longitude:{" "}
          {location.longitude}
        </p>
      )}
      {weather && (
        <>
          <p>
            <span>City:</span> Bengaluru
          </p>
          <p>
            <span>Temperature:</span> {weather.temperature}°C
          </p>
          <p>
            <span>Weather Description:</span> {weather.weather_description}
          </p>
        </>
      )}
      {precautions && (
        <div>
          <h2>Precautions</h2>
          <ReactMarkdown className="precautions-list">
            {precautions}
          </ReactMarkdown>
        </div>
      )}
      <div className="footer">
        <p>Stay safe and take necessary precautions!</p>
      </div>
    </div>
  );
}

export default HomePage;
