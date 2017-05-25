import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorTareasAddComponent } from './profesor-tareas-add.component';

describe('ProfesorTareasAddComponent', () => {
  let component: ProfesorTareasAddComponent;
  let fixture: ComponentFixture<ProfesorTareasAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorTareasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorTareasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
