import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {LandingComponent} from './landing/landing.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent},
  {path: 'items', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
