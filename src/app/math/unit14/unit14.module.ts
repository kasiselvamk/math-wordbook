import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit14RoutingModule } from './unit14-routing.module';
import { LociandconcurrencyComponent } from './lociandconcurrency/lociandconcurrency.component';
 import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [LociandconcurrencyComponent ],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit14RoutingModule
  ]
})
export class Unit14Module { }
