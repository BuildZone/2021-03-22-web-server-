import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade10paperComponent } from './grade10paper.component';

describe('Grade10paperComponent', () => {
  let component: Grade10paperComponent;
  let fixture: ComponentFixture<Grade10paperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade10paperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade10paperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
