import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensurationComponent } from './mensuration/mensuration.component';



const routes: Routes = [
  {
  path: '',
  component: MensurationComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit6RoutingModule { }
