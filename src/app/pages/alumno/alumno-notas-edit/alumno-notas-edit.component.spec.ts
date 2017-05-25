import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoNotasEditComponent } from './alumno-notas-edit.component';

describe('AlumnoNotasEditComponent', () => {
  let component: AlumnoNotasEditComponent;
  let fixture: ComponentFixture<AlumnoNotasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoNotasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoNotasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
