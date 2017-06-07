import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorOnlineClassComponent } from './profesor-online-class.component';

describe('ProfesorOnlineClassComponent', () => {
  let component: ProfesorOnlineClassComponent;
  let fixture: ComponentFixture<ProfesorOnlineClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorOnlineClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorOnlineClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
