import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit2RoutingModule } from './unit2-routing.module';
import { MultiplesandfactorsComponent } from './multiplesandfactors/multiplesandfactors.component';
import { MathJaxComponent } from 'src/app/math-jax/math-jax.component';
import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [MultiplesandfactorsComponent],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit2RoutingModule
  ]
})
export class Unit2Module { }
