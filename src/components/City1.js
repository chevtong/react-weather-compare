import React,{useRef} from "react";

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
    e.preventDefault()

    const newCity = cityInput.current.value;

    if (newCity === "") return;
    console.log(newCity);

  
      setCity1Weather({});
      setCity1(newCity);
   

    cityInput.current.value = "";
  };


  return (
    <div>
        <form>
        <input ref={cityInput} type="text"/>
        <button onClick={(e)=>updateCity(e)} type="submit">Change</button>
        </form>
      

    <div 
    onClick={()=>getShowDetails(city1Weather)} 
    className={showDetails?"not-active":"city1"}
    >
      
      <h2>{city1Weather.city_name}</h2>
      <Clock
        format={"HH:mm"}
        ticking={false}
        timezone={localTimezone(city1Weather)}
      />{" "}
      <br />
      <div className="current">
        <img
          className="icon-today"
          src={getIcon(getDescription(city1Weather, 0))}
          alt="weather_icon"
        />

        <p className="current-temp">{currentTemp(city1Weather, 0)} °c</p>
        <p>{getDescription(city1Weather, 0)}</p>
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
    </div>
  );
}

export default City1
