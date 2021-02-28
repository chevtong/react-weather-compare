import React, { useRef } from "react";

import Clock from "react-live-clock";

function City1({
  setCity1,
  city1Weather,
  setCity1Weather,
  localTimezone,
  highestTemp,
  lowestTemp,
  currentTemp,
  getDescription,
  getIcon,
  getShowDetails,
  showDetails,
  //updateCity,
  //cityInput
}) {
  const cityInput = useRef();

  const updateCity = (e) => {
    e.preventDefault();

    const newCity = cityInput.current.value;

    if (newCity === "") return;
    console.log(newCity);

    setCity1Weather({});
    setCity1(newCity);

    cityInput.current.value = "";
  };

  return (
    <div className="city1-display">
      {showDetails ? (
        ""
      ) : (
        <form >
          <input className="input-city1" ref={cityInput} type="text" />
          <button onClick={(e) => updateCity(e)} className="btn-city1" type="submit">
            Change
          </button>
        </form>
      )}

      <div
        onClick={() => getShowDetails(city1Weather)}
        className={showDetails ? "not-active" : "city1"}
      >
        <div>
          <h2>{city1Weather.city_name}</h2>
          <Clock
            format={"HH:mm"}
            ticking={false}
            timezone={localTimezone(city1Weather)}
          />{" "}
        </div>
        <div className="current">
          <img
            className="icon-today"
            src={getIcon(getDescription(city1Weather, 0))}
            alt="weather_icon"
          />
          <p>{getDescription(city1Weather, 0)}</p>

          <h2 className="current-temp">{currentTemp(city1Weather, 0)} °c</h2>
        </div>
        <div className="temp-range">
          <p>
            <i className="fas fa-long-arrow-alt-up"></i>{" "}
            {highestTemp(city1Weather)}°c
          </p>
          <p>
            <i className="fas fa-long-arrow-alt-down"></i>{" "}
            {lowestTemp(city1Weather)}°c
          </p>
        </div>
      </div>
    </div>
  );
}

export default City1;
