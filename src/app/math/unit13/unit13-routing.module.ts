import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogarithmsComponent } from './logarithms/logarithms.component';



const routes: Routes = [
  {
  path: '',
  component: LogarithmsComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit13RoutingModule { }
