import { Component, OnInit, Input, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-math-toolbar',
  templateUrl: './math-toolbar.component.html',
  styleUrls: ['./math-toolbar.component.css']
})
export class MathToolbarComponent implements OnInit {
  @Input('draw-ref') drawRef: any;
  constructor() { }
  ngOnInit() {
  }
  togglemenu(){
   console.log(this.drawRef)
   this.drawRef.toggle();
  }
}
