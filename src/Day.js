import react from "react";

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
  return dayName[date.getDay()];
}
