import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weatherData: any;
  city: string;
  cityTitle: string;
  imgUrl: string;

  constructor(private _weatherService: WeatherService) {
    this.city = "Chicago";
    this.cityTitle = "Chicago, IL";
    this.imgUrl = "/assets/img/chicago.jpg"
  }

  ngOnInit() {
    this._weatherService.weatherData.subscribe(
      (weatherData) => {
        this.weatherData = weatherData;
      });
    this._weatherService.getWeather(this.city);
  }

}
