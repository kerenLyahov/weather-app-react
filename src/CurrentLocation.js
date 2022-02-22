import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CurrentLocation(props) {
  let [coords, setCoords] = useState({});
  let [data, setData] = useState({ ready: false });
  const ApiKey = `f2178afe12518dc511aab62330608529`;
  console.log(props);
  useEffect(() => {
    setCoords({
      lat: props.data.coords.latitude,
      lon: props.data.coords.longitude,
    });
  }, [props]);

  function search() {
    let URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.latitude}&lon=${props.data.longitude}&units=metric&exclude=current,hourly,minutely,alerts&appid=${ApiKey}`;
    axios.get(URL).then(handleResponse);
  }

  function handleResponse(response) {
    setData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      city: response.data.name,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      icon: response.data.weather[0].icon,
    });
  }

  return <div>console.log(hello)</div>;
}
