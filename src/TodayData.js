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
  let [MinMax, setMinMax] = useState(`⬇15°     ⬆30°`);
  let [temp, setTemp] = useState("22°");
  let celsiusValue = "C";
  let fahrenheitValue = "F";
  let [fahrenheitStyle, setFahrenheitStyle] = useState({ fontSize: "15px" });
  let [celsiusStyle, setCelsiusStyle] = useState({ fontSize: "25px" });
  let unit = `metric`;
  let key = `307efdb71bc67507048c93662d7db9da`;
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=jerusalem&units=${unit}&appid=${key}`;
  // axios.get(URL).then(parameters);
  // axios.get(URL).then(tempMinMax);
  // axios.get(URL).then(temperature);

  function parameters(response) {
    if (response !== undefined) {
      setHumidity(response.data.main.humidity);
      setWindspeed(response.data.wind.speed);
      setSunrise(response.data.sys.sunrise * 1000);
      setSunset(response.data.sys.sunset);
      let sunriseTime = new Date(sunrise);
      console.log(sunriseTime);
    } else {
    }
    return (
      <div>
        <div>windspeed: {windspeed}</div>
        <div>Humidity: {humidity}</div>
        <div>sunrise: {sunrise}</div>
        <div>sunset: {sunset}</div>
      </div>
    );
  }
  function cityName() {
    return props.city === "" ? "Jerusalem" : props.city;
  }

  function tempMinMax(response) {
    if (response !== undefined) {
      setMinMax(
        `⬇${response.data.main.temp_min}     ⬆${response.data.main.temp_max} `
      );
    }
    return <div>{MinMax}</div>;
  }
  function temperature(response) {
    if (response !== undefined) {
      setTemp(response.data.main.temp);
    }
    return <div>{temp}</div>;
  }
  function celsius(event) {
    event.preventDefault();
    unit = `metric`;
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
    unit = `imperial`;
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
      <span className="cityName child"> {cityName()}</span>
      <span className="tempMinMax child"> {tempMinMax()}</span>
      <span className="day child"> {Day()}</span>
      <span className="temperature child">{temperature()}</span>
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
      <span className="parameters child">{parameters()}</span>

      <span className="description child">description</span>
    </div>
  );
}
