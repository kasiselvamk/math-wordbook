import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiplesandfactorsComponent } from './multiplesandfactors/multiplesandfactors.component';



const routes: Routes = [
  {
  path: '',
  component: MultiplesandfactorsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit2RoutingModule { }
