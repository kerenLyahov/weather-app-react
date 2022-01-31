import "./App.css";
import React, { useState } from "react";
// import Search from "./Search";
import TodayData from "./TodayData";
import Forecast from "./Forecast";
function App() {
  let [cityName, setCityName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
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
      <TodayData city={cityName} />
      <Forecast />
    </div>
  );
}

export default App;
