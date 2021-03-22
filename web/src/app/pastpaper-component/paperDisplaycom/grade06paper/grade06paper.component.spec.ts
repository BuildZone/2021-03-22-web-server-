import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade06paperComponent } from './grade06paper.component';

describe('Grade06paperComponent', () => {
  let component: Grade06paperComponent;
  let fixture: ComponentFixture<Grade06paperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade06paperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade06paperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
