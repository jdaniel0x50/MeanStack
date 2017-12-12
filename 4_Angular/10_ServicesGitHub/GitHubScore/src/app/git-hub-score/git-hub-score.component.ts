import { Component, OnInit, Input } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-git-hub-score',
  templateUrl: './git-hub-score.component.html',
  styleUrls: ['./git-hub-score.component.css']
})
export class GitHubScoreComponent implements OnInit {
  @Input() acctSet: Boolean;
  ghAcctData: any;
  ghScoreMsg: string = '';
  msgColor: string = '';

  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
    this._scoreService.ghAcctData.subscribe(
      (ghAcctData) => {
        this.ghAcctData = ghAcctData; 
        this.setMessage();
    });
  }
  setMessage() {
    if (this.ghAcctData != "ERRORS") {
      let score = this.ghAcctData.public_repos + this.ghAcctData.followers;

      switch (true) {
        case (score < 20):
          this.ghScoreMsg = "Needs Work!";
          this.msgColor = "red";
          break;
        case (score < 50):
          this.ghScoreMsg = "A decent start!";
          this.msgColor = "orange";
          break;
        case (score < 100):
          this.ghScoreMsg = "Doing good!";
          this.msgColor = "black";
          break;
        case (score < 200):
          this.ghScoreMsg = "Great job!";
          this.msgColor = "green";
          break;
        case (score >= 200):
          this.ghScoreMsg = "GitHub Elite!";
          this.msgColor = "blue";
          break;
      }
    }
  }

}
