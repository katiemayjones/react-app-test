import "./App.css";

import Weather from "./Weather.js";
import CurrentCity from "./CurrentCity.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <CurrentCity />
        <Forecast />
        <Footer />{" "}
      </header>
    </div>
  );
}

export default App;
