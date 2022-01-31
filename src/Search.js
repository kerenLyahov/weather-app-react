import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [cityName, setCityName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCityName(event.target.value);
  }
  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" className="searchButton" value="search" />
      </form>
      <button>current</button>
    </div>
  );
}
