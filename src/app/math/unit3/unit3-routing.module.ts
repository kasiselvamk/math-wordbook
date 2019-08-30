import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgebraicexpressionsComponent } from './algebraicexpressions/algebraicexpressions.component';


const routes: Routes = [
  {
  path: '',
  component: AlgebraicexpressionsComponent
  }
  ];

  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Unit3RoutingModule { }
