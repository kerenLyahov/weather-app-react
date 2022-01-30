import "./App.css";
import Search from "./Search";
import TodayData from "./TodayData";
import Forecast from "./Forecast";
function App() {
  return (
    <div className="App">
      <Search />
      <TodayData />
      <Forecast />
    </div>
  );
}

export default App;
