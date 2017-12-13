import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weatherData: any;
  city: string;
  cityTitle: string;
  imgUrl: string;

  constructor(private _weatherService: WeatherService) {
    this.city = "San Jose";
    this.cityTitle = "San Jose, CA";
    this.imgUrl = "/assets/img/sanjose.jpg"
  }

  ngOnInit() {
    this._weatherService.weatherData.subscribe(
      (weatherData) => {
        this.weatherData = weatherData;
      });
    this._weatherService.getWeather(this.city);
  }

}
