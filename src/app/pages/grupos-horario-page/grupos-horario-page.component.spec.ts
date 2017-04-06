import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposHorarioPageComponent } from './grupos-horario-page.component';

describe('GruposHorarioPageComponent', () => {
  let component: GruposHorarioPageComponent;
  let fixture: ComponentFixture<GruposHorarioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposHorarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposHorarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
