import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  constructor() {
    for (var i = 0; i < 101; i++) {
      this.pwrLvls.push(i);
    }
  }
  pwrLvls: Array<Number> = [];
  selectedPowerLevel: Number = 100;
  imgSources: Array<String> = [
    "assets/img/human.png",
    "assets/img/saiyan.png",
    "assets/img/super-saiyan.png",
    "assets/img/saiyan-two.jpg",
    "assets/img/saiyan-three.png",
    "assets/img/saiyan-four.png"
  ]
  imgSource: String = this.imgSources[0];
  isSubmit: Boolean = false;

  ngOnInit() {
  }
  onSubmit() {
    this.isSubmit = true;
  }
  onClickDiv(idx) {
    this.imgSource = this.imgSources[idx];
  }
}
