import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { MessageComponent } from './message/message.component';
import { GoldDataService } from './gold-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoldDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
