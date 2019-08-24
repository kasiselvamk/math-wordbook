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

@NgModule({
  declarations: [
    AppComponent,
    MathToolbarComponent,
    MathSidenavComponent,
  ],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
