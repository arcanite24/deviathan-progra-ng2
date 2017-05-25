import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorTareasComponent } from './profesor-tareas.component';

describe('ProfesorTareasComponent', () => {
  let component: ProfesorTareasComponent;
  let fixture: ComponentFixture<ProfesorTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
