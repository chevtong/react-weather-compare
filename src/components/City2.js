import React, {useRef} from "react";

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
    e.preventDefault()

    const newCity = cityInput.current.value;

    if (newCity === "") return;
    console.log(newCity);

  
      setCity2Weather({});
      setCity2(newCity);
    

    cityInput.current.value = "";
  };

  return (
    <div>
       <form>
        <input ref={cityInput} type="text"/>
        <button onClick={(e)=>updateCity(e)} type="submit">Change</button>
        </form>
      <div
        onClick={() => getShowDetails(city2Weather)}
        className={showDetails ? "not-active" : "city2"}
      >
        <h2>{city2Weather.city_name}</h2>
        <Clock
          format={"HH:mm"}
          ticking={false}
          timezone={localTimezone(city2Weather)}
        />{" "}
        <br />
        <div className="current">
          <img
            className="icon-today"
            src={getIcon(getDescription(city2Weather, 0))}
            alt="weather_icon"
          />

          <p className="current-temp">{currentTemp(city2Weather, 0)} °c</p>
          <p>{getDescription(city2Weather, 0)}</p>
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
    </div>
  );
}

export default City2;
