import React, { useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import TodayData from "./TodayData";
import CurrentLocation from "./CurrentLocation.js";
import ForecastData from "./ForecastData";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({
    ready: false,
    unit: "metric",
  });

  let [cityName, setCityName] = useState(props.city);

  const ApiKey = `f2178afe12518dc511aab62330608529`;

  function search() {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${weatherData.unit}&appid=${ApiKey}`;
    axios.get(URL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function updateCity(event) {
    setCityName(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      unit: "metric",
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      city: response.data.name,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      icon: response.data.weather[0].icon,
    });
  }

  function getLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          <CurrentLocation data={position} />;
        },
        () => {
          alert("Unable to retrieve your location");
        }
      );
    }
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="searchBody">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              onChange={updateCity}
            />
            <input type="submit" className="searchButton" value="search" />
          </form>
        </div>
        <TodayData data={weatherData} />
        <ForecastData data={weatherData} />
      </div>
    );
  } else {
    search();

    return (
      <div>
        <div className="sweet-loading">
          <BeatLoader color={`#3C7DD9`} size={100} speedMultiplier={0.66} />
        </div>
      </div>
    );
  }
}
