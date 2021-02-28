import React, { useRef } from "react";

import Clock from "react-live-clock";

function City3({
  setCity3,
  city3Weather,
  setCity3Weather,
  localTimezone,
  highestTemp,
  lowestTemp,
  currentTemp,
  getDescription,
  getIcon,
  getShowDetails,
  showDetails,
}) {
  const cityInput = useRef();

  const updateCity = (e) => {
    e.preventDefault();

    const newCity = cityInput.current.value;

    if (newCity === "") return;
    console.log(newCity);

    setCity3Weather({});
    setCity3(newCity);

    cityInput.current.value = "";
  };

  return (
    <div className={showDetails ? "not-active" : "city3-display"}>
      {showDetails ? (
        ""
      ) : (
        <form>
          <input ref={cityInput} className="input-city3" type="text" />
          <button onClick={(e) => updateCity(e)} type="submit" className="btn-city3">
            Change
          </button>
        </form>
      )}
      <div
        onClick={() => getShowDetails(city3Weather)}
        className="city3"
      >
        <div>
          <h2>{city3Weather.city_name}</h2>
          <Clock
            format={"HH:mm"}
            ticking={false}
            timezone={localTimezone(city3Weather)}
          />{" "}
        </div>
        <div className="current">
          <img
            className="icon-today"
            src={getIcon(getDescription(city3Weather, 0))}
            alt="weather_icon"
          />
          <p>{getDescription(city3Weather, 0)}</p>

          <p className="current-temp">{currentTemp(city3Weather, 0)} °c</p>
        </div>
        <div className="temp-range">
        <h4>
          <i className="fas fa-chevron-up"></i> {highestTemp(city3Weather)}°c
          </h4>
          <h4>
          <i className="fas fa-chevron-down"></i> {lowestTemp(city3Weather)}°c
          </h4>
        </div>
      </div>
    </div>
  );
}

export default City3;
