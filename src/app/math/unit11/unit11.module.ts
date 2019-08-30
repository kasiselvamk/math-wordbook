import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit11RoutingModule } from './unit11-routing.module';
import { QuadraticequationsComponent } from './quadraticequations/quadraticequations.component';
import { MathJaxComponent } from 'src/app/math-jax/math-jax.component';
import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [QuadraticequationsComponent ],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit11RoutingModule
  ]
})
export class Unit11Module { }
