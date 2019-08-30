import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarithmsComponent } from './logarithms.component';

describe('LogarithmsComponent', () => {
  let component: LogarithmsComponent;
  let fixture: ComponentFixture<LogarithmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogarithmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogarithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
