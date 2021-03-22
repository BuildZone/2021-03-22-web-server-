import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paperupload11Component } from './paperupload11.component';

describe('Paperupload11Component', () => {
  let component: Paperupload11Component;
  let fixture: ComponentFixture<Paperupload11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paperupload11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paperupload11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
