import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathToolbarComponent } from './math-toolbar/math-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MathSidenavComponent } from './math-sidenav/math-sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
 import { HttpClientModule } from "@angular/common/http";
 import {OverlayModule} from '@angular/cdk/overlay';
 import {MatListModule} from '@angular/material/list';
 import {MatRippleModule} from '@angular/material/core';
import { HyphenPipe } from './hyphen.pipe';
 import { CommonModule } from '@angular/common';
import { MathjaxModule } from './math-jax/mathjax.module';
import { JSXGraphComponent } from './jsxgraph/jsxgraph.component';
import { JsxgraphModule } from './jsxgraph/jsxgraph.module';

@NgModule({
  declarations: [
    AppComponent,
     MathToolbarComponent,
    MathSidenavComponent,
    HyphenPipe,
   ],
  imports: [
    CommonModule,
    MathjaxModule,
    JsxgraphModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    OverlayModule,
    MatListModule,
    MatRippleModule,
    BrowserAnimationsModule
  ],
  exports: [MathjaxModule,JsxgraphModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
