import React, { useState } from "react";
import axios from "axios";
import TodayData from "./TodayData";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [forecast, setForecast] = useState({
    ready: false,
  });
  let [cityName, setCityName] = useState(props.city);
  let days = [0, 1, 2, 3, 4];
  const ApiKey = `f2178afe12518dc511aab62330608529`;
  let unit = "metric";

  function search() {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${ApiKey}`;
    axios.get(URL).then(handleResponse);
  }
  function forecastSearch() {
    console.log(weatherData.longitude, 1);
    let lat = weatherData.latitude;
    let lon = weatherData.longitude;
    let URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=current,hourly,minutely,alerts&appid=${ApiKey}`;
    axios.get(URL).then(handleForecastAPI);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCityName(event.target.value);
  }

  function handleResponse(response) {
    console.log(weatherData.longitude, 3);
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      MinMax: `⬇${Math.round(response.data.main.temp_min)}° ⬆${Math.round(
        response.data.main.temp_max
      )}° `,
      city: response.data.name,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      icon: response.data.weather[0].icon,
    });

    forecastSearch();
  }
  function handleForecastAPI(response) {
    setForecast({
      ready: true,
      temp: [
        days.map((i) => {
          return ` ${Math.round(
            response.data.daily[i].temp.min
          )}° /${Math.round(response.data.daily[i].temp.max)}° `;
        }),
      ],
      icon: [
        days.map((i) => {
          return response.data.daily[i].weather[0].icon;
        }),
      ],
    });
  }
  if (weatherData.ready && forecast.ready) {
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
          <button>current</button>
        </div>
        <TodayData data={weatherData} />
        <Forecast data={forecast} />
      </div>
    );
  } else {
    search();

    return "Loading";
  }
}
