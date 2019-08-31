import { Component, OnInit } from '@angular/core';
const windowRef = (<any>window);

@Component({
  selector: 'app-jsxgraph',
  templateUrl: './jsxgraph.component.html',
  styleUrls: ['./jsxgraph.component.css']
})
export class JSXGraphComponent implements OnInit {
  constructor() {
  }
  ngAfterViewInit() {
    this.doRender();
  }
  doRender() {
    windowRef.JXG.JSXGraph.initBoard('box', { boundingbox: [-10, 10, 10, -10], axis: true, showCopyright: false, showNavigation: false });
  }
  ngOnInit() {
  }
}