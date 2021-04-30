import React,{useState} from "react";
import "./form.css";

const Form = props => {
  const [city,setCity]=useState("")
  const [country,setCountry]=useState("")
  const handleChange =(e)=>{
    setCity(e.target.value)
  }
  const handleCountry =(e)=>{
    setCountry (e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    props.loadWeather(city,country)
  }
  return (
    <div class="card container text-white bg-danger mb-3">
    <div className="container h-100">
      <form onSubmit={handleSubmit}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
              onChange={handleChange}
            />
            <br/>
          </div>
          <br/>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
              onChange={handleCountry}
            />
           
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-dark">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      U are required to enter both...!
    </div>
  );
};

export default Form;
