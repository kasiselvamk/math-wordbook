import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { PaperScope, Project, Path, Point, Rectangle, Color } from 'paper';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css']
})
export class GeometryComponent implements OnInit {
  @ViewChild('canvasElement',{static: true}) canvasElement:ElementRef;
  scope: any;
  project: any;
  constructor() { }

  ngOnInit() {
    this.scope = new PaperScope();
    this.project = new Project(this.canvasElement.nativeElement);
    this.project.activeLayer.removeChildren();
    var myPath = new Path();
    myPath.add(new Point(40, 90));
    myPath.add(new Point(90, 40));
    myPath.add(new Point(140, 90));
    myPath.closed = true;
    myPath.strokeColor =  new Color("#77B5FE");
    this.scope.paper.view.draw(myPath);
  }

}
