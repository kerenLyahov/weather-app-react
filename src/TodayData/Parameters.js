import React, { useState } from "react";

import { compareAsc, format } from "date-fns";

export default function Parameters(response) {
  let [humidity, setHumidity] = useState("");
  let [windspeed, setWindspeed] = useState("");
  let [sunrise, setSunrise] = useState("");
  let [sunset, setSunset] = useState("");
  let timeUp = "";
  let timeDown = "";
  if (response !== undefined) {
    setHumidity(response.data.main.humidity);
    setWindspeed(response.data.wind.speed);

    // timeUp = new Date(response.data.sys.sunrise * 1000);
    timeDown = format(new Date(response.data.sys.sunset * 1000), "HH:MM");
    timeUp = format(new Date(1643776313000), "HH:MM");
    console.log(timeUp);
    setSunrise(`${timeUp.getHours} : ${timeUp.getMinutes}`);
    setSunset(`${timeDown.getHours} : ${timeDown.getMinutes}`);
  } else {
  }
  return (
    <div>
      <div>Windspeed: {windspeed}</div>
      <div>Humidity: {humidity}</div>
      <div>Sunrise: {sunrise}</div>
      <div>Sunset: {sunset}</div>
    </div>
  );
}
