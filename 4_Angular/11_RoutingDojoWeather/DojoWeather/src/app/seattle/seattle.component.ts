import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weatherData: any;
  city: string;
  cityTitle: string;
  imgUrl: string;

  constructor(private _weatherService: WeatherService) {
    this.city = "Seattle";
    this.cityTitle = "Seattle, WA";
    this.imgUrl = "/assets/img/seattle.jpg"
  }

  ngOnInit() {
    this._weatherService.weatherData.subscribe(
      (weatherData) => {
        this.weatherData = weatherData;
      });
    this._weatherService.getWeather(this.city);
  }

}
