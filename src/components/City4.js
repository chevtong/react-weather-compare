import React, { useRef } from "react";

import Clock from "react-live-clock";

function City4({
  setCity4,
  city4Weather,
  setCity4Weather,
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

    setCity4Weather({});
    setCity4(newCity);

    cityInput.current.value = "";
  };

  return (
    <div className={showDetails ? "not-active" : "city4-display"}>
      {showDetails ? (
        ""
      ) : (
        <form>
          <input ref={cityInput} type="text" className="input-city4"/>
          <button onClick={(e) => updateCity(e)} type="submit"className="btn-city4">
            Change
          </button>
        </form>
      )}
      <div
        onClick={() => getShowDetails(city4Weather)}
        className= "city4"     >
        <div>
          <h2>{city4Weather.city_name}</h2>
          <Clock
            format={"HH:mm"}
            ticking={false}
            timezone={localTimezone(city4Weather)}
          />{" "}
        </div>
        <div className="current">
          <img
            className="icon-today"
            src={getIcon(getDescription(city4Weather, 0))}
            alt="weather_icon"
          />
          <p>{getDescription(city4Weather, 0)}</p>

          <p className="current-temp">{currentTemp(city4Weather, 0)} °c</p>
        </div>
        <div className="temp-range">
        <h4>
          <i className="fas fa-chevron-up"></i> {highestTemp(city4Weather)}°c
          </h4>
          <h4>
          <i className="fas fa-chevron-down"></i> {lowestTemp(city4Weather)}°c
          </h4>
        </div>
      </div>
    </div>
  );
}

export default City4;
