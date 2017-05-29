import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoAnunciosComponent } from './alumno-anuncios.component';

describe('AlumnoAnunciosComponent', () => {
  let component: AlumnoAnunciosComponent;
  let fixture: ComponentFixture<AlumnoAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
