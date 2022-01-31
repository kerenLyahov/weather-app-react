import React, { useState } from "react";
import axios from "axios";
import "./TodayData.css";
import Day from "./TodayData/Day.js";
import Date from "./TodayData/Date.js";

export default function TodayData(props) {
  function city() {
    return props.city === "" ? "Jerusalem" : props.city;
  }

  function tempMinMax() {
    return <div>13°/26°</div>;
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
      <span className="day child"> {Day()}</span>
      <span className="temperature">22°</span>
      <span className="units">
        <span className="celsius">C</span>
        <br />-<br />
        <span className="fahrenheit">F</span>
      </span>
      <span className="date child">{Date()}</span>
      <span className="icon">icon</span>
      <span className="parameters child">{parameters()}</span>

      <span>description</span>
    </div>
  );
}
