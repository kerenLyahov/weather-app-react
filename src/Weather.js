import React, { useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import TodayData from "./TodayData";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({
    ready: false,
    unit: "metric",
  });
  let [forecast, setForecast] = useState({
    ready: false,
  });
  let [cityName, setCityName] = useState(props.city);
  let days = [0, 1, 2, 3, 4];
  const ApiKey = `f2178afe12518dc511aab62330608529`;

  function search() {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${weatherData.unit}&appid=${ApiKey}`;
    axios.get(URL).then(handleResponse);
  }
  function forecastSearch() {
    let lat = weatherData.latitude;
    let lon = weatherData.longitude;
    let URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${weatherData.unit}&exclude=current,hourly,minutely,alerts&appid=${ApiKey}`;
    axios.get(URL).then(handleForecastAPI);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setForecast({ ready: false });
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
      farenhaitTemp: [
        days.map((i) => {
          return ` ${Math.round(
            (response.data.daily[i].temp.min * 9) / 5 + 32
          )}° /${Math.round((response.data.daily[i].temp.max * 9) / 5 + 32)}° `;
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
        <TodayData data={weatherData} futurData={forecast} />
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
