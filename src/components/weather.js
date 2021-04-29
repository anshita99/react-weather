import React from "react";
import { Card } from "reactstrap";
import "./weather.css";

const Weather = props => {
  var a;
  var i;
  return (
    
    <div className="container text-dark">
      <div className="Card">
      <Card className="container bg-warning" >
        <h1 className="text-black py-3">{props.cityname}</h1>
        <h5 className="py-1 bg-dark"></h5>
        <h5 className="py-2">
          {/* <i className={`wi ${props.weatherIcon} display-1`} /> */}
          <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="wthr img"/>
        </h5>

        {props.temp_celsius ? (
          <h1 className="py-2">Temperature<br/>{props.temp_celsius}&deg;</h1>
        ) : null}

        {props.temp_min?(
        <h4>Min & Max temp.{maxminTemp(props.temp_min, props.temp_max)}</h4>):null}

        {props.description?(
        <h4 className="py-3">
          Weather<br/>{a = props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>):null}
        
        </Card>
        {des(a)}{i}
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

function des(b){
  console.log('hahsukhcdysugydug',b)
  if(b=="Haze"){
    var i="rain"
  }
}