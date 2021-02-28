import React, { useRef } from "react";

import Clock from "react-live-clock";

function City2({
  setCity2,
  city2Weather,
  setCity2Weather,
  localTimezone,
  highestTemp,
  lowestTemp,
  currentTemp,
  getDescription,
  getIcon,
  getShowDetails,
  showDetails,
  // updateCity,
  // cityInput,
}) {
  const cityInput = useRef();

  const updateCity = (e) => {
    e.preventDefault();

    const newCity = cityInput.current.value;

    if (newCity === "") return;
    console.log(newCity);

    setCity2Weather({});
    setCity2(newCity);

    cityInput.current.value = "";
  };

  return (
    <div className="city2-display">
      {showDetails ? (
        ""
      ) : (
        <form>
          <input ref={cityInput} className="input-city2" type="text" />
          <button onClick={(e) => updateCity(e)} type="submit"  className="btn-city2">
            Change
          </button>
        </form>
      )}
      <div
        onClick={() => getShowDetails(city2Weather)}
        className={showDetails ? "not-active" : "city2"}
      >
        <div>
          <h2>{city2Weather.city_name}</h2>
          <Clock
            format={"HH:mm"}
            ticking={false}
            timezone={localTimezone(city2Weather)}
          />{" "}
        </div>
        <div className="current">
          <img
            className="icon-today"
            src={getIcon(getDescription(city2Weather, 0))}
            alt="weather_icon"
          />
          <p>{getDescription(city2Weather, 0)}</p>

          <p className="current-temp">{currentTemp(city2Weather, 0)} °c</p>
        </div>
        <div className="temp-range">
          <p>
            <i className="fas fa-long-arrow-alt-up"></i>{" "}
            {highestTemp(city2Weather)}°c
          </p>
          <p>
            <i className="fas fa-long-arrow-alt-down"></i>{" "}
            {lowestTemp(city2Weather)}°c
          </p>
        </div>
      </div>
    </div>
  );
}

export default City2;
