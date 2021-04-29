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

        <h5 className="py-1 bg-dark"></h5>
        {props.icon? (
        <h5 className="py-2">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>):null} 
        {props.temp_celsius ? (
          <h1 className="py-2">Temperature<br/>{props.temp_celsius}&deg;</h1>
        ) : null}

        {props.temp_min?(
        <h4>Min & Max temp.{maxminTemp(props.temp_min, props.temp_max)}</h4>):null}

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

