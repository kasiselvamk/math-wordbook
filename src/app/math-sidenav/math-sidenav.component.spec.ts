import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathSidenavComponent } from './math-sidenav.component';

describe('MathSidenavComponent', () => {
  let component: MathSidenavComponent;
  let fixture: ComponentFixture<MathSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
