import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoNotasAddComponent } from './alumno-notas-add.component';

describe('AlumnoNotasAddComponent', () => {
  let component: AlumnoNotasAddComponent;
  let fixture: ComponentFixture<AlumnoNotasAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoNotasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoNotasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
