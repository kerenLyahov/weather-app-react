import React from "react";
import "./Forecast.css";

export default function Forcast() {
  let date = new Date();
  let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let days = [0, 1, 2, 3, 4];

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
            <div>16°/27°</div>
          </span>
        );
      })}
    </div>
  );
}
