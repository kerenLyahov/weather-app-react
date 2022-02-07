import React, { useState } from "react";
import "./TodayData.css";
import Day from "./Day.js";
import Date from "./Date.js";

export default function TodayData(props) {
  let celsiusValue = "C";
  let fahrenheitValue = "F";

  let [unit, setUnit] = useState({
    unit: `metric`,
    fahrenheitStyle: { fontSize: "15px" },
    celsiusStyle: { fontSize: "25px" },
  });

  function celsius(event) {
    event.preventDefault();
    setUnit({
      unit: `metric`,
      fahrenheitStyle: { fontSize: "15px" },
      celsiusStyle: { fontSize: "25px" },
    });

    return <div>{unit}</div>;
  }
  function fahrenheit(event) {
    event.preventDefault();
    setUnit({
      unit: `imperial`,
      fahrenheitStyle: { fontSize: "25px" },
      celsiusStyle: { fontSize: "15px" },
    });

    return <div>{unit}</div>;
  }

  return (
    <div className="bodyMain">
      <span className="cityName child"> {props.cityValue}</span>
      <span className="tempMinMax child"> {props.minmaxValue}</span>
      <span className="day child"> {Day()}</span>
      <span className="temperature child">{props.tempValue}</span>
      <span className="units child">
        <a
          href=""
          className="celsius"
          style={unit.celsiusStyle}
          onClick={celsius}
        >
          {celsiusValue}
        </a>
        <br />
        <a
          href=""
          className="fahrenheit"
          style={unit.fahrenheitStyle}
          onClick={fahrenheit}
        >
          {fahrenheitValue}
        </a>
      </span>
      <span className="date child">{Date()}</span>
      <span className="icon child">icon</span>
      <span className="parameters child">
        <div>Windspeed: {props.windspeedValue} </div>
        <div>Humidity: {props.humidityValue}</div>
        <div>Sunrise: {props.sunriseValue}</div>
        <div>Sunset: {props.sunsetValue}</div>
      </span>

      <span className="description child">{props.descriptionValue}</span>
    </div>
  );
}
