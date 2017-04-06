import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposEditPageComponent } from './grupos-edit-page.component';

describe('GruposEditPageComponent', () => {
  let component: GruposEditPageComponent;
  let fixture: ComponentFixture<GruposEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
