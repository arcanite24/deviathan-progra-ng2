import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposAddPageComponent } from './grupos-add-page.component';

describe('GruposAddPageComponent', () => {
  let component: GruposAddPageComponent;
  let fixture: ComponentFixture<GruposAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
