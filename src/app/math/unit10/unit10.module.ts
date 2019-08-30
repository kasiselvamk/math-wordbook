import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit10RoutingModule } from './unit10-routing.module';
import { LinearequationsintwovariablesComponent } from './linearequationsintwovariables/linearequationsintwovariables.component';
import { MathJaxComponent } from 'src/app/math-jax/math-jax.component';
import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [LinearequationsintwovariablesComponent ],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit10RoutingModule
  ]
})
export class Unit10Module { }
