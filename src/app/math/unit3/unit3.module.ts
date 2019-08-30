import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit3RoutingModule } from './unit3-routing.module';
import { AlgebraicexpressionsComponent } from './algebraicexpressions/algebraicexpressions.component';
import { MathJaxComponent } from 'src/app/math-jax/math-jax.component';
import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [AlgebraicexpressionsComponent],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit3RoutingModule
  ]
})
export class Unit3Module { }
