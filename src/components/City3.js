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
    e.preventDefault()

    const newCity = cityInput.current.value;

    if (newCity === "") return;
    console.log(newCity);

  
      setCity3Weather({});
      setCity3(newCity);
   

    cityInput.current.value = "";
  };

  return (
    <div>
      <form>
        <input ref={cityInput} type="text"/>
        <button onClick={(e)=>updateCity(e)} type="submit">Change</button>
        </form>
      <div
        onClick={() => getShowDetails(city3Weather)}
        className={showDetails ? "not-active" : "city3"}
      >
        <h2>{city3Weather.city_name}</h2>
        <Clock
          format={"HH:mm"}
          ticking={false}
          timezone={localTimezone(city3Weather)}
        />{" "}
        <br />
        <div className="current">
          <img
            className="icon-today"
            src={getIcon(getDescription(city3Weather, 0))}
            alt="weather_icon"
          />

          <p className="current-temp">{currentTemp(city3Weather, 0)} °c</p>
          <p>{getDescription(city3Weather, 0)}</p>
          <div className="temp-range">
            <p>
              <i className="fas fa-long-arrow-alt-up"></i>{" "}
              {highestTemp(city3Weather)}°c
            </p>
            <p>
              <i className="fas fa-long-arrow-alt-down"></i>{" "}
              {lowestTemp(city3Weather)}°c
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default City3;
