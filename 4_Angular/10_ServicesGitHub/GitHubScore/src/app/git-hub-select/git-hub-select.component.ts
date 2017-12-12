import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScoreService } from '../score.service';
import { GitHub } from '../github';

@Component({
  selector: 'app-git-hub-select',
  templateUrl: './git-hub-select.component.html',
  styleUrls: ['./git-hub-select.component.css']
})
export class GitHubSelectComponent implements OnInit {
  @Output() githubAcctSet = new EventEmitter;
  ghAcctData: any;
  githubAcct: GitHub = new GitHub();

  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
    this._scoreService.ghAcctData.subscribe(
      (ghAcctData) => { this.ghAcctData = ghAcctData; }
    );
  }
  onSubmit() {
    this._scoreService.getAccount(this.githubAcct.username);
    this.githubAcctSet.emit();
  }
}
