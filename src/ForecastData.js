import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";
import "./ForecastData.css";

export default function ForecastData(props) {
  let date = new Date();
  let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let days = [0, 1, 2, 3, 4];

  const ApiKey = `f2178afe12518dc511aab62330608529`;
  let [forecast, setForecast] = useState({
    ready: false,
  });

  useEffect(() => {
    setForecast({ ready: false });
  }, [props.data.latitude || props.data.longitude]);

  function search() {
    let URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.latitude}&lon=${props.data.longitude}&units=metric&exclude=current,hourly,minutely,alerts&appid=${ApiKey}`;
    axios.get(URL).then(handleResponse);
  }

  function handleResponse(response) {
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
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.icon[0][i]}@2x.png`}
                  alt="weather icon"
                  id="icon"
                />
              </div>
              <div>{forecast.temp[0][i]}</div>
            </span>
          );
        })}
      </div>
    );
  } else {
    search();

    return (
      <div>
        Lodaing Forecast {""}
        <span className="sweet-loading">
          <BeatLoader color={`#3C7DD9`} size={10} speedMultiplier={0.66} />
        </span>
      </div>
    );
  }
}
