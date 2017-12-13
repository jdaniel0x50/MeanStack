import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weatherData: any;
  city: string;
  cityTitle: string;
  imgUrl: string;

  constructor(private _weatherService: WeatherService) {
    this.city = "Burbank"; 
    this.cityTitle = "Burbank, CA"; 
    this.imgUrl = "/assets/img/burbank.jpg"
  }

  ngOnInit() {
    this._weatherService.weatherData.subscribe(
      (weatherData) => {
        this.weatherData = weatherData;
      });
    this._weatherService.getWeather(this.city);
  }

}
