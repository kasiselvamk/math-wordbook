import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LociandconcurrencyComponent } from './lociandconcurrency/lociandconcurrency.component';



const routes: Routes = [
  {
  path: '',
  component: LociandconcurrencyComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit14RoutingModule { }
