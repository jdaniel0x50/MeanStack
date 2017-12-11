import { Injectable } from '@angular/core';
import { IStatistics } from './numberInterface';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class NumbersService{
  max: number = 12;
  numbers: Array<any> = [
    [], 
    []
  ];
  histogram: Array<any> = [
    [],
    []
  ]
  statistics: Array<any> = []
  constructor() { }

  retrieveNumbers(idxSequence: number) {
    return this.numbers[idxSequence];
  }
  addNumbers(idxSequence: number, max: number = this.max) {
    let randNum: number = Math.floor(Math.random() * max) + 1;
    this.numbers[idxSequence].push(randNum);
  }
  sumNumbers(idxSequence: number) {
    let sumNums: number = 0;
    for (let idx = 0; idx < this.numbers[idxSequence].length; idx++) {
      sumNums += this.numbers[idxSequence][idx];
    }
    return sumNums;
  }
  countNumbers(idxSequence: number) {
    return this.numbers[idxSequence].length;
  }
  avgNumbers(idxSequence: number): number {
    return Math.round((this.sumNumbers(idxSequence) / this.countNumbers(idxSequence))*10)/10;
  }
  makeHistogram(idxSequence: number, max: number = this.max) {
    for (let histKey = 0; histKey < max; histKey++) {
      let count = 0;
      for (let numIdx = 0; numIdx < this.numbers[idxSequence].length; numIdx++) {
        if (this.numbers[idxSequence][numIdx] == (histKey + 1)) {
          count += 1;
        }
      }
      this.histogram[idxSequence][histKey] = count;
    }
  }
  getMin(idxSequence: number) {
    let min: number = this.numbers[idxSequence][0];
    for (let idx = 1; idx < this.numbers[idxSequence].length; idx++) {
      if (this.numbers[idxSequence][idx] < min) {
        min = this.numbers[idxSequence][idx];
      }
    }
    return min;
  }
  getMax(idxSequence: number) {
    let max: number = this.numbers[idxSequence][0];
    for (let idx = 1; idx < this.numbers[idxSequence].length; idx++) {
      if (this.numbers[idxSequence][idx] > max) {
        max = this.numbers[idxSequence][idx];
      }
    }
    return max;
  }
  getMode(idxSequence: number) {
    let max: number = this.histogram[idxSequence][0];
    let currMode: number = 0 + 1;
    for (let idx = 1; idx < this.histogram[idxSequence].length; idx++) {
      if (this.histogram[idxSequence][idx] > max) {
        max = this.histogram[idxSequence][idx];
        currMode = idx + 1;
      }
    }
    return currMode;
  }
  sortNumbers(idxSequence: number) {
    for (let idx: number = this.numbers[idxSequence].length - 1; idx > 0; idx--) {
      for (let compareIdx: number = idx - 1; compareIdx >= 0; compareIdx--) {
        if (this.numbers[idxSequence][idx] > this.numbers[idxSequence][compareIdx]) {
          let tempNumber = this.numbers[idxSequence][idx];
          this.numbers[idxSequence][idx] = this.numbers[idxSequence][compareIdx];
          this.numbers[idxSequence][compareIdx] = tempNumber;
        }
      }
    }
    return this.numbers[idxSequence];
  }
  getMedian(idxSequence: number) {
    let medianIdx: number;
    let median: number;
    let len: number = this.numbers[idxSequence].length;
    if (len % 2 !== 0) {
      // length is odd --> the median is the middle number
      // median is the Math.ceiling for 1-based numbers
      // median is the Math.floor for 0-based numbers (array index)
      medianIdx = Math.floor(len / 2);
      median = this.numbers[idxSequence][medianIdx];
    } else {
      // length is even --> the median is in between two numbers
      // for 1-based numbers, the median is between len / 2 and (len / 2) + 1
      // for 0-based numbers, the median is between (len / 2) - 1 and len / 2
      medianIdx = len / 2;
      median = (this.numbers[idxSequence][medianIdx - 1] + this.numbers[idxSequence][medianIdx]) / 2;
    }
    return median;
  }
  getQ1(idxSequence: number) {
    let q1Idx: number;
    let q1: number;
    let len: number = this.numbers[idxSequence].length;
    if ((len - 1) % 4 === 0) {
      // length without the median is divisible by four
      // --> the quartile is the middle number between the median
      // and the end of the list for a list ordered high-->low
      q1Idx = ((len - 1) * 3 / 4) - 1;
      q1 = this.numbers[idxSequence][q1Idx];
    } else {
      // length without the median is not divisible by four
      // --> the quartile is between two numbers
      q1Idx = Math.floor(((len + 1) * 3 / 4) - 1);
      q1 = (this.numbers[idxSequence][q1Idx] + this.numbers[idxSequence][q1Idx + 1]) / 2;
    }
    return q1;
  }
  getQ3(idxSequence: number) {
    let q3Idx: number;
    let q3: number;
    let len: number = this.numbers[idxSequence].length;
    if ((len - 1) % 4 === 0) {
      // length without the median is divisible by four
      // --> the quartile is the middle number between the median
      // and the beginning of the list for a list ordered high-->low
      q3Idx = ((len - 1) * 1 / 4) - 1;
      q3 = this.numbers[idxSequence][q3Idx];
    } else {
      // length without the median is not divisible by four
      // --> the quartile is between two numbers
      q3Idx = Math.floor(((len + 1) * 1 / 4) - 1);
      q3 = (this.numbers[idxSequence][q3Idx] + this.numbers[idxSequence][q3Idx + 1]) / 2;
    }
    return q3;
  }

  getStatistics(idxSequence: number) {
    let newStats = {
      count: 0,
      min: 0,
      max: 0,
      avg: 0,
      mode: 0,
      q1: 0,
      median: 0,
      q3: 0,
      interQtrRange: 0
    };
    this.makeHistogram(idxSequence, this.max);
    this.sortNumbers(idxSequence);
    newStats.count = this.countNumbers(idxSequence);
    newStats.min = this.getMin(idxSequence);
    newStats.max = this.getMax(idxSequence);
    newStats.avg = this.avgNumbers(idxSequence);
    newStats.mode = this.getMode(idxSequence);
    newStats.median = this.getMedian(idxSequence);
    newStats.q1 = this.getQ1(idxSequence);
    newStats.q3 = this.getQ3(idxSequence);
    newStats.interQtrRange = newStats.q3 - newStats.q1;
    this.statistics[idxSequence] = newStats;
    return this.statistics[idxSequence];

  }
}
