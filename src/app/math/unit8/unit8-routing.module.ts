import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealnumbersComponent } from './realnumbers/realnumbers.component';



const routes: Routes = [
  {
  path: '',
  component: RealnumbersComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit8RoutingModule { }
