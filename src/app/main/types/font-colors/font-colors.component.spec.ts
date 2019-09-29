import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontColorsComponent } from './font-colors.component';

describe('FontColorsComponent', () => {
  let component: FontColorsComponent;
  let fixture: ComponentFixture<FontColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
