import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinearequationsintwovariablesComponent } from './linearequationsintwovariables/linearequationsintwovariables.component';



const routes: Routes = [
  {
  path: '',
  component: LinearequationsintwovariablesComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit10RoutingModule { }
