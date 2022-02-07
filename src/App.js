import "./App.css";
import React, { useState } from "react";
import Weather from "./Weather";
function App() {
  let [cityName, setCityName] = useState("Jerusalem");

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

      <Weather city={cityName} />

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
