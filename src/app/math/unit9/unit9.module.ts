import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit9RoutingModule } from './unit9-routing.module';
import { SurdsComponent } from './surds/surds.component';
 import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [SurdsComponent ],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit9RoutingModule
  ]
})
export class Unit9Module { }
