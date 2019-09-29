import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStylesComponent } from './font-styles.component';

describe('FontStylesComponent', () => {
  let component: FontStylesComponent;
  let fixture: ComponentFixture<FontStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
