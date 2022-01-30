import React from "react";
import "./Forecast.css";

export default function Forcast() {
  let days = [0, 1, 2, 3, 4];

  return (
    <div className="body">
      {days.map((day, i) => {
        return (
          <span className="forcast" Day={day} key={i}>
            <span> Day {i}</span>
            <div>☀</div>
            <div>16°/27°</div>
          </span>
        );
      })}
    </div>
  );
}
