import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {
  constructor(private _numbersService: NumbersService) { }
  sequence1: number[] = [];
  sequence2: number [] = [];
  difference: number;
  
  ngOnInit() {
    this.sequence1 = this._numbersService.retrieveNumbers(0);
    this.sequence2 = this._numbersService.retrieveNumbers(1);
  }
  onClickDifference() {
    let sumSeq1: number = this._numbersService.sumNumbers(0);
    let sumSeq2: number = this._numbersService.sumNumbers(1);
    this.difference = sumSeq1 - sumSeq2;
  }


}
