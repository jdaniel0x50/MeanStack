import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan-four',
  templateUrl: './saiyan-four.component.html',
  styleUrls: ['./saiyan-four.component.css']
})
export class SaiyanFourComponent implements OnInit {
  constructor() {
  }

  @Input() selectedPowerLevel: Number;
  @Input() isInit: Boolean;
  multiplier: Number = 500;
  localPL: Number;
  isMessage: Boolean = false;
  message: String = "";

  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes.selectedPowerLevel) {
      this.localPL = Number(this.selectedPowerLevel) * Number(this.multiplier);
      switch (true) {
        case (this.localPL == 50000):
          this.isMessage = true;
          this.message = "The Highest One!";
          break;
        case (this.localPL > 20000):
          this.isMessage = true;
          this.message = "Superlative!";
          break;
        case (this.localPL > 9000):
          this.isMessage = true;
          this.message = "Over 9000!";
          break;
        case (this.localPL <= 9000):
          this.isMessage = false;
          this.message = "";
      }
    }
  }

}
