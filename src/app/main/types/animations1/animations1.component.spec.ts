import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animations1Component } from './animations1.component';

describe('Animations1Component', () => {
  let component: Animations1Component;
  let fixture: ComponentFixture<Animations1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animations1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animations1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
