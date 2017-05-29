import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnunciosDeleteComponent } from './admin-anuncios-delete.component';

describe('AdminAnunciosDeleteComponent', () => {
  let component: AdminAnunciosDeleteComponent;
  let fixture: ComponentFixture<AdminAnunciosDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnunciosDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnunciosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
