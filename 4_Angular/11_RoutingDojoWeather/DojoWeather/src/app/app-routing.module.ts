import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';

const routes: Routes = [
    { path: 'weather/burbank', component: BurbankComponent },
    { path: 'weather/chicago', component: ChicagoComponent },
    { path: 'weather/dallas', component: DallasComponent },
    { path: 'weather/sanjose', component: SanjoseComponent },
    { path: 'weather/seattle', component: SeattleComponent },
    { path: 'weather/washington', component: WashingtonComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }