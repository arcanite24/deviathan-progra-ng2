import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAddPageComponent } from './users-add-page.component';

describe('UsersAddPageComponent', () => {
  let component: UsersAddPageComponent;
  let fixture: ComponentFixture<UsersAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
