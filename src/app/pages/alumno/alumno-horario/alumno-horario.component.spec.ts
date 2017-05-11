import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoHorarioComponent } from './alumno-horario.component';

describe('AlumnoHorarioComponent', () => {
  let component: AlumnoHorarioComponent;
  let fixture: ComponentFixture<AlumnoHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
