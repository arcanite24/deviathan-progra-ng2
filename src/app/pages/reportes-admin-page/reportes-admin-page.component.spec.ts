import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesAdminPageComponent } from './reportes-admin-page.component';

describe('ReportesAdminPageComponent', () => {
  let component: ReportesAdminPageComponent;
  let fixture: ComponentFixture<ReportesAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
