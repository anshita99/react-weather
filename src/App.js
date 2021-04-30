import React from "react";
import "./App.css";
import Form from "./components/form";
import Weather from "./components/weather";


const Api_Key = "aabe2c2da317db77b9a4cc4185d61caa";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      tempMax: null,
      tempMin: null,
      lon: null,
      deg: null,
      speed:null,
      lat: null,
      description: "",
      error: false
    };

  }
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async e => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (country && city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country},&appid=${Api_Key}`
        
      );

      const response = await api_call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        icon: response.weather[0].icon,
        celsius: this.calCelsius(response.main.temp),
        tempMax: this.calCelsius(response.main.tempMax),
        tempMin: this.calCelsius(response.main.tempMin),
        lon:response.coord.lon,
        deg :response.wind.deg,
        speed :response.wind.speed,
        lat:response.coord.lat,
        description: response.weather[0].description,
        error: false
      });

      

    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          country={this.state.country}
          lon={this.state.lon}
          lat={this.state.lat}
          icon={this.state.icon}
          deg={this.state.deg}
          speed={this.state.speed}
          tempCelsius={this.state.celsius}
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;