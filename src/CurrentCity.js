import React, { useState } from "react";
import axios from "axios";

export default function CurrentCity() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [windspeed, setWindspeed] = useState(null);
  let [description, setDescription] = useState("");

  function SubmitForm(event) {
    event.preventDefault();
    let cityValue = document.querySelector("#city-value").value;

    setCity(cityValue);

    let apiKey = `aff03d99372f0019f772a8a20b2d1350`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(ShowResults);

    function ShowResults(response) {
      setTemp(Math.round(response.data.main.temp));
      setHumidity(response.data.main.humidity);
      setWindspeed(response.data.wind.speed);
      setDescription(response.data.weather[0].description);
    }
  }

  return (
    <div className="weatherCurrently">
      <div className="City">
        <h2>{description.charAt(0).toUpperCase() + description.slice(1)}</h2>
        <h1>{city.charAt(0).toUpperCase() + city.slice(1)} </h1>
        <h2>{temp} °C</h2>

        <form onSubmit={SubmitForm}>
          <input
            type="text"
            id="city-value"
            name="city"
            placeholder="Enter a city"
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="conditions">
        <h3>
          Tuesday
          <br />
          11:10
          <br />
        </h3>
        <h3>
          Humidity: {humidity}%<br />
          Wind: {Math.round(windspeed)} mph
          <br />
          Preciptation:
        </h3>
      </div>
    </div>
  );
}
