import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paperupload06Component } from './paperupload06.component';

describe('Paperupload06Component', () => {
  let component: Paperupload06Component;
  let fixture: ComponentFixture<Paperupload06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paperupload06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paperupload06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
