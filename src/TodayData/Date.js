export default function Day() {
  let date = new Date();
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Spet",
    "Oct",
    "Nov",
    "Dec",
  ];
  let todayDate = `${date.getDate()}/${
    month[date.getMonth()]
  }/${date.getUTCFullYear()}`;
  return todayDate;
}
