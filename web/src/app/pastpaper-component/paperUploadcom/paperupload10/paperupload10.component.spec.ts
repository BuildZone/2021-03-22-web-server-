import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paperupload10Component } from './paperupload10.component';

describe('Paperupload10Component', () => {
  let component: Paperupload10Component;
  let fixture: ComponentFixture<Paperupload10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paperupload10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paperupload10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
