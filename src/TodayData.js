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
    return day;
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
    <div className="body">
      <span className="nameTemp">
        <span className="cityName"> {city()}</span>
        <span className="tempMinMax"> {tempMinMax()}</span>
      </span>
      {day()}
      {date()}
      {parameters()}
    </div>
  );
}
