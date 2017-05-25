import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorTareasEditComponent } from './profesor-tareas-edit.component';

describe('ProfesorTareasEditComponent', () => {
  let component: ProfesorTareasEditComponent;
  let fixture: ComponentFixture<ProfesorTareasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorTareasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorTareasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
