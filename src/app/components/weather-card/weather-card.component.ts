import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { weatherCodes } from 'src/app/consts/WMO-weather-interpretation-codes';
import { WeatherIcons } from 'src/app/consts/weather-icons';
import { DailyWeather } from 'src/app/models/daily-weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss', '../../styles/skeleton.component.scss']
})
export class WeatherCardComponent implements OnChanges {
  @Input() dailyWeather?: DailyWeather;
  @Input() temperatureUnit!: string;
  generalWeatherDescription?: string;
  baseIconPath: string = "assets/weather-icons/dovora/";
  iconPath?: string;
  ngOnChanges(changes: SimpleChanges): void {
    this.generalWeatherDescription = weatherCodes[this.dailyWeather!.weatherCode];
    this.iconPath = WeatherIcons[this.dailyWeather!.weatherCode];
  }
}
