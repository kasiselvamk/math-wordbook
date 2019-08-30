import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraticequationsComponent } from './quadraticequations.component';

describe('QuadraticequationsComponent', () => {
  let component: QuadraticequationsComponent;
  let fixture: ComponentFixture<QuadraticequationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadraticequationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadraticequationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
