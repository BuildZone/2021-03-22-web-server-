import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade07paperComponent } from './grade07paper.component';

describe('Grade07paperComponent', () => {
  let component: Grade07paperComponent;
  let fixture: ComponentFixture<Grade07paperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade07paperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade07paperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
