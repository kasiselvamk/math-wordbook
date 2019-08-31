import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit8RoutingModule } from './unit8-routing.module';
import { RealnumbersComponent } from './realnumbers/realnumbers.component';
 import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [RealnumbersComponent ],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit8RoutingModule
  ]
})
export class Unit8Module { }
