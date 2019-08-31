import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSXGraphComponent } from './jsxgraph.component';

describe('JSXGraphComponent', () => {
  let component: JSXGraphComponent;
  let fixture: ComponentFixture<JSXGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSXGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSXGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
