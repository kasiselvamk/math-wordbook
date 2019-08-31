import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit7RoutingModule } from './unit7-routing.module';
import { SetlanguageComponent } from './setlanguage/setlanguage.component';
 import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [SetlanguageComponent],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit7RoutingModule
  ]
})
export class Unit7Module { }
