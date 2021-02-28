import React from "react";
import Clock from "react-live-clock";


function List({
   
  localTimezone,
  highestTemp,
  lowestTemp,
  currentTemp,
  getDescription,
  getIcon,
  showDetails,
  setShowDetails,
  detailWeather,
  setDetailWeather,

}) {

    const getHome = () =>{
        setShowDetails(false)
        setDetailWeather({})
    }

  return (
    <div className="details">
        <button onClick={getHome}>
        <i className="fas fa-undo-alt"></i>
        </button>

        


      <h2>{detailWeather.city_name}</h2>
      <Clock
        format={"HH:mm"}
        ticking={false}
        timezone={localTimezone(detailWeather)}
      />
      <br />
      <div className="current">
        <img
          className="icon-today"
          src={getIcon(getDescription(detailWeather, 0))}
          alt="weather_icon"
        />
      </div>

      <p className="current-temp">{currentTemp(detailWeather, 0)} °c</p>
      <p>{getDescription(detailWeather, 0)}</p>
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
      <ul>
        <li>
          {" "}
          <img
            className="icon-forecast"
            src={getIcon(getDescription(detailWeather, 1))}
            alt="weather_icon"
          />{" "}
          {currentTemp(detailWeather, 1)}°c
        </li>
        <li>
          {" "}
          <img
            className="icon-forecast"
            src={getIcon(getDescription(detailWeather, 2))}
            alt="weather_icon"
          />{" "}
          {currentTemp(detailWeather, 2)}°c
        </li>
        <li>
          {" "}
          <img
            className="icon-forecast"
            src={getIcon(getDescription(detailWeather, 3))}
            alt="weather_icon"
          />{" "}
          {currentTemp(detailWeather, 3)}°c
        </li>
        <li>
          {" "}
          <img
            className="icon-forecast"
            src={getIcon(getDescription(detailWeather, 4))}
            alt="weather_icon"
          />{" "}
          {currentTemp(detailWeather, 4)}°c
        </li>
        <li>
          {" "}
          <img
            className="icon-forecast"
            src={getIcon(getDescription(detailWeather, 5))}
            alt="weather_icon"
          />{" "}
          {currentTemp(detailWeather, 5)}°c
        </li>
      </ul>
    </div>
  );
}

export default List;
