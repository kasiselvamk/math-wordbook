import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LociandconcurrencyComponent } from './lociandconcurrency.component';

describe('LociandconcurrencyComponent', () => {
  let component: LociandconcurrencyComponent;
  let fixture: ComponentFixture<LociandconcurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LociandconcurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LociandconcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
