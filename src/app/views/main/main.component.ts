import { Component } from '@angular/core';
import { DailyWeather } from 'src/app/models/daily-weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {
  empty: DailyWeather = new DailyWeather(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
  weatherData: DailyWeather[] = [this.empty, this.empty, this.empty, this.empty, this.empty, this.empty, this.empty];
  params: any = {};
  temperatureUnit: string = "c";
  errorMsg?: string;
  constructor(private weatherService: WeatherService) {
    this.params = { 
      "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "apparent_temperature_max", "apparent_temperature_min", "precipitation_sum"],
	    "timezone": "GMT"
    }
  }

  ngOnInit(): void {
    this.getGeolocation();
  }

  getGeolocation() {
    this.errorMsg = undefined;
    navigator.geolocation.getCurrentPosition(this.onWeatherResponse.bind(this), this.showError.bind(this));
  }
  
  showError(error: any) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        this.errorMsg = "enable geolocation and press retry button to view weather."
        break;
      case error.POSITION_UNAVAILABLE:
        this.errorMsg = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        this.errorMsg = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        this.errorMsg = "An unknown error occurred."
        break;
    }
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
