import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoReservasComponent } from './alumno-reservas.component';

describe('AlumnoReservasComponent', () => {
  let component: AlumnoReservasComponent;
  let fixture: ComponentFixture<AlumnoReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
