import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioAdminPageComponent } from './inventario-admin-page.component';

describe('InventarioAdminPageComponent', () => {
  let component: InventarioAdminPageComponent;
  let fixture: ComponentFixture<InventarioAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
