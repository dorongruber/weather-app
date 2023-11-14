import { Component } from '@angular/core';
import { DailyWeather } from 'src/app/models/daily-weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {

  weatherData: DailyWeather[] = [];
  params: any = {};
  temperatureUnit: string = "c";
  constructor(private weatherService: WeatherService) {
    this.params = { 
      "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "apparent_temperature_max", "apparent_temperature_min", "precipitation_sum"],
	    "timezone": "GMT"
    }
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(this.onWeatherResponse.bind(this));

  }

  async onValueChanges(params: any) {
    for(let key of Object.keys(params)) {
      this.params[key] = params[key];
    }
    
    this.weatherData = await this.weatherService.getWeeklyWeather(this.params);
    this.temperatureUnit = params["temperature_unit"][0];
  }

  async onWeatherResponse(position: GeolocationPosition) {    
    if(position) {
      this.params["latitude"] = position.coords.latitude;
      this.params["longitude"] = position.coords.longitude;
      this.weatherData = await this.weatherService.getWeeklyWeather(this.params);
    }
  }

}
