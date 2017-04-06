import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasAddPageComponent } from './materias-add-page.component';

describe('MateriasAddPageComponent', () => {
  let component: MateriasAddPageComponent;
  let fixture: ComponentFixture<MateriasAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
