import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit1RoutingModule } from './unit1-routing.module';
import { NumbersComponent } from './numbers/numbers.component';
import { MathJaxComponent } from 'src/app/math-jax/math-jax.component';

@NgModule({
  declarations: [NumbersComponent,MathJaxComponent],
  imports: [
    CommonModule,
    Unit1RoutingModule
  ]
})
export class Unit1Module { }
