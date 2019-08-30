import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurdsComponent } from './surds/surds.component';



const routes: Routes = [
  {
  path: '',
  component: SurdsComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit9RoutingModule { }
