import React from "react";
import Clock from "react-live-clock";

function List({
  localTimezone,
  highestTemp,
  lowestTemp,
  currentTemp,
  getDescription,
  getIcon,
  setShowDetails,
  detailWeather,
  setDetailWeather,
}) {
  const getHome = () => {
    setShowDetails(false);
    setDetailWeather({});
  };

  return (
    <div className="details" onClick={getHome}>
      <div className="current-weather">
        <button className="btn-return">
          <i className="fas fa-undo-alt"></i>
        </button>
        <div>
          <h2>{detailWeather.city_name}</h2>
          <Clock
            format={"HH:mm"}
            ticking={false}
            timezone={localTimezone(detailWeather)}
          />
        </div>
        <div>
          <img
            className="icon-today"
            src={getIcon(getDescription(detailWeather, 0))}
            alt="weather_icon"
          />
          <p>{getDescription(detailWeather, 0)}</p>

          <p className="current-temp">{currentTemp(detailWeather, 0)} °c</p>
        </div>
        <div className="temp-range">
          <p>
            <i className="fas fa-long-arrow-alt-up"></i>{" "}
            {highestTemp(detailWeather)}°c
          </p>
          <p>
            <i className="fas fa-long-arrow-alt-down"></i>{" "}
            {lowestTemp(detailWeather)}°c
          </p>
        </div>
      </div>

      <div className="forecast">
        <ul>
          <li className="forecast-list">
            <img
              className="icon-forecast"
              src={getIcon(getDescription(detailWeather, 1))}
              alt="weather_icon"
            />
            <p className="forecast-temp">{currentTemp(detailWeather, 1)}°c</p>
          </li>
          <li className="forecast-list">
            <img
              className="icon-forecast"
              src={getIcon(getDescription(detailWeather, 2))}
              alt="weather_icon"
            />
            <p className="forecast-temp">{currentTemp(detailWeather, 2)}°c </p>
          </li>
          <li className="forecast-list">
            <img
              className="icon-forecast"
              src={getIcon(getDescription(detailWeather, 3))}
              alt="weather_icon"
            />
             <p className="forecast-temp">
            {currentTemp(detailWeather, 3)}°c</p>
          </li>
          <li className="forecast-list">
            <img
              className="icon-forecast"
              src={getIcon(getDescription(detailWeather, 4))}
              alt="weather_icon"
            />
             <p className="forecast-temp">
            {currentTemp(detailWeather, 4)}°c</p>
          </li>
          <li className="forecast-list">
            <img
              className="icon-forecast"
              src={getIcon(getDescription(detailWeather, 5))}
              alt="weather_icon"
            />
             <p className="forecast-temp">
            {currentTemp(detailWeather, 5)}°c</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
