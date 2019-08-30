import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrignometryComponent } from './trignometry/trignometry.component';



const routes: Routes = [
  {
  path: '',
  component: TrignometryComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit15RoutingModule { }
