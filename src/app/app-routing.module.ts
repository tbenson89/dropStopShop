import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainCatCardsComponent} from './partials/main-cat-cards/main-cat-cards.component';


const routes: Routes = [
  { path: '', component: MainCatCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
