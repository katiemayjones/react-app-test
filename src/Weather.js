import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    let currentTemp = Math.round(response.data.main.temp);
    console.log(`The weather in ${props.city} is ${currentTemp} °C`);
  }

  let apiKey = "aff03d99372f0019f772a8a20b2d1350";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return <h2>Hello</h2>;
}
