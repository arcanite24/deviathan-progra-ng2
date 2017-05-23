import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoReservasAddComponent } from './alumno-reservas-add.component';

describe('AlumnoReservasAddComponent', () => {
  let component: AlumnoReservasAddComponent;
  let fixture: ComponentFixture<AlumnoReservasAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoReservasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoReservasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
