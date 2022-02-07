import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forcast(props) {
  let date = new Date();
  let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let days = [0, 1, 2, 3, 4];
  let temp = ["12/13", "2/20", "10/15", "2/33", "0/15"];

  let unit = "metric";
  let key = `f2178afe12518dc511aab62330608529`;
  let URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=${unit}&exclude=current,minutely,alerts&appid=${key}`;
  //axios.get(URL).then(handleAPI);
  function handleAPI(response) {
    if (response !== undefined) {
      for (let i = 0; i < 5; i++) {
        temp[
          i
        ] = `${response.data.daily[i].temp.min} / ${response.data.daily[i].temp.max}`;
      }
    }
  }
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
            <div>{temp[i]}</div>
          </span>
        );
      })}
    </div>
  );
}
