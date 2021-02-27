import React from 'react'

import Clock from 'react-live-clock';


function City2({ city2, setCity2, city2Weather, localTimezone, highestTemp, lowestTemp, currentTemp, getDescription, getIcon}) {

    








  return (
    <div className="list">
        <h2>{city2Weather.city_name}</h2>
        <Clock format={'HH:mm'} ticking={false} timezone={localTimezone(city2Weather)} /> <br/>

      <div className="current">
    
      <img className="icon-today" src={getIcon(getDescription(city2Weather,0))} alt="weather_icon" />
      

      <p className="current-temp">{currentTemp(city2Weather,0)} °c</p>
      <p>{getDescription(city2Weather,0)}</p>
      <div className="temp-range">
      <p><i className="fas fa-long-arrow-alt-up"></i> {highestTemp(city2Weather)}°c</p>
      <p><i className="fas fa-long-arrow-alt-down"></i> {lowestTemp(city2Weather)}°c</p>
      </div>
      </div>
      {/* <div className="forecast">
        <ul>
          <li> <img className="icon-forecast" src={getIcon(getDescription(1))} alt="weather_icon" /> {currentTemp(1)}°c</li>
          <li> <img className="icon-forecast" src={getIcon(getDescription(2))} alt="weather_icon" /> {currentTemp(2)}°c</li>
          <li> <img className="icon-forecast" src={getIcon(getDescription(3))} alt="weather_icon" /> {currentTemp(3)}°c</li>
          <li> <img className="icon-forecast" src={getIcon(getDescription(4))} alt="weather_icon" /> {currentTemp(4)}°c</li>
          <li> <img className="icon-forecast" src={getIcon(getDescription(5))} alt="weather_icon" /> {currentTemp(5)}°c</li>
        </ul>
      </div> */}
    </div>
  );
}

export default City2
