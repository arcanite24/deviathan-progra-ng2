import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoReportesComponent } from './alumno-reportes.component';

describe('AlumnoReportesComponent', () => {
  let component: AlumnoReportesComponent;
  let fixture: ComponentFixture<AlumnoReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
