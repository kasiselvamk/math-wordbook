import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { Platform } from '@angular/cdk/platform';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'math-wordbook';

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer,public platform: Platform){
    this.matIconRegistry.addSvgIcon(
      "menu-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/menu.svg")
    );

  }
}
