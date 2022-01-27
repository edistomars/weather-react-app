import axios from "axios";
import React from "react";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}℉`
    );
  }
  let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return <h2> Hello from Weather App</h2>;
}
