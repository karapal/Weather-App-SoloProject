import React from "react";
import {Container } from "react-bootstrap";

class HourlyWeather extends React.Component {
    state = {
      isLoading: true,
      isError: false,
      cities: [],
      input: "",
    };
  
    async getLocations(query) {
      try {
        const response = await fetch(
           `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=57&lon=-2.15&callback=test&appid=3e93bd34cafe899e1166a35a9efa51fc`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          this.setState({ ...this.state, cities: data });
          console.log(this.state);
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    componentDidMount() {
      this.getLocations("Berlin");
    }
  
    render() {
      return (
        <>
          <Container id="container">
            
            <input
              type="text"
              value={this.state.input}
              onChange={(e) => {
                this.setState({ ...this.state, input: e.target.value });
              }}
              placeholder="Enter location..."
            />
        
            
            <h2>Hourly</h2>
  
            <div>
              <div className="flexweather">
                <h1 id="h1">{Math.round(this.state.cities?.main?.temp)}C</h1>{" "}
                {this.state.cities?.weather?.map((weather) => (
                  <img
                    id="weatherlogo"
                    attribute
                    title={weather.description}
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt=""
                  ></img>
                ))}
              </div>
              <p id="city">{this.state.cities.name}</p>
             
            </div>
  
          </Container>

          </> 
    );
  }
}

export default HourlyWeather;