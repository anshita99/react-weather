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
      temp_max: null,
      temp_min: null,
      lon: null,
      deg: null,
      speed:null,
      lat: null,
      description: "",
      error: false
    };

    // this.weatherIcon = {
    //   Thunderstorm: "wi-thunderstorm",
    //   Drizzle: "wi-sleet",
    //   Rain: "wi-storm-showers",
    //   Snow: "wi-snow",
    //   Atmosphere: "wi-fog",
    //   Clear: "wi-day-sunny",
    //   Clouds: "wi-day-fog"
    // };
  }

  // get_WeatherIcon(icons, rangeId) {
  //   switch (true) {
  //     case rangeId >= 200 && rangeId < 232:
  //       this.setState({ icon: icons.Thunderstorm });
  //       break;
  //     case rangeId >= 300 && rangeId <= 321:
  //       this.setState({ icon: icons.Drizzle });
  //       break;
  //     case rangeId >= 500 && rangeId <= 521:
  //       this.setState({ icon: icons.Rain });
  //       break;
  //     case rangeId >= 600 && rangeId <= 622:
  //       this.setState({ icon: icons.Snow });
  //       break;
  //     case rangeId >= 701 && rangeId <= 781:
  //       this.setState({ icon: icons.Atmosphere });
  //       break;
  //     case rangeId === 800:
  //       this.setState({ icon: icons.Clear });
  //       break;
  //     case rangeId >= 801 && rangeId <= 804:
  //       this.setState({ icon: icons.Clouds });
  //       break;
  //     default:
  //       this.setState({ icon: icons.Clouds });
  //   }
  // }

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
      console.log('jncdbc',response.weather[0].icon)

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        icon: response.weather[0].icon,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        lon:response.coord.lon,
        deg :response.wind.deg,
        speed :response.wind.speed,
        lat:response.coord.lat,
        description: response.weather[0].description,
        error: false
      });

      
      //this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

      console.log(response);
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          country={this.state.country}
          lon={this.state.lon}
          lat={this.state.lat}
          icon={this.state.icon}
          deg={this.state.deg}
          speed={this.state.speed}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;

