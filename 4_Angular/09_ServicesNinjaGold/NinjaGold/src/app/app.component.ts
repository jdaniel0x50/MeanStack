import { Component } from '@angular/core';
import { Building } from './building';
import { Message } from './message';
import { GoldDataService } from './gold-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalGold: number = 0;
  buildings: Array<Building> = [];
  messages: Array<Message> = [];
  msgClasses: Array<Boolean> = [];

  constructor(private _dataService: GoldDataService) { }

  ngOnInit() {
    this.buildings = this._dataService.buildings;
    this.messages = this._dataService.messages;
    this.msgClasses = this._dataService.messagesGainClass;
    this.totalGold = this._dataService.goldTotal;
  }
  newGoldCreated(event) {
    this.totalGold = this._dataService.goldTotal;
  }
}
