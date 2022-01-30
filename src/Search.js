import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="body">
      <form>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" className="searchButton" value="search" />
      </form>
      <button>current</button>
    </div>
  );
}
