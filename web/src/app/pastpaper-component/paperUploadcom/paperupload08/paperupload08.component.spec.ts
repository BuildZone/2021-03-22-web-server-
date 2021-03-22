import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paperupload08Component } from './paperupload08.component';

describe('Paperupload08Component', () => {
  let component: Paperupload08Component;
  let fixture: ComponentFixture<Paperupload08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paperupload08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paperupload08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
