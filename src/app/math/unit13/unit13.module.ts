import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit13RoutingModule } from './unit13-routing.module';
import { LogarithmsComponent } from './logarithms/logarithms.component';
import { MathJaxComponent } from 'src/app/math-jax/math-jax.component';
import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [LogarithmsComponent ],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit13RoutingModule
  ]
})
export class Unit13Module { }
