import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade11paperComponent } from './grade11paper.component';

describe('Grade11paperComponent', () => {
  let component: Grade11paperComponent;
  let fixture: ComponentFixture<Grade11paperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade11paperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade11paperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
