import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialmathematicsComponent } from './commercialmathematics.component';

describe('CommercialmathematicsComponent', () => {
  let component: CommercialmathematicsComponent;
  let fixture: ComponentFixture<CommercialmathematicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialmathematicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialmathematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
