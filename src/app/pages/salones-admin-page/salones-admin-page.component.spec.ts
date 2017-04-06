import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonesAdminPageComponent } from './salones-admin-page.component';

describe('SalonesAdminPageComponent', () => {
  let component: SalonesAdminPageComponent;
  let fixture: ComponentFixture<SalonesAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonesAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonesAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
