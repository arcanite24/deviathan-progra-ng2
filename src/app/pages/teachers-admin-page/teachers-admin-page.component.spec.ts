import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersAdminPageComponent } from './teachers-admin-page.component';

describe('TeachersAdminPageComponent', () => {
  let component: TeachersAdminPageComponent;
  let fixture: ComponentFixture<TeachersAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
