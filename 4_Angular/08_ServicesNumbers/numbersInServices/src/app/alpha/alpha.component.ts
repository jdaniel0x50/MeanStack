import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  constructor(private _numbersService: NumbersService) { }
  sequence1: number[] = [];
  max: number = 25;

  ngOnInit() {
    this.sequence1 = this._numbersService.retrieveNumbers(0);
  }
  onClickAddNum() {
    this._numbersService.addNumbers(0, this.max);
  }

}
