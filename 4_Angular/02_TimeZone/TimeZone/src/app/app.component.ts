import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  currTime = new Date();
  utcTime = this.currTime.toUTCString();
  localTZoffset = this.currTime.getTimezoneOffset();
  timeZones = [
    { 
      key: "EST",
      name: "Eastern Time Zone",
      standardTime: 300,
      daylightSavings: 240
    },
    {
      key: "CST",
      name: "Central Time Zone",
      standardTime: 360,
      daylightSavings: 300
    },
    {
      key: "MST",
      name: "Mountain Time Zone",
      standardTime: 420,
      daylightSavings: 360
    },
    {
      key: "PST",
      name: "Pacific Time Zone",
      standardTime: 480,
      daylightSavings: 420
    },
    {
      key: "AKST",
      name: "Alaska Time Zone",
      standardTime: 540,
      daylightSavings: 480
    },
    {
      key: "HST",
      name: "Hawaii-Aleutian Time Zone",
      standardTime: 600,
      daylightSavings: 540
    }
  ];
  getTimeZone = {
    300: "EST",
    360: "CST",
    420: "MST",
    480: "PST",
    540: "AKST",
    600: "HST"
  }
  getTimeZoneKey = {
    300: 0,
    360: 1,
    420: 2,
    480: 3,
    540: 4,
    600: 5    
  }
  getOffsetFromTZ = {
    "EST": 300,
    "CST": 360,
    "MST": 420,
    "PST": 480,
    "AKST": 540,
    "HST": 600
  }
  localTZ = this.getTimeZone[this.localTZoffset];
  localTZkey = this.getTimeZoneKey[this.localTZoffset];
  localTZname = this.timeZones[this.localTZkey].name;

  switchEST = false;
  switchCST = false;
  switchMST = false;
  switchPST = false;
  switchGMT = true;
  switchClear = false;

  onButtonClick(event) {
    var btnName = event.path[0].name;
    if (btnName == "Clear") {
      document.getElementById("displayTime").innerHTML = "";
    }
    if (btnName == "GMT") {
      document.getElementById("displayTime").innerHTML = this.utcTime;
    }
    if (btnName != "Clear" && btnName != "GMT") {
      var offset = this.getOffsetFromTZ[btnName] * 60 * 1000;
      var currTimeMillisec = Date.now();
      var currUtcMillisec = currTimeMillisec + (this.localTZoffset * 60 * 1000);

      var btnTime = currUtcMillisec - offset;
      var displayDate = new Date(btnTime);
      document.getElementById("displayTime").innerHTML = displayDate.toDateString() + " " + displayDate.toLocaleTimeString() + " (" + btnName + ")";
      }
    this.switchCST = false;
    this.switchEST = false;
    this.switchMST = false;
    this.switchPST = false;
    this.switchGMT = false;
    this.switchClear = false;
    switch (btnName) {
      case "CST":
        this.switchCST = true;
        break;
      case "EST":
        this.switchEST = true;
        break;
      case "MST":
        this.switchMST = true;
        break;
      case "PST":
        this.switchPST = true;
        break;
      case "GMT":
        this.switchGMT = true;
        break;
      case "Clear":
        this.switchClear = true;
        break;
    }
  }
}
