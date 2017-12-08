import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  mySwitchIdxArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  mySwitchArray = [false, false, false, false, false, false, false, false, false, false, false, false];
  mySwitchValueArray = ["Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off"];

  onSwitchClick(event, idx) {
    console.log(event);
    console.log(idx);
    this.mySwitchArray[idx] = !this.mySwitchArray[idx];
    if (this.mySwitchValueArray[idx] == "Off") {
      this.mySwitchValueArray[idx] = "On";
    }
    else {
      this.mySwitchValueArray[idx] = "Off";
    }
  }
}
