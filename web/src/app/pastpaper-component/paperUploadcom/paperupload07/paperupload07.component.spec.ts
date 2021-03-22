import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paperupload07Component } from './paperupload07.component';

describe('Paperupload07Component', () => {
  let component: Paperupload07Component;
  let fixture: ComponentFixture<Paperupload07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paperupload07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paperupload07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
