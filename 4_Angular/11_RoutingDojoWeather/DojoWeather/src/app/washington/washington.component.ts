import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weatherData: any;
  city: string;
  cityTitle: string;
  imgUrl: string;

  constructor(private _weatherService: WeatherService) {
    this.city = "Washington";
    this.cityTitle = "Washington, DC";
    this.imgUrl = "/assets/img/washingtondc.jpg"
  }

  ngOnInit() {
    this._weatherService.weatherData.subscribe(
      (weatherData) => {
        this.weatherData = weatherData;
      });
    this._weatherService.getWeather(this.city);
  }

}
