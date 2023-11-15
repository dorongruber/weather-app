import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { weatherCodes } from 'src/app/consts/WMO-weather-interpretation-codes';
import { WeatherIcons, emptySVG } from 'src/app/consts/weather-icons';
import { DailyWeather } from 'src/app/models/daily-weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss', '../../styles/skeleton.component.scss']
})
export class WeatherCardComponent implements OnChanges {
  @Input() dailyWeather!: DailyWeather;
  @Input() temperatureUnit!: string;
  generalWeatherDescription?: string;
  iconPath: string = emptySVG;
  airTemperatureTitle?: string;
  temperatureTitle?: string;
  ngOnChanges(changes: SimpleChanges): void {
    this.generalWeatherDescription = this.dailyWeather.weatherCode ? weatherCodes[this.dailyWeather.weatherCode!] : undefined;
    this.iconPath = this.dailyWeather.weatherCode ? WeatherIcons[this.dailyWeather.weatherCode!] : emptySVG;
    this.airTemperatureTitle = this.dailyWeather.apparentTemperatureMax ? "air temperature" : undefined;
    this.temperatureTitle = this.dailyWeather.temperature2mMax ? "temperature" : undefined;
  }
}
