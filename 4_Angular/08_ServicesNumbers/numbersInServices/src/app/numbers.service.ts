import { Injectable } from '@angular/core';

@Injectable()
export class NumbersService{
  numbers: Array<any> = [
    [], 
    []
  ];
  constructor() { }

  retrieveNumbers(idxSequence: number) {
    return this.numbers[idxSequence];
  }
  addNumbers(idxSequence: number, max: number) {
    let randNum: number = Math.floor(Math.random() * max) + 1;
    this.numbers[idxSequence].push(randNum);
  }
  sumNumbers(idxSequence: number) {
    let sumNums = 0;
    for (let idx = 0; idx < this.numbers[idxSequence].length; idx++) {
      sumNums += this.numbers[idxSequence][idx];
    }
    return sumNums;
  }
}
