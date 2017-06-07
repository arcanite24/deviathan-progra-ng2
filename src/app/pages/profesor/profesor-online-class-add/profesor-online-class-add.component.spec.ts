import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorOnlineClassAddComponent } from './profesor-online-class-add.component';

describe('ProfesorOnlineClassAddComponent', () => {
  let component: ProfesorOnlineClassAddComponent;
  let fixture: ComponentFixture<ProfesorOnlineClassAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorOnlineClassAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorOnlineClassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
