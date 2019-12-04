import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {LandingComponent} from './landing/landing.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {UpdateItemComponent} from './update-item/update-item.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'create', component: CreateItemComponent},
  {path: 'items/:id/edit', component: UpdateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
