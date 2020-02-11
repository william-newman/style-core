import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatGroundComponent } from './bat-ground.component';

describe('BatGroundComponent', () => {
  let component: BatGroundComponent;
  let fixture: ComponentFixture<BatGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
