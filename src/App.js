import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import TodayData from "./TodayData";
import Forecast from "./Forecast";
function App() {
  let [cityName, setCityName] = useState("Jerusalem");
  //pp
  let [lon, setLon] = useState("35.2163");
  let [lat, setLat] = useState("31.769");
  let [humidity, setHumidity] = useState("");
  let [windspeed, setWindspeed] = useState("");
  let [sunrise, setSunrise] = useState("");
  let [sunset, setSunset] = useState("");
  let [MinMax, setMinMax] = useState(`⬇0°     ⬆0°`);
  let [temp, setTemp] = useState("0°");
  let [description, setDescription] = useState("cloudy");
  let unit = "metric";
  let key = `5902ca1c1724d1c12a893427498472ff`;
  let JerusalemURL = `https://api.openweathermap.org/data/2.5/weather?q=Jerusalem&units=${unit}&appid=${key}`;
  console.log(URL);
  axios.get(JerusalemURL).then(handleFirstDisplayAPI);
  function handleFirstDisplayAPI(response) {
    let timeUp = "";
    let timeDown = "";
    if (response !== undefined) {
      setHumidity(response.data.main.humidity);
      setWindspeed(response.data.wind.speed);

      timeUp = new Date(response.data.sys.sunrise * 1000);
      timeDown = new Date(response.data.sys.sunset * 1000);

      setSunrise(`${timeUp.getHours} : ${timeUp.getMinutes}`);
      setSunset(`${timeDown.getHours} : ${timeDown.getMinutes}`);

      setMinMax(
        `⬇${Math.round(response.data.main.temp_min)}     ⬆${Math.round(
          response.data.main.temp_max
        )} `
      );
      setTemp(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
    }
    return (
      <div>
        <div>{windspeed}</div>
        <div> {humidity}</div>
        <div> {sunrise}</div>
        <div> {sunset}</div>
        <div>{MinMax}</div>
        <div>{temp}</div>
        <div>{description}</div>
      </div>
    );
  }

  //pp

  function handleSubmit(event) {
    event.preventDefault();
    //start

    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${key}`;
    console.log(URL);
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

        setMinMax(
          `⬇${Math.round(response.data.main.temp_min)}     ⬆${Math.round(
            response.data.main.temp_max
          )} `
        );
        setTemp(Math.round(response.data.main.temp));
        setDescription(response.data.weather[0].description);
        setLon(response.data.coords.lon);
        setLat(response.data.coords.lat);
      }
      return (
        <div>
          <div>{windspeed}</div>
          <div> {humidity}</div>
          <div> {sunrise}</div>
          <div> {sunset}</div>
          <div>{MinMax}</div>
          <div>{temp}</div>
          <div>{description}</div>
          <div>{lon}</div>
          <div>{lat}</div>
        </div>
      );
    }
  }
  //end

  function updateCity(event) {
    setCityName(event.target.value);
  }

  return (
    <div className="App">
      <div className="searchBody">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" className="searchButton" value="search" />
        </form>
        <button>current</button>
      </div>

      <TodayData
        windspeedValue={windspeed}
        humidityValue={humidity}
        descriptionValue={description}
        sunriseValue={sunrise}
        sunsetValue={sunset}
        minmaxValue={MinMax}
        tempValue={temp}
        cityValue={cityName}
      />
      <Forecast Lon={lon} Lat={lat} />
      <div id="opnSrcLink">
        <a
          href="https://github.com/kerenLyahov/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Keren Lyahovchook
      </div>
    </div>
  );
}

export default App;
