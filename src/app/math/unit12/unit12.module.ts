import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit12RoutingModule } from './unit12-routing.module';
import { BankingComponent } from './banking/banking.component';
 import { MathjaxModule } from 'src/app/math-jax/mathjax.module';


@NgModule({
  declarations: [BankingComponent ],
  imports: [
    CommonModule,
    MathjaxModule,
    Unit12RoutingModule
  ]
})
export class Unit12Module { }
