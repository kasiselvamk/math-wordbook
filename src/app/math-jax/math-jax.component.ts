import { Component, OnInit } from '@angular/core';
const windowRef=(<any>window);

@Component({
  selector: 'app-math-jax',
  templateUrl: './math-jax.component.html',
  styleUrls: ['./math-jax.component.css']
})
export class MathJaxComponent implements OnInit {
  transfermedcontent = "0 + a = 0 & $$\\frac{a}{0}$$ is not defined."
  constructor() {
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit....")
    this.doRender();
  }
  doRender() {
    windowRef.MathJax.Hub.Queue(["Typeset",windowRef.MathJax.Hub], 'mathcontent');
  }

  ngOnInit() {
  }

}
