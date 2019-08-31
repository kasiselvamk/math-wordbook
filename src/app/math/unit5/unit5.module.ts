import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit5RoutingModule } from './unit5-routing.module';
import { GeometryComponent } from './geometry/geometry.component';
 import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [GeometryComponent],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit5RoutingModule
  ]
})
export class Unit5Module { }
