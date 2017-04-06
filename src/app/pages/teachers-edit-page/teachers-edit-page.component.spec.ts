import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersEditPageComponent } from './teachers-edit-page.component';

describe('TeachersEditPageComponent', () => {
  let component: TeachersEditPageComponent;
  let fixture: ComponentFixture<TeachersEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
