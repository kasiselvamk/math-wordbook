import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrignometryComponent } from './trignometry.component';

describe('TrignometryComponent', () => {
  let component: TrignometryComponent;
  let fixture: ComponentFixture<TrignometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrignometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrignometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
