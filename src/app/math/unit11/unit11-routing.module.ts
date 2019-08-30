import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuadraticequationsComponent } from './quadraticequations/quadraticequations.component';



const routes: Routes = [
  {
  path: '',
  component: QuadraticequationsComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit11RoutingModule { }
