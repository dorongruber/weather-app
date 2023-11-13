import { Component, OnInit } from '@angular/core';
import { DailyWeather } from 'src/app/models/daily-weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  
  weatherData: DailyWeather[] = [];
  constructor(private weatherService: WeatherService) {
    
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(this.onWeatherResponse.bind(this));

  }

  async onWeatherResponse(position: GeolocationPosition) {
    console.log("position ==> ", position);

    const params = {
      "latitude": position.coords.latitude,
      "longitude": position.coords.longitude,
      "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "apparent_temperature_max", "apparent_temperature_min", "precipitation_sum"],
	    "timezone": "GMT"
    };
    
    if(position) {
      this.weatherData = await this.weatherService.getWeeklyWeather(params);
      console.log("weatherData ==> ", this.weatherData);
      
    }
  }
}
