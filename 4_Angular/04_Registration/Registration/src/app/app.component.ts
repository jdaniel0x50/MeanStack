import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  title = 'Registration';
  formSubmitted=false;
  currDate = new Date();
  currDateString = this.currDate.getFullYear() + "-" + (this.currDate.getMonth() + 1) + "-" + this.currDate.getDate(); 
  feelingsChoices = [
    {
      text: "Lucky",
      value: true
    }, {
      text: "Not Lucky",
      value: false
    }]
  users = [];
  user = new User();

  onSubmit() {
    console.log("SUBMITTING THE FORM");
    console.log(this.user);
    this.formSubmitted = true;
    this.users.push(this.user);
    this.user = new User();
  }
}
