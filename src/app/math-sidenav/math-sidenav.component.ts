import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav, MatDrawerContainer } from '@angular/material/sidenav';
import  { AppContent } from '../app.content';
import { MatList } from '@angular/material/list';
import { Platform } from '@angular/cdk/platform';
@Component({
  selector: 'app-math-sidenav',
  templateUrl: './math-sidenav.component.html',
  styleUrls: ['./math-sidenav.component.css']
})
export class MathSidenavComponent implements OnInit {

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  @ViewChild('matlist', {static: false}) matlist: MatList;
  items: any;
  clickedItem:Number;
  isopened:Boolean;
  push:any;
  constructor(public platform: Platform) {
    this.push = "push";
     this.items = AppContent.APP_NAV_MENU;
     this.clickedItem = 0;
     if ( !(platform.ANDROID || platform.IOS) ) {
      this.isopened = true;
     } else {
      this.isopened = false;
     }

   }

  ngOnInit() {
  }
 
  close(reason: string) {
     this.sidenav.close();
  }

  loadModule(id : Number) {
    this.clickedItem = id; 
   }
}
