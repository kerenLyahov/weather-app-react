import React, { useState } from "react";
import axios from "axios";
import Datetime from "react-datetime";
import TodayData from "./TodayData";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);

    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      MinMax: `⬇${Math.round(response.data.main.temp_min)}     ⬆${Math.round(
        response.data.main.temp_max
      )} `,
      city: response.data.name,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <TodayData
          windspeedValue={weatherData.windspeed}
          humidityValue={weatherData.humidity}
          descriptionValue={weatherData.description}
          //   sunriseValue={weatherData.sunrise}
          //   sunsetValue={weatherData.sunset}
          minmaxValue={weatherData.MinMax}
          tempValue={weatherData.temp}
          cityValue={weatherData.city}
        />
        <Forecast lon={weatherData.longitude} lat={weatherData.latitude} />
      </div>
    );
  } else {
    const ApiKey = `f2178afe12518dc511aab62330608529`;

    let unit = "metric";
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${unit}&appid=${ApiKey}`;
    axios.get(URL).then(handleResponse);

    return "Loading";
  }
}
