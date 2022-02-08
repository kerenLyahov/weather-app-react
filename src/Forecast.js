import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [forecast, setForecast] = useState({
    ready: false,
    temp: [],
  });
  let date = new Date();
  let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let days = [0, 1, 2, 3, 4];

  function search() {
    let unit = "metric";
    let key = `f2178afe12518dc511aab62330608529`;
    let URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=${unit}&exclude=current,hourly,minutely,alerts&appid=${key}`;
    axios.get(URL).then(handleAPI);
  }

  function handleAPI(response) {
    setForecast({
      ready: true,
      temp: [
        days.map((i) => {
          return ` ${Math.round(
            response.data.daily[i].temp.min
          )}° /${Math.round(response.data.daily[i].temp.max)}° `;
        }),
      ],
    });
  }

  if (forecast.ready) {
    return (
      <div className="body">
        {days.map((i) => {
          return (
            <span className="forcast" key={i}>
              <span>
                {date.getDay() + i + 1 < 7
                  ? dayName[date.getDay() + i + 1]
                  : dayName[date.getDay() + i - 6]}
              </span>
              <div>☀</div>
              <div>{forecast.temp[0][i]}</div>
            </span>
          );
        })}
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
