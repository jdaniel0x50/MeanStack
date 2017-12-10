import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SaiyanTwoComponent } from './power/saiyan-two/saiyan-two.component';
import { SaiyanThreeComponent } from './power/saiyan-three/saiyan-three.component';
import { SaiyanFourComponent } from './power/saiyan-four/saiyan-four.component';
import { SuperSaiyanComponent } from './power/super-saiyan/super-saiyan.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SaiyanTwoComponent,
    SaiyanThreeComponent,
    SaiyanFourComponent,
    SuperSaiyanComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
