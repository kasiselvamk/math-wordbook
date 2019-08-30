import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurdsComponent } from './surds.component';

describe('SurdsComponent', () => {
  let component: SurdsComponent;
  let fixture: ComponentFixture<SurdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
