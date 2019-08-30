import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathJaxComponent } from './math-jax.component';

@NgModule({
  declarations: [  MathJaxComponent ],
  imports: [
    CommonModule  ],
  exports : [MathJaxComponent]
})
export class MathjaxModule { }
