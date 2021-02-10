import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css'],
})
export class WeatherappComponent implements OnInit {
  weatherData: any;



  
  constructor() {}

  ngOnInit() {
    this.weatherData = {
      main: {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.weatherData);
  }

  getWeatherData() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=d206ba1f905aa1fa466bb7c83b37efb3'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
      });
    // let data = JSON.parse(
    //   '{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}'
    // );
    // this.setWeatherData(data);
  }

  setWeatherData(data) {
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.weatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);





  }
}
