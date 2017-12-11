import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Building } from '../building';
import { Message } from '../message';
import { GoldDataService } from '../gold-data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() msg: Message;
  @Input() msgGainClass: Boolean;
  constructor(private _dataService: GoldDataService) { }

  ngOnInit() {
    console.log(this.msgGainClass);
  }

}
