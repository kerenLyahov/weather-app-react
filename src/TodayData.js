import React from "react";
import axios from "axios";
import "./TodayData.css";

export default function TodayData() {
  function city() {
    let city = "cityName";
    return city;
  }
  function day() {
    let day = "MONDAY";
    return <div> {day} </div>;
  }
  function tempMinMax() {
    return <div>13°/26°</div>;
  }
  function date() {
    return <div>13/FEB/2021</div>;
  }
  function parameters() {
    return (
      <div>
        <div>windspeed</div>
        <div>humidity</div>
        <div>sunrise</div>
        <div>sunset</div>{" "}
      </div>
    );
  }
  return (
    <div className="bodyMain">
      <span className="cityName child"> {city()}</span>
      <span className="tempMinMax child"> {tempMinMax()}</span>
      <span className="day child"> {day()}</span>
      <span className="temperature">22°</span>
      <span className="units">
        <span className="celsius">C</span>
        <br />-<br />
        <span className="fahrenheit">F</span>
      </span>
      <span className="date child">{date()}</span>
      <span className="icon">icon</span>
      <span className="parameters child">{parameters()}</span>

      <span>description</span>
    </div>
  );
}
