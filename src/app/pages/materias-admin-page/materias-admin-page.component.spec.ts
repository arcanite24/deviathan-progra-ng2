import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasAdminPageComponent } from './materias-admin-page.component';

describe('MateriasAdminPageComponent', () => {
  let component: MateriasAdminPageComponent;
  let fixture: ComponentFixture<MateriasAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
