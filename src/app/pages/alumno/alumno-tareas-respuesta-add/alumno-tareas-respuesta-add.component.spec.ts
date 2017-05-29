import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoTareasRespuestaAddComponent } from './alumno-tareas-respuesta-add.component';

describe('AlumnoTareasRespuestaAddComponent', () => {
  let component: AlumnoTareasRespuestaAddComponent;
  let fixture: ComponentFixture<AlumnoTareasRespuestaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoTareasRespuestaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoTareasRespuestaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
