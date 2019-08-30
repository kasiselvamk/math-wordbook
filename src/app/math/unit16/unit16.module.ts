import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit16RoutingModule } from './unit16-routing.module';
import { ComputingComponent } from './computing/computing.component';
import { MathJaxComponent } from 'src/app/math-jax/math-jax.component';
import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [ComputingComponent ],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit16RoutingModule
  ]
})
export class Unit16Module { }
