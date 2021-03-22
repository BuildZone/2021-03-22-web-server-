import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperdisplayComponent } from './paperdisplay.component';

describe('PaperdisplayComponent', () => {
  let component: PaperdisplayComponent;
  let fixture: ComponentFixture<PaperdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
