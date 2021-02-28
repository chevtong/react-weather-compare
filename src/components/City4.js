import React, {useRef} from "react";

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
  showDetails
  
}) {
  const cityInput = useRef();

  const updateCity = (e) => {
    e.preventDefault()

    const newCity = cityInput.current.value;

    if (newCity === "") return;
    console.log(newCity);

  
      setCity4Weather({});
      setCity4(newCity);
   

    cityInput.current.value = "";
  };

  return (
    <div>
       <form>
        <input ref={cityInput} type="text"/>
        <button onClick={(e)=>updateCity(e)} type="submit">Change</button>
        </form>
      <div
        onClick={() => getShowDetails(city4Weather)}
        className={showDetails ? "not-active" : "city4"}
      >
        <h2>{city4Weather.city_name}</h2>
        <Clock
          format={"HH:mm"}
          ticking={false}
          timezone={localTimezone(city4Weather)}
        />{" "}
        <br />
        <div className="current">
          <img
            className="icon-today"
            src={getIcon(getDescription(city4Weather, 0))}
            alt="weather_icon"
          />

          <p className="current-temp">{currentTemp(city4Weather, 0)} °c</p>
          <p>{getDescription(city4Weather, 0)}</p>
          <div className="temp-range">
            <p>
              <i className="fas fa-long-arrow-alt-up"></i>{" "}
              {highestTemp(city4Weather)}°c
            </p>
            <p>
              <i className="fas fa-long-arrow-alt-down"></i>{" "}
              {lowestTemp(city4Weather)}°c
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default City4;
