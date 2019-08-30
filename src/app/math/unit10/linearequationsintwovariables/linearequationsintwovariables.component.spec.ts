import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearequationsintwovariablesComponent } from './linearequationsintwovariables.component';

describe('LinearequationsintwovariablesComponent', () => {
  let component: LinearequationsintwovariablesComponent;
  let fixture: ComponentFixture<LinearequationsintwovariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearequationsintwovariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearequationsintwovariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
