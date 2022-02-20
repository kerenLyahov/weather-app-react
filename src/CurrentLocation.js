import React, { useState } from "react";
import axios from "axios";

export default function CurrentLocation(props) {
  let [coords, setCoords] = useState({});
  console.log(props);
  setCoords({
    lat: props.data.coords.latitude,
    lon: props.data.coords.longitude,
  });

  return (
    <div>
      latitude: {coords.lat} , longitude: {coords.lon}
    </div>
  );
}
