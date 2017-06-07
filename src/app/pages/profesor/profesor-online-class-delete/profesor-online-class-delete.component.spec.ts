import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorOnlineClassDeleteComponent } from './profesor-online-class-delete.component';

describe('ProfesorOnlineClassDeleteComponent', () => {
  let component: ProfesorOnlineClassDeleteComponent;
  let fixture: ComponentFixture<ProfesorOnlineClassDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorOnlineClassDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorOnlineClassDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
