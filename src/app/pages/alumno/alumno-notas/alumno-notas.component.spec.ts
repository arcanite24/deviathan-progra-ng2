import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoNotasComponent } from './alumno-notas.component';

describe('AlumnoNotasComponent', () => {
  let component: AlumnoNotasComponent;
  let fixture: ComponentFixture<AlumnoNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
