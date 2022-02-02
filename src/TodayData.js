import React, { useState } from "react";
import axios from "axios";
import "./TodayData.css";
import Day from "./Day.js";
import Date from "./Date.js";

export default function TodayData(props) {
  let [humidity, setHumidity] = useState("");
  let [windspeed, setWindspeed] = useState("");
  let [sunrise, setSunrise] = useState("");
  let [sunset, setSunset] = useState("");
  let [MinMax, setMinMax] = useState(`⬇0°     ⬆0°`);
  let [temp, setTemp] = useState("0°");
  let [descriptionValue, setDescriptionValue] = useState("cloudy");
  let celsiusValue = "C";
  let fahrenheitValue = "F";
  let [fahrenheitStyle, setFahrenheitStyle] = useState({ fontSize: "15px" });
  let [celsiusStyle, setCelsiusStyle] = useState({ fontSize: "25px" });
  let [unit, setUnit] = useState(`metric`);
  let [city, setCity] = useState("jerusalem");

  let key = `307efdb71bc67507048c93662d7db9da`;
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;
  axios.get(URL).then(handleAPI);

  function handleAPI(response) {
    let timeUp = "";
    let timeDown = "";
    if (response !== undefined) {
      setHumidity(response.data.main.humidity);
      setWindspeed(response.data.wind.speed);

      timeUp = new Date(response.data.sys.sunrise * 1000);
      timeDown = new Date(response.data.sys.sunset * 1000);

      setSunrise(`${timeUp.getHours} : ${timeUp.getMinutes}`);
      setSunset(`${timeDown.getHours} : ${timeDown.getMinutes}`);
    } else {
    }
    if (response !== undefined) {
      setMinMax(
        `⬇${Math.round(response.data.main.temp_min)}     ⬆${Math.round(
          response.data.main.temp_max
        )} `
      );
      setTemp(Math.round(response.data.main.temp));
      setDescriptionValue(response.data.weather[0].description);
    }
    return (
      <div>
        <div>{windspeed}</div>
        <div> {humidity}</div>
        <div> {sunrise}</div>
        <div> {sunset}</div>
        <div>{setCity(props.city === "" ? "Jerusalem" : props.city)}</div>
        <div>{MinMax}</div>
        <div>{temp}</div>
        <div>{descriptionValue}</div>
      </div>
    );
  }

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
      <span className="cityName child"> {city}</span>
      <span className="tempMinMax child"> {MinMax}</span>
      <span className="day child"> {Day()}</span>
      <span className="temperature child">{temp}</span>
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
        <div>Windspeed: {windspeed}</div>
        <div>Humidity: {humidity}</div>
        <div>Sunrise: {sunrise}</div>
        <div>Sunset: {sunset}</div>
      </span>

      <span className="description child">{descriptionValue}</span>
    </div>
  );
}
