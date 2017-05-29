import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnunciosEditComponent } from './admin-anuncios-edit.component';

describe('AdminAnunciosEditComponent', () => {
  let component: AdminAnunciosEditComponent;
  let fixture: ComponentFixture<AdminAnunciosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnunciosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnunciosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
