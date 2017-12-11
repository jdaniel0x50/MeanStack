import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Building } from '../building';
import { Message } from '../message';
import { GoldDataService } from '../gold-data.service';
import { Event } from '_debugger';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input() bldg: Building;
  @Output() newGoldEvent = new EventEmitter;
  constructor(private _dataService: GoldDataService) { }

  ngOnInit() {
  }
  onBldgClick() {
    let id = this._dataService.findBuilding(this.bldg.name);
    this._dataService.generateGold(id);
    this.newGoldEvent.emit();

  }
}
