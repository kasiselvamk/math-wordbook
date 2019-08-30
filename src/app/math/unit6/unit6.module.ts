import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit6RoutingModule } from './unit6-routing.module';
import { MensurationComponent } from './mensuration/mensuration.component';
import { MathJaxComponent } from 'src/app/math-jax/math-jax.component';
import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [MensurationComponent],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit6RoutingModule
  ]
})
export class Unit6Module { }
