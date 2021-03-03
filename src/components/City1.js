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
    <div className={showDetails ? "not-active" : "city1-display"}>
      {showDetails ? (
        ""
      ) : (
        <form>
          <input className="input-city1" ref={cityInput} type="text" />
          <button
            onClick={(e) => updateCity(e)}
            className="btn-city1"
            type="submit"
          >
            Change
          </button>
        </form>
      )}

      <div onClick={() => getShowDetails(city1Weather)} className="city1">
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

          <p className="current-temp">{currentTemp(city1Weather, 0)} °c</p>
        </div>
        <div className="temp-range">
          <h4>
            <i className="fas fa-chevron-up"></i> {highestTemp(city1Weather)}°c
          </h4>
          <h4>
            <i className="fas fa-chevron-down"></i> {lowestTemp(city1Weather)}°c
          </h4>
        </div>
      </div>
    </div>
  );
}

export default City1;
