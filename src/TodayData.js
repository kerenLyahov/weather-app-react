import React, { useState } from "react";
import axios from "axios";
import "./TodayData.css";
import Day from "./Day.js";
import Date from "./Date.js";

export default function TodayData(props) {
  let celsiusValue = "C";
  let fahrenheitValue = "F";
  let [fahrenheitStyle, setFahrenheitStyle] = useState({ fontSize: "15px" });
  let [celsiusStyle, setCelsiusStyle] = useState({ fontSize: "25px" });
  let [unit, setUnit] = useState(`metric`);

  function celsius(event) {
    event.preventDefault();
    setUnit(`metric`);
    setFahrenheitStyle({ fontSize: "15px" });
    setCelsiusStyle({ fontSize: "25px" });
    return (
      <div>
        {unit}
        {celsiusStyle}
        {fahrenheitStyle}
      </div>
    );
  }
  function fahrenheit(event) {
    event.preventDefault();
    setUnit(`imperial`);
    setFahrenheitStyle({ fontSize: "25px" });
    setCelsiusStyle({ fontSize: "15px" });

    return (
      <div>
        {unit}
        {celsiusStyle}
        {fahrenheitStyle}
      </div>
    );
  }

  return (
    <div className="bodyMain">
      <span className="cityName child"> {props.cityValue}</span>
      <span className="tempMinMax child"> {props.minmaxValue}</span>
      <span className="day child"> {Day()}</span>
      <span className="temperature child">{props.tempValue}</span>
      <span className="units child">
        <a href="" className="celsius" style={celsiusStyle} onClick={celsius}>
          {celsiusValue}
        </a>
        <br />
        <a
          href=""
          className="fahrenheit"
          style={fahrenheitStyle}
          onClick={fahrenheit}
        >
          {fahrenheitValue}
        </a>
      </span>
      <span className="date child">{Date()}</span>
      <span className="icon child">icon</span>
      <span className="parameters child">
        <div>Windspeed: {props.windspeedValue}</div>
        <div>Humidity: {props.humidityValue}</div>
        <div>Sunrise: {props.sunriseValue}</div>
        <div>Sunset: {props.sunsetValue}</div>
      </span>

      <span className="description child">{props.descriptionValue}</span>
    </div>
  );
}
