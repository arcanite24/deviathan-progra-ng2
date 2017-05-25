import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorTareasDeleteComponent } from './profesor-tareas-delete.component';

describe('ProfesorTareasDeleteComponent', () => {
  let component: ProfesorTareasDeleteComponent;
  let fixture: ComponentFixture<ProfesorTareasDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorTareasDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorTareasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
