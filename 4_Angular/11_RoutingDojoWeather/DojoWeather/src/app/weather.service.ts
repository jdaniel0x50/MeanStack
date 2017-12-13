import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  weatherData: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  updateData(newData: any): void {
    this.weatherData.next(newData);
  }
  getWeather(city: string) {
    city.replace(" ", "%20");
    let url: string = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=30e88e4d6348c1b24222c23008a330ea";
    let jsonObj = this._http.get(url)
      .map(response => response.json())
      .subscribe(
        response => this.updateData(response),
        error => this.updateData("ERROR")
      )
  }

}
