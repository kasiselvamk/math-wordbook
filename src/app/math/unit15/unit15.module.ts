import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit15RoutingModule } from './unit15-routing.module';
import { TrignometryComponent } from './trignometry/trignometry.component';
import { MathJaxComponent } from 'src/app/math-jax/math-jax.component';
import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [TrignometryComponent ],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit15RoutingModule
  ]
})
export class Unit15Module { }
