import "./Day.css";
import React from "react";

export default function Day() {
  let date = new Date();
  let dayName = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATARDAY",
  ];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {" "}
      {dayName[date.getDay()]}
      <span className="time">
        {" "}
        {hours}:{minutes}
      </span>
    </div>
  );
}
