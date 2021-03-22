import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade08paperComponent } from './grade08paper.component';

describe('Grade08paperComponent', () => {
  let component: Grade08paperComponent;
  let fixture: ComponentFixture<Grade08paperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade08paperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade08paperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
