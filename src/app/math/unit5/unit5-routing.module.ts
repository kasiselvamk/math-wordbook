import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeometryComponent } from './geometry/geometry.component';



const routes: Routes = [
  {
  path: '',
  component: GeometryComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit5RoutingModule { }
