import { Component, OnInit } from '@angular/core';
const windowRef=(<any>window);

@Component({
  selector: 'app-math-jax',
  templateUrl: './math-jax.component.html',
  styleUrls: ['./math-jax.component.css']
})
export class MathJaxComponent implements OnInit {
  constructor() {
  }
  ngAfterViewInit(){
    this.doRender();
  }
  doRender() {
       windowRef.MathJax.Hub.Queue(["Typeset",windowRef.MathJax.Hub], 'mathcontent');
   }
  ngOnInit() {
  }
}
