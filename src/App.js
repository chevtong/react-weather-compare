import "./App.css";

import clouds from "./images/clouds.png";
import sun from "./images/sun.png";
import rain from "./images/rain.png";
import rainbow from "./images/rainbow.png";
import snow from "./images/snow.png";
import lightening from "./images/lightening.png";

import React, { useEffect, useState } from "react";

import City1 from "./components/City1";
import City2 from "./components/City2";
import City3 from "./components/City3";
import City4 from "./components/City4";

const APP_KEY = "da9a51208d5e4403a9053883caf4d08d";
//process.env.REACT_APP_API_KEY;
console.log(APP_KEY);

function App() {
  const [city1, setCity1] = useState("brussels");
  const [city1Weather, setCity1Weather] = useState({});

  const [city2, setCity2] = useState("london");
  const [city2Weather, setCity2Weather] = useState({});

  const [city3, setCity3] = useState("new york");
  const [city3Weather, setCity3Weather] = useState({});

  const [city4, setCity4] = useState("hong kong");
  const [city4Weather, setCity4Weather] = useState({});

  const getCity1Weather = async (city) => {
    const respon = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${APP_KEY}`
    );
    const data = await respon.json();

    console.log(data);
    setCity1Weather(data);
  };

  const getCity2Weather = async (city) => {
    const respon = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${APP_KEY}`
    );
    const data = await respon.json();

    console.log(data);
    setCity2Weather(data);
  };

  const getCity3Weather = async (city) => {
    const respon = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${APP_KEY}`
    );
    const data = await respon.json();

    console.log(data);
    setCity3Weather(data);
  };

  const getCity4Weather = async (city) => {
    const respon = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${APP_KEY}`
    );
    const data = await respon.json();

    console.log(data);
    setCity4Weather(data);
  };

  useEffect(() => {
    getCity1Weather(city1);
    getCity2Weather(city2);
    getCity3Weather(city3);
    getCity4Weather(city4);
  }, [city1, city2, city3, city4]);

  const localTimezone = (weatherData) => {
    return weatherData.timezone;
  };

  const highestTemp = (weatherData) => {
    return Math.round(weatherData.data[0].max_temp);
  };

  const lowestTemp = (weatherData) => {
    return Math.round(weatherData.data[0].min_temp);
  };

  const currentTemp = (weatherData, day) => {
    return Math.round(weatherData.data[day].temp);
  };

  const getDescription = (weatherData, day) => {
    return weatherData.data[day].weather.description;
  };

  const getIcon = (description) => {
    if (description.includes("clouds")) {
      return clouds;
    } else if (description.includes("Thunderstorm")) {
      return lightening;
    } else if (description.includes("rain")) {
      return rain;
    } else if (description.includes("sun")) {
      return sun;
    } else if (description.includes("snow")) {
      return snow;
    } else if (description.includes("Clear")) {
      return sun;
    } else {
      return rainbow;
    }
  };

  return (
    <div className="App">
      {typeof city1Weather.city_name != "undefined" ? (
        <City1
          city1={city1}
          setCity1={setCity1}
          city1Weather={city1Weather}
          localTimezone={localTimezone}
          highestTemp={highestTemp}
          lowestTemp={lowestTemp}
          currentTemp={currentTemp}
          getDescription={getDescription}
          getIcon={getIcon}
        />
      ) : (
        ""
      )}

      {typeof city2Weather.city_name != "undefined" ? (
        <City2
          city2={city2}
          setCity2={setCity2}
          city2Weather={city2Weather}
          localTimezone={localTimezone}
          highestTemp={highestTemp}
          lowestTemp={lowestTemp}
          currentTemp={currentTemp}
          getDescription={getDescription}
          getIcon={getIcon}
        />
      ) : (
        ""
      )}

      {typeof city3Weather.city_name != "undefined" ? (
        <City3
          city3={city3}
          setCity3={setCity3}
          city3Weather={city3Weather}
          localTimezone={localTimezone}
          highestTemp={highestTemp}
          lowestTemp={lowestTemp}
          currentTemp={currentTemp}
          getDescription={getDescription}
          getIcon={getIcon}
        />
      ) : (
        ""
      )}

      {typeof city4Weather.city_name != "undefined" ? (
        <City4
          city4={city4}
          setCity4={setCity4}
          city4Weather={city4Weather}
          localTimezone={localTimezone}
          highestTemp={highestTemp}
          lowestTemp={lowestTemp}
          currentTemp={currentTemp}
          getDescription={getDescription}
          getIcon={getIcon}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
