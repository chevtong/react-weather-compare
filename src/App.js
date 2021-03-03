//React related imports
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";

//Styling and image assets imports
import "./App.css";
import sun from "./images/sun.png";
import rain from "./images/rain.png";
import rainbow from "./images/rainbow.png";
import snow from "./images/snow.png";
import lightening from "./images/lightening.png";
import spinner from "./images/spinner.gif";

//Component imports
import City1 from "./components/City1";
import City2 from "./components/City2";
import City3 from "./components/City3";
import City4 from "./components/City4";
import List from "./components/List";

const APP_KEY = process.env.REACT_APP_API_KEY;

function App() {

  const [city1, setCity1] = useState("brussels");
  const [city1Weather, setCity1Weather] = useState({});

  const [city2, setCity2] = useState("london");
  const [city2Weather, setCity2Weather] = useState({});

  const [city3, setCity3] = useState("new york");
  const [city3Weather, setCity3Weather] = useState({});

  const [city4, setCity4] = useState("hong kong");
  const [city4Weather, setCity4Weather] = useState({});

  const [showDetails, setShowDetails] = useState(false);
  const [detailWeather, setDetailWeather] = useState({});

  const [theme, setTheme] = useState({ mode: "light" });

  const getCityWeather = async (cityNumber) => {
    try {
      let cityName;

      if (cityNumber === 1) {
        cityName = city1;
      } else if (cityNumber === 2) {
        cityName = city2;
      } else if (cityNumber === 3) {
        cityName = city3;
      } else if (cityNumber === 4) {
        cityName = city4;
      }

      const respon = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${APP_KEY}`
      );
      const data = await respon.json();

      if (cityNumber === 1) {
        setCity1Weather(data);
      } else if (cityNumber === 2) {
        setCity2Weather(data);
      } else if (cityNumber === 3) {
        setCity3Weather(data);
      } else if (cityNumber === 4) {
        setCity4Weather(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCityWeather(1);
  }, [city1]);

  useEffect(() => {
    getCityWeather(2);
  }, [city2]);
  useEffect(() => {
    getCityWeather(3);
  }, [city3]);
  useEffect(() => {
    getCityWeather(4);
  }, [city4]);

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
      return snow;
    } else if (description.includes("Thunderstorm")) {
      return lightening;
    } else if (description.includes("rain")) {
      return rain;
    } else if (description.includes("sun")) {
      return sun;
    } else if (description.includes("snow")) {
      return snow;
    } else if (description.includes("Snow")) {
      return snow;
    } else if (description.includes("Clear")) {
      return sun;
    } else {
      return rainbow;
    }
  };

  const getShowDetails = (weatherData) => {
    setShowDetails(showDetails ? false : true);
    setDetailWeather(weatherData);
  };

  const changeTheme = () => {
    setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" });
  };


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {theme.mode === "dark" ? (
        <button onClick={changeTheme} className="btn-nightmode">
          <i className="fas fa-toggle-on"></i>
        </button>
      ) : (
        <button onClick={changeTheme} className="btn-nightmode">
          <i className="fas fa-toggle-off"></i>
        </button>
      )}
      
      <div className="App">
        {showDetails ? (
          <List
            showDetails={showDetails}
            getIcon={getIcon}
            getDescription={getDescription}
            detailWeather={detailWeather}
            currentTemp={currentTemp}
            localTimezone={localTimezone}
            highestTemp={highestTemp}
            lowestTemp={lowestTemp}
            getShowDetails={getShowDetails}
            setShowDetails={setShowDetails}
            setDetailWeather={setDetailWeather}
          />
        ) : (
          ""
        )}

        {typeof city1Weather.city_name != "undefined" ? (
          <City1
            city1={city1}
            setCity1={setCity1}
            city1Weather={city1Weather}
            setCity1Weather={setCity1Weather}
            localTimezone={localTimezone}
            highestTemp={highestTemp}
            lowestTemp={lowestTemp}
            currentTemp={currentTemp}
            getDescription={getDescription}
            getIcon={getIcon}
            showDetails={showDetails}
            getShowDetails={getShowDetails}
          />
        ) : (
          <img className={showDetails ? "not-active" : ""} src={spinner} alt="loading..." />
        )}

        {typeof city2Weather.city_name != "undefined" ? (
          <City2
            city2={city2}
            setCity2={setCity2}
            city2Weather={city2Weather}
            setCity2Weather={setCity2Weather}
            localTimezone={localTimezone}
            highestTemp={highestTemp}
            lowestTemp={lowestTemp}
            currentTemp={currentTemp}
            getDescription={getDescription}
            getIcon={getIcon}
            showDetails={showDetails}
            getShowDetails={getShowDetails}
          />
        ) : (
          <img  className={showDetails ? "not-active" : ""} src={spinner} alt="loading..." />
        )}

        {typeof city3Weather.city_name != "undefined" ? (
          <City3
            city3={city3}
            setCity3={setCity3}
            city3Weather={city3Weather}
            setCity3Weather={setCity3Weather}
            localTimezone={localTimezone}
            highestTemp={highestTemp}
            lowestTemp={lowestTemp}
            currentTemp={currentTemp}
            getDescription={getDescription}
            getIcon={getIcon}
            showDetails={showDetails}
            getShowDetails={getShowDetails}
          />
        ) : (
          <img  className={showDetails ? "not-active" : ""} src={spinner} alt="loading..." />
        )}

        {typeof city4Weather.city_name != "undefined" ? (
          <City4
            city4={city4}
            setCity4={setCity4}
            city4Weather={city4Weather}
            setCity4Weather={setCity4Weather}
            localTimezone={localTimezone}
            highestTemp={highestTemp}
            lowestTemp={lowestTemp}
            currentTemp={currentTemp}
            getDescription={getDescription}
            getIcon={getIcon}
            showDetails={showDetails}
            getShowDetails={getShowDetails}
          />
        ) : (
          <img  className={showDetails ? "not-active" : ""} src={spinner} alt="loading..." />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
