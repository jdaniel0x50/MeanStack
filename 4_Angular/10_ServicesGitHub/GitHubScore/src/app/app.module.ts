import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GitHubSelectComponent } from './git-hub-select/git-hub-select.component';
import { GitHubScoreComponent } from './git-hub-score/git-hub-score.component';
import { ScoreService } from './score.service';


@NgModule({
  declarations: [
    AppComponent,
    GitHubSelectComponent,
    GitHubScoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
