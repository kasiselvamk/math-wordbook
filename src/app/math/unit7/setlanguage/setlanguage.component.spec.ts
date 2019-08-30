import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlanguageComponent } from './setlanguage.component';

describe('SetlanguageComponent', () => {
  let component: SetlanguageComponent;
  let fixture: ComponentFixture<SetlanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetlanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetlanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
