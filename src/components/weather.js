import React from "react";
import { Card } from "reactstrap";
import "./weather.css";

const Weather = props => {
  
  return (
    
    <div className="container text-dark">
      <div className="Card">
       
      <Card className="container bg-warning" >
      {props.cityname?(
        <h1 className="text-black py-3">{props.cityname}</h1>):null}
      {props.cityname?(
        <h5 className="py-1 bg-dark"></h5>):null}
        {/* {props.icon? (
        <h5 className="py-2">
          <img src={`wi ${props.icon} display-1`} />
        </h5>):null}  */}
        {props.temp_celsius ? (
          <h1 className="py-2">Temperature<br/>{props.temp_celsius}&deg;</h1>
        ) : null}

        {props.temp_min?(
        <h4>Min & Max temp.{maxminTemp(props.temp_min, props.temp_max)}</h4>):null}
        {props.lon?(
          <h4 className="py-2"> Longitude & Latitude <br/>{latlon(props.lon,props.lat)}</h4>
        ):null}
        {/* {props.lat?(
          <h4 className="py-2"> Latitude <br/>{}</h4>
        ):null} */}
        {props.deg?(
          <h4 className="py-2"> Degree & Speed <br/>{degspe(props.deg,props.speed)}</h4>
        ):null
        }
        {/* {props.speed?(
          <h4 className="py-2"> Speed <br/>{props.speed}</h4>
        ):null
        } */}
        {props.description?(
        <h4 className="py-3">
          Weather<br/>{ props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>):null}
        
        </Card>
        
      </div>
    </div>
    
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}

function degspe(deg, speed) {
  if (deg && speed) {
    return (
      <h3>
        <span className="px-4">{deg}</span>
        <span className="px-4">{speed}</span>
      </h3>
    );
  }
}

function latlon(lon, lat) {
  if (lon && lat) {
    return (
      <h3>
        <span className="px-4">{lon}</span>
        <span className="px-4">{lat}</span>
      </h3>
    );
  }
}

