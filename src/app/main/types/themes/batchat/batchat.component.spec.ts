import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchatComponent } from './batchat.component';

describe('BatchatComponent', () => {
  let component: BatchatComponent;
  let fixture: ComponentFixture<BatchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
