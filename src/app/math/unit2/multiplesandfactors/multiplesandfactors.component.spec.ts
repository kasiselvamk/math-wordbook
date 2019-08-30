import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesandfactorsComponent } from './multiplesandfactors.component';

describe('MultiplesandfactorsComponent', () => {
  let component: MultiplesandfactorsComponent;
  let fixture: ComponentFixture<MultiplesandfactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplesandfactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplesandfactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
