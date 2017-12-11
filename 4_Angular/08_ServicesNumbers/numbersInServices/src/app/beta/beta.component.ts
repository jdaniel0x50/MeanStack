import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  constructor(private _numbersService: NumbersService) { }
  sequence2: number[] = [];

  ngOnInit() {
    this.sequence2 = this._numbersService.retrieveNumbers(1);
  }
  onClickAddNum() {
    this._numbersService.addNumbers(1);
  }

}
