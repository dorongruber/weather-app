import { Injectable } from '@angular/core';
import { fetchWeatherApi } from 'openmeteo';
import { WeatherApiResponse } from '@openmeteo/sdk/weather-api-response';
import { DailyWeather } from '../models/daily-weather';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: string = "https://api.open-meteo.com/v1/forecast";
  constructor() { }

  range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  async getWeeklyWeather(params: any) {
    
    
    const responses = await fetchWeatherApi(this.url, params);
    
    // Helper function to form time ranges
    
    
    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];
    
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();
    
    //this.weatherInDaylyFormat(response);
    return this.weatherInDaylyFormat(response);
    
  }

  weatherInhourlyFormat(response: WeatherApiResponse) {
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const hourly = response.daily()!;
    
    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
    
      hourly: {
        time: this.range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2m: hourly.variables(0)!.valuesArray()!,
      },
    
    };
    
    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      console.log(
        weatherData.hourly.time[i].toISOString(),
        weatherData.hourly.temperature2m[i]
      );
    }
  }

  weatherInDaylyFormat(response: WeatherApiResponse) {
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const daily = response.daily()!;
    const res: DailyWeather[] = [];
    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {

      daily: {
        time: this.range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        weatherCode: daily.variables(0)!.valuesArray()!,
        temperature2mMax: daily.variables(1)!.valuesArray()!,
        temperature2mMin: daily.variables(2)!.valuesArray()!,
        apparentTemperatureMax: daily.variables(3)!.valuesArray()!,
        apparentTemperatureMin: daily.variables(4)!.valuesArray()!,
        precipitationSum: daily.variables(5)!.valuesArray()!,
      }
    
    };
        
    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.daily.time.length; i++) {
      res.push( new DailyWeather(
        weatherData.daily.time[i],weatherData.daily.weatherCode[i],
        weatherData.daily.temperature2mMax[i],
        weatherData.daily.temperature2mMin[i],
        weatherData.daily.apparentTemperatureMax[i],
        weatherData.daily.apparentTemperatureMin[i],
        weatherData.daily.precipitationSum[i],
      ));
    }


    return res;
  }


}
