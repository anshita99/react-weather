import React from "react";
import { Card } from "reactstrap";
import "./weather.css";

const Weather = props => {
  return (
    
    <div className="container text-light">
      <div className="Card">
      <Card className="container bg-warning" >
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
          {/* <img src={`http://openweathermap.org/img/w/${props.icon}.png`}alt="wthr img"/> */}
        </h5>

        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}

        {maxminTemp(props.temp_min, props.temp_max)}

        
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
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
