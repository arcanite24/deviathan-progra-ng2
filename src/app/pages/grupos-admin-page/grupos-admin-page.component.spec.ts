import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposAdminPageComponent } from './grupos-admin-page.component';

describe('GruposAdminPageComponent', () => {
  let component: GruposAdminPageComponent;
  let fixture: ComponentFixture<GruposAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
