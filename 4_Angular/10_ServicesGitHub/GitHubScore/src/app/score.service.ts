import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScoreService {
  ghAcctData: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  updateScoreData(newData: any): void {
    this.ghAcctData.next(newData);
  }
  getAccount(username: string) {
    let url: string = "https://api.github.com/users/" + username;
    let jsonObj = this._http.get(url)
      .map(response => response.json())
      .subscribe(
        response => this.updateScoreData(response),
        error => this.updateScoreData("ERROR")
      )
  }
}
