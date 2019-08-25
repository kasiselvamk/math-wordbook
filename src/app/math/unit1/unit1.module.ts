import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Unit1RoutingModule } from './unit1-routing.module';
import { NumbersComponent } from './numbers/numbers.component';

@NgModule({
  declarations: [NumbersComponent],
  imports: [
    CommonModule,
    Unit1RoutingModule
  ]
})
export class Unit1Module { }
