import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="London" /> <Weather city="Madrid" />{" "}
      </header>
    </div>
  );
}

export default App;
