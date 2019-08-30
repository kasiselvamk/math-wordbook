import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraicexpressionsComponent } from './algebraicexpressions.component';

describe('AlgebraicexpressionsComponent', () => {
  let component: AlgebraicexpressionsComponent;
  let fixture: ComponentFixture<AlgebraicexpressionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgebraicexpressionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgebraicexpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
