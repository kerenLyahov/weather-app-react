import React from "react";
import "./TodayData.css";
import Day from "./Day.js";
import Date from "./Date.js";

export default function TodayData(props) {
  let sunriseMin = props.data.sunrise.getMinutes();
  if (sunriseMin < 10) {
    sunriseMin = `0${sunriseMin}`;
  }
  let sunriseHour = props.data.sunrise.getHours();
  if (sunriseHour < 10) {
    sunriseHour = `0${sunriseHour}`;
  }
  let sunrise = `${sunriseHour}:${sunriseMin}`;

  let sunseteMin = props.data.sunset.getMinutes();
  if (sunseteMin < 10) {
    sunseteMin = `0${sunseteMin}`;
  }
  let sunsetHour = props.data.sunset.getHours();
  if (sunsetHour < 10) {
    sunsetHour = `0${sunsetHour}`;
  }
  let sunset = `${sunsetHour}:${sunseteMin}`;

  return (
    <div>
      <div className="bodyMain">
        <span className="cityName child"> {props.data.city}</span>
        <span className="tempMinMax child">
          <span className="min">⬇{props.data.min}° </span>
          <span className="max"> ⬆{props.data.max}°</span>
        </span>
        <span className="day child"> {Day()}</span>
        <span className="temperature child">{props.data.temp}°C</span>
        {/* <span className="units child">C</span> */}
        <span className="date child">{Date()}</span>
        <span className="icon child">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt="weather icon"
            className="iconImage"
          />
        </span>
        <span className="parameters child">
          <div>Windspeed: {props.data.windspeed} </div>
          <div>Humidity: {props.data.humidity}%</div>
          <div>Sunrise: {sunrise}</div>
          <div>Sunset: {sunset}</div>
        </span>
        <span className="description child">{props.data.description}</span>
      </div>
    </div>
  );
}
