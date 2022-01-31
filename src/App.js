import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import TodayData from "./TodayData";
import Forecast from "./Forecast";
function App() {
  let [cityName, setCityName] = useState("");
  Search();
  TodayData();
  Forecast();
  return (
    <div className="App">
      <Search />
      <TodayData />
      <Forecast />
    </div>
  );
}

export default App;
