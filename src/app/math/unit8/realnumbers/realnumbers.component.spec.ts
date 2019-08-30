import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealnumbersComponent } from './realnumbers.component';

describe('RealnumbersComponent', () => {
  let component: RealnumbersComponent;
  let fixture: ComponentFixture<RealnumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealnumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealnumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
