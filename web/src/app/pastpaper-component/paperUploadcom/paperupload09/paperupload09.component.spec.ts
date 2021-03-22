import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paperupload09Component } from './paperupload09.component';

describe('Paperupload09Component', () => {
  let component: Paperupload09Component;
  let fixture: ComponentFixture<Paperupload09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paperupload09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paperupload09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
