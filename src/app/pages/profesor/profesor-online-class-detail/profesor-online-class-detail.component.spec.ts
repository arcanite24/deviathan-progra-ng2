import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorOnlineClassDetailComponent } from './profesor-online-class-detail.component';

describe('ProfesorOnlineClassDetailComponent', () => {
  let component: ProfesorOnlineClassDetailComponent;
  let fixture: ComponentFixture<ProfesorOnlineClassDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorOnlineClassDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorOnlineClassDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
