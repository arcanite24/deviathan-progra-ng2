import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnunciosAddComponent } from './admin-anuncios-add.component';

describe('AdminAnunciosAddComponent', () => {
  let component: AdminAnunciosAddComponent;
  let fixture: ComponentFixture<AdminAnunciosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnunciosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnunciosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
