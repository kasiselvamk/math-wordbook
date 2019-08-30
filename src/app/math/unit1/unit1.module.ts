import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit1RoutingModule } from './unit1-routing.module';
import { NumbersComponent } from './numbers/numbers.component';
import { MathjaxModule } from 'src/app/math-jax/mathjax.module';
 
@NgModule({
  declarations: [NumbersComponent],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit1RoutingModule
  ]
})
export class Unit1Module { }
