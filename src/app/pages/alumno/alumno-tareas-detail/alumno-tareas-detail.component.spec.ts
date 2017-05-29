import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoTareasDetailComponent } from './alumno-tareas-detail.component';

describe('AlumnoTareasDetailComponent', () => {
  let component: AlumnoTareasDetailComponent;
  let fixture: ComponentFixture<AlumnoTareasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoTareasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoTareasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
