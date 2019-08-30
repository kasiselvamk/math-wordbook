import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetlanguageComponent } from './setlanguage/setlanguage.component';



const routes: Routes = [
  {
  path: '',
  component: SetlanguageComponent
  }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit7RoutingModule { }
