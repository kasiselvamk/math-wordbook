import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathToolbarComponent } from './math-toolbar.component';

describe('MathToolbarComponent', () => {
  let component: MathToolbarComponent;
  let fixture: ComponentFixture<MathToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
