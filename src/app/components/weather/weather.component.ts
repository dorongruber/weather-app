import { Component, Input, OnInit } from '@angular/core';
import { DailyWeather } from 'src/app/models/daily-weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  
  @Input() weatherData: DailyWeather[] = [];
  @Input() temperatureUnit!: string;
}
