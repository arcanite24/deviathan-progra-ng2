import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoTareasComponent } from './alumno-tareas.component';

describe('AlumnoTareasComponent', () => {
  let component: AlumnoTareasComponent;
  let fixture: ComponentFixture<AlumnoTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
