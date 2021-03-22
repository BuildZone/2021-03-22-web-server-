import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade09paperComponent } from './grade09paper.component';

describe('Grade09paperComponent', () => {
  let component: Grade09paperComponent;
  let fixture: ComponentFixture<Grade09paperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade09paperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade09paperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
