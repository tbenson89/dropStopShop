import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainCatCardsComponent} from './partials/main-cat-cards/main-cat-cards.component';
import {TesterArenaComponent} from './gage/tester-arena/tester-arena.component';


const routes: Routes = [
  { path: '', component: MainCatCardsComponent },
  { path: 'gage', component: TesterArenaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
