import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersAddPageComponent } from './teachers-add-page.component';

describe('TeachersAddPageComponent', () => {
  let component: TeachersAddPageComponent;
  let fixture: ComponentFixture<TeachersAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
