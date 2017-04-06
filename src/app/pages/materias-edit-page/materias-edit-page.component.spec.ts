import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasEditPageComponent } from './materias-edit-page.component';

describe('MateriasEditPageComponent', () => {
  let component: MateriasEditPageComponent;
  let fixture: ComponentFixture<MateriasEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
