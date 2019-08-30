import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommercialmathematicsComponent } from './commercialmathematics/commercialmathematics.component';



const routes: Routes = [
  {
  path: '',
  component: CommercialmathematicsComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit4RoutingModule { }
