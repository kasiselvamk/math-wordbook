import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit4RoutingModule } from './unit4-routing.module';
import { CommercialmathematicsComponent } from './commercialmathematics/commercialmathematics.component';
 import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [CommercialmathematicsComponent],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit4RoutingModule
  ]
})
export class Unit4Module { }
