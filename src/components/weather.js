import React from "react";
import "./weather.css";

const Weather = props => {
  function MaxMinTemp(min, max) {
    if (max && min) {
      return (
        <h3>
          <span className="px-4">{min}&deg;</span>
          <span className="px-4">{max}&deg;</span>
        </h3>
      );
    }
  }
  
  function degSpe(deg, speed) {
    if (deg && speed) {
      return (
        <h3>
          <span className="px-4">{deg}</span>
          <span className="px-4">{speed}</span>
        </h3>
      );
    }
  }
  
  function LatLon(lon, lat) {
    if (lon && lat) {
      return (
        <h3>
          <span className="px-4">{lon}</span>
          <span className="px-4">{lat}</span>
        </h3>
      );
    }
  }
  
  return (
    
    <div className="container text-dark">
      <div className="Card">
       
      <div class="card container bg-warning mb-3" >
      {props.cityname?(
        <h1 className="text-black py-3">{props.cityname}</h1>):null}
      {props.cityname?(
        <h5 className="py-1 bg-dark"></h5>):null}
        
        {props.tempCelsius ? (
          <h1 className="py-2">Temperature<br/>{props.tempCelsius}&deg;</h1>
        ) : null}

        {props.temp_min?(
        <h4>Min & Max temp.{MaxMinTemp(props.tempMin, props.tempMax)}</h4>):null}
        {props.lon?(
          <h4 className="py-2"> Longitude & Latitude <br/>{LatLon(props.lon,props.lat)}</h4>
        ):null}
        {props.deg?(
          <h4 className="py-2"> Degree & Speed <br/>{degSpe(props.deg,props.speed)}</h4>
        ):null
        }
        {props.description?(
        <h4 className="py-3">
          Weather<br/>{ props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>):null}
        
        </div>
        
      </div>
    </div>
    
  );
};

export default Weather;


